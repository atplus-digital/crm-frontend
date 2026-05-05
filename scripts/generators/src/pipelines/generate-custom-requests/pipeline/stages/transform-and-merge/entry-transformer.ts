import type { Logger } from "@scripts/generators/src/lib/logging";
import { defaultLogger as defaultRuntimeLogger } from "@scripts/generators/src/lib/logging";
import type {
	CollectionSchemaMapping,
	SchemaRegistry,
} from "../../../@types/collection-schema";
import type { CustomRequestApiEntry } from "../../../@types/custom-request-api";
import type { GeneratedRegistryEntry } from "../../../@types/generated-registry";
import { findSchema } from "../../../utils/collection-schema-loader";
import { inferPayloadSchema } from "../../../utils/schema-inference";
import { normalizePayloadData } from "./entry-transformer/payload-data";
import { inferPayloadSchemaWithCollections } from "./entry-transformer/schema-enrichment";
import { deduplicateSchemasNotFound } from "./entry-transformer/schemas-not-found";

export function transformApiEntryToRegistry(
	entry: CustomRequestApiEntry,
	logger?: Logger,
	schemaRegistry?: SchemaRegistry,
): {
	entry: GeneratedRegistryEntry | null;
	schemasNotFound: CollectionSchemaMapping[];
} {
	const activeLogger = logger ?? defaultRuntimeLogger;
	const schemasNotFound: CollectionSchemaMapping[] = [];

	if (!entry.options) {
		activeLogger.debug(`Entrada "${entry.key}": sem options, pulando`);
		return { entry: null, schemasNotFound };
	}

	if (!entry.options.collectionName) {
		activeLogger.debug(`Entrada "${entry.key}": sem collectionName, pulando`);
		return { entry: null, schemasNotFound };
	}

	if (!entry.options.url) {
		activeLogger.warn(`Entrada "${entry.key}": sem url, usando string vazia`);
	}

	const name = entry.name ?? entry.key;
	const payloadData = normalizePayloadData(entry.options.data, activeLogger);
	const dataSourceKey = entry.options.dataSourceKey ?? "main";

	let payloadSchema: string;
	let schemaUsed = false;
	let collectionSchemaName: string | null = null;

	if (schemaRegistry) {
		const schemaMapping = findSchema(
			schemaRegistry,
			entry.options.collectionName,
			dataSourceKey,
		);
		if (schemaMapping) {
			collectionSchemaName = schemaMapping.schemaName;
		}

		const result = inferPayloadSchemaWithCollections(
			payloadData,
			entry.options.collectionName,
			dataSourceKey,
			schemaRegistry,
			activeLogger,
		);
		payloadSchema = result.schemaString;
		schemaUsed = result.schemaUsed;
		schemasNotFound.push(...result.notFoundCollections);
	} else {
		payloadSchema = inferPayloadSchema(payloadData);
	}

	if (schemaUsed) {
		activeLogger.debug(
			`Entrada "${entry.key}": schema de collection usado para "${entry.options.collectionName}"`,
		);
	}

	return {
		entry: {
			key: entry.key,
			name,
			collection: entry.options.collectionName,
			collectionSchemaName,
			dataSourceKey,
			method: entry.options.method ?? "POST",
			url: entry.options.url ?? "",
			payloadSchema,
			payloadData,
		},
		schemasNotFound,
	};
}

export function transformAllEntries(
	entries: CustomRequestApiEntry[],
	logger?: Logger,
	schemaRegistry?: SchemaRegistry,
): {
	transformed: GeneratedRegistryEntry[];
	schemasNotFound: CollectionSchemaMapping[];
} {
	const activeLogger = logger ?? defaultRuntimeLogger;
	const transformed: GeneratedRegistryEntry[] = [];
	const allSchemasNotFound: CollectionSchemaMapping[] = [];
	let skipped = 0;
	for (const entry of entries) {
		const result = transformApiEntryToRegistry(
			entry,
			activeLogger,
			schemaRegistry,
		);

		if (result.entry) {
			transformed.push(result.entry);
		} else {
			skipped++;
		}

		allSchemasNotFound.push(...result.schemasNotFound);
	}

	transformed.sort((a, b) => a.key.localeCompare(b.key));

	const uniqueNotFound = deduplicateSchemasNotFound(allSchemasNotFound);

	activeLogger.info(
		`Transformação: ${transformed.length} entradas, ${skipped} puladas`,
	);

	if (uniqueNotFound.length > 0) {
		activeLogger.warn(
			`${uniqueNotFound.length} collections sem schema encontrado:`,
		);
		for (const notFound of uniqueNotFound) {
			activeLogger.warn(
				`  - ${notFound.collectionName} (${notFound.dataSourceKey})`,
			);
		}
	}

	return {
		transformed,
		schemasNotFound: uniqueNotFound,
	};
}
