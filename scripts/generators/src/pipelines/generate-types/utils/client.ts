import { HttpResponseError } from "@scripts/generators/src/lib/http/http-client";
import { NocoBaseApiClient } from "@scripts/generators/src/lib/http/nocobase-client";
import type {
	NocoBaseCollectionResponse,
	NocoBaseCollectionsListResponse,
	NocoBaseField,
} from "@scripts/generators/src/pipelines/generate-types/@types/nocobase";
import type {
	DataSourceClient,
	DataSourceCollection,
	DataSourceField,
	InferredEnumsMap,
	RejectedFieldsMap,
} from "@scripts/generators/src/pipelines/generate-types/@types/script";
import { inferEnumsFromSample } from "../pipeline/stages/infer-enums/enum-inference";

interface ListSampleResponse {
	data?: Array<Record<string, unknown>>;
}

interface AggregateResponse {
	data?: Array<Record<string, unknown>>;
}

/**
 * Ordena array de objetos por propriedade 'name' (ordem alfabética).
 */
function sortByName<T extends { name: string }>(items: T[]): T[] {
	return [...items].sort((a, b) => a.name.localeCompare(b.name));
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
export class NocoBaseDataSourceClient
	extends NocoBaseApiClient
	implements DataSourceClient
{
	private readonly dataSourceKey?: string;

	// biome-ignore lint/complexity/noUselessConstructor: runtime usage
	public constructor(
		credentials: {
			baseUrl: string;
			token: string;
			timeoutMs: number;
		},
		options?: {
			requestHeaders?: Record<string, string>;
			dataSourceKey?: string;
		},
	) {
		super(credentials, options);
		this.dataSourceKey = options?.dataSourceKey;
	}

	public async fetchCollections(): Promise<DataSourceCollection[]> {
		if (this.dataSourceKey) {
			const scopedCollections =
				await this.fetchCollectionsFromDataSourceScope();
			if (scopedCollections.length > 0) {
				return sortByName(scopedCollections);
			}

			// Fallback genérico pode falhar com 404 quando X-Data-Source
			// header é enviado para endpoint que não suporta datasources.
			// Retorna vazio para que o chamador use collections explícitas.
			try {
				const response = await this.fetchJson<NocoBaseCollectionsListResponse>(
					"collections:list?paginate=false",
				);
				return sortByName(response.data);
			} catch (error) {
				if (error instanceof HttpResponseError) {
					return [];
				}
				throw error;
			}
		}

		const response = await this.fetchJson<NocoBaseCollectionsListResponse>(
			"collections:list?paginate=false",
		);

		return sortByName(response.data);
	}

	private async fetchCollectionsFromDataSourceScope(): Promise<
		DataSourceCollection[]
	> {
		if (!this.dataSourceKey) {
			return [];
		}

		const params = new URLSearchParams({
			paginate: "false",
			filter: JSON.stringify({ dataSourceKey: this.dataSourceKey }),
		});

		try {
			const response = await this.fetchJson<{
				data?: Array<{
					name?: string;
					collectionName?: string;
					title?: string;
				}>;
				errors?: Array<{ message?: string }>;
			}>(`dataSourcesCollections:list?${params.toString()}`);

			if (response.errors?.length) {
				return [];
			}

			const mapped = (response.data ?? [])
				.map((entry) => ({
					name: entry.collectionName ?? entry.name ?? "",
					title: entry.title,
				}))
				.filter((entry) => entry.name.length > 0);

			return mapped;
		} catch (error) {
			if (error instanceof HttpResponseError) {
				return [];
			}
			throw error;
		}
	}

	public async fetchCollectionFields(
		collectionName: string,
	): Promise<{ fields: DataSourceField[]; schemaAvailable: boolean }> {
		return this.fetchCollectionFieldsWithFallback(collectionName);
	}

	public async fetchFieldsWithUISchema(
		collectionName: string,
	): Promise<NocoBaseField[]> {
		if (this.dataSourceKey) {
			try {
				const response = await this.fetchJson<{
					data: NocoBaseField[];
				}>(
					`dataSourcesCollections/${this.dataSourceKey}.${collectionName}/fields:list?paginate=false&sort[]=sort`,
				);

				return sortByName(response.data);
			} catch (error) {
				if (!(error instanceof HttpResponseError) || error.status !== 404) {
					throw error;
				}
			}
		}

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
		if (this.dataSourceKey) {
			try {
				const response = await this.fetchJson<{ data: NocoBaseField[] }>(
					`dataSourcesCollections/${this.dataSourceKey}.${collectionName}/fields:list?paginate=false&sort[]=sort`,
				);

				return {
					fields: sortByName(response.data),
					schemaAvailable: true,
				};
			} catch (error) {
				if (!(error instanceof HttpResponseError) || error.status !== 404) {
					throw error;
				}
			}
		}

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
	): Promise<{ enums: InferredEnumsMap; rejected: RejectedFieldsMap }> {
		const records = await this.fetchCollectionSample(
			collectionName,
			sampleSize,
		);

		if (records.length === 0) {
			return { enums: {}, rejected: {} };
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
}
