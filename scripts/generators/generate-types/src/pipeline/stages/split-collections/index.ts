import type {
	BuildTypesContext,
	PipelineStage,
	SplitCollectionsContext,
} from "../../core/types";
import { splitCollectionsByConfig } from "./collection-splitter";

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
