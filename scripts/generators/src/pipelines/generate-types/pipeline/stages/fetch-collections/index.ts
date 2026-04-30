import type { DataSourceCollection } from "../../../@types/script";
import type {
	InitContext,
	PipelineStage,
} from "../../datasource-pipeline/types";

export const fetchCollections: PipelineStage<InitContext> = async (ctx) => {
	const { client, dataSource } = ctx;

	let collections: DataSourceCollection[];

	if (dataSource.type !== "nocobase") {
		throw new Error(
			`DataSource '${dataSource.name}' (type: '${dataSource.type}') exige collections explícitas em scripts/generate-types/datasources.config.ts`,
		);
	}

	const explicitCollections = [
		...(dataSource.collections ?? []),
		...(dataSource.splitCollections ?? []),
	];

	// Datasources externos (ex.: IXC) podem não expor collections:list.
	// Nesses casos, priorizamos a lista explícita do config.
	if (dataSource.dataSource !== "main" && explicitCollections.length > 0) {
		collections = explicitCollections.map((name) => ({ name }));
	} else {
		// Datasource principal: sempre buscar todas as collections da API.
		collections = await client.fetchCollections();
	}

	return { ...ctx, collections };
};
