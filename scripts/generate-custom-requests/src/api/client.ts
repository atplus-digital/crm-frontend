import type {
	CustomRequestApiEntry,
	CustomRequestsListResponse,
} from "@scripts/generate-custom-requests/src/@types/custom-request-api";
import type { ScriptConfig } from "@scripts/generate-custom-requests/src/@types/script-config";
import { logger } from "@scripts/shared/logger";

class HttpResponseError extends Error {
	public constructor(
		public readonly status: number,
		public readonly statusText: string,
		public readonly requestUrl: string,
		bodySuffix: string,
	) {
		super(`HTTP ${status} ${statusText} em ${requestUrl}${bodySuffix}`);
	}
}

/**
 * Retorna preview do body de erro HTTP (primeiros 200 caracteres, sem quebras de linha).
 */
function getErrorBodyPreview(rawBody: string): string {
	return rawBody.replaceAll(/\s+/g, " ").trim().slice(0, 200);
}

/**
 * Cliente HTTP para buscar custom requests da API NocoBase.
 *
 * @example
 * ```typescript
 * const client = new CustomRequestsApiClient(config);
 * const requests = await client.fetchAllCustomRequests();
 * ```
 */
export class CustomRequestsApiClient {
	public constructor(private readonly config: ScriptConfig) {}

	/**
	 * Busca TODOS os custom requests com paginação automática.
	 */
	public async fetchAllCustomRequests(): Promise<CustomRequestApiEntry[]> {
		const allEntries: CustomRequestApiEntry[] = [];
		let page = 1;
		const pageSize = 200;

		while (true) {
			const response = await this.fetchJson<CustomRequestsListResponse>(
				`customRequests:list?pageSize=${pageSize}&page=${page}`,
			);

			const entries = response.data ?? [];
			allEntries.push(...entries);

			logger.info(`Página ${page}: ${entries.length} custom requests`);

			if (entries.length < pageSize) {
				break;
			}

			page++;
		}

		logger.info(`Total: ${allEntries.length} custom requests`);
		return allEntries;
	}

	private async fetchJson<T>(resourcePath: string): Promise<T> {
		const url = `${this.config.baseUrl}/${resourcePath}`;
		const controller = new AbortController();
		const timeout = setTimeout(() => controller.abort(), this.config.timeoutMs);

		try {
			const response = await fetch(url, {
				headers: {
					Authorization: `Bearer ${this.config.token}`,
				},
				signal: controller.signal,
			});

			if (!response.ok) {
				const body = await response.text().catch(() => "");
				const bodySuffix = body
					? ` - resposta: ${getErrorBodyPreview(body)}`
					: "";

				if (response.status === 401) {
					throw new Error(
						`Não autorizado (401). Verifique o token da API.${bodySuffix}`,
					);
				}

				if (response.status === 404) {
					throw new Error(`Endpoint não encontrado (404): ${url}`);
				}

				if (response.status >= 500) {
					throw new Error(
						`Erro do servidor (${response.status}): ${response.statusText}${bodySuffix}`,
					);
				}

				throw new HttpResponseError(
					response.status,
					response.statusText,
					url,
					bodySuffix,
				);
			}

			return (await response.json()) as T;
		} catch (error) {
			if (error instanceof DOMException && error.name === "AbortError") {
				throw new Error(
					`Timeout de ${this.config.timeoutMs}ms ao acessar ${url}`,
				);
			}

			throw error;
		} finally {
			clearTimeout(timeout);
		}
	}
}
