import type { PipelineExecutionContext } from "@generators/lib/pipeline/context";
import { addJsonReport } from "@generators/lib/pipeline/reports";
import type { TaskRunner } from "@shared/types";
import type {
	CollectionSchemaMapping,
	RelationCollectionNotFound,
} from "../@types/collection-schema";
import type { CustomRequestApiEntry } from "../@types/custom-request-api";
import type { GeneratedRegistryEntry } from "../@types/generated-registry";
import type { RequestsMap, ScriptConfig } from "../@types/script-config";
import {
	extractPlaceholderFields,
	findSchema,
	generateSchemaPickCode,
} from "../utils/collection-schema-loader";
import {
	inferPayloadSchema,
	inferPrimitiveLiteralZod,
} from "../utils/schema-inference";
import type { CustomRequestsPipelineCtx } from "./load-schemas";

// ── Placeholder constants ──

const COLLECTION_PLACEHOLDERS = [
	"$nForm",
	"$nPopupRecord",
	"$nSelectedRecord",
	"currentRecord",
] as const;

const USER_PLACEHOLDERS = ["currentUser"] as const;
const MAIN_DATASOURCE_KEY = "main";
const MAIN_USER_COLLECTION = "users";

// ── Relation field detection constants ──

/**
 * Padrão para detectar campos de relação no payload.
 * Campos de relação começam com 'f_' seguido do nome da relação.
 * Exemplos: f_pessoa, f_vendedor, f_cliente, f_empresa
 */
const RELATION_FIELD_PATTERN = /^f_[a-zA-Z][a-zA-Z0-9_]*$/;

/**
 * Prefixo que indica um campo de relação no NocoBase.
 */
const RELATION_PREFIX = "f_";

// ── Payload data normalization ──

function normalizePayloadData(
	raw: unknown,
	hint: string,
	warnings: string[],
): Record<string, unknown> | null {
	if (raw == null) return null;
	if (typeof raw === "object") return raw as Record<string, unknown>;
	if (typeof raw === "string") {
		try {
			const parsed = JSON.parse(raw) as unknown;
			if (typeof parsed === "object" && parsed !== null) {
				return parsed as Record<string, unknown>;
			}
		} catch {
			warnings.push(
				`[${hint}] options.data é string não-parseável: ${raw.slice(0, 100)}`,
			);
		}
	}
	return null;
}

// ── Relation field extraction ──

/**
 * Extrai todos os campos de relação detectados nos placeholders.
 * Exemplo: {{currentRecord.f_pessoa.nome}} → extrai "f_pessoa"
 */
function extractRelationFieldsFromPlaceholderFields(
	placeholderFields: Record<string, Set<string>>,
): Set<string> {
	const relationFields = new Set<string>();

	for (const fields of Object.values(placeholderFields)) {
		for (const field of fields) {
			// Skip wildcards
			if (field === "*" || field.startsWith("*")) continue;

			// Check if this is a relation field (nested path like f_pessoa.nome)
			const parts = field.split(".");
			for (const part of parts) {
				if (RELATION_FIELD_PATTERN.test(part)) {
					relationFields.add(part);
				}
			}
		}
	}

	return relationFields;
}

/**
 * Infere o nome da collection alvo a partir do nome do campo de relação.
 * Padrão NocoBase: f_<collection_name> → <collection_name>
 * Exemplo: f_pessoa → pessoas, f_vendedor → vendedor, f_cliente → cliente
 */
function inferRelationTargetCollection(relationField: string): string {
	// Remove prefixo 'f_'
	if (relationField.startsWith(RELATION_PREFIX)) {
		const rest = relationField.slice(RELATION_PREFIX.length);
		// Converter para plural (padrão do NocoBase)
		// Se já termina com 's', manter como está
		// Caso contrário, adicionar 's'
		return rest.endsWith("s") ? rest : `${rest}s`;
	}
	return relationField;
}

// ── Schema enrichment (ported from schema-enrichment.ts) ──

function getSchemaForPlaceholder(
	placeholder:
		| (typeof COLLECTION_PLACEHOLDERS)[number]
		| (typeof USER_PLACEHOLDERS)[number],
	collectionName: string,
	dataSourceKey: string,
	registry: import("../@types/collection-schema").SchemaRegistry,
): CollectionSchemaMapping | null {
	if (placeholder === "currentUser") {
		return findSchema(registry, MAIN_USER_COLLECTION, MAIN_DATASOURCE_KEY);
	}
	return findSchema(registry, collectionName, dataSourceKey);
}

function generatePlaceholderSchema(
	placeholder:
		| (typeof COLLECTION_PLACEHOLDERS)[number]
		| (typeof USER_PLACEHOLDERS)[number],
	fields: Set<string>,
	schema: CollectionSchemaMapping | null,
): string | null {
	if (!schema) return null;

	const concreteFields = new Set([...fields].filter((f) => f !== "*"));

	if (fields.has("*") && concreteFields.size === 0) {
		if (placeholder === "$nSelectedRecord") {
			return `z.array(${schema.schemaName})`;
		}
		if (placeholder === "currentUser") {
			return `${schema.schemaName}.optional()`;
		}
		return schema.schemaName;
	}

	const pick = generateSchemaPickCode(schema, concreteFields);
	if (placeholder === "$nSelectedRecord") return `z.array(${pick})`;
	if (placeholder === "currentUser") return `${pick}.optional()`;
	return pick;
}

function inferFieldSchema(value: unknown): string {
	if (value === null) return inferPrimitiveLiteralZod(null);
	if (typeof value === "string") return inferPrimitiveLiteralZod(value);
	if (typeof value === "number") {
		return Number.isFinite(value)
			? inferPrimitiveLiteralZod(value)
			: "z.number()";
	}
	if (typeof value === "boolean") return inferPrimitiveLiteralZod(value);
	if (Array.isArray(value)) return "z.array(z.unknown())";
	if (typeof value === "object") return "z.record(z.unknown())";
	return "z.unknown()";
}

function getPlaceholderFallback(placeholder: string): string {
	switch (placeholder) {
		case "$nForm":
			return "z.object({}).catchall(z.string())";
		case "$nPopupRecord":
			return "z.object({}).catchall(z.unknown())";
		case "$nSelectedRecord":
			return "z.array(z.object({}).catchall(z.unknown()))";
		case "currentRecord":
			return "z.object({}).catchall(z.unknown())";
		case "currentUser":
			return "z.object({ id: z.unknown() }).optional()";
		default:
			return "z.unknown()";
	}
}

function buildEnhancedSchemaString(
	payloadData: Record<string, unknown>,
	placeholderFields: Record<string, Set<string>>,
	collectionName: string,
	dataSourceKey: string,
	registry: import("../@types/collection-schema").SchemaRegistry,
): string {
	const lines: string[] = [];
	const regularFields: string[] = [];

	const placeholderPattern =
		/\{\{(\$nForm|\$nPopupRecord|\$nSelectedRecord|currentRecord|currentUser)(\.([^}]+))?\}\}/;

	for (const [key, value] of Object.entries(payloadData)) {
		const isPlaceholder =
			typeof value === "string" && placeholderPattern.test(value);
		if (!isPlaceholder) {
			regularFields.push(`  ${key}: ${inferFieldSchema(value)},`);
		}
	}

	for (const placeholder of [
		...COLLECTION_PLACEHOLDERS,
		...USER_PLACEHOLDERS,
	]) {
		const fields = placeholderFields[placeholder];
		if (!fields || fields.size === 0) continue;

		const found = getSchemaForPlaceholder(
			placeholder,
			collectionName,
			dataSourceKey,
			registry,
		);
		const schemaStr = generatePlaceholderSchema(placeholder, fields, found);
		lines.push(
			`  ${placeholder}: ${schemaStr ?? getPlaceholderFallback(placeholder)},`,
		);
	}

	const all = [...regularFields, ...lines].sort().join("\n");
	return `z.object({\n${all}\n})`;
}

function inferPayloadSchemaWithCollections(
	payloadData: Record<string, unknown> | null,
	collectionName: string,
	dataSourceKey: string,
	registry: import("../@types/collection-schema").SchemaRegistry,
): {
	schemaString: string;
	schemaUsed: boolean;
	notFound: CollectionSchemaMapping[];
} {
	if (!payloadData || Object.keys(payloadData).length === 0) {
		return { schemaString: "z.any()", schemaUsed: false, notFound: [] };
	}

	const placeholderFields = extractPlaceholderFields(payloadData);
	const notFound: CollectionSchemaMapping[] = [];
	let atLeastOneSchemaFound = false;

	for (const placeholder of [
		...COLLECTION_PLACEHOLDERS,
		...USER_PLACEHOLDERS,
	]) {
		const fields = placeholderFields[placeholder];
		if (!fields || fields.size === 0) continue;

		const found = getSchemaForPlaceholder(
			placeholder,
			collectionName,
			dataSourceKey,
			registry,
		);
		if (found) {
			atLeastOneSchemaFound = true;
			break;
		}

		const missingCol =
			placeholder === "currentUser" ? MAIN_USER_COLLECTION : collectionName;
		const missingDs =
			placeholder === "currentUser" ? MAIN_DATASOURCE_KEY : dataSourceKey;

		const alreadyAdded = notFound.some(
			(nf) =>
				nf.collectionName === missingCol && nf.dataSourceKey === missingDs,
		);
		if (!alreadyAdded) {
			notFound.push({
				collectionName: missingCol,
				dataSourceKey: missingDs,
				schemaImportPath: "",
				schemaName: "",
				baseSchemaName: "",
			});
		}
	}

	if (!atLeastOneSchemaFound) {
		return {
			schemaString: inferPayloadSchema(payloadData),
			schemaUsed: false,
			notFound,
		};
	}

	return {
		schemaString: buildEnhancedSchemaString(
			payloadData,
			placeholderFields,
			collectionName,
			dataSourceKey,
			registry,
		),
		schemaUsed: true,
		notFound: [],
	};
}

/**
 * Valida campos de relação e retorna collections não encontradas.
 */
function validateRelationFields(
	placeholderFields: Record<string, Set<string>>,
	collectionName: string,
	dataSourceKey: string,
	requestKey: string,
	requestName: string,
	registry: import("../@types/collection-schema").SchemaRegistry,
): RelationCollectionNotFound[] {
	const relationFields =
		extractRelationFieldsFromPlaceholderFields(placeholderFields);
	const notFound: RelationCollectionNotFound[] = [];

	for (const field of relationFields) {
		const targetCollection = inferRelationTargetCollection(field);

		// Verificar se a collection existe no registry
		const schema = findSchema(registry, targetCollection, dataSourceKey);

		if (!schema) {
			notFound.push({
				relationCollectionName: targetCollection,
				relationFieldName: field,
				dataSourceKey,
				parentCollectionName: collectionName,
				requestKey,
				requestName,
			});
		}
	}

	return notFound;
}

// ── Entry transformer ──

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

/**
 * Remove duplicatas de collections de relação não encontradas.
 */
function deduplicateRelationCollectionsNotFound(
	items: RelationCollectionNotFound[],
): RelationCollectionNotFound[] {
	const seen = new Set<string>();
	const result: RelationCollectionNotFound[] = [];
	for (const item of items) {
		const key = `${item.dataSourceKey}:${item.relationCollectionName}`;
		if (!seen.has(key)) {
			seen.add(key);
			result.push(item);
		}
	}
	return result;
}

function transformApiEntryToRegistry(
	entry: CustomRequestApiEntry,
	warnings: string[],
	schemaRegistry?: import("../@types/collection-schema").SchemaRegistry,
): {
	entry: GeneratedRegistryEntry | null;
	schemasNotFound: CollectionSchemaMapping[];
	relationCollectionsNotFound: RelationCollectionNotFound[];
} {
	const schemasNotFound: CollectionSchemaMapping[] = [];
	const relationCollectionsNotFound: RelationCollectionNotFound[] = [];

	if (!entry.options) {
		warnings.push(`Entrada "${entry.key}": sem options, pulando`);
		return { entry: null, schemasNotFound, relationCollectionsNotFound };
	}
	if (!entry.options.collectionName) {
		warnings.push(`Entrada "${entry.key}": sem collectionName, pulando`);
		return { entry: null, schemasNotFound, relationCollectionsNotFound };
	}
	if (!entry.options.url) {
		warnings.push(`Entrada "${entry.key}": sem url, usando string vazia`);
	}

	const name = entry.name ?? entry.key;
	const payloadData = normalizePayloadData(
		entry.options.data,
		entry.key,
		warnings,
	);
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
		);
		payloadSchema = result.schemaString;
		schemaUsed = result.schemaUsed;
		schemasNotFound.push(...result.notFound);

		// Validar campos de relação
		if (payloadData) {
			const placeholderFields = extractPlaceholderFields(payloadData);
			const relationsNotFound = validateRelationFields(
				placeholderFields,
				entry.options.collectionName,
				dataSourceKey,
				entry.key,
				name,
				schemaRegistry,
			);
			relationCollectionsNotFound.push(...relationsNotFound);
		}
	} else {
		payloadSchema = inferPayloadSchema(payloadData);
	}

	if (schemaUsed) {
		warnings.push(
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
		relationCollectionsNotFound,
	};
}

function transformAllEntries(
	entries: CustomRequestApiEntry[],
	schemaRegistry?: import("../@types/collection-schema").SchemaRegistry,
): {
	transformed: GeneratedRegistryEntry[];
	schemasNotFound: CollectionSchemaMapping[];
	relationCollectionsNotFound: RelationCollectionNotFound[];
	warnings: string[];
} {
	const transformed: GeneratedRegistryEntry[] = [];
	const allSchemasNotFound: CollectionSchemaMapping[] = [];
	const allRelationCollectionsNotFound: RelationCollectionNotFound[] = [];
	const warnings: string[] = [];
	let skipped = 0;

	for (const entry of entries) {
		const result = transformApiEntryToRegistry(entry, warnings, schemaRegistry);
		if (result.entry) {
			transformed.push(result.entry);
		} else {
			skipped++;
		}
		allSchemasNotFound.push(...result.schemasNotFound);
		allRelationCollectionsNotFound.push(...result.relationCollectionsNotFound);
	}

	transformed.sort((a, b) => a.key.localeCompare(b.key));
	const uniqueSchemasNotFound = deduplicateSchemasNotFound(allSchemasNotFound);
	const uniqueRelationCollectionsNotFound =
		deduplicateRelationCollectionsNotFound(allRelationCollectionsNotFound);

	warnings.push(
		`Transformação: ${transformed.length} entradas, ${skipped} puladas`,
	);
	if (uniqueSchemasNotFound.length > 0) {
		warnings.push(
			`${uniqueSchemasNotFound.length} collections sem schema encontrado:`,
		);
		for (const nf of uniqueSchemasNotFound) {
			warnings.push(`  - ${nf.collectionName} (${nf.dataSourceKey})`);
		}
	}
	if (uniqueRelationCollectionsNotFound.length > 0) {
		warnings.push(
			`${uniqueRelationCollectionsNotFound.length} collections de relação não encontradas para inserir:`,
		);
		for (const nf of uniqueRelationCollectionsNotFound) {
			warnings.push(
				`  - ${nf.relationCollectionName} (via ${nf.relationFieldName} em ${nf.parentCollectionName}, request: ${nf.requestName})`,
			);
		}
	}

	return {
		transformed,
		schemasNotFound: uniqueSchemasNotFound,
		relationCollectionsNotFound: uniqueRelationCollectionsNotFound,
		warnings,
	};
}

// ── Merge registries ──

function mergeRegistries(
	generated: GeneratedRegistryEntry[],
	manual: GeneratedRegistryEntry[],
): GeneratedRegistryEntry[] {
	const normalizedManual: GeneratedRegistryEntry[] = manual.map((e) => ({
		...e,
		dataSourceKey: e.dataSourceKey ?? "main",
		payloadData: e.payloadData ?? null,
	}));

	const manualKeys = new Set(normalizedManual.map((e) => e.key));
	const filtered = generated.filter((e) => !manualKeys.has(e.key));
	const merged = [...filtered, ...normalizedManual];
	merged.sort((a, b) => a.key.localeCompare(b.key));
	return merged;
}

// ── Filter entries by configured requests ──

function filterGeneratedEntriesByConfiguredRequests(
	entries: GeneratedRegistryEntry[],
	requests: RequestsMap,
): { entries: GeneratedRegistryEntry[]; ignoredCount: number } {
	const configuredKeys = new Set(Object.keys(requests));
	if (configuredKeys.size === 0) {
		if (entries.length > 0) {
			// No configured requests but entries exist — warn
		}
		return { entries: [], ignoredCount: entries.length };
	}

	const filtered = entries.filter((e) => configuredKeys.has(e.key));
	return { entries: filtered, ignoredCount: entries.length - filtered.length };
}

// ── Stage ──

export async function transformEntriesStage(
	context: PipelineExecutionContext<ScriptConfig, CustomRequestsPipelineCtx>,
	task: TaskRunner,
): Promise<PipelineExecutionContext<ScriptConfig, CustomRequestsPipelineCtx>> {
	task.output = "Transformando e mesclando entradas...";

	const pipelineCtx = (context.pipelineContext ??
		{}) as CustomRequestsPipelineCtx;
	const entries = pipelineCtx.entries ?? [];
	const schemaRegistry = pipelineCtx.schemaRegistry;

	// 1. Transform API entries
	const {
		transformed,
		schemasNotFound,
		relationCollectionsNotFound,
		warnings: _transformWarnings,
	} = transformAllEntries(entries, schemaRegistry);

	// 2. Filter by configured requests
	const { entries: filtered, ignoredCount } =
		filterGeneratedEntriesByConfiguredRequests(
			transformed,
			context.runtimeConfig.requests,
		);

	// 3. Build manual entries for merging
	const manualEntries: GeneratedRegistryEntry[] =
		context.runtimeConfig.manualRequests.map(
			(m: import("../@types/script-config").ManualRegistryEntry) => ({
				key: m.key,
				name: m.name,
				collection: m.collection,
				collectionSchemaName: null,
				dataSourceKey: m.dataSourceKey ?? "main",
				method: m.method,
				url: m.url,
				payloadSchema: m.payloadSchema,
				payloadData: m.payloadData ?? null,
			}),
		);

	// 4. Merge
	const merged = mergeRegistries(filtered, manualEntries);

	// 5. Update schema not found list
	const previousSchemasNotFound = pipelineCtx.schemasNotFound ?? [];
	const allNotFound = [...previousSchemasNotFound, ...schemasNotFound];

	// 6. Report schemas not found
	const reports = addJsonReport(context.reports, {
		namespace: "custom-requests",
		key: "schemas-not-found",
		title: "Schemas de collection não encontrados",
		scope: {
			pipeline: "generate-custom-requests",
			stage: "transform-entries",
		},
		payload: {
			totalMissing: allNotFound.length,
			totalRelationCollectionsNotFound: relationCollectionsNotFound.length,
			missingSchemas: allNotFound.map((item) => ({
				collectionName: item.collectionName,
				dataSourceKey: item.dataSourceKey,
			})),
			relationCollectionsNotFound: relationCollectionsNotFound,
		},
	});

	// Build summary
	const summary: string[] = [];
	summary.push(
		`${transformed.length} transformadas, ${ignoredCount} ignoradas, ${merged.length} após merge`,
	);
	if (allNotFound.length > 0) {
		summary.push(`${allNotFound.length} collections sem schema`);
	}
	if (relationCollectionsNotFound.length > 0) {
		summary.push(
			`${relationCollectionsNotFound.length} collections de relação para inserir`,
		);
	}

	task.output = summary.join(" | ");

	return {
		...context,
		reports,
		pipelineContext: {
			...pipelineCtx,
			transformedEntries: filtered,
			mergedEntries: merged,
			schemasNotFound: allNotFound,
		} satisfies CustomRequestsPipelineCtx,
	};
}
