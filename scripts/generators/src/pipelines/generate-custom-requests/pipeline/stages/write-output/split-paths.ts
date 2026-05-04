import { join } from "node:path";
import type { GeneratedRegistryEntry } from "../../../@types/generated-registry";
import { toDataSourceDir, toSafePathSegment } from "./path-utils";

export interface SplitPathInfo {
	collectionDir: string;
	dataSourceDir: string;
	relativeImportPath: string;
	relativeSplitName: string;
	resolvedFilePath: string;
}

export function resolveSplitPathInfo(
	entry: GeneratedRegistryEntry,
	splitFileName: string,
	outputDir = ".",
): SplitPathInfo {
	const dataSourceDir = toDataSourceDir(entry.dataSourceKey);
	const collectionDir = toSafePathSegment(entry.collection);
	const relativeSplitName = `${dataSourceDir}/${collectionDir}/${splitFileName}`;

	return {
		collectionDir,
		dataSourceDir,
		relativeImportPath: `./${relativeSplitName}`,
		relativeSplitName,
		resolvedFilePath: join(outputDir, `${relativeSplitName}.ts`),
	};
}
