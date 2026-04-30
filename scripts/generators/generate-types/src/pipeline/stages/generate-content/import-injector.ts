import type { CollectionTypesMap } from "@scripts/generators/generate-types/src/@types/generation";
import type { BaseInterfaceNamingConfig } from "@scripts/generators/generate-types/src/@types/script";
import {
	toCollectionBaseTypeName,
	toFileName,
} from "@scripts/generators/generate-types/src/utils/naming";

const IDENTIFIER_REFERENCE_REGEX = /[$A-Z_a-z][$0-9A-Z_a-z]*/g;

function buildCollectionBaseTypeIndex(
	collectionTypes: CollectionTypesMap,
	baseInterfaceNaming: BaseInterfaceNamingConfig,
): Map<string, string> {
	const index = new Map<string, string>();

	for (const collectionName of Object.keys(collectionTypes)) {
		index.set(
			toCollectionBaseTypeName(collectionName, baseInterfaceNaming),
			collectionName,
		);
	}

	return index;
}

/**
 * Removes string literals and template literals from TypeScript source
 * so that identifier matching doesn't pick up type names inside strings.
 */
function removeStringLiterals(content: string): string {
	// Match single-quoted, double-quoted, and template literal strings
	// Handles escaped quotes and basic escape sequences
	return content
		.replace(/'(?:[^'\\]|\\.)*'/g, '""')
		.replace(/"(?:[^"\\]|\\.)*"/g, '""')
		.replace(/`(?:[^`\\]|\\.)*`/g, "``");
}

function collectBaseTypeReferences(
	content: string,
	baseTypeIndex: ReadonlyMap<string, string>,
): Set<string> {
	const references = new Set<string>();
	// Strip string literals first to avoid false positives like
	// "Cliente Vai Pagar..." being matched as the Cliente type reference
	const contentWithoutStrings = removeStringLiterals(content);

	for (const match of contentWithoutStrings.matchAll(
		IDENTIFIER_REFERENCE_REGEX,
	)) {
		const [typeName] = match;
		if (baseTypeIndex.has(typeName)) {
			references.add(typeName);
		}
	}

	return references;
}

function addImport(
	importsBySource: Map<string, Set<string>>,
	source: string,
	typeName: string,
) {
	const existing = importsBySource.get(source);
	if (existing) {
		existing.add(typeName);
		return;
	}

	importsBySource.set(source, new Set([typeName]));
}

function injectImports(
	content: string,
	importsBySource: Map<string, Set<string>>,
): string {
	if (importsBySource.size === 0) {
		return content;
	}

	const importLines = [...importsBySource.entries()]
		.sort(([a], [b]) => a.localeCompare(b))
		.map(([source, typeNames]) => {
			const sortedTypeNames = [...typeNames].sort((a, b) => a.localeCompare(b));
			const singleLineImport = `import type { ${sortedTypeNames.join(", ")} } from "${source}";`;
			if (singleLineImport.length <= 80) {
				return singleLineImport;
			}

			return [
				"import type {",
				...sortedTypeNames.map((typeName) => `\t${typeName},`),
				`} from "${source}";`,
			].join("\n");
		});

	const importBlock = importLines.join("\n");
	const headerEndIndex = content.indexOf("*/");

	if (headerEndIndex === -1) {
		return `${importBlock}\n\n${content}`;
	}

	const afterHeader = headerEndIndex + 2;
	const body = content.slice(afterHeader).replace(/^\n+/, "\n");
	return `${content.slice(0, afterHeader)}\n${importBlock}\n${body}`;
}

export function withMainFileImports(
	content: string,
	mainCollections: CollectionTypesMap,
	splitCollectionNames: ReadonlySet<string>,
	baseTypeIndex: Map<string, string>,
	baseInterfaceNaming: BaseInterfaceNamingConfig,
): string {
	const localBaseTypes = new Set(
		Object.keys(mainCollections).map((collectionName) =>
			toCollectionBaseTypeName(collectionName, baseInterfaceNaming),
		),
	);
	const importsBySource = new Map<string, Set<string>>();

	for (const typeName of collectBaseTypeReferences(content, baseTypeIndex)) {
		if (localBaseTypes.has(typeName)) {
			continue;
		}

		const sourceCollection = baseTypeIndex.get(typeName);
		if (!sourceCollection || !splitCollectionNames.has(sourceCollection)) {
			continue;
		}

		addImport(importsBySource, `./${toFileName(sourceCollection)}`, typeName);
	}

	return injectImports(content, importsBySource);
}

export interface SplitFileImportsOptions {
	/** Collections que estão em subpasta (ex: "other/") */
	collectionsInSubfolder?: ReadonlySet<string>;
}

/**
 * Gera arquivos com imports ajustados para paths corretos.
 *
 * @param filesContent - Map de collectionName -> conteúdo do arquivo
 * @param splitCollections - Map de collectionName -> types
 * @param splitCollectionNames - Nomes das collections que vão para a raiz
 * @param baseTypeIndex - Mapa de nome de tipo -> nome da collection
 * @param baseInterfaceNaming - Config de nomenclatura
 * @param options.collectionsInSubfolder - Collections que estão em subpasta (precisam de "../" para imports)
 */
export function withSplitFileImports(
	filesContent: Map<string, string>,
	splitCollections: Map<string, CollectionTypesMap>,
	splitCollectionNames: ReadonlySet<string>,
	baseTypeIndex: Map<string, string>,
	baseInterfaceNaming: BaseInterfaceNamingConfig,
	options: SplitFileImportsOptions = {},
): Map<string, string> {
	const { collectionsInSubfolder = new Set<string>() } = options;
	const result = new Map<string, string>();

	for (const [currentCollection, content] of filesContent) {
		const fileCollections = splitCollections.get(currentCollection);
		const localBaseTypes = new Set(
			Object.keys(fileCollections ?? {}).map((collectionName) =>
				toCollectionBaseTypeName(collectionName, baseInterfaceNaming),
			),
		);
		const importsBySource = new Map<string, Set<string>>();

		// O arquivo atual está em subpasta?
		const isCurrentInSubfolder = collectionsInSubfolder.has(currentCollection);

		for (const typeName of collectBaseTypeReferences(content, baseTypeIndex)) {
			if (localBaseTypes.has(typeName)) {
				continue;
			}

			const sourceCollection = baseTypeIndex.get(typeName);
			if (!sourceCollection) {
				continue;
			}

			const sourceIsSplit = splitCollectionNames.has(sourceCollection);

			// Calcula o path relativo baseado na LOCALIZAÇÃO do arquivo atual
			// e da ORIGEM do import
			let importPath: string;

			if (sourceIsSplit) {
				// Collection de destino está na RAIZ
				importPath = isCurrentInSubfolder
					? `../${toFileName(sourceCollection)}`
					: `./${toFileName(sourceCollection)}`;
			} else {
				// Collection de destino está em SUBPASTA
				importPath = isCurrentInSubfolder
					? `../other/${toFileName(sourceCollection)}`
					: `./other/${toFileName(sourceCollection)}`;
			}

			addImport(importsBySource, importPath, typeName);
		}

		result.set(currentCollection, injectImports(content, importsBySource));
	}

	return result;
}

export function createBaseTypeIndex(
	collectionTypes: CollectionTypesMap,
	baseInterfaceNaming: BaseInterfaceNamingConfig,
): Map<string, string> {
	return buildCollectionBaseTypeIndex(collectionTypes, baseInterfaceNaming);
}
