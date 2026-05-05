import type {
	DataSourceGenerationConfig,
	RuntimeConfig,
} from "../@types/script-config";
import type { DataSourceClient } from "../@types/script-data-source";
import { NocoBaseDataSourceClient } from "./client";

export function createDataSourceClient(
	dataSource: DataSourceGenerationConfig,
	runtimeConfig: Pick<RuntimeConfig, "baseUrl" | "token" | "requestTimeoutMs">,
): DataSourceClient {
	switch (dataSource.type) {
		case "nocobase":
			return new NocoBaseDataSourceClient(
				{
					baseUrl: runtimeConfig.baseUrl,
					token: runtimeConfig.token,
					timeoutMs: runtimeConfig.requestTimeoutMs,
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
