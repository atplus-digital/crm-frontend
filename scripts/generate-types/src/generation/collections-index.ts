import type { CollectionTypesMap } from "@scripts/generate-types/src/@types/generation";
import type { BaseInterfaceNamingConfig } from "@scripts/generate-types/src/@types/script";
import { toCollectionBaseTypeName, toFileName } from "../utils/naming";
import { generateFileHeader } from "./content";

/**
 * Gera o tipo union com todas as collections disponíveis.
 * Ex: "users" | "departments" | "roles"
 */
export function generateCollectionNameUnion(collectionNames: string[]): string {
	const sorted = [...collectionNames].sort((a, b) => a.localeCompare(b));

	if (sorted.length === 0) {
		return "never";
	}

	if (sorted.length <= 5) {
		return sorted.map((name) => `"${name}"`).join(" | ");
	}

	const lines: string[] = [];
	for (let i = 0; i < sorted.length; i++) {
		const isLast = i === sorted.length - 1;
		lines.push(`\t| "${sorted[i]}"${isLast ? "" : ""}`);
	}

	return lines.join("\n");
}

/**
 * Gera a interface de mapeamento collection → interface TypeScript.
 * Ex: { users: Users; departments: Departments; }
 */
export function generateCollectionMapInterface(
	collectionTypes: CollectionTypesMap,
	baseInterfaceNaming?: Partial<BaseInterfaceNamingConfig>,
	useNamespacePrefix = false,
): string {
	const sorted = Object.entries(collectionTypes).sort(([a], [b]) =>
		a.localeCompare(b),
	);

	if (sorted.length === 0) {
		return "export interface CollectionMap {}";
	}

	const lines: string[] = ["export interface CollectionMap {"];

	for (const [collectionName] of sorted) {
		const baseTypeName = toCollectionBaseTypeName(
			collectionName,
			baseInterfaceNaming,
		);
		const typeRef = useNamespacePrefix ? `Types.${baseTypeName}` : baseTypeName;
		lines.push(`\t"${collectionName}": ${typeRef};`);
	}

	lines.push("}");
	return lines.join("\n");
}

/**
 * Gera a interface de mapeamento collection → relations interface.
 * Ex: { users: UsersRelations; departments: DepartmentsRelations; }
 */
export function generateCollectionRelationsMapInterface(
	collectionTypes: CollectionTypesMap,
	useNamespacePrefix = false,
): string {
	const sorted = Object.entries(collectionTypes).sort(([a], [b]) =>
		a.localeCompare(b),
	);

	if (sorted.length === 0) {
		return "export interface CollectionRelationsMap {}";
	}

	const lines: string[] = ["export interface CollectionRelationsMap {"];

	for (const [collectionName] of sorted) {
		const typeName =
			toCollectionBaseTypeName(collectionName).replace(/Base$/, "") +
			"Relations";
		const typeRef = useNamespacePrefix ? `Types.${typeName}` : typeName;
		lines.push(`\t"${collectionName}": ${typeRef};`);
	}

	lines.push("}");
	return lines.join("\n");
}

/**
 * Gera constantes com os nomes das collections para uso em runtime.
 * Ex: export const COLLECTIONS = ["users", "departments", ...] as const;
 */
export function generateCollectionsConst(collectionNames: string[]): string {
	const sorted = [...collectionNames].sort((a, b) => a.localeCompare(b));

	if (sorted.length === 0) {
		return "export const COLLECTIONS = [] as const;";
	}

	if (sorted.length <= 10) {
		const items = sorted.map((name) => `"${name}"`).join(", ");
		return `export const COLLECTIONS = [${items}] as const;`;
	}

	const lines: string[] = ["export const COLLECTIONS = ["];
	for (let i = 0; i < sorted.length; i++) {
		const isLast = i === sorted.length - 1;
		lines.push(`\t"${sorted[i]}"${isLast ? "" : ","}`);
	}
	lines.push("] as const;");

	return lines.join("\n");
}

/**
 * Gera o conteúdo completo do arquivo collections.ts
 */
export function generateCollectionsFile(
	collectionTypes: CollectionTypesMap,
	baseInterfaceNaming?: Partial<BaseInterfaceNamingConfig>,
	splitCollectionNames?: string[],
): string {
	const lines: string[] = [generateFileHeader()];

	const collectionNames = Object.keys(collectionTypes);

	if (splitCollectionNames && splitCollectionNames.length > 0) {
		const importLines = splitCollectionNames
			.sort((a, b) => a.localeCompare(b))
			.map((collectionName) => {
				const baseTypeName = toCollectionBaseTypeName(
					collectionName,
					baseInterfaceNaming,
				);
				const typeName = baseTypeName.replace(/Base$/, "");
				const fileName = toFileName(collectionName);
				return `import type { ${typeName}, ${typeName}Relations } from "./${fileName}";`;
			});
		lines.push(importLines.join("\n"));
		lines.push("");
	}

	lines.push("// Tipo union com todas as collections disponíveis");
	lines.push(
		`export type CollectionName = ${generateCollectionNameUnion(collectionNames)};`,
	);
	lines.push("");
	lines.push(
		generateCollectionMapInterface(collectionTypes, baseInterfaceNaming, false),
	);
	lines.push("");
	lines.push(generateCollectionRelationsMapInterface(collectionTypes, false));
	lines.push("");
	lines.push("// Lista de todas as collections (para uso em runtime)");
	lines.push(generateCollectionsConst(collectionNames));
	lines.push("");

	return lines.join("\n");
}
