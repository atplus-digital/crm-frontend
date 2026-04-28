import type { BaseInterfaceNamingConfig } from "@scripts/generate-types/src/@types/script";
import {
	toCollectionBaseTypeName,
	toFileName,
} from "@scripts/generate-types/src/utils/naming";
import { generateFileHeader } from "./content";

function deriveExportedTypeName(
	baseTypeName: string,
	baseInterfaceNaming: BaseInterfaceNamingConfig,
): string {
	const { prefix, suffix } = baseInterfaceNaming;
	let typeName = baseTypeName;
	if (prefix && typeName.startsWith(prefix)) {
		typeName = typeName.slice(prefix.length);
	}
	if (suffix && typeName.endsWith(suffix)) {
		typeName = typeName.slice(0, -suffix.length);
	}
	return typeName;
}

export function generateIndexFileWithReexports(
	splitCollectionNames: readonly string[],
	baseInterfaceNaming: BaseInterfaceNamingConfig,
): string {
	const header = generateFileHeader();

	if (splitCollectionNames.length === 0) {
		return header;
	}

	const exports: string[] = [];

	for (const collectionName of splitCollectionNames) {
		const baseTypeName = toCollectionBaseTypeName(
			collectionName,
			baseInterfaceNaming,
		);
		const typeName = deriveExportedTypeName(baseTypeName, baseInterfaceNaming);
		const fileName = toFileName(collectionName);

		exports.push(
			`export type { ${typeName}, ${typeName}Relations, ${typeName}RelationKey } from "./${fileName}";`,
		);
	}

	return `${[header, ...exports.sort()].join("\n")}\n`;
}

/**
 * Gera index.ts com re-exports de TODAS as collections disponíveis.
 * Cada collection é exportada do seu próprio arquivo.
 */
export function generateIndexWithAllExports(
	allCollectionNames: readonly string[],
	baseInterfaceNaming: BaseInterfaceNamingConfig,
): string {
	const header = generateFileHeader();

	if (allCollectionNames.length === 0) {
		return header;
	}

	const exports: string[] = [];

	for (const collectionName of allCollectionNames) {
		const baseTypeName = toCollectionBaseTypeName(
			collectionName,
			baseInterfaceNaming,
		);
		const typeName = deriveExportedTypeName(baseTypeName, baseInterfaceNaming);
		const fileName = toFileName(collectionName);

		exports.push(
			`export type { ${typeName}, ${typeName}Relations, ${typeName}RelationKey } from "./${fileName}";`,
		);
	}

	return `${[header, ...exports.sort()].join("\n")}\n`;
}

/**
 * Gera index.ts com re-exports de TODAS as collections usando paths customizados.
 * Útil quando collections estão em subpastas (ex: other/).
 *
 * @param allCollectionNames - Nomes de todas as collections
 * @param collectionPaths - Map de collectionName → import path relativo
 * @param baseInterfaceNaming - Configuração de nomenclatura
 */
export function generateIndexWithAllExportsWithPaths(
	allCollectionNames: readonly string[],
	collectionPaths: Map<string, string>,
	baseInterfaceNaming: BaseInterfaceNamingConfig,
): string {
	const header = generateFileHeader();

	if (allCollectionNames.length === 0) {
		return header;
	}

	const exports: string[] = [];

	for (const collectionName of allCollectionNames) {
		const baseTypeName = toCollectionBaseTypeName(
			collectionName,
			baseInterfaceNaming,
		);
		const typeName = deriveExportedTypeName(baseTypeName, baseInterfaceNaming);
		const importPath =
			collectionPaths.get(collectionName) ?? `./${toFileName(collectionName)}`;

		exports.push(
			`export type { ${typeName}, ${typeName}Relations, ${typeName}RelationKey } from "${importPath}";`,
		);
	}

	return `${[header, ...exports.sort()].join("\n")}\n`;
}
