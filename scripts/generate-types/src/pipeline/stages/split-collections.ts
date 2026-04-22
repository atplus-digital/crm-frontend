import { splitCollectionsByConfig } from "../../utils/collection-splitter";
import type {
	BuildTypesContext,
	PipelineStage,
	SplitCollectionsContext,
} from "../types";

/**
 * Pipeline stage: split collections into main and split groups based on config.
 *
 * Extracted from generate-types.ts lines 300-303.
 *
 * Uses `splitCollectionsByConfig()` to divide collections into:
 * - `mainCollections`: Collections that stay in the main index.ts file
 * - `splitCollections`: Map of collectionName → types for separate files
 */
export const splitCollections: PipelineStage<BuildTypesContext> = async (
	ctx,
) => {
	const { mainCollections, splitCollections: splitMap } =
		splitCollectionsByConfig(
			ctx.collectionTypes,
			ctx.dataSource.splitCollections ?? [],
		);

	return {
		...ctx,
		mainCollections,
		splitCollections: splitMap,
	} as SplitCollectionsContext;
};
