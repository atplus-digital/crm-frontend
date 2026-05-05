import type { Logger } from "@scripts/generators/src/lib/logging";
import type {
	CollectionSchemaMapping,
	SchemaRegistry,
} from "../../../../@types/collection-schema";
import type { PlaceholderFields } from "../../../../utils/collection-schema-loader";
import {
	extractPlaceholderFields,
	findSchema,
	generateSchemaPickCode,
} from "../../../../utils/collection-schema-loader";
import {
	inferPayloadSchema,
	inferPrimitiveLiteralZod,
} from "../../../../utils/schema-inference";

const COLLECTION_PLACEHOLDERS = [
	"$nForm",
	"$nPopupRecord",
	"$nSelectedRecord",
	"currentRecord",
] as const;

const USER_PLACEHOLDERS = ["currentUser"] as const;
const MAIN_DATASOURCE_KEY = "main";
const MAIN_USER_COLLECTION = "users";

function getSchemaForPlaceholder(
	placeholder:
		| (typeof COLLECTION_PLACEHOLDERS)[number]
		| (typeof USER_PLACEHOLDERS)[number],
	collectionName: string,
	dataSourceKey: string,
	registry: SchemaRegistry,
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
	placeholderSchema: CollectionSchemaMapping | null,
): string | null {
	if (!placeholderSchema) {
		return null;
	}

	const concreteFields = new Set([...fields].filter((field) => field !== "*"));

	if (fields.has("*") && concreteFields.size === 0) {
		if (placeholder === "$nSelectedRecord") {
			return `z.array(${placeholderSchema.schemaName})`;
		}
		if (placeholder === "currentUser") {
			return `${placeholderSchema.schemaName}.optional()`;
		}
		return placeholderSchema.schemaName;
	}

	const pickCode = generateSchemaPickCode(placeholderSchema, concreteFields);
	if (placeholder === "$nSelectedRecord") {
		return `z.array(${pickCode})`;
	}
	if (placeholder === "currentUser") {
		return `${pickCode}.optional()`;
	}

	return pickCode;
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
	placeholderFields: PlaceholderFields,
	collectionName: string,
	dataSourceKey: string,
	registry: SchemaRegistry,
): string {
	const lines: string[] = [];
	const regularFields: string[] = [];

	for (const [key, value] of Object.entries(payloadData)) {
		const isPlaceholderValue =
			typeof value === "string" &&
			value.match(
				/\{\{(\$nForm|\$nPopupRecord|\$nSelectedRecord|currentRecord|currentUser)(\.([^}]+))?\}\}/,
			);

		if (!isPlaceholderValue) {
			regularFields.push(`  ${key}: ${inferFieldSchema(value)},`);
		}
	}

	for (const placeholder of [
		...COLLECTION_PLACEHOLDERS,
		...USER_PLACEHOLDERS,
	]) {
		const fields = placeholderFields[placeholder];
		if (!fields || fields.size === 0) continue;

		const placeholderSchema = getSchemaForPlaceholder(
			placeholder,
			collectionName,
			dataSourceKey,
			registry,
		);
		const schemaStr = generatePlaceholderSchema(
			placeholder,
			fields,
			placeholderSchema,
		);

		if (schemaStr) {
			lines.push(`  ${placeholder}: ${schemaStr},`);
		} else {
			lines.push(`  ${placeholder}: ${getPlaceholderFallback(placeholder)},`);
		}
	}

	const allLines = [...regularFields, ...lines].sort().join("\n");
	return `z.object({\n${allLines}\n})`;
}

export interface PayloadSchemaInferenceResult {
	schemaString: string;
	schemaUsed: boolean;
	notFoundCollections: CollectionSchemaMapping[];
}

export function inferPayloadSchemaWithCollections(
	payloadData: Record<string, unknown> | null,
	collectionName: string,
	dataSourceKey: string,
	registry: SchemaRegistry,
	logger: Logger,
): PayloadSchemaInferenceResult {
	if (!payloadData || Object.keys(payloadData).length === 0) {
		return {
			schemaString: "z.any()",
			schemaUsed: false,
			notFoundCollections: [],
		};
	}

	const placeholderFields = extractPlaceholderFields(payloadData);
	const notFoundCollections: CollectionSchemaMapping[] = [];
	let atLeastOneSchemaFound = false;

	for (const placeholder of [
		...COLLECTION_PLACEHOLDERS,
		...USER_PLACEHOLDERS,
	]) {
		const fields = placeholderFields[placeholder];
		if (!fields || fields.size === 0) continue;

		const foundSchema = getSchemaForPlaceholder(
			placeholder,
			collectionName,
			dataSourceKey,
			registry,
		);
		if (foundSchema) {
			atLeastOneSchemaFound = true;
			break;
		}

		const missingCollectionName =
			placeholder === "currentUser" ? MAIN_USER_COLLECTION : collectionName;
		const missingDataSourceKey =
			placeholder === "currentUser" ? MAIN_DATASOURCE_KEY : dataSourceKey;

		logger.debug(
			`Schema não encontrado para collection "${missingCollectionName}" (${missingDataSourceKey}) para placeholder "${placeholder}"`,
		);

		const alreadyAdded = notFoundCollections.some(
			(nf) =>
				nf.collectionName === missingCollectionName &&
				nf.dataSourceKey === missingDataSourceKey,
		);

		if (!alreadyAdded) {
			notFoundCollections.push({
				collectionName: missingCollectionName,
				dataSourceKey: missingDataSourceKey,
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
			notFoundCollections,
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
		notFoundCollections: [],
	};
}
