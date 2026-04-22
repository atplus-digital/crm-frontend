import type { CollectionTypesMap } from "../../@types/generation";
import { generateCollectionsFile } from "../../generation/collections-index";
import { generateContent, generateSplitFiles } from "../../generation/content";
import {
	createBaseTypeIndex,
	withMainFileImports,
	withSplitFileImports,
} from "../../generation/import-injector";
import { generateIndexFileWithReexports } from "../../generation/split-index";
import { resolveBaseInterfaceNamingConfig } from "../../utils/naming";
import type { PipelineContext } from "../types";

/**
 * Stage: Generate TypeScript content for all output files.
 *
 * Input context requires:
 * - mainCollections: CollectionTypesMap
 * - splitCollections: Map<string, CollectionTypesMap>
 *
 * Output context adds:
 * - fileContents: Map<string, string> — file path (relative to outputDir) → content
 */
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

	const fileContents = new Map<string, string>();

	if (ctx.splitCollections?.size === 0) {
		const mainOutputPath = hasMainCollections ? "index.ts" : "_main.ts";
		fileContents.set(mainOutputPath, mainContent);

		return {
			...ctx,
			fileContents,
		};
	}

	const splitFilesContent = withSplitFileImports(
		generateSplitFiles(ctx.splitCollections, baseInterfaceNaming),
		ctx.splitCollections,
		splitCollectionNamesSet,
		baseTypeIndex,
		baseInterfaceNaming,
	);

	const mergedCollections: CollectionTypesMap = {};
	for (const collections of ctx.splitCollections.values()) {
		Object.assign(mergedCollections, collections);
	}

	const collectionsContent = generateCollectionsFile(
		mergedCollections,
		baseInterfaceNaming,
		[...ctx.splitCollections.keys()],
	);

	const indexContent = generateIndexFileWithReexports(
		[...ctx.splitCollections.keys()],
		baseInterfaceNaming,
	);

	for (const [fileName, content] of splitFilesContent) {
		fileContents.set(`${fileName}.ts`, content);
	}

	fileContents.set("collections.ts", collectionsContent);

	const primaryIndexContent = hasMainCollections ? mainContent : indexContent;
	fileContents.set("index.ts", primaryIndexContent);

	return {
		...ctx,
		fileContents,
	};
}
