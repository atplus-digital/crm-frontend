import type { CustomRequestApiEntry } from "@scripts/generate-custom-requests/src/@types/custom-request-api";
import type { GeneratedRegistryEntry } from "@scripts/generate-custom-requests/src/@types/generated-registry";
import { inferPayloadSchema } from "@scripts/generate-custom-requests/src/utils/schema-inference";
import { logger } from "@scripts/shared/utils/logger";

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
