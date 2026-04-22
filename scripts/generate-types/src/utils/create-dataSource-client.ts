import { config } from "../../config";
import type { DataSourceGenerationConfig } from "../@types/script-config";
import type { DataSourceClient } from "../@types/script-data-source";
import { NocoBaseDataSourceClient } from "../generation/client";

export function createDataSourceClient(
	dataSource: DataSourceGenerationConfig,
): DataSourceClient {
	switch (dataSource.type) {
		case "nocobase":
			return new NocoBaseDataSourceClient(
				{
					baseUrl: config.baseUrl,
					token: config.token,
					timeoutMs: config.requestTimeoutMs,
				},
				{
					requestHeaders: {
						"X-Data-Source": dataSource.dataSource,
					},
				},
			);
		case "rest":
			throw new Error(
				`Datasource REST ainda não implementado. DataSource: '${dataSource.name}'`,
			);
		default:
			throw new Error(
				`Tipo de datasource desconhecido: '${(dataSource as DataSourceGenerationConfig).type}'. Esperado: 'nocobase' | 'rest'`,
			);
	}
}
