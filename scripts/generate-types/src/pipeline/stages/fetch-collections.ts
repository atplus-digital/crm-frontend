import type { DataSourceCollection } from "../../@types/script";
import type { InitContext, PipelineStage } from "../types";

/**
 * Pipeline stage: fetch collections from the data source.
 *
 * Extracted from resolveCollectionsForDataSource() in generate-types.ts (lines 77-96)
 *
 * If collections are explicitly configured, uses those names.
 * Otherwise fetches from the API (NocoBase only).
 */
export const fetchCollections: PipelineStage<InitContext> = async (ctx) => {
	const { client, dataSource } = ctx;

	const configuredCollectionNames = normalizeCollectionNames(
		dataSource.collections,
	);

	let collections: DataSourceCollection[];

	if (configuredCollectionNames.length > 0) {
		collections = configuredCollectionNames.map((name) => ({ name }));
	} else if (dataSource.type !== "nocobase") {
		throw new Error(
			`DataSource '${dataSource.name}' (type: '${dataSource.type}') exige collections explícitas em scripts/generate-types/datasources.config.ts`,
		);
	} else {
		collections = await client.fetchCollections();
	}

	return { ...ctx, collections };
};

function normalizeCollectionNames(
	collectionNames: string[] | undefined,
): string[] {
	if (!collectionNames) {
		return [];
	}

	return [...new Set(collectionNames)]
		.map((name) => name.trim())
		.filter((name) => name.length > 0);
}
