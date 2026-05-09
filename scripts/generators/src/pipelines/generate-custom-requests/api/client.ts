import type {
	NocoBaseApiClientOptions,
	NocoBaseApiCredentials,
} from "@generators/lib/http/nocobase-client";
import { NocoBaseApiClient } from "@generators/lib/http/nocobase-client";
import type {
	CustomRequestApiEntry,
	CustomRequestsListResponse,
} from "../@types/custom-request-api";

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
	/**
	 * @param credentials Credenciais de acesso à API NocoBase
	 * @param options Opções adicionais do cliente HTTP
	 */
	// biome-ignore lint/complexity/noUselessConstructor: visibility change from protected to public is meaningful
	public constructor(
		credentials: NocoBaseApiCredentials,
		options?: NocoBaseApiClientOptions,
	) {
		super(credentials, options);
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
				return {
					entries,
					hasNextPage: entries.length >= currentPageSize,
				};
			},
		});

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
