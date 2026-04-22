import type {
	CollectionTypesMap,
	GeneratedTypes,
} from "@scripts/generate-types/src/@types/generation";
import type { BaseInterfaceNamingConfig } from "@scripts/generate-types/src/@types/script";
import { toValidIdentifier } from "@scripts/generate-types/src/utils/naming";
import {
	generateCollectionEnumMaps,
	generateCollectionEnums,
	getScalarFieldType,
} from "./content-enums";
import {
	generateCollectionBaseInterface,
	generateCollectionRelationKeyType,
	generateCollectionRelationsInterface,
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
 * Ordem: Constantes de labels → Type aliases → Interfaces → Types auxiliares
 */
export function generateCollectionTypes(
	collectionName: string,
	types: GeneratedTypes,
	baseInterfaceNaming?: Partial<BaseInterfaceNamingConfig>,
	includeSourceTableConst = false,
): string {
	const lines: string[] = [];

	if (includeSourceTableConst) {
		lines.push(
			`export const ${_toCollectionSourceConstName(collectionName)} = "${collectionName}";`,
		);
		lines.push("");
	}

	// 1. Enum maps (labels) PRIMEIRO - constantes que servem como base para os types
	if (types.enums.size > 0) {
		lines.push(generateCollectionEnumMaps(collectionName, types));
		lines.push("");
	}

	// 2. Type aliases (inferidos de keyof typeof LABELS)
	if (types.enums.size > 0) {
		lines.push(generateCollectionEnums(collectionName, types));
		lines.push("");
	}

	// 3. Interface Base
	lines.push(
		generateCollectionBaseInterface(collectionName, types, baseInterfaceNaming),
	);
	lines.push("");

	// 4. Relations
	lines.push(
		generateCollectionRelationsInterface(
			collectionName,
			types,
			baseInterfaceNaming,
		),
	);
	lines.push("");

	// 5. RelationKey type
	lines.push(generateCollectionRelationKeyType(collectionName));

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

	for (const [fileName, collections] of splitCollections) {
		const content = generateContentForCollections(
			collections,
			true,
			baseInterfaceNaming,
			true,
		);
		result.set(fileName, content);
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
