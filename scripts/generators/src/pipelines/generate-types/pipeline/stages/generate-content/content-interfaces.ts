import type {
	GeneratedTypes,
	RelationInfo,
} from "@scripts/generators/src/pipelines/generate-types/@types/generation";
import type { BaseInterfaceNamingConfig } from "@scripts/generators/src/pipelines/generate-types/@types/script";
import {
	formatKey,
	toCollectionBaseTypeName,
	toCollectionTypeName,
} from "@scripts/generators/src/pipelines/generate-types/utils/naming";
import { getScalarFieldType } from "./content-enums";
import { _sortMapEntries, _sortScalarEntries } from "./content-sorting";
import { getRelationCardinality, renderRelationValueType } from "./relations";

export interface CollectionInterfacesOutput {
	baseInterface: string;
	relationsInterface: string;
	relationKeyType: string;
}

function _renderRelationFieldType(
	relation: RelationInfo,
	baseInterfaceNaming?: Partial<BaseInterfaceNamingConfig>,
): string {
	return renderRelationValueType(
		relation.targetCollection,
		getRelationCardinality(relation.type),
		baseInterfaceNaming,
	);
}

/**
 * Gera a interface Base de uma collection (apenas campos escalares/FKs).
 */
export function generateCollectionBaseInterface(
	collectionName: string,
	types: GeneratedTypes,
	baseInterfaceNaming?: Partial<BaseInterfaceNamingConfig>,
): string {
	const lines: string[] = [];
	const scalarEntries = _sortScalarEntries(types.scalars);
	const typeName = toCollectionBaseTypeName(
		collectionName,
		baseInterfaceNaming,
	);

	lines.push(`export interface ${typeName} {`);
	for (const [fieldName, fieldType] of scalarEntries) {
		const resolvedType = getScalarFieldType(
			fieldName,
			fieldType,
			types,
			collectionName,
		);
		lines.push(`\t${formatKey(fieldName)}: ${resolvedType};`);
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
	baseInterfaceNaming?: Partial<BaseInterfaceNamingConfig>,
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
				`\t${formatKey(fieldName)}?: ${_renderRelationFieldType(relation, baseInterfaceNaming)};`,
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
 * Orquestra a geração completa dos contratos de interface de uma collection.
 * Mantém a ordem de saída usada pelo pipeline de conteúdo.
 */
export function generateCollectionInterfaces(
	collectionName: string,
	types: GeneratedTypes,
	baseInterfaceNaming?: Partial<BaseInterfaceNamingConfig>,
): CollectionInterfacesOutput {
	return {
		baseInterface: generateCollectionBaseInterface(
			collectionName,
			types,
			baseInterfaceNaming,
		),
		relationsInterface: generateCollectionRelationsInterface(
			collectionName,
			types,
			baseInterfaceNaming,
		),
		relationKeyType: generateCollectionRelationKeyType(collectionName),
	};
}
