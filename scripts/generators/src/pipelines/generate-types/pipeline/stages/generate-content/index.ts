import type { CollectionTypesMap } from "../../../@types/generation";
import {
	resolveBaseInterfaceNamingConfig,
	toFileName,
} from "../../../utils/naming";
import type { PipelineContext } from "../../datasource-pipeline/types";
import { generateCollectionsFile } from "./collections-index";
import { generateContent, generateSplitFiles } from "./content";
import {
	createBaseTypeIndex,
	withMainFileImports,
	withSplitFileImports,
} from "./import-injector";
import { generateIndexWithAllExportsWithPaths } from "./split-index";

const OTHER_FOLDER = "other";

/**
 * Gera o import path relativo para uma collection.
 * Usado no index.ts para re-exportar.
 */
function getImportPath(collectionName: string, isSplit: boolean): string {
	return isSplit
		? `./${toFileName(collectionName)}`
		: `./${OTHER_FOLDER}/${toFileName(collectionName)}`;
}

export async function generateContentStage(
	ctx: Readonly<
		PipelineContext & {
			mainCollections: CollectionTypesMap;
			splitCollections: Map<string, CollectionTypesMap>;
		}
	>,
): Promise<PipelineContext> {
	const baseInterfaceNaming = resolveBaseInterfaceNamingConfig(
		ctx.dataSource.baseInterfaceNaming ?? ctx.config.baseInterfaceNaming,
	);

	const splitCollectionNamesSet = new Set(ctx.splitCollections?.keys() ?? []);
	const baseTypeIndex = createBaseTypeIndex(
		ctx.collectionTypes ?? {},
		baseInterfaceNaming,
	);

	const hasMainCollections =
		ctx.mainCollections && Object.keys(ctx.mainCollections).length > 0;

	const mainContent = withMainFileImports(
		generateContent(ctx.mainCollections ?? {}, baseInterfaceNaming),
		ctx.mainCollections ?? {},
		splitCollectionNamesSet,
		baseTypeIndex,
		baseInterfaceNaming,
	);

	const splitFilesContent = withSplitFileImports(
		generateSplitFiles(ctx.splitCollections, baseInterfaceNaming),
		ctx.splitCollections,
		splitCollectionNamesSet,
		baseTypeIndex,
		baseInterfaceNaming,
	);

	// mainCollections estão na subpasta "other/"
	const mainCollectionsMap = new Map<string, CollectionTypesMap>();
	for (const [name, types] of Object.entries(ctx.mainCollections ?? {})) {
		mainCollectionsMap.set(name, { [name]: types });
	}
	const mainCollectionNames = new Set(Object.keys(ctx.mainCollections ?? {}));

	const mainFilesContent = withSplitFileImports(
		generateSplitFiles(mainCollectionsMap, baseInterfaceNaming),
		mainCollectionsMap,
		splitCollectionNamesSet,
		baseTypeIndex,
		baseInterfaceNaming,
		{ collectionsInSubfolder: mainCollectionNames },
	);

	// Se não há splits, gera apenas o arquivo principal
	const fileContents = new Map<string, string>();
	if (ctx.splitCollections?.size === 0) {
		const mainOutputPath = hasMainCollections ? "index.ts" : "_main.ts";
		fileContents.set(mainOutputPath, mainContent);

		return {
			...ctx,
			fileContents,
		};
	}

	const mergedCollections: CollectionTypesMap = {
		...(hasMainCollections ? ctx.mainCollections : {}),
	};
	for (const collections of ctx.splitCollections.values()) {
		Object.assign(mergedCollections, collections);
	}

	// Gera paths para todas as collections
	const collectionPaths = new Map<string, string>();
	for (const name of ctx.splitCollections?.keys() ?? []) {
		collectionPaths.set(name, getImportPath(name, true));
	}
	for (const name of Object.keys(ctx.mainCollections ?? {})) {
		collectionPaths.set(name, getImportPath(name, false));
	}

	const collectionsContent = generateCollectionsFile(
		mergedCollections,
		baseInterfaceNaming,
		collectionPaths,
	);

	const indexContent = generateIndexWithAllExportsWithPaths(
		Object.keys(mergedCollections),
		collectionPaths,
		baseInterfaceNaming,
	);

	// Escreve arquivos dos splits (na raiz)
	for (const [collectionName, content] of splitFilesContent) {
		fileContents.set(`${toFileName(collectionName)}.ts`, content);
	}

	// Escreve arquivos das mainCollections (em other/)
	for (const [collectionName, content] of mainFilesContent) {
		fileContents.set(
			`${OTHER_FOLDER}/${toFileName(collectionName)}.ts`,
			content,
		);
	}

	fileContents.set("collections.ts", collectionsContent);
	fileContents.set("index.ts", indexContent);

	return {
		...ctx,
		fileContents,
	};
}
