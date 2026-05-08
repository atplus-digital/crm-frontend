import type { Logger } from "@scripts/generators/src/lib/logging";
import type { RelationsAdapter } from "../@types/script";
import { parseWikiRelations } from "../utils/wiki-parser";
import { IXC_RELATIONS_MAP } from "./ixc-relations-data";

const WIKI_BASE_URL = "https://wikiapiprovedor.ixcsoft.com.br";

export function createIXCRelationsAdapter(logger: Logger): RelationsAdapter {
	return {
		name: "IXC Relations Mapper",
		async fetchRelations(
			collectionName: string,
		): Promise<
			Record<string, { target: string; type: "belongsTo" | "hasMany" }>
		> {
			const collectionRelations = IXC_RELATIONS_MAP[collectionName] ?? {};
			const wikiRelations = await fetchRelationsFromWiki(
				collectionName,
				logger,
			);

			// Converter para o formato esperado pelo gerador
			// Chave: nome do campo de relação (f_*), não o campo scalar (id_*)
			const result: Record<
				string,
				{ target: string; type: "belongsTo" | "hasMany" }
			> = {};

			for (const relation of wikiRelations) {
				result[relation.relationFieldName] = {
					target: relation.target,
					type: relation.type,
				};
			}

			for (const [sourceField, relation] of Object.entries(
				collectionRelations,
			)) {
				// Remove alias inferido da Wiki quando existe override manual do mesmo campo escalar.
				const wikiAlias = sourceField.startsWith("id_")
					? `f_${sourceField.slice(3)}`
					: undefined;
				if (wikiAlias) {
					delete result[wikiAlias];
				}

				const relationFieldName =
					relation.relationFieldName ?? `f_${relation.target}`;
				result[relationFieldName] = {
					target: relation.target,
					type: relation.type,
				};
			}

			return result;
		},
	};
}

async function fetchRelationsFromWiki(
	collectionName: string,
	logger: Logger,
): Promise<
	Array<{
		fieldName: string;
		target: string;
		type: "belongsTo";
		relationFieldName: string;
	}>
> {
	const url = `${WIKI_BASE_URL}/formulario.php?form=${collectionName}`;

	try {
		logger.debug(`[IXC Wiki Relations] Fetching ${url}`);
		const html = await fetchWikiHtml(url);
		const parsed = parseWikiRelations(html);
		logger.debug(
			`[IXC Wiki Relations] ${parsed.length} relação(ões) encontradas para ${collectionName}`,
		);
		return parsed;
	} catch (error) {
		logger.debug(
			`[IXC Wiki Relations] Falha ao buscar ${url}: ${error instanceof Error ? error.message : String(error)}`,
		);
		return [];
	}
}

async function fetchWikiHtml(url: string): Promise<string> {
	const response = await fetch(url, {
		signal: AbortSignal.timeout(30_000),
	});

	if (!response.ok) {
		throw new Error(`HTTP ${response.status}`);
	}

	const buffer = await response.arrayBuffer();
	const decoder = new TextDecoder("iso-8859-1");
	return decoder.decode(buffer);
}
