import { logger } from "@scripts/generators/src/lib/logger";
import type { CustomRequestApiEntry } from "@scripts/generators/src/pipelines/generate-custom-requests/@types/custom-request-api";
import type { GeneratedRegistryEntry } from "@scripts/generators/src/pipelines/generate-custom-requests/@types/generated-registry";
import { inferPayloadSchema } from "@scripts/generators/src/pipelines/generate-custom-requests/utils/schema-inference";

interface AnalyzedRequestSummaryItem {
	key: string;
	name?: string;
	collectionName?: string;
	method?: string;
	url?: string;
	dataSourceKey?: string;
}

export interface CustomRequestsAnalysisReport {
	totalAnalyzed: number;
	withoutOptions: AnalyzedRequestSummaryItem[];
	withoutDataSourceKey: AnalyzedRequestSummaryItem[];
}

/**
 * Normaliza options.data que pode vir como string JSON ou objeto.
 */
function normalizePayloadData(raw: unknown): Record<string, unknown> | null {
	if (raw == null) return null;
	if (typeof raw === "object") return raw as Record<string, unknown>;
	if (typeof raw === "string") {
		try {
			const parsed = JSON.parse(raw);
			if (typeof parsed === "object" && parsed !== null) {
				return parsed as Record<string, unknown>;
			}
		} catch {
			logger.warn(`options.data é string não-parseável: ${raw.slice(0, 100)}`);
		}
	}
	return null;
}

/**
 * Transforma uma entrada da API NocoBase em registry entry.
 * Retorna null e log warning se entrada for inválida.
 */
export function transformApiEntryToRegistry(
	entry: CustomRequestApiEntry,
): GeneratedRegistryEntry | null {
	if (!entry.options) {
		logger.warn(`Entrada "${entry.key}": sem options, pulando`);
		return null;
	}

	if (!entry.options.collectionName) {
		logger.warn(`Entrada "${entry.key}": sem collectionName, pulando`);
		return null;
	}

	if (!entry.options.url) {
		logger.warn(`Entrada "${entry.key}": sem url, usando string vazia`);
	}

	// API não retorna campo "name" — usa key como fallback
	const name = entry.name ?? entry.key;

	const payloadData = normalizePayloadData(entry.options.data);

	return {
		key: entry.key,
		name,
		collection: entry.options.collectionName,
		dataSourceKey: entry.options.dataSourceKey ?? "main",
		method: entry.options.method ?? "POST",
		url: entry.options.url ?? "",
		payloadSchema: inferPayloadSchema(payloadData),
		payloadData,
	};
}

/**
 * Transforma todas as entradas da API em registry entries.
 * Filtra inválidas, ordena por key, log de resumo.
 */
export function transformAllEntries(
	entries: CustomRequestApiEntry[],
): GeneratedRegistryEntry[] {
	const transformed: GeneratedRegistryEntry[] = [];
	let skipped = 0;

	for (const entry of entries) {
		const result = transformApiEntryToRegistry(entry);
		if (result) {
			transformed.push(result);
		} else {
			skipped++;
		}
	}

	transformed.sort((a, b) => a.key.localeCompare(b.key));

	logger.info(
		`Transformação: ${transformed.length} entradas, ${skipped} puladas`,
	);

	return transformed;
}

/**
 * Coleta entradas analisadas sem options e sem dataSourceKey para auditoria.
 */
export function collectAnalysisReport(
	entries: CustomRequestApiEntry[],
): CustomRequestsAnalysisReport {
	const withoutOptions: AnalyzedRequestSummaryItem[] = [];
	const withoutDataSourceKey: AnalyzedRequestSummaryItem[] = [];

	for (const entry of entries) {
		if (!entry.options) {
			withoutOptions.push({
				key: entry.key,
				name: entry.name,
			});
			continue;
		}

		if (!entry.options.dataSourceKey) {
			withoutDataSourceKey.push({
				key: entry.key,
				name: entry.name,
				collectionName: entry.options.collectionName,
				method: entry.options.method,
				url: entry.options.url,
			});
		}
	}

	withoutOptions.sort((a, b) => a.key.localeCompare(b.key));
	withoutDataSourceKey.sort((a, b) => a.key.localeCompare(b.key));

	return {
		totalAnalyzed: entries.length,
		withoutOptions,
		withoutDataSourceKey,
	};
}
