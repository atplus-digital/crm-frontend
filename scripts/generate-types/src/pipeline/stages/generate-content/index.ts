import type { CollectionTypesMap } from "../../../@types/generation";
import {
	resolveBaseInterfaceNamingConfig,
	toFileName,
} from "../../../utils/naming";
import type { PipelineContext } from "../../core/types";
import { generateCollectionsFile } from "./collections-index";
import { generateContent, generateSplitFiles } from "./content";
import {
	createBaseTypeIndex,
	withMainFileImports,
	withSplitFileImports,
} from "./import-injector";
import { generateIndexFileWithReexports } from "./split-index";

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

	for (const [collectionName, content] of splitFilesContent) {
		fileContents.set(`${toFileName(collectionName)}.ts`, content);
	}

	fileContents.set("collections.ts", collectionsContent);

	const primaryIndexContent = hasMainCollections ? mainContent : indexContent;
	fileContents.set("index.ts", primaryIndexContent);

	return {
		...ctx,
		fileContents,
	};
}
