import type { Logger } from "@scripts/generators/src/lib/logger";
import { logger as defaultRuntimeLogger } from "@scripts/generators/src/lib/logger";
import { NocoBaseApiClient } from "@scripts/generators/src/lib/nocobase-client";
import type {
	CustomRequestApiEntry,
	CustomRequestsListResponse,
} from "@scripts/generators/src/pipelines/generate-custom-requests/@types/custom-request-api";
import type { ScriptConfig } from "@scripts/generators/src/pipelines/generate-custom-requests/@types/script-config";

/**
 * Cliente HTTP para buscar custom requests da API NocoBase.
 *
 * @example
 * ```typescript
 * const client = new CustomRequestsApiClient(config);
 * const requests = await client.fetchAllCustomRequests();
 * ```
 */
export class CustomRequestsApiClient extends NocoBaseApiClient {
	public constructor(
		config: ScriptConfig,
		private readonly logger: Logger = defaultRuntimeLogger,
	) {
		super(config);
	}

	/**
	 * Busca TODOS os custom requests com paginação automática.
	 */
	public async fetchAllCustomRequests(): Promise<CustomRequestApiEntry[]> {
		const pageSize = 200;
		const allEntries = await this.fetchPaginated<CustomRequestApiEntry>({
			pageSize,
			fetchPage: async (page, currentPageSize) => {
				const response = await this.fetchJson<CustomRequestsListResponse>(
					`customRequests:list?pageSize=${currentPageSize}&page=${page}`,
				);
				const entries = response.data ?? [];
				this.logger.debug(`Página ${page}: ${entries.length} custom requests`);
				return {
					entries,
					hasNextPage: entries.length >= currentPageSize,
				};
			},
		});

		this.logger.info(`Total: ${allEntries.length} custom requests`);
		return allEntries;
	}

	protected override fetchJson<T>(resourcePath: string): Promise<T> {
		return super.fetchJson<T>(
			resourcePath,
			({ status, statusText, url, bodySuffix }) => {
				if (status === 401) {
					return new Error(
						`Não autorizado (401). Verifique o token da API.${bodySuffix}`,
					);
				}

				if (status === 404) {
					return new Error(`Endpoint não encontrado (404): ${url}`);
				}

				if (status >= 500) {
					return new Error(
						`Erro do servidor (${status}): ${statusText}${bodySuffix}`,
					);
				}

				return undefined;
			},
		);
	}
}
