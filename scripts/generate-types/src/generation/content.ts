import type { CollectionTypesMap, RelationInfo } from "../@types/generation";
import { formatKey } from "../utils/naming";
import { getRelationCardinality, renderRelationValueType } from "./relations";

function sortMapEntries<T>(map: Map<string, T>): [string, T][] {
	return Array.from(map.entries()).sort(([a], [b]) => a.localeCompare(b));
}

function renderRelationFieldType(relation: RelationInfo): string {
	return renderRelationValueType(
		relation.targetCollection,
		getRelationCardinality(relation.type),
	);
}

function pushRelationKeyType(lines: string[], collectionTypeName: string) {
	const relationKeyLine = `export type ${collectionTypeName}RelationKey = keyof ${collectionTypeName}Relations;`;

	if (relationKeyLine.length <= 80) {
		lines.push(relationKeyLine);
		return;
	}

	lines.push(`export type ${collectionTypeName}RelationKey =`);
	lines.push(`\tkeyof ${collectionTypeName}Relations;`);
}

export function generateTypeDefinitions(
	collectionTypes: CollectionTypesMap,
): string {
	const lines: string[] = [];
	const sortedCollections = Object.entries(collectionTypes).sort(([a], [b]) =>
		a.localeCompare(b),
	);

	for (const [collectionName, types] of sortedCollections) {
		const scalarEntries = sortMapEntries(types.scalars);
		const relationEntries = sortMapEntries(types.relations);

		lines.push(`export interface ${collectionName}Base {`);
		for (const [fieldName, fieldType] of scalarEntries) {
			lines.push(`\t${formatKey(fieldName)}: ${fieldType};`);
		}
		for (const [fieldName, relation] of relationEntries) {
			if (getRelationCardinality(relation.type) === "one") {
				lines.push(
					`\t${formatKey(fieldName)}: ${renderRelationFieldType(relation)};`,
				);
			}
		}
		lines.push("}");
		lines.push("");

		if (relationEntries.length === 0) {
			lines.push(
				`export type ${collectionName}Relations = Record<string, never>;`,
			);
		} else {
			lines.push(`export interface ${collectionName}Relations {`);
			for (const [fieldName, relation] of relationEntries) {
				lines.push(
					`\t${formatKey(fieldName)}?: ${renderRelationFieldType(relation)};`,
				);
			}
			lines.push("}");
		}
		lines.push("");
		pushRelationKeyType(lines, collectionName);
		lines.push("");
	}

	return lines.join("\n");
}

export function generateContent(collectionTypes: CollectionTypesMap): string {
	const output = generateTypeDefinitions(collectionTypes);
	const banner = `/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
`;

	return `${banner}\n${output}`;
}
