import type {
	NocoBaseCollectionResponse,
	NocoBaseCollectionsListResponse,
	NocoBaseCredentials,
	NocoBaseField,
} from "@scripts/generate-types/src/@types/nocobase";
import type {
	DataSourceClient,
	DataSourceCollection,
	DataSourceField,
	InferredEnumsMap,
} from "@scripts/generate-types/src/@types/script";
import { inferEnumsFromSample } from "./enum-inference";

interface ListSampleResponse {
	data?: Array<Record<string, unknown>>;
}

interface AggregateResponse {
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
 * const client = new NocoBaseDataSourceClient({
 *   baseUrl: "http://localhost:13000",
 *   token: "abc123",
 *   timeoutMs: 15000
 * });
 *
 * const collections = await client.fetchCollections();
 * const fields = await client.fetchCollectionFields("users");
 * ```
 */
export class NocoBaseDataSourceClient implements DataSourceClient {
	public readonly baseUrl: string;

	private readonly requestHeaders?: Record<string, string>;

	public constructor(
		private readonly credentials: NocoBaseCredentials,
		options?: NocoBaseClientOptions,
	) {
		this.baseUrl = credentials.baseUrl;
		this.requestHeaders = options?.requestHeaders;
	}

	public async fetchCollections(): Promise<DataSourceCollection[]> {
		const response = await this.fetchJson<NocoBaseCollectionsListResponse>(
			"collections:list?paginate=false",
		);

		return sortByName(response.data);
	}

	public async fetchCollectionFields(
		collectionName: string,
	): Promise<{ fields: DataSourceField[]; schemaAvailable: boolean }> {
		return this.fetchCollectionFieldsWithFallback(collectionName);
	}

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
	): Promise<{ fields: NocoBaseField[]; schemaAvailable: boolean }> {
		try {
			const params = new URLSearchParams({
				appends: "fields",
				filterByTk: collectionName,
			});

			const response = await this.fetchJson<NocoBaseCollectionResponse>(
				`collections:get?${params}`,
			);

			return {
				fields: sortByName(response.data.fields),
				schemaAvailable: true,
			};
		} catch (error) {
			if (!(error instanceof HttpResponseError) || error.status !== 404) {
				throw error;
			}

			const sampleResponse = await this.fetchJson<ListSampleResponse>(
				`${collectionName}:list?pageSize=1&page=1`,
			);
			const sampleRecord = sampleResponse.data?.[0] ?? null;
			if (!sampleRecord) {
				return { fields: [], schemaAvailable: false };
			}

			const inferredFields = Object.entries(sampleRecord).map(([name, value]) =>
				this.inferFieldFromSample(name, value),
			);

			return {
				fields: sortByName(inferredFields),
				schemaAvailable: false,
			};
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

	/**
	 * Inferir enums a partir dos dados reais de uma collection.
	 * Busca uma amostra de registros e identifica campos com baixa cardinalidade.
	 *
	 * @param collectionName - Nome da collection
	 * @param fieldNames - Nomes dos campos a analisar
	 * @param sampleSize - Tamanho da amostra (padrão: 1000)
	 * @returns Mapa de campos que são candidatos a enum
	 */
	public async inferEnumsFromData(
		collectionName: string,
		fieldNames: string[],
		sampleSize = 1000,
	): Promise<InferredEnumsMap> {
		const records = await this.fetchCollectionSample(
			collectionName,
			sampleSize,
		);

		if (records.length === 0) {
			return {};
		}

		return inferEnumsFromSample(records, fieldNames);
	}

	/**
	 * Busca uma amostra de registros de uma collection para inferência de tipos.
	 *
	 * @param collectionName - Nome da collection
	 * @param pageSize - Quantidade de registros a buscar (padrão: 100)
	 * @returns Array de registros
	 */
	public async fetchCollectionSample(
		collectionName: string,
		pageSize = 100,
	): Promise<Array<Record<string, unknown>>> {
		const response = await this.fetchJson<ListSampleResponse>(
			`${collectionName}:list?pageSize=${pageSize}&page=1`,
		);

		return response.data ?? [];
	}

	/**
	 * Busca valores distintos de um campo usando agregação.
	 * Funciona apenas para datasources que suportam operações de agregação.
	 *
	 * @param collectionName - Nome da collection
	 * @param fieldName - Nome do campo
	 * @returns Array de valores distintos ordenados
	 */
	public async fetchDistinctValues(
		collectionName: string,
		fieldName: string,
	): Promise<string[]> {
		try {
			const response = await this.fetchJson<AggregateResponse>(
				`${collectionName}:list?pageSize=0&fields=${fieldName}&distinct=${fieldName}`,
			);

			if (!response.data || response.data.length === 0) {
				return [];
			}

			const values = response.data.map((record) => String(record[fieldName]));
			return [...new Set(values)].sort((a, b) => a.localeCompare(b));
		} catch {
			return [];
		}
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
