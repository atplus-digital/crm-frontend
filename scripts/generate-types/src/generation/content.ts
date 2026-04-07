import type {
	CollectionTypesMap,
	GeneratedTypes,
	RelationInfo,
} from "@scripts/generate-types/src/@types/generation";
import {
	formatKey,
	toCollectionTypeName,
} from "@scripts/generate-types/src/utils/naming";
import { getRelationCardinality, renderRelationValueType } from "./relations";

function _sortMapEntries<T>(map: Map<string, T>): [string, T][] {
	return Array.from(map.entries()).sort(([a], [b]) => a.localeCompare(b));
}

function _renderRelationFieldType(relation: RelationInfo): string {
	return renderRelationValueType(
		relation.targetCollection,
		getRelationCardinality(relation.type),
	);
}

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
 * Gera a interface Base de uma collection (apenas campos escalares/FKs).
 */
export function generateCollectionBaseInterface(
	collectionName: string,
	types: GeneratedTypes,
): string {
	const lines: string[] = [];
	const scalarEntries = _sortMapEntries(types.scalars);
	const typeName = toCollectionTypeName(collectionName);

	lines.push(`export interface ${typeName}Base {`);
	for (const [fieldName, fieldType] of scalarEntries) {
		lines.push(`\t${formatKey(fieldName)}: ${fieldType};`);
	}
	lines.push("}");

	return lines.join("\n");
}

/**
 * Gera a interface Relations de uma collection.
 */
export function generateCollectionRelationsInterface(
	collectionName: string,
	types: GeneratedTypes,
): string {
	const lines: string[] = [];
	const relationEntries = _sortMapEntries(types.relations);
	const typeName = toCollectionTypeName(collectionName);

	if (relationEntries.length === 0) {
		lines.push(`export type ${typeName}Relations = Record<string, never>;`);
	} else {
		lines.push(`export interface ${typeName}Relations {`);
		for (const [fieldName, relation] of relationEntries) {
			lines.push(
				`\t${formatKey(fieldName)}?: ${_renderRelationFieldType(relation)};`,
			);
		}
		lines.push("}");
	}

	return lines.join("\n");
}

/**
 * Gera o tipo RelationKey de uma collection.
 */
export function generateCollectionRelationKeyType(
	collectionName: string,
): string {
	const typeName = toCollectionTypeName(collectionName);
	const relationKeyLine = `export type ${typeName}RelationKey = keyof ${typeName}Relations;`;

	if (relationKeyLine.length <= 80) {
		return relationKeyLine;
	}

	const lines: string[] = [];
	lines.push(`export type ${typeName}RelationKey =`);
	lines.push(`\tkeyof ${typeName}Relations;`);
	return lines.join("\n");
}

/**
 * Gera a definição completa de tipos para uma collection.
 * Inclui: Base interface + Relations interface + RelationKey type
 */
export function generateCollectionTypes(
	collectionName: string,
	types: GeneratedTypes,
): string {
	const lines: string[] = [];

	lines.push(generateCollectionBaseInterface(collectionName, types));
	lines.push("");
	lines.push(generateCollectionRelationsInterface(collectionName, types));
	lines.push("");
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
): string {
	const lines: string[] = [];

	if (includeHeader) {
		lines.push(generateFileHeader());
	}

	const sortedCollections = Object.entries(collections).sort(([a], [b]) =>
		a.localeCompare(b),
	);

	for (const [collectionName, types] of sortedCollections) {
		lines.push(generateCollectionTypes(collectionName, types));
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
): Map<string, string> {
	const result = new Map<string, string>();

	for (const [fileName, collections] of splitCollections) {
		const content = generateContentForCollections(collections, true);
		result.set(fileName, content);
	}

	return result;
}

/**
 * @deprecated Use generateContentForCollections instead
 */
export function generateTypeDefinitions(
	collectionTypes: CollectionTypesMap,
): string {
	return generateContentForCollections(collectionTypes, false);
}

/**
 * Gera conteúdo TypeScript completo com header.
 */
export function generateContent(collectionTypes: CollectionTypesMap): string {
	return generateContentForCollections(collectionTypes, true);
}
