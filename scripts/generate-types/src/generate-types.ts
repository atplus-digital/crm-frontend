import { config } from "@scripts/generate-types/config";
import type { CollectionTypesMap } from "./@types/generation";
import type {
	DryRunDiffResult,
	GenerateTypesResult,
	MultiFileDryRunResult,
	MultiFilePersistResult,
	PersistResult,
} from "./@types/script";
import { NocoBaseClient } from "./generation/client";
import { buildCollectionTypes } from "./generation/collection-types";
import { generateContent, generateSplitFiles } from "./generation/content";
import { splitCollectionsByConfig } from "./utils/collection-splitter";
import { toCollectionBaseTypeName, toFileName } from "./utils/naming";
import { applyWorkspaceLockIfNeeded } from "./utils/workspace-locker";
import {
	previewGeneratedFile,
	previewMultipleFiles,
	writeGeneratedFile,
	writeMultipleFiles,
} from "./utils/writer";

const BASE_TYPE_REFERENCE_REGEX = /\b([A-Z][A-Za-z0-9_$]*Base)\b/g;

function combineWriteResults(
	mainResult: PersistResult,
	splitResult: MultiFilePersistResult,
): MultiFilePersistResult {
	return {
		mode: "write",
		files: [
			{ outputPath: mainResult.outputPath, changed: mainResult.changed },
			...splitResult.files,
		],
		totalFiles: splitResult.totalFiles + 1,
		totalChanged: splitResult.totalChanged + (mainResult.changed ? 1 : 0),
	};
}

function combineDryRunResults(
	mainResult: DryRunDiffResult,
	splitResult: MultiFileDryRunResult,
): MultiFileDryRunResult {
	return {
		mode: "dry-run",
		files: [
			{
				outputPath: mainResult.outputPath,
				changed: mainResult.changed,
				diff: mainResult.diff,
			},
			...splitResult.files,
		],
		totalFiles: splitResult.totalFiles + 1,
		totalChanged: splitResult.totalChanged + (mainResult.changed ? 1 : 0),
	};
}

function buildCollectionBaseTypeIndex(
	collectionTypes: CollectionTypesMap,
): Map<string, string> {
	const index = new Map<string, string>();

	for (const collectionName of Object.keys(collectionTypes)) {
		index.set(toCollectionBaseTypeName(collectionName), collectionName);
	}

	return index;
}

function collectBaseTypeReferences(content: string): Set<string> {
	const references = new Set<string>();

	for (const match of content.matchAll(BASE_TYPE_REFERENCE_REGEX)) {
		const [_, baseTypeName] = match;
		references.add(baseTypeName);
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

function withMainFileImports(
	content: string,
	mainCollections: CollectionTypesMap,
	splitCollectionNames: ReadonlySet<string>,
	baseTypeIndex: Map<string, string>,
): string {
	const localBaseTypes = new Set(
		Object.keys(mainCollections).map((collectionName) =>
			toCollectionBaseTypeName(collectionName),
		),
	);
	const importsBySource = new Map<string, Set<string>>();

	for (const typeName of collectBaseTypeReferences(content)) {
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

function withSplitFileImports(
	filesContent: Map<string, string>,
	splitCollections: Map<string, CollectionTypesMap>,
	splitCollectionNames: ReadonlySet<string>,
	baseTypeIndex: Map<string, string>,
): Map<string, string> {
	const result = new Map<string, string>();

	for (const [fileName, content] of filesContent) {
		const fileCollections = splitCollections.get(fileName);
		const localBaseTypes = new Set(
			Object.keys(fileCollections ?? {}).map((collectionName) =>
				toCollectionBaseTypeName(collectionName),
			),
		);
		const importsBySource = new Map<string, Set<string>>();

		for (const typeName of collectBaseTypeReferences(content)) {
			if (localBaseTypes.has(typeName)) {
				continue;
			}

			const sourceCollection = baseTypeIndex.get(typeName);
			if (!sourceCollection) {
				continue;
			}

			if (splitCollectionNames.has(sourceCollection)) {
				addImport(
					importsBySource,
					`./${toFileName(sourceCollection)}`,
					typeName,
				);
				continue;
			}

			addImport(importsBySource, "./index", typeName);
		}

		result.set(fileName, injectImports(content, importsBySource));
	}

	return result;
}

export async function runGenerateTypes(): Promise<GenerateTypesResult> {
	const client = new NocoBaseClient(config);

	console.log(`📡 Conectando a: ${client.baseUrl}`);

	const collections = await client.fetchCollections();

	console.log(`📋 Encontradas ${collections.length} collections`);

	// Aplica o bloqueio de workspace se a configuração estiver ativada
	applyWorkspaceLockIfNeeded();

	const collectionTypes = await buildCollectionTypes(client, collections, {
		onCollectionStart: ({ collectionName, index, total }) => {
			console.log(`⏳ [${index}/${total}] Processando ${collectionName}...`);
		},
	});

	const { mainCollections, splitCollections } = splitCollectionsByConfig(
		collectionTypes,
		config.splitCollections,
	);
	const splitCollectionNames = new Set(splitCollections.keys());
	const baseTypeIndex = buildCollectionBaseTypeIndex(collectionTypes);

	const mainContent = withMainFileImports(
		generateContent(mainCollections),
		mainCollections,
		splitCollectionNames,
		baseTypeIndex,
	);

	if (splitCollections.size === 0) {
		if (config.dryRun) {
			return previewGeneratedFile(mainContent);
		}

		return writeGeneratedFile(mainContent);
	}

	const splitFilesContent = withSplitFileImports(
		generateSplitFiles(splitCollections),
		splitCollections,
		splitCollectionNames,
		baseTypeIndex,
	);

	if (config.dryRun) {
		const mainResult = previewGeneratedFile(mainContent);
		const splitResult = previewMultipleFiles(
			splitFilesContent,
			config.splitOutputDir,
		);
		return combineDryRunResults(mainResult, splitResult);
	}

	const mainResult = writeGeneratedFile(mainContent);
	const splitResult = writeMultipleFiles(
		splitFilesContent,
		config.splitOutputDir,
	);
	return combineWriteResults(mainResult, splitResult);
}
