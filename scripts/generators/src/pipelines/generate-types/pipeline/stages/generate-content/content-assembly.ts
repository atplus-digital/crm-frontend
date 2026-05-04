import type {
	CollectionTypesMap,
	GeneratedTypes,
} from "@scripts/generators/src/pipelines/generate-types/@types/generation";
import type { BaseInterfaceNamingConfig } from "@scripts/generators/src/pipelines/generate-types/@types/script";
import { toFileName, toValidIdentifier } from "@scripts/generators/src/pipelines/generate-types/utils/naming";
import {
	generateCollectionEnumMaps,
	generateCollectionEnumSchemas,
	generateCollectionEnumTypes,
	toEnumMemberName,
} from "./content-enums";
import {
	generateBaseSchema,
	generateCollectionInterfaces,
	generateCreateSchema,
	generateMergedMainSchema,
	generateRelationSchema,
	generateUpdateSchema,
} from "./content-interfaces";
import { _sortMapEntries, _sortScalarEntries } from "./content-sorting";

/**
 * Gera o header do arquivo TypeScript gerado.
 */
export function generateFileHeader(): string {
	return `/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
`;
}

/**
 * Gera o import do zod.
 */
function generateZodImport(): string {
	return `import { z } from "zod";`;
}

function _toCollectionSourceConstName(collectionName: string): string {
	const normalized = collectionName
		.trim()
		.toUpperCase()
		.replace(/[^A-Z0-9_$]+/g, "_")
		.replace(/^_+|_+$/g, "");
	const identifier = toValidIdentifier(normalized || "UNKNOWN");
	return `${identifier}_TABLE_NAME`;
}

function _ensureValidIdentifier(name: string): string {
	if (/^[0-9]/.test(name)) {
		return `_${name}`;
	}
	return name;
}

/**
 * Gera o conteúdo do arquivo labels.ts para uma collection.
 *
 * Ordem:
 * 1. Import do zod
 * 2. Labels (single source of truth)
 * 3. Enum Schemas
 * 4. Enum Types
 */
export function generateLabelsContent(
	collectionName: string,
	types: GeneratedTypes,
): string {
	const lines: string[] = [];

	// 1. Import do zod (apenas se há enums)
	if (types.enums.size > 0) {
		lines.push(generateZodImport());
	}

	if (types.enums.size > 0) {
		lines.push("");
		lines.push(
			"// ============================================================",
		);
		lines.push("// LABELS (single source of truth)");
		lines.push(
			"// ============================================================",
		);
		lines.push(generateCollectionEnumMaps(collectionName, types));
		lines.push("");
		lines.push(
			"// ============================================================",
		);
		lines.push("// ENUM SCHEMAS (validação em runtime)");
		lines.push(
			"// ============================================================",
		);
		lines.push(generateCollectionEnumSchemas(collectionName, types));
		lines.push("");
		lines.push(
			"// ============================================================",
		);
		lines.push("// ENUM TYPES (inferidos dos schemas)");
		lines.push(
			"// ============================================================",
		);
		lines.push(generateCollectionEnumTypes(collectionName, types));
	}

	return lines.join("\n");
}

/**
 * Gera o conteúdo do arquivo schemas.ts para uma collection.
 *
 * Ordem:
 * 1. Import do zod
 * 2. Import de schemas de enum do ./labels
 * 3. Import de schemas de outras collections
 * 4. TABLE_NAME const
 * 5. Base Schema
 * 6. Relation Schema
 * 7. Main Schema (merge)
 * 8. Create Schema
 * 9. Update Schema
 */
export function generateSchemasContent(
	collectionName: string,
	types: GeneratedTypes,
	baseInterfaceNaming?: Partial<BaseInterfaceNamingConfig>,
	allCollectionsMap?: CollectionTypesMap,
): string {
	const lines: string[] = [];

	// Available collections para resolver referências de schemas
	const availableCollections = new Set<string>(
		allCollectionsMap ? Object.keys(allCollectionsMap) : [],
	);

	// 1. Import do zod
	lines.push(generateZodImport());

	// 2. Import de schemas de enum do ./labels (se houver enums)
	if (types.enums.size > 0) {
		const enumSchemaNames = Array.from(types.enums.keys())
			.sort()
			.map((fieldName) => {
				// Compute the enum schema name using the same logic as getEnumFieldInfo
				const cleanCollectionName = collectionName.replace(/^t_/, "");
				const fieldNameWithoutPrefix = fieldName.replace(/^[tf]_/, "");
				const pascalField = toEnumMemberName(fieldNameWithoutPrefix);
				const schemaName = _ensureValidIdentifier(
					`${cleanCollectionName.toLowerCase()}${pascalField}Schema`,
				);
				return schemaName;
			});

		if (enumSchemaNames.length <= 5) {
			lines.push(`import { ${enumSchemaNames.join(", ")} } from "./labels";`);
		} else {
			lines.push("import {");
			for (const name of enumSchemaNames) {
				lines.push(`\t${name},`);
			}
			lines.push('} from "./labels";');
		}
	}

	// 3. Cross-collection schema imports (other collections' base schemas)
	const externalImports = new Map<string, Set<string>>();
	for (const [_, relation] of types.relations) {
		const target = relation.targetCollection.trim();
		if (target && availableCollections.has(target) && target !== collectionName) {
			const targetCleanName = target.replace(/^t_/, "").toLowerCase();
			const schemaName = _ensureValidIdentifier(
				`${targetCleanName || target.toLowerCase()}BaseSchema`,
			);
			const targetFolder = toFileName(target);
			const existing = externalImports.get(targetFolder);
			if (existing) {
				existing.add(schemaName);
			} else {
				externalImports.set(targetFolder, new Set([schemaName]));
			}
		}
	}

	for (const [targetFolder, schemaNames] of externalImports) {
		const sorted = [...schemaNames].sort();
		const path = `../${targetFolder}/schemas`;
		if (sorted.length <= 4) {
			lines.push(`import { ${sorted.join(", ")} } from "${path}";`);
		} else {
			lines.push("import {");
			for (const name of sorted) {
				lines.push(`\t${name},`);
			}
			lines.push(`} from "${path}";`);
		}
	}

	if (types.enums.size > 0 || externalImports.size > 0) {
		lines.push("");
	}

	// 4. TABLE_NAME const
	lines.push(
		`export const ${_toCollectionSourceConstName(collectionName)} = "${collectionName}";`,
	);
	lines.push("");

	// 4. Base Schema (campos escalares)
	const baseSchema = generateBaseSchema(collectionName, types);
	if (baseSchema) {
		lines.push(
			"// ============================================================",
		);
		lines.push("// BASE SCHEMA (campos escalares)");
		lines.push(
			"// ============================================================",
		);
		lines.push(baseSchema);
		lines.push("");
	}

	// 5. Relation Schema (campos de relação)
	const { content: relationSchemaContent } = generateRelationSchema(
		collectionName,
		types,
		availableCollections,
		baseInterfaceNaming,
	);
	if (relationSchemaContent) {
		lines.push(
			"// ============================================================",
		);
		lines.push("// RELATION SCHEMA (campos de relação)");
		lines.push(
			"// ============================================================",
		);
		lines.push(relationSchemaContent);
		lines.push("");
	}

	// 6. Main Schema (merge de base + relation)
	const mainSchema = generateMergedMainSchema(collectionName, types);
	if (mainSchema) {
		lines.push(
			"// ============================================================",
		);
		lines.push("// SCHEMA PRINCIPAL (validação completa)");
		lines.push(
			"// ============================================================",
		);
		lines.push(mainSchema);
		lines.push("");
	}

	// 7. Create Schema (omit campos auto-gerados)
	const createSchema = generateCreateSchema(collectionName, types);
	if (createSchema) {
		lines.push(
			"// ============================================================",
		);
		lines.push("// CREATE SCHEMA");
		lines.push(
			"// ============================================================",
		);
		lines.push(createSchema);
		lines.push("");
	}

	// 8. Update Schema (partial do create)
	const updateSchema = generateUpdateSchema(collectionName, types);
	if (updateSchema) {
		lines.push(
			"// ============================================================",
		);
		lines.push("// UPDATE SCHEMA");
		lines.push(
			"// ============================================================",
		);
		lines.push(updateSchema);
	}

	return lines.join("\n");
}

/**
 * Gera o conteúdo do arquivo index.ts (barrel) para uma collection.
 *
 * Ordem:
 * 1. Re-export de labels/enums do ./labels
 * 2. Re-export de schemas do ./schemas
 * 3. Type Principal (z.infer do main schema)
 * 4. Relations Type (z.infer do relation schema)
 * 5. RelationKey Type
 */
export function generateIndexContent(
	collectionName: string,
	types: GeneratedTypes,
	baseInterfaceNaming?: Partial<BaseInterfaceNamingConfig>,
	isSplitCollection = false,
): string {
	const interfaces = generateCollectionInterfaces(
		collectionName,
		types,
		baseInterfaceNaming,
		isSplitCollection,
	);

	const lines: string[] = [];

	// Import do zod para z.infer (split collections)
	if (isSplitCollection) {
		lines.push(generateZodImport());
		lines.push("");
	}

	// 1. Re-export labels e enums
	if (types.enums.size > 0) {
		lines.push("// Re-exports: Labels + Enums");
		lines.push(`export * from "./labels";`);
		lines.push("");
	}

	// 2. Re-export schemas (TABLE_NAME, zod schemas)
	lines.push("// Re-exports: Schemas");
	lines.push(`export * from "./schemas";`);
	lines.push("");

	// 3. Type Principal
	if (isSplitCollection) {
		lines.push("// Type inferences");
		const typeName = interfaces.typeName;
		const schemaName = interfaces.schemaName;
		lines.push(
			`export type ${typeName} = z.infer<typeof import("./schemas").${schemaName}>;`,
		);
	} else {
		// Non-split: gera interface base exportada do barrel
		if (interfaces.baseInterface) {
			lines.push(interfaces.baseInterface);
			lines.push("");
		}
	}

	// 4. Relations Type
	lines.push(interfaces.relationsInterface);
	lines.push("");

	// 5. RelationKey Type
	lines.push(interfaces.relationKeyType);

	return lines.join("\n");
}

/**
 * @deprecated Use generateLabelsContent, generateSchemasContent e generateIndexContent.
 * Mantido para compatibilidade com chamadas existentes.
 *
 * Gera a definição completa de tipos para uma collection em um único arquivo.
 */
export function generateCollectionTypes(
	collectionName: string,
	types: GeneratedTypes,
	baseInterfaceNaming?: Partial<BaseInterfaceNamingConfig>,
	includeSourceTableConst = false,
	isSplitCollection = false,
	allCollectionsMap?: CollectionTypesMap,
): string {
	const lines: string[] = [];

	// Available collections para resolver referências de schemas
	const availableCollections = new Set<string>(
		allCollectionsMap ? Object.keys(allCollectionsMap) : [],
	);

	// 1. Import do zod (apenas para collections split)
	if (isSplitCollection) {
		lines.push(generateZodImport());
		lines.push("");
	}

	// 2. TABLE_NAME const
	if (includeSourceTableConst) {
		lines.push(
			`export const ${_toCollectionSourceConstName(collectionName)} = "${collectionName}";`,
		);
		lines.push("");
	}

	// 3. Labels (single source of truth)
	if (types.enums.size > 0) {
		lines.push(
			"// ============================================================",
		);
		lines.push("// LABELS (single source of truth)");
		lines.push(
			"// ============================================================",
		);
		lines.push(generateCollectionEnumMaps(collectionName, types));
		lines.push("");
	}

	// 4. Enum Schemas (extraídos das labels)
	if (types.enums.size > 0) {
		lines.push(
			"// ============================================================",
		);
		lines.push("// ENUM SCHEMAS (validação em runtime)");
		lines.push(
			"// ============================================================",
		);
		lines.push(generateCollectionEnumSchemas(collectionName, types));
		lines.push("");
	}

	// 5. Enum Types (inferidos dos schemas)
	if (types.enums.size > 0) {
		lines.push(
			"// ============================================================",
		);
		lines.push("// ENUM TYPES (inferidos dos schemas)");
		lines.push(
			"// ============================================================",
		);
		lines.push(generateCollectionEnumTypes(collectionName, types));
		lines.push("");
	}

	// Gera interfaces (nomes de schema, type, etc.)
	const interfaces = generateCollectionInterfaces(
		collectionName,
		types,
		baseInterfaceNaming,
		isSplitCollection,
	);

	if (isSplitCollection) {
		// 6. Base Schema (campos escalares)
		const baseSchema = generateBaseSchema(collectionName, types);
		if (baseSchema) {
			lines.push(
				"// ============================================================",
			);
			lines.push("// BASE SCHEMA (campos escalares)");
			lines.push(
				"// ============================================================",
			);
			lines.push(baseSchema);
			lines.push("");
		}

		// 7. Relation Schema (campos de relação)
		const { content: relationSchemaContent } = generateRelationSchema(
			collectionName,
			types,
			availableCollections,
			baseInterfaceNaming,
		);
		if (relationSchemaContent) {
			lines.push(
				"// ============================================================",
			);
			lines.push("// RELATION SCHEMA (campos de relação)");
			lines.push(
				"// ============================================================",
			);
			lines.push(relationSchemaContent);
			lines.push("");
		}

		// 8. Main Schema (merge de base + relation)
		const mainSchema = generateMergedMainSchema(collectionName, types);
		if (mainSchema) {
			lines.push(
				"// ============================================================",
			);
			lines.push("// SCHEMA PRINCIPAL (validação completa)");
			lines.push(
				"// ============================================================",
			);
			lines.push(mainSchema);
			lines.push("");
		}

		// 9. Create Schema (omit campos auto-gerados)
		const createSchema = generateCreateSchema(collectionName, types);
		if (createSchema) {
			lines.push(
				"// ============================================================",
			);
			lines.push("// CREATE SCHEMA");
			lines.push(
				"// ============================================================",
			);
			lines.push(createSchema);
			lines.push("");
		}

		// 10. Update Schema (partial do create)
		const updateSchema = generateUpdateSchema(collectionName, types);
		if (updateSchema) {
			lines.push(
				"// ============================================================",
			);
			lines.push("// UPDATE SCHEMA");
			lines.push(
				"// ============================================================",
			);
			lines.push(updateSchema);
			lines.push("");
		}

		// 11. Type Principal (inferido do schema)
		lines.push(
			"// ============================================================",
		);
		lines.push("// TYPE PRINCIPAL (inferido do schema)");
		lines.push(
			"// ============================================================",
		);
		const typeName = interfaces.typeName;
		const schemaName = interfaces.schemaName;
		lines.push(`export type ${typeName} = z.infer<typeof ${schemaName}>;`);
		lines.push("");
	} else {
		// Non-split: gera interface base normalmente
		lines.push(interfaces.baseInterface);
		lines.push("");
	}

	// 12. Relations Type
	lines.push(interfaces.relationsInterface);
	lines.push("");

	// 13. RelationKey Type
	lines.push(interfaces.relationKeyType);

	return lines.join("\n");
}

/**
 * Gera conteúdo TypeScript para um subset de collections.
 * Permite gerar múltiplos arquivos com diferentes collections.
 */
export function generateContentForCollections(
	collections: CollectionTypesMap,
	includeHeader = true,
	baseInterfaceNaming?: Partial<BaseInterfaceNamingConfig>,
	includeSourceTableConst = false,
	isSplitCollection = false,
): string {
	const lines: string[] = [];

	if (includeHeader) {
		lines.push(generateFileHeader());
	}

	const sortedCollections = Object.entries(collections).sort(([a], [b]) =>
		a.localeCompare(b),
	);

	for (const [collectionName, types] of sortedCollections) {
		lines.push(
			generateCollectionTypes(
				collectionName,
				types,
				baseInterfaceNaming,
				includeSourceTableConst,
				isSplitCollection,
				collections,
			),
		);
		lines.push("");
	}

	return lines.join("\n");
}

/**
 * Gera múltiplos arquivos TypeScript por collection (folder structure).
 *
 * Cada collection gera 3 arquivos:
 * - {collection}/labels.ts  → Labels + Enum Schemas + Enum Types
 * - {collection}/schemas.ts → Zod schemas + TABLE_NAME const
 * - {collection}/index.ts   → Barrel re-exports + type inferences
 *
 * Retorna Map<filePath, content> onde filePath é relativo (ex: "pessoas/labels.ts")
 */
export function generateSplitFiles(
	splitCollections: Map<string, CollectionTypesMap>,
	baseInterfaceNaming?: Partial<BaseInterfaceNamingConfig>,
): Map<string, string> {
	const result = new Map<string, string>();

	for (const [_collectionName, collections] of splitCollections) {
		for (const [colName, types] of Object.entries(collections)) {
			const header = generateFileHeader();

			const labelsContent = `${header}\n${generateLabelsContent(colName, types)}`;
			const schemasContent = `${header}\n${generateSchemasContent(colName, types, baseInterfaceNaming, collections)}`;
			const indexContent = `${header}${generateIndexContent(colName, types, baseInterfaceNaming, true)}`;

			const folder = toFileName(colName);
			result.set(`${folder}/labels.ts`, labelsContent);
			result.set(`${folder}/schemas.ts`, schemasContent);
			result.set(`${folder}/index.ts`, indexContent);
		}
	}

	return result;
}

/**
 * Gera conteúdo TypeScript completo com header.
 */
export function generateContent(
	collectionTypes: CollectionTypesMap,
	baseInterfaceNaming?: Partial<BaseInterfaceNamingConfig>,
): string {
	return generateContentForCollections(
		collectionTypes,
		true,
		baseInterfaceNaming,
	);
}

export { _sortMapEntries, _sortScalarEntries };
