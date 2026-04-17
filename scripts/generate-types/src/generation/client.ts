import type {
	NocoBaseCollection,
	NocoBaseCollectionResponse,
	NocoBaseCollectionsListResponse,
	NocoBaseCredentials,
	NocoBaseField,
} from "@scripts/generate-types/src/@types/nocobase";

interface ListSampleResponse {
	data?: Array<Record<string, unknown>>;
}

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

interface NocoBaseClientOptions {
	requestHeaders?: Record<string, string>;
	enableSampleFieldFallback?: boolean;
}

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

	private readonly requestHeaders?: Record<string, string>;
	private readonly enableSampleFieldFallback: boolean;

	public constructor(
		private readonly credentials: NocoBaseCredentials,
		options?: NocoBaseClientOptions,
	) {
		this.baseUrl = credentials.baseUrl;
		this.requestHeaders = options?.requestHeaders;
		this.enableSampleFieldFallback = Boolean(
			options?.enableSampleFieldFallback,
		);
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
		if (this.enableSampleFieldFallback) {
			return this.fetchCollectionFieldsWithFallback(collectionName);
		}

		const params = new URLSearchParams({
			appends: "fields",
			filterByTk: collectionName,
		});

		const response = await this.fetchJson<NocoBaseCollectionResponse>(
			`collections:get?${params}`,
		);

		return sortByName(response.data.fields);
	}

	/**
	 * Busca todos os campos de uma collection via recurso collections.fields.
	 * Este endpoint retorna campos com uiSchema completo (incluindo enums).
	 *
	 * @param collectionName - Nome da collection
	 * @returns Array de campos ordenados por nome
	 * @throws {Error} Se timeout ou erro HTTP
	 */
	public async fetchFieldsWithUISchema(
		collectionName: string,
	): Promise<NocoBaseField[]> {
		const params = new URLSearchParams({
			filter: JSON.stringify({ collectionName }),
		});

		const response = await this.fetchJson<{
			data: NocoBaseField[];
		}>(`collections.fields:list?${params}`);

		return sortByName(response.data);
	}

	private async fetchCollectionFieldsWithFallback(
		collectionName: string,
	): Promise<NocoBaseField[]> {
		try {
			const params = new URLSearchParams({
				appends: "fields",
				filterByTk: collectionName,
			});

			const response = await this.fetchJson<NocoBaseCollectionResponse>(
				`collections:get?${params}`,
			);

			return sortByName(response.data.fields);
		} catch (error) {
			if (!(error instanceof HttpResponseError) || error.status !== 404) {
				throw error;
			}

			const sampleResponse = await this.fetchJson<ListSampleResponse>(
				`${collectionName}:list?pageSize=1&page=1`,
			);
			const sampleRecord = sampleResponse.data?.[0] ?? null;
			if (!sampleRecord) {
				return [];
			}

			const inferredFields = Object.entries(sampleRecord).map(([name, value]) =>
				this.inferFieldFromSample(name, value),
			);

			return sortByName(inferredFields);
		}
	}

	private inferFieldFromSample(name: string, value: unknown): NocoBaseField {
		if (typeof value === "number") {
			return { name, type: "double", interface: "number" };
		}

		if (typeof value === "boolean") {
			return { name, type: "boolean", interface: "checkbox" };
		}

		if (Array.isArray(value)) {
			return { name, type: "array", interface: "multipleSelect" };
		}

		if (value === null || value === undefined) {
			return { name, type: "string", interface: "input" };
		}

		if (typeof value === "object") {
			return { name, type: "json", interface: "json" };
		}

		if (/^\d{4}-\d{2}-\d{2}/.test(String(value))) {
			return { name, type: "date", interface: "date" };
		}

		return { name, type: "string", interface: "input" };
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
					...(this.requestHeaders ?? {}),
				},
				signal: controller.signal,
			});

			if (!response.ok) {
				const body = await response.text().catch(() => "");
				const bodySuffix = body
					? ` - resposta: ${getErrorBodyPreview(body)}`
					: "";

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
					`Timeout de ${this.credentials.timeoutMs}ms ao acessar ${url}`,
				);
			}

			throw error;
		} finally {
			clearTimeout(timeout);
		}
	}
}
