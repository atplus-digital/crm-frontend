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
import { inferPayloadSchema } from "../../../../utils/schema-inference";

const COLLECTION_PLACEHOLDERS = [
	"$nForm",
	"$nPopupRecord",
	"$nSelectedRecord",
	"currentRecord",
] as const;

const USER_PLACEHOLDERS = ["currentUser"] as const;

function generatePlaceholderSchema(
	placeholder:
		| (typeof COLLECTION_PLACEHOLDERS)[number]
		| (typeof USER_PLACEHOLDERS)[number],
	fields: Set<string>,
	collectionSchema: CollectionSchemaMapping | null,
): string | null {
	if (placeholder === "currentUser") {
		return null;
	}

	if (!collectionSchema) {
		return null;
	}

	if (fields.has("*")) {
		if (placeholder === "$nSelectedRecord") {
			return `z.array(${collectionSchema.schemaName})`;
		}
		return collectionSchema.schemaName;
	}

	const pickCode = generateSchemaPickCode(collectionSchema, fields);
	if (placeholder === "$nSelectedRecord") {
		return `z.array(${pickCode})`;
	}

	return pickCode;
}

function inferFieldSchema(value: unknown): string {
	if (value === null) return "z.string()";
	if (typeof value === "string") return "z.string()";
	if (typeof value === "number") return "z.number()";
	if (typeof value === "boolean") return "z.boolean()";
	if (Array.isArray(value)) return "z.array(z.unknown())";
	if (typeof value === "object") return "z.record(z.unknown())";
	return "z.unknown()";
}

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

	const schemaInfo = findSchema(registry, collectionName, dataSourceKey);

	for (const placeholder of [
		...COLLECTION_PLACEHOLDERS,
		...USER_PLACEHOLDERS,
	]) {
		const fields = placeholderFields[placeholder];
		if (!fields || fields.size === 0) continue;

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
				lines.push(`  ${placeholder}: ${getPlaceholderFallback(placeholder)},`);
			}
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

	for (const placeholder of COLLECTION_PLACEHOLDERS) {
		const fields = placeholderFields[placeholder];
		if (!fields || fields.size === 0) continue;

		const foundSchema = findSchema(registry, collectionName, dataSourceKey);
		if (foundSchema) {
			atLeastOneSchemaFound = true;
			break;
		}

		logger.debug(
			`Schema não encontrado para collection "${collectionName}" (${dataSourceKey}) para placeholder "${placeholder}"`,
		);

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
