import type { ManualRelationMapping } from "../../../@types/script";
import type { FetchCollectionsContext, PipelineStage } from "../../core/types";

export const fetchRelations: PipelineStage<
	FetchCollectionsContext & {
		relations?: Record<string, ManualRelationMapping>;
	}
> = async (ctx) => {
	const { dataSource, collections } = ctx;
	const relations: Record<string, ManualRelationMapping> = {};

	if (dataSource.relationsAdapter) {
		for (const collection of collections) {
			try {
				const adapterRelations =
					await dataSource.relationsAdapter.fetchRelations(collection.name);
				const manualRelations =
					dataSource.relationsMapping?.[collection.name] ?? {};
				relations[collection.name] = {
					...adapterRelations,
					...manualRelations,
				};
			} catch {
				relations[collection.name] =
					dataSource.relationsMapping?.[collection.name] ?? {};
			}
		}
	} else {
		for (const collection of collections) {
			relations[collection.name] =
				dataSource.relationsMapping?.[collection.name] ?? {};
		}
	}

	return { ...ctx, relations };
};
