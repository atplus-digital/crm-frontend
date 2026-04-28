import type { DataSourceCollection } from "../../../@types/script";
import type { InitContext, PipelineStage } from "../../core/types";

export const fetchCollections: PipelineStage<InitContext> = async (ctx) => {
	const { client, dataSource } = ctx;

	let collections: DataSourceCollection[];

	if (dataSource.type !== "nocobase") {
		throw new Error(
			`DataSource '${dataSource.name}' (type: '${dataSource.type}') exige collections explícitas em scripts/generate-types/datasources.config.ts`,
		);
	}

	// NocoBase: SEMPRE buscar TODAS as collections da API
	collections = await client.fetchCollections();

	return { ...ctx, collections };
};
