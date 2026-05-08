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

	if (dataSource.dataSource !== "main") {
		const apiCollections = await client.fetchCollections();
		if (apiCollections.length > 0) {
			collections = apiCollections;
		} else if (explicitCollections.length > 0) {
			collections = explicitCollections.map((name) => ({ name }));
		} else {
			throw new Error(
				`DataSource '${dataSource.name}' não retornou collections via API e não possui collections/splitCollections configuradas.`,
			);
		}
	} else {
		collections = await client.fetchCollections();
	}

	return { ...ctx, collections };
};
