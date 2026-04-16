import { execFile } from "node:child_process";
import * as path from "node:path";
import { config } from "@scripts/generate-types/config";
import type { CollectionTypesMap } from "./@types/generation";
import type {
	BaseInterfaceNamingConfig,
	DatasourceGenerationConfig,
	GenerateTypesResult,
} from "./@types/script";
import { NocoBaseClient } from "./generation/client";
import { buildCollectionTypes } from "./generation/collection-types";
import { generateCollectionsFile } from "./generation/collections-index";
import { generateContent, generateSplitFiles } from "./generation/content";
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
	writeGeneratedFile,
	writeMultipleFiles,
} from "./utils/writer";

async function runBiomeFix(dirs: string[]): Promise<void> {
	if (dirs.length === 0) return;

	const biomeCmd = "biome";
	const biomeArgs = ["check", "--write", ...dirs];

	logInfo(`🔧 Rodando biome nos diretórios gerados: ${dirs.join(", ")}`);

	return new Promise((resolve) => {
		execFile(biomeCmd, biomeArgs, (error, stdout, stderr) => {
			if (stdout) {
				logVerbose(stdout);
			}
			if (stderr) {
				logVerbose(stderr);
			}
			if (error) {
				logInfo(
					`⚠️  Biome retornou erro (pode ser apenas warnings): ${error.message}`,
				);
			} else {
				logInfo(`✅ Biome aplicado com sucesso em ${dirs.length} diretório(s)`);
			}
			resolve();
		});
	});
}

const IDENTIFIER_REFERENCE_REGEX = /[$A-Z_a-z][$0-9A-Z_a-z]*/g;
const MAIN_DATASOURCE_NAME = "main";

interface GeneratedFileWrite {
	outputPath: string;
	changed: boolean;
}

interface DatasourceFilesResult {
	writeFiles: GeneratedFileWrite[];
}

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

function normalizeCollectionNames(
	collectionNames: string[] | undefined,
): string[] {
	if (!collectionNames) {
		return [];
	}

	return [...new Set(collectionNames)]
		.map((collectionName) => collectionName.trim())
		.filter((collectionName) => collectionName.length > 0);
}

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

function generateIndexFileWithReexports(
	splitCollectionNames: readonly string[],
	baseInterfaceNaming: BaseInterfaceNamingConfig,
): string {
	const header = `/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
`;

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

function resolveDatasourceConfigs(): DatasourceGenerationConfig[] {
	return (config.datasources ?? []).filter(
		(datasource) => datasource.outputDir.trim().length > 0,
	);
}

async function resolveCollectionsForDatasource(
	client: NocoBaseClient,
	datasource: DatasourceGenerationConfig,
): Promise<Array<{ name: string }>> {
	const configuredCollectionNames = normalizeCollectionNames(
		datasource.collections,
	);

	if (configuredCollectionNames.length > 0) {
		return configuredCollectionNames.map((name) => ({ name }));
	}

	if (datasource.datasource !== MAIN_DATASOURCE_NAME) {
		throw new Error(
			`Datasource '${datasource.name}' (${datasource.datasource}) exige collections explícitas em scripts/generate-types/datasources.config.ts`,
		);
	}

	return client.fetchCollections();
}

async function runGenerateTypesForDatasource(
	datasource: DatasourceGenerationConfig,
): Promise<DatasourceFilesResult> {
	const client = new NocoBaseClient(
		{
			baseUrl: config.baseUrl,
			token: config.token,
			timeoutMs: config.requestTimeoutMs,
		},
		{
			requestHeaders: {
				"X-Data-Source": datasource.datasource,
			},
			enableSampleFieldFallback: datasource.enableSampleFieldFallback,
		},
	);
	const baseInterfaceNaming = resolveBaseInterfaceNamingConfig(
		datasource.baseInterfaceNaming ?? config.baseInterfaceNaming,
	);

	logInfo(
		`🔧 Gerando tipos para datasource '${datasource.datasource}' em ${datasource.outputDir}`,
	);
	logVerbose(`📡 Conectando a: ${client.baseUrl}`);

	const collections = await resolveCollectionsForDatasource(client, datasource);

	logVerbose(
		`📋 Encontradas ${collections.length} collections para ${datasource.datasource}`,
	);

	const collectionTypes = await buildCollectionTypes(client, collections, {
		onCollectionStart: ({ collectionName, index, total }) => {
			logVerbose(`⏳ [${index}/${total}] Processando ${collectionName}...`);
		},
	});

	const { mainCollections, splitCollections } = splitCollectionsByConfig(
		collectionTypes,
		datasource.splitCollections,
	);
	const splitCollectionNamesSet = new Set(splitCollections.keys());
	const baseTypeIndex = buildCollectionBaseTypeIndex(
		collectionTypes,
		baseInterfaceNaming,
	);

	const hasMainCollections = Object.keys(mainCollections).length > 0;
	const mainContent = withMainFileImports(
		generateContent(mainCollections, baseInterfaceNaming),
		mainCollections,
		splitCollectionNamesSet,
		baseTypeIndex,
		baseInterfaceNaming,
	);
	const mainOutputPath = hasMainCollections
		? path.join(datasource.outputDir, "index.ts")
		: path.join(datasource.outputDir, "_main.ts");

	if (splitCollections.size === 0) {
		const mainWrite = writeGeneratedFile(mainContent, mainOutputPath);
		return {
			writeFiles: [
				{ outputPath: mainWrite.outputPath, changed: mainWrite.changed },
			],
		};
	}

	const splitFilesContent = withSplitFileImports(
		generateSplitFiles(splitCollections, baseInterfaceNaming),
		splitCollections,
		splitCollectionNamesSet,
		baseTypeIndex,
		baseInterfaceNaming,
	);

	const generatedFilePaths = [
		path.resolve(process.cwd(), datasource.outputDir, "index.ts"),
		path.resolve(process.cwd(), datasource.outputDir, "collections.ts"),
		...[...splitFilesContent.keys()].map((collectionName) =>
			path.resolve(
				process.cwd(),
				datasource.outputDir,
				`${toFileName(collectionName)}.ts`,
			),
		),
	];

	const unusedFiles = getUnusedFiles(generatedFilePaths, datasource.outputDir);

	if (unusedFiles.length > 0) {
		logInfo(
			`\n⚠️  Encontrados ${unusedFiles.length} arquivo(s) não utilizado(s) em ${datasource.outputDir}/:`,
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

	const indexContent = generateIndexFileWithReexports(
		[...splitCollections.keys()],
		baseInterfaceNaming,
	);

	const collectionsResult = writeGeneratedFile(
		collectionsContent,
		path.join(datasource.outputDir, "collections.ts"),
	);
	// hasMainCollections → inline types go to index.ts (same as main flow)
	// !hasMainCollections → re-exports go to index.ts, no _main.ts generated
	const primaryIndexContent = hasMainCollections ? mainContent : indexContent;
	const indexResult = writeGeneratedFile(
		primaryIndexContent,
		path.join(datasource.outputDir, "index.ts"),
	);
	const splitResult = writeMultipleFiles(
		splitFilesContent,
		datasource.outputDir,
	);

	return {
		writeFiles: [
			{
				outputPath: collectionsResult.outputPath,
				changed: collectionsResult.changed,
			},
			{ outputPath: indexResult.outputPath, changed: indexResult.changed },
			...(splitResult?.files ?? []),
		],
	};
}

export async function runGenerateTypesForDatasources(
	onlyDatasourceNames?: readonly string[],
): Promise<GenerateTypesResult> {
	const onlyDatasourceSet = new Set(onlyDatasourceNames ?? []);
	const datasourceConfigs = resolveDatasourceConfigs().filter((datasource) => {
		if (onlyDatasourceSet.size === 0) {
			return true;
		}

		return (
			onlyDatasourceSet.has(datasource.datasource) ||
			onlyDatasourceSet.has(datasource.name)
		);
	});

	if (datasourceConfigs.length === 0) {
		throw new Error(
			"Nenhum datasource configurado para geração de tipos. Verifique datasources.config.ts.",
		);
	}

	applyWorkspaceLockIfNeeded();

	const writeFiles: GeneratedFileWrite[] = [];

	for (const datasource of datasourceConfigs) {
		const result = await runGenerateTypesForDatasource(datasource);
		writeFiles.push(...result.writeFiles);
	}

	const outputDirs = datasourceConfigs.map((d) => d.outputDir);
	await runBiomeFix(outputDirs);

	if (writeFiles.length === 1) {
		return {
			resultType: "single",
			outputPath: writeFiles[0]?.outputPath,
			changed: writeFiles[0]?.changed,
		};
	}

	return {
		resultType: "multi",
		files: writeFiles,
		totalFiles: writeFiles.length,
		totalChanged: writeFiles.filter((file) => file.changed).length,
	};
}

export async function runGenerateTypes(): Promise<GenerateTypesResult> {
	return runGenerateTypesForDatasources();
}
