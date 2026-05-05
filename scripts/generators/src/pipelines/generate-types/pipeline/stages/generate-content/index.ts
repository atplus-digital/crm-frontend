import type { CollectionTypesMap } from "../../../@types/generation";
import {
	resolveBaseInterfaceNamingConfig,
	toFileName,
} from "../../../utils/naming";
import type { PipelineContext } from "../../datasource-pipeline/types";
import { generateCollectionsFile } from "./collections-index";
import {
	generateContent,
	generateFileHeader,
	generateIndexContent,
	generateLabelsContent,
	generateSchemasContent,
} from "./content";
import { createBaseTypeIndex, withMainFileImports } from "./import-injector";
import { generateIndexWithAllExportsWithPaths } from "./split-index";

const OTHER_FOLDER = "other";

function getImportPath(collectionName: string, isSplit: boolean): string {
	const folder = toFileName(collectionName);
	return isSplit ? `./${folder}` : `./${OTHER_FOLDER}/${folder}`;
}

/**
 * Gera os 3 arquivos por collection (folder structure).
 * Retorna Map<filePath, content> com paths como "pessoas/labels.ts".
 */
function generateCollectionFolderFiles(
	_types: CollectionTypesMap,
	baseInterfaceNaming: ReturnType<typeof resolveBaseInterfaceNamingConfig>,
	isSplit: boolean,
	prefix = "",
	allCollectionsMap?: CollectionTypesMap,
	splitCollectionNames: ReadonlySet<string> = new Set<string>(),
): Map<string, string> {
	const result = new Map<string, string>();
	const header = generateFileHeader();
	const currentCollectionInOtherFolder = prefix.startsWith(`${OTHER_FOLDER}/`);

	for (const [colName, colTypes] of Object.entries(_types)) {
		const folder = `${prefix}${toFileName(colName)}`;

		const labelsContent = `${header}\n${generateLabelsContent(colName, colTypes)}`;
		const schemasContent = `${header}\n${generateSchemasContent(
			colName,
			colTypes,
			baseInterfaceNaming,
			{
				allCollectionsMap: isSplit ? (allCollectionsMap ?? _types) : undefined,
				splitCollectionNames,
				currentCollectionInOtherFolder,
			},
		)}`;
		const indexContent = `${header}${generateIndexContent(colName, colTypes, baseInterfaceNaming, isSplit)}`;

		result.set(`${folder}/labels.ts`, labelsContent);
		result.set(`${folder}/schemas.ts`, schemasContent);
		result.set(`${folder}/index.ts`, indexContent);
	}

	return result;
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

	// Se não há splits, gera apenas o arquivo principal (flat, compat legacy)
	const fileContents = new Map<string, string>();
	if (!ctx.splitCollections || ctx.splitCollections.size === 0) {
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

	// Gera paths para todas as collections (para index.ts e collections.ts)
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

	// Gera arquivos das split collections em pastas (na raiz)
	for (const [_name, types] of ctx.splitCollections) {
		const folderFiles = generateCollectionFolderFiles(
			types,
			baseInterfaceNaming,
			true,
			"",
			ctx.collectionTypes,
			splitCollectionNamesSet,
		);
		for (const [path, content] of folderFiles) {
			fileContents.set(path, content);
		}
	}

	// Gera arquivos das mainCollections em pastas dentro de other/
	for (const [_name, types] of Object.entries(ctx.mainCollections ?? {})) {
		const folderFiles = generateCollectionFolderFiles(
			{ [_name]: types },
			baseInterfaceNaming,
			true,
			`${OTHER_FOLDER}/`,
			ctx.collectionTypes,
			splitCollectionNamesSet,
		);
		for (const [path, content] of folderFiles) {
			fileContents.set(path, content);
		}
	}

	fileContents.set("collections.ts", collectionsContent);
	fileContents.set("index.ts", indexContent);

	return {
		...ctx,
		fileContents,
	};
}
