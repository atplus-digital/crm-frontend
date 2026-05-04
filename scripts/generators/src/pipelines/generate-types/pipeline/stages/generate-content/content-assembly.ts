import type {
	CollectionTypesMap,
	GeneratedTypes,
} from "@scripts/generators/src/pipelines/generate-types/@types/generation";
import type { BaseInterfaceNamingConfig } from "@scripts/generators/src/pipelines/generate-types/@types/script";
import { toValidIdentifier } from "@scripts/generators/src/pipelines/generate-types/utils/naming";
import {
	generateCollectionEnumMaps,
	generateCollectionEnumSchemas,
	generateCollectionEnumTypes,
} from "./content-enums";
import {
	generateCollectionInterfaces,
	generateMainSchema,
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

/**
 * Gera a definição completa de tipos para uma collection.
 * Nova ordem para split collections com Zod:
 * 1. Import do zod
 * 2. TABLE_NAME const
 * 3. Labels (single source of truth)
 * 4. Enum Schemas (extraídos das labels)
 * 5. Enum Types (inferidos dos schemas)
 * 6. Schema Principal (z.object)
 * 7. Type Principal (inferido do schema)
 * 8. Relations Types
 * 9. RelationKey Type
 */
export function generateCollectionTypes(
	collectionName: string,
	types: GeneratedTypes,
	baseInterfaceNaming?: Partial<BaseInterfaceNamingConfig>,
	includeSourceTableConst = false,
	isSplitCollection = false,
): string {
	const lines: string[] = [];

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

	// 6. Schema Principal (z.object) - apenas para collections split
	if (isSplitCollection) {
		lines.push(
			"// ============================================================",
		);
		lines.push("// SCHEMA PRINCIPAL (validação completa)");
		lines.push(
			"// ============================================================",
		);
		const schema = generateMainSchema(collectionName, types);
		if (schema) {
			lines.push(schema);
			lines.push("");
		}
	}

	// 7. Interface Base (para não-split, ou se preferir manter interface)
	const interfaces = generateCollectionInterfaces(
		collectionName,
		types,
		baseInterfaceNaming,
		isSplitCollection,
	);

	if (isSplitCollection) {
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
		lines.push(interfaces.baseInterface);
		lines.push("");
	}

	// 8. Relations
	lines.push(interfaces.relationsInterface);
	lines.push("");

	// 9. RelationKey Type
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
			),
		);
		lines.push("");
	}

	return lines.join("\n");
}

/**
 * Gera múltiplos arquivos TypeScript, um por collection.
 * Retorna Map<collectionName, content>
 */
export function generateSplitFiles(
	splitCollections: Map<string, CollectionTypesMap>,
	baseInterfaceNaming?: Partial<BaseInterfaceNamingConfig>,
): Map<string, string> {
	const result = new Map<string, string>();

	for (const [collectionName, collections] of splitCollections) {
		const content = generateContentForCollections(
			collections,
			true,
			baseInterfaceNaming,
			true, // includeSourceTableConst
			true, // isSplitCollection
		);
		result.set(collectionName, content);
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
