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
