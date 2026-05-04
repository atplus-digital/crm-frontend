import type { Logger } from "@scripts/generators/src/lib/logger";
import { logger as defaultRuntimeLogger } from "@scripts/generators/src/lib/logger";
import type {
	CollectionSchemaMapping,
	SchemaRegistry,
} from "../../../@types/collection-schema";
import type { CustomRequestApiEntry } from "../../../@types/custom-request-api";
import type { GeneratedRegistryEntry } from "../../../@types/generated-registry";
import type { PlaceholderFields } from "../../../utils/collection-schema-loader";
import {
	extractPlaceholderFields,
	findSchema,
	generateSchemaPickCode,
} from "../../../utils/collection-schema-loader";
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

/**
 * Placeholders que representam registros de collections e podem usar schemas.
 */
const COLLECTION_PLACEHOLDERS = [
	"$nForm",
	"$nPopupRecord",
	"$nSelectedRecord",
	"currentRecord",
] as const;

/**
 * Placeholder que representa o usuário atual (não é uma collection).
 */
const USER_PLACEHOLDERS = ["currentUser"] as const;

/**
 * Gera o schema string para um placeholder usando schemas de collection.
 * Retorna null se o schema não for aplicável (ex: currentUser).
 */
function generatePlaceholderSchema(
	placeholder:
		| (typeof COLLECTION_PLACEHOLDERS)[number]
		| (typeof USER_PLACEHOLDERS)[number],
	fields: Set<string>,
	collectionSchema: CollectionSchemaMapping | null,
): string | null {
	// currentUser não tem schema de collection
	if (placeholder === "currentUser") {
		return null;
	}

	if (!collectionSchema) {
		return null;
	}

	// Se todos os campos são necessários, retorna só o schema
	if (fields.has("*")) {
		return collectionSchema.schemaName;
	}

	// Usa .pick() com os campos específicos
	return generateSchemaPickCode(collectionSchema, fields);
}

/**
 * Infere o schema para placeholders usando schemas de collections quando disponíveis.
 * Retorna o schema enriquecido SE pelo menos um placeholder encontrou um schema.
 */
function inferPayloadSchemaWithCollections(
	payloadData: Record<string, unknown> | null,
	collectionName: string,
	dataSourceKey: string,
	registry: SchemaRegistry,
	logger: Logger,
): {
	schemaString: string;
	schemaUsed: boolean;
	notFoundCollections: CollectionSchemaMapping[];
} {
	if (!payloadData || Object.keys(payloadData).length === 0) {
		return {
			schemaString: "z.any()",
			schemaUsed: false,
			notFoundCollections: [],
		};
	}

	const placeholderFields = extractPlaceholderFields(payloadData);
	const notFoundCollections: CollectionSchemaMapping[] = [];

	// Verifica se ALGUM placeholder encontrou o schema
	let atLeastOneSchemaFound = false;

	// Para cada placeholder que é uma collection, tenta encontrar o schema
	for (const placeholder of COLLECTION_PLACEHOLDERS) {
		const fields = placeholderFields[placeholder];
		if (!fields || fields.size === 0) continue;

		// Para $nForm, $nPopupRecord, $nSelectedRecord usa a collection da request
		// currentRecord também usa a collection da request
		const foundSchema = findSchema(registry, collectionName, dataSourceKey);

		if (foundSchema) {
			atLeastOneSchemaFound = true;
			break; // Encontrou um, pode parar
		} else {
			// Não encontrou o schema, marca para reportar
			logger.debug(
				`Schema não encontrado para collection "${collectionName}" (${dataSourceKey}) para placeholder "${placeholder}"`,
			);

			// Adiciona à lista de não encontrados (evita duplicatas)
			const alreadyAdded = notFoundCollections.some(
				(nf) =>
					nf.collectionName === collectionName &&
					nf.dataSourceKey === dataSourceKey,
			);

			if (!alreadyAdded) {
				notFoundCollections.push({
					collectionName,
					dataSourceKey,
					schemaImportPath: "",
					schemaName: "",
					baseSchemaName: "",
				});
			}
		}
	}

	// Se nenhum schema foi encontrado, usa a inferência padrão
	if (!atLeastOneSchemaFound) {
		return {
			schemaString: inferPayloadSchema(payloadData),
			schemaUsed: false,
			notFoundCollections,
		};
	}

	// Schema encontrado! Gera schema melhorado usando os schemas de collections
	const schemaString = buildEnhancedSchemaString(
		payloadData,
		placeholderFields,
		collectionName,
		dataSourceKey,
		registry,
	);

	return {
		schemaString,
		schemaUsed: true,
		notFoundCollections: [],
	};
}

/**
 * Constrói a string de schema melhorada usando schemas de collections.
 */
function buildEnhancedSchemaString(
	payloadData: Record<string, unknown>,
	placeholderFields: PlaceholderFields,
	collectionName: string,
	dataSourceKey: string,
	registry: SchemaRegistry,
): string {
	const lines: string[] = [];
	const regularFields: string[] = [];

	// Separa campos regulares de placeholders
	for (const [key, value] of Object.entries(payloadData)) {
		const isPlaceholderValue =
			typeof value === "string" &&
			value.match(
				/\{\{(\$nForm|\$nPopupRecord|\$nSelectedRecord|currentRecord|currentUser)(\.([^}]+))?\}\}/,
			);

		if (!isPlaceholderValue) {
			// Campo regular - usa inferência padrão
			regularFields.push(`  ${key}: ${inferFieldSchema(value)},`);
		}
	}

	// Para placeholders de collections, usa o schema da collection
	const schemaInfo = findSchema(registry, collectionName, dataSourceKey);

	for (const placeholder of [
		...COLLECTION_PLACEHOLDERS,
		...USER_PLACEHOLDERS,
	]) {
		const fields = placeholderFields[placeholder];
		if (!fields || fields.size === 0) continue;

		// Para placeholders de collections, usa o schema da collection
		if (
			COLLECTION_PLACEHOLDERS.includes(
				placeholder as (typeof COLLECTION_PLACEHOLDERS)[number],
			)
		) {
			const schemaStr = generatePlaceholderSchema(
				placeholder as (typeof COLLECTION_PLACEHOLDERS)[number],
				fields,
				schemaInfo,
			);

			if (schemaStr) {
				lines.push(`  ${placeholder}: ${schemaStr},`);
			} else {
				// Usa fallback padrão
				lines.push(`  ${placeholder}: ${getPlaceholderFallback(placeholder)},`);
			}
		} else {
			// currentUser usa fallback
			lines.push(`  ${placeholder}: ${getPlaceholderFallback(placeholder)},`);
		}
	}

	const allLines = [...regularFields, ...lines].sort().join("\n");
	return `z.object({\n${allLines}\n})`;
}

/**
 * Infere schema para um campo individual.
 */
function inferFieldSchema(value: unknown): string {
	if (value === null) return "z.string()";
	if (typeof value === "string") return "z.string()";
	if (typeof value === "number") return "z.number()";
	if (typeof value === "boolean") return "z.boolean()";
	if (Array.isArray(value)) return "z.array(z.unknown())";
	if (typeof value === "object") return "z.record(z.unknown())";
	return "z.unknown()";
}

/**
 * Retorna o schema fallback para um placeholder.
 */
function getPlaceholderFallback(placeholder: string): string {
	switch (placeholder) {
		case "$nForm":
			return "z.record(z.string())";
		case "$nPopupRecord":
			return "z.record(z.unknown())";
		case "$nSelectedRecord":
			return "z.array(z.record(z.unknown()))";
		case "currentRecord":
			return "z.record(z.unknown())";
		case "currentUser":
			return "z.object({ id: z.unknown() })";
		default:
			return "z.unknown()";
	}
}

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

	// Infere schema usando schemas de collections se disponível
	let payloadSchema: string;
	let schemaUsed = false;

	if (schemaRegistry) {
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

	// Deduplica schemas não encontrados
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

/**
 * Remove duplicatas da lista de schemas não encontrados.
 */
function deduplicateSchemasNotFound(
	items: CollectionSchemaMapping[],
): CollectionSchemaMapping[] {
	const seen = new Set<string>();
	const result: CollectionSchemaMapping[] = [];

	for (const item of items) {
		const key = `${item.dataSourceKey}:${item.collectionName}`;
		if (!seen.has(key)) {
			seen.add(key);
			result.push(item);
		}
	}

	return result;
}
