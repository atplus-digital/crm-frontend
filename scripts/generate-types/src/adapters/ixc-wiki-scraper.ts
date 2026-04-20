import type { EnumAdapter, EnumAdapterFieldEnum } from "../@types/script";
import { fetchWithCache } from "../utils/enum-cache";
import { logVerbose } from "../utils/logger";

const WIKI_BASE_URL = "https://wikiapiprovedor.ixcsoft.com.br";

interface ParsedField {
	name: string;
	valoresDisponiveis?: string;
}

function parseWikiText(rawHtml: string): ParsedField[] {
	const fields: ParsedField[] = [];

	const fieldBlockRegex =
		/([a-z_][a-z_0-9]+)\s+Dados t[ée]cnicos:[^V]*(?:Valores dispon[íi]veis:\s*([^\n]+))?/gi;

	for (const match of rawHtml.matchAll(fieldBlockRegex)) {
		const name = match[1].trim();
		const valoresDisponiveis = match[2]?.trim();
		if (!name) continue;
		fields.push({ name, valoresDisponiveis });
	}

	return fields;
}

function parseEnumValues(raw: string): {
	values: string[];
	labels: Record<string, string>;
} {
	const labels: Record<string, string> = {};
	const values: string[] = [];

	const normalized = raw
		.replace(/\s*=\s*/g, "=")
		.replace(/\u00a0/g, " ")
		.replace(/[ï¿½]/g, "")
		.trim();

	const parts = normalized.split(/(?<!=)=(?!=)/);

	for (const part of parts) {
		const eqIndex = part.indexOf("=");
		if (eqIndex === -1) continue;

		const value = part.slice(0, eqIndex).trim();
		const label = part.slice(eqIndex + 1).trim();

		if (!value) continue;

		values.push(value);
		labels[value] = decodeHtmlEntities(label);
	}

	return { values, labels };
}

function decodeHtmlEntities(text: string): string {
	return text
		.replace(/&nbsp;/gi, " ")
		.replace(/&amp;/gi, "&")
		.replace(/&lt;/gi, "<")
		.replace(/&gt;/gi, ">")
		.replace(/[ï¿½]/g, "")
		.trim();
}

export function createIXCWikiAdapter(): EnumAdapter {
	return {
		name: "IXC Wiki Schema",
		async fetchEnums(
			collectionName: string,
		): Promise<Record<string, EnumAdapterFieldEnum>> {
			const url = `${WIKI_BASE_URL}/formulario.php?form=${collectionName}`;

			logVerbose(`[IXC Wiki] Fetching ${url}`);

			let html: string;
			try {
				html = await fetchWithCache(collectionName, url);
			} catch (err) {
				logVerbose(
					`[IXC Wiki] Falha ao buscar ${url}: ${err instanceof Error ? err.message : String(err)}`,
				);
				throw err;
			}

			const fields = parseWikiText(html);
			const enums: Record<string, EnumAdapterFieldEnum> = {};

			for (const field of fields) {
				if (!field.valoresDisponiveis) continue;

				const { values, labels } = parseEnumValues(field.valoresDisponiveis);

				if (values.length < 2) continue;

				enums[field.name] = { values, labels };
			}

			const count = Object.keys(enums).length;
			logVerbose(`[IXC Wiki] ${count} campos com enum para ${collectionName}`);

			return enums;
		},
	};
}
