import * as path from "node:path";
import { config } from "@scripts/generate-types/config";
import type { CollectionTypesMap } from "./@types/generation";
import type {
	BaseInterfaceNamingConfig,
	GenerateTypesResult,
} from "./@types/script";
import { NocoBaseClient } from "./generation/client";
import { buildCollectionTypes } from "./generation/collection-types";
import { generateContent, generateSplitFiles } from "./generation/content";
import { generateCollectionsFile } from "./generation/collections-index";
import { splitCollectionsByConfig } from "./utils/collection-splitter";
import { logInfo, logVerbose } from "./utils/logger";
import {
	resolveBaseInterfaceNamingConfig,
	toCollectionBaseTypeName,
	toFileName,
} from "./utils/naming";
import { applyWorkspaceLockIfNeeded } from "./utils/workspace-locker";
import {
	cleanOutputDirectory,
	getUnusedFiles,
	previewGeneratedFile,
	previewMultipleFiles,
	writeGeneratedFile,
	writeMultipleFiles,
} from "./utils/writer";

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

function collectBaseTypeReferences(
	content: string,
	baseTypeIndex: ReadonlyMap<string, string>,
): Set<string> {
	const references = new Set<string>();

	for (const match of content.matchAll(IDENTIFIER_REFERENCE_REGEX)) {
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

function withMainFileImports(
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

function withSplitFileImports(
	filesContent: Map<string, string>,
	splitCollections: Map<string, CollectionTypesMap>,
	splitCollectionNames: ReadonlySet<string>,
	baseTypeIndex: Map<string, string>,
	baseInterfaceNaming: BaseInterfaceNamingConfig,
): Map<string, string> {
	const result = new Map<string, string>();

	for (const [fileName, content] of filesContent) {
		const fileCollections = splitCollections.get(fileName);
		const localBaseTypes = new Set(
			Object.keys(fileCollections ?? {}).map((collectionName) =>
				toCollectionBaseTypeName(collectionName, baseInterfaceNaming),
			),
		);
		const importsBySource = new Map<string, Set<string>>();

		for (const typeName of collectBaseTypeReferences(content, baseTypeIndex)) {
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
	const baseInterfaceNaming = resolveBaseInterfaceNamingConfig(
		config.baseInterfaceNaming,
	);

	logVerbose(`📡 Conectando a: ${client.baseUrl}`);

	const collections = await client.fetchCollections();

	logVerbose(`📋 Encontradas ${collections.length} collections`);

	// Aplica o bloqueio de workspace se a configuração estiver ativada
	applyWorkspaceLockIfNeeded();

	const collectionTypes = await buildCollectionTypes(client, collections, {
		onCollectionStart: ({ collectionName, index, total }) => {
			logVerbose(`⏳ [${index}/${total}] Processando ${collectionName}...`);
		},
	});

	const { mainCollections, splitCollections } = splitCollectionsByConfig(
		collectionTypes,
		config.splitCollections,
	);
	const splitCollectionNames = new Set(splitCollections.keys());
	const baseTypeIndex = buildCollectionBaseTypeIndex(
		collectionTypes,
		baseInterfaceNaming,
	);

	const mainContent = withMainFileImports(
		generateContent(mainCollections, baseInterfaceNaming),
		mainCollections,
		splitCollectionNames,
		baseTypeIndex,
		baseInterfaceNaming,
	);

	if (splitCollections.size === 0) {
		if (config.dryRun) {
			return previewGeneratedFile(mainContent);
		}

		return writeGeneratedFile(mainContent);
	}

	const splitFilesContent = withSplitFileImports(
		generateSplitFiles(splitCollections, baseInterfaceNaming),
		splitCollections,
		splitCollectionNames,
		baseTypeIndex,
		baseInterfaceNaming,
	);

	// Coleta todos os arquivos que serão gerados para identificar os não utilizados
	const generatedFilePaths = [
		path.resolve(process.cwd(), config.outputDir, "index.ts"),
		...[...splitFilesContent.keys()].map((fileName) =>
			path.resolve(process.cwd(), config.outputDir, fileName),
		),
	];

	// Identifica arquivos não utilizados na pasta de destino
	const unusedFiles = getUnusedFiles(generatedFilePaths, config.outputDir);

	if (unusedFiles.length > 0) {
		logInfo(
			`\n⚠️  Encontrados ${unusedFiles.length} arquivo(s) não utilizado(s) em ${config.outputDir}/:`,
		);
		if (config.verbose) {
			for (const file of unusedFiles) {
				logVerbose(`   - ${path.basename(file)}`);
			}
		}

		if (!config.write) {
			const readline = await import("node:readline");
			const rl = readline.createInterface({
				input: process.stdin,
				output: process.stdout,
			});

			const answer = await new Promise<string>((resolve) => {
				rl.question("\n❓ Deseja remover estes arquivos? (s/N): ", resolve);
			});
			rl.close();

			if (answer.toLowerCase() !== "s") {
				logInfo("Operação cancelada pelo usuário.");
				process.exit(0);
			}
		}

		const removed = cleanOutputDirectory(unusedFiles);
		logInfo(`🗑️  Removidos ${removed.length} arquivo(s) não utilizado(s).`);
	}

	const collectionsContent = generateCollectionsFile(
		Object.fromEntries(splitCollections) as unknown as CollectionTypesMap,
		baseInterfaceNaming,
		[...splitCollections.keys()],
	);

	if (config.dryRun) {
		const mainResult = previewGeneratedFile(mainContent);
		const splitResult = previewMultipleFiles(
			splitFilesContent,
			config.outputDir,
		);
		const collectionsResult = previewGeneratedFile(
			collectionsContent,
			path.join(config.outputDir, "collections.ts"),
		);
		return {
			mode: "dry-run" as const,
			files: [
				{
					outputPath: collectionsResult.outputPath,
					changed: collectionsResult.changed,
					diff: collectionsResult.diff,
				},
				{
					outputPath: mainResult.outputPath,
					changed: mainResult.changed,
					diff: mainResult.diff,
				},
				...splitResult.files,
			],
			totalFiles: splitResult.totalFiles + 2,
			totalChanged:
				splitResult.totalChanged +
				(collectionsResult.changed ? 1 : 0) +
				(mainResult.changed ? 1 : 0),
		};
	}

	const collectionsResult = writeGeneratedFile(
		collectionsContent,
		path.join(config.outputDir, "collections.ts"),
	);
	const mainResult = writeGeneratedFile(mainContent);
	const splitResult = writeMultipleFiles(splitFilesContent, config.outputDir);
	return {
		mode: "write" as const,
		files: [
			{
				outputPath: collectionsResult.outputPath,
				changed: collectionsResult.changed,
			},
			{ outputPath: mainResult.outputPath, changed: mainResult.changed },
			...splitResult.files,
		],
		totalFiles: splitResult.totalFiles + 2,
		totalChanged:
			splitResult.totalChanged +
			(collectionsResult.changed ? 1 : 0) +
			(mainResult.changed ? 1 : 0),
	};
}
