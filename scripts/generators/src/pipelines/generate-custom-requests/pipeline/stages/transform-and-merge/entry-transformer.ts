import type { Logger } from "@scripts/generators/src/lib/logger";
import { logger as defaultRuntimeLogger } from "@scripts/generators/src/lib/logger";
import type { CustomRequestApiEntry } from "../../../@types/custom-request-api";
import type { GeneratedRegistryEntry } from "../../../@types/generated-registry";
import { inferPayloadSchema } from "../../../utils/schema-inference";

function normalizePayloadData(
	raw: unknown,
	logger: Logger,
): Record<string, unknown> | null {
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

export function transformApiEntryToRegistry(
	entry: CustomRequestApiEntry,
	logger?: Logger,
): GeneratedRegistryEntry | null {
	const activeLogger = logger ?? defaultRuntimeLogger;
	if (!entry.options) {
		activeLogger.debug(`Entrada "${entry.key}": sem options, pulando`);
		return null;
	}

	if (!entry.options.collectionName) {
		activeLogger.debug(`Entrada "${entry.key}": sem collectionName, pulando`);
		return null;
	}

	if (!entry.options.url) {
		activeLogger.warn(`Entrada "${entry.key}": sem url, usando string vazia`);
	}

	const name = entry.name ?? entry.key;
	const payloadData = normalizePayloadData(entry.options.data, activeLogger);

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

export function transformAllEntries(
	entries: CustomRequestApiEntry[],
	logger?: Logger,
): GeneratedRegistryEntry[] {
	const activeLogger = logger ?? defaultRuntimeLogger;
	const transformed: GeneratedRegistryEntry[] = [];
	let skipped = 0;

	for (const entry of entries) {
		const result = transformApiEntryToRegistry(entry, activeLogger);
		if (result) {
			transformed.push(result);
		} else {
			skipped++;
		}
	}

	transformed.sort((a, b) => a.key.localeCompare(b.key));

	activeLogger.info(
		`Transformação: ${transformed.length} entradas, ${skipped} puladas`,
	);

	return transformed;
}
