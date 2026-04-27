import type { CustomRequestApiEntry } from "@scripts/generate-custom-requests/src/@types/custom-request-api";
import type { GeneratedRegistryEntry } from "@scripts/generate-custom-requests/src/@types/generated-registry";
import { logger } from "@scripts/generate-types/src/utils/logger";

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

	return {
		key: entry.key,
		name,
		collection: entry.options.collectionName,
		method: entry.options.method ?? "POST",
		url: entry.options.url ?? "",
		payloadSchema: "z.any()",
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
