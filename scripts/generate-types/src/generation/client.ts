import type {
	NocoBaseCollection,
	NocoBaseCollectionResponse,
	NocoBaseCollectionsListResponse,
	NocoBaseCredentials,
	NocoBaseField,
} from "@scripts/generate-types/src/@types/nocobase";

/**
 * Ordena array de objetos por propriedade 'name' (ordem alfabética).
 */
function sortByName<T extends { name: string }>(items: T[]): T[] {
	return [...items].sort((a, b) => a.name.localeCompare(b.name));
}

/**
 * Retorna preview do body de erro HTTP (primeiros 200 caracteres, sem quebras de linha).
 */
function getErrorBodyPreview(rawBody: string): string {
	return rawBody.replaceAll(/\s+/g, " ").trim().slice(0, 200);
}

/**
 * Cliente HTTP para a API do NocoBase.
 *
 * @example
 * ```typescript
 * const client = new NocoBaseClient({
 *   baseUrl: "http://localhost:13000",
 *   token: "abc123",
 *   timeoutMs: 15000
 * });
 *
 * const collections = await client.fetchCollections();
 * const fields = await client.fetchCollectionFields("users");
 * ```
 */
export class NocoBaseClient {
	public readonly baseUrl: string;

	public constructor(private readonly credentials: NocoBaseCredentials) {
		this.baseUrl = credentials.baseUrl;
	}

	/**
	 * Busca todas as collections da API NocoBase.
	 *
	 * @returns Array de collections ordenadas por nome
	 * @throws {Error} Se timeout ou erro HTTP
	 */
	public async fetchCollections(): Promise<NocoBaseCollection[]> {
		const response = await this.fetchJson<NocoBaseCollectionsListResponse>(
			"collections:list?paginate=false",
		);

		return sortByName(response.data);
	}

	/**
	 * Busca todos os campos de uma collection específica.
	 *
	 * @param collectionName - Nome da collection
	 * @returns Array de campos ordenados por nome
	 * @throws {Error} Se timeout ou erro HTTP
	 */
	public async fetchCollectionFields(
		collectionName: string,
	): Promise<NocoBaseField[]> {
		const params = new URLSearchParams({
			appends: "fields",
			filterByTk: collectionName,
		});

		const response = await this.fetchJson<NocoBaseCollectionResponse>(
			`collections:get?${params}`,
		);

		return sortByName(response.data.fields);
	}

	private async fetchJson<T>(resourcePath: string): Promise<T> {
		const url = `${this.credentials.baseUrl}/${resourcePath}`;
		const controller = new AbortController();
		const timeout = setTimeout(
			() => controller.abort(),
			this.credentials.timeoutMs,
		);

		try {
			const response = await fetch(url, {
				headers: {
					Authorization: `Bearer ${this.credentials.token}`,
				},
				signal: controller.signal,
			});

			if (!response.ok) {
				const body = await response.text().catch(() => "");
				const bodySuffix = body
					? ` - resposta: ${getErrorBodyPreview(body)}`
					: "";

				throw new Error(
					`HTTP ${response.status} ${response.statusText} em ${url}${bodySuffix}`,
				);
			}

			return (await response.json()) as T;
		} catch (error) {
			if (error instanceof DOMException && error.name === "AbortError") {
				throw new Error(
					`Timeout de ${this.credentials.timeoutMs}ms ao acessar ${url}`,
				);
			}

			throw error;
		} finally {
			clearTimeout(timeout);
		}
	}
}
