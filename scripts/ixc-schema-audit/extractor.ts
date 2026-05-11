/**
 * Extrai tipos (scalars, enums, relations) dos schemas Zod gerados
 */

import type { ScalarType, EnumOption, CollectionSchema } from "./config";
import type { DiscoveredCollection } from "./discovery";

interface ZodTypeDef {
	type: string;
	innerType?: ZodType;
	values?: (string | number)[];
}

interface ZodType {
	_def: ZodTypeDef;
}

function isZodType(obj: unknown): obj is ZodType {
	return (
		typeof obj === "object" &&
		obj !== null &&
		"_def" in obj &&
		typeof (obj as ZodType)._def === "object"
	);
}

function mapZodType(typeDef: ZodTypeDef): ScalarType | "enum" | "lazy" | "array" | "nullable" | "other" {
	switch (typeDef.type) {
		case "ZodString":
			return "string";
		case "ZodNumber":
			return "number";
		case "ZodBoolean":
			return "boolean";
		case "ZodEnum":
		case "ZodNativeEnum":
			return "enum";
		case "ZodLazy":
			return "lazy";
		case "ZodArray":
			return "array";
		case "ZodNullable":
		case "ZodOptional":
			return "nullable";
		default:
			return "other";
	}
}

function unwrapZodType(schema: ZodType): {
	type: ScalarType | "enum" | "lazy" | "other";
	innerSchema?: ZodType;
	isArray: boolean;
} {
	let current = schema;
	let isArray = false;

	while (true) {
		const category = mapZodType(current._def);

		if (category === "nullable") {
			if (current._def.innerType && isZodType(current._def.innerType)) {
				current = current._def.innerType;
				continue;
			}
		}

		if (category === "array") {
			isArray = true;
			if (current._def.innerType && isZodType(current._def.innerType)) {
				current = current._def.innerType;
				continue;
			}
		}

		if (category === "string" || category === "number" || category === "boolean") {
			return { type: category, isArray };
		}

		if (category === "enum") {
			return { type: "enum", isArray };
		}

		if (category === "lazy") {
			return { type: "lazy", innerSchema: current, isArray };
		}

		return { type: "other", isArray };
	}
}

function extractEnumValues(schema: ZodType): (string | number)[] | null {
	if (schema._def.type === "ZodEnum" && Array.isArray(schema._def.values)) {
		return schema._def.values;
	}
	if (schema._def.type === "ZodNativeEnum" && "options" in schema._def) {
		const opts = (schema._def as { options?: (string | number)[] }).options;
		if (Array.isArray(opts)) return opts;
	}
	return null;
}

function camelToConstantCase(str: string): string {
	return str.replace(/([a-z])([A-Z])/g, "$1_$2").toUpperCase();
}

interface SchemaModule {
	[key: string]: unknown;
}

export async function extractCollectionSchema(
	collection: DiscoveredCollection,
): Promise<CollectionSchema> {
	const result: CollectionSchema = {
		collectionName: collection.name,
		scalars: new Map(),
		enums: new Map(),
		relations: new Map(),
	};

	const schemasImportPath = `#/generated/types/d_db_ixcsoft/${collection.dirName}/schemas`;
	const labelsImportPath = `#/generated/types/d_db_ixcsoft/${collection.dirName}/labels`;

	let schemasModule: SchemaModule;
	let labelsModule: SchemaModule = {};

	try {
		schemasModule = (await import(schemasImportPath)) as SchemaModule;
	} catch (err) {
		throw new Error(`Falha ao importar schemas de ${collection.name}: ${err}`);
	}

	try {
		labelsModule = (await import(labelsImportPath)) as SchemaModule;
	} catch {
		// Labels não encontrados é OK
	}

	const baseSchemaName = `${collection.name}BaseSchema`;
	const baseSchema = schemasModule[baseSchemaName] as ZodType | undefined;

	if (baseSchema && isZodType(baseSchema) && "shape" in baseSchema) {
		const shape = (baseSchema as { shape: Record<string, ZodType> }).shape;

		for (const [fieldName, fieldSchema] of Object.entries(shape)) {
			if (!isZodType(fieldSchema)) continue;

			const { type } = unwrapZodType(fieldSchema);

			if (type === "enum") {
				const values = extractEnumValues(fieldSchema);
				if (values) {
					let labels: Record<string | number, string> = {};

					const enumSchemas = Object.entries(labelsModule).filter(
						([key, val]) =>
							key.endsWith("Schema") &&
							isZodType(val) &&
							extractEnumValues(val as ZodType) !== null,
					);

					for (const [schemaName, schemaObj] of enumSchemas) {
						const enumVals = extractEnumValues(schemaObj as ZodType);
						if (
							enumVals &&
							enumVals.length === values.length &&
							enumVals.every((v, i) => values[i] === v)
						) {
							const baseName = schemaName.replace(/Schema$/, "");
							const labelsName1 = `${camelToConstantCase(baseName)}_LABELS`;
							const labelsName2 = `${collection.name.toUpperCase()}_${camelToConstantCase(fieldName)}_LABELS`;

							if (labelsModule[labelsName1] && typeof labelsModule[labelsName1] === "object") {
								labels = labelsModule[labelsName1] as Record<string | number, string>;
								break;
							}
							if (labelsModule[labelsName2] && typeof labelsModule[labelsName2] === "object") {
								labels = labelsModule[labelsName2] as Record<string | number, string>;
								break;
							}
						}
					}

					const options: EnumOption[] = values.map((v) => ({
						value: v,
						label: labels[v] ?? String(v),
					}));

					result.enums.set(fieldName, options);
				}
			} else if (type === "string" || type === "number" || type === "boolean") {
				result.scalars.set(fieldName, type);
			}
		}
	}

	const relationSchemaName = `${collection.name}RelationSchema`;
	const relationSchema = schemasModule[relationSchemaName] as ZodType | undefined;

	if (relationSchema && isZodType(relationSchema) && "shape" in relationSchema) {
		const shape = (relationSchema as { shape: Record<string, ZodType> }).shape;

		for (const [fieldName, fieldSchema] of Object.entries(shape)) {
			if (!isZodType(fieldSchema)) continue;

			const { type, innerSchema, isArray } = unwrapZodType(fieldSchema);

			if (type === "lazy" && innerSchema) {
				let target = "";

				const entries = Object.entries(schemasModule);
				for (const [key, val] of entries) {
					if (key.endsWith("BaseSchema") && val === innerSchema) {
						target = key.replace(/BaseSchema$/, "");
						break;
					}
				}

				if (!target && fieldName.startsWith("f_")) {
					const afterF = fieldName.slice(2);
					if (afterF.startsWith("nc_")) {
						target = afterF.slice(3);
					} else {
						target = afterF;
					}
				}

				result.relations.set(fieldName, {
					target: target || fieldName,
					type: isArray ? "hasMany" : "belongsTo",
				});
			}
		}
	}

	return result;
}
