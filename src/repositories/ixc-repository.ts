import { nocobaseClient } from "#/features/auth/client";
import { createLogger } from "#/lib/logger";
import type { ApiRequestConfig, ListParams, PaginatedResponse } from "./types";

const log = createLogger("repositories:ixc");

const IXC_DATASOURCE_HEADER = { "X-Data-Source": "d_db_ixcsoft" } as const;

export class IxcRepository {
	async request<T>(config: ApiRequestConfig): Promise<T> {
		log.debug("IXC request", {
			url: config.url,
			method: config.method || "GET",
		});

		try {
			const response = await nocobaseClient.request({
				...config,
				headers: {
					...config.headers,
					...IXC_DATASOURCE_HEADER,
				},
			});
			return response.data as T;
		} catch (error) {
			log.error("IXC request failed", {
				url: config.url,
				error: error instanceof Error ? error.message : String(error),
			});
			throw error;
		}
	}

	async list<T>(
		endpoint: string,
		params?: ListParams,
	): Promise<PaginatedResponse<T>> {
		log.info("Listing from IXC", { endpoint, params });

		// biome-ignore lint/suspicious/noExplicitAny: IXC API returns unpredictable response structure, must use any
		const rawResponse = await this.request<any>({
			url: `${endpoint}:list`,
			method: "GET",
			params: {
				page: params?.page || 1,
				pageSize: params?.pageSize || 20,
				...(params?.sort && params.sort.length > 0 && { sort: params.sort }),
				...(params?.filter && { filter: JSON.stringify(params.filter) }),
				...(params?.appends && { appends: params.appends }),
			},
		});

		// Normalize IXC response to PaginatedResponse format
		// IXC may return meta.count instead of meta.total, or count at root level
		const response: PaginatedResponse<T> = {
			data: rawResponse.data ?? [],
			meta: {
				total:
					rawResponse.meta?.total ??
					rawResponse.meta?.count ??
					rawResponse.count ??
					0,
				totalPage:
					rawResponse.meta?.totalPage ?? rawResponse.meta?.pageCount ?? 1,
				page: rawResponse.meta?.page ?? params?.page ?? 1,
				pageSize:
					rawResponse.meta?.pageSize ??
					rawResponse.pageSize ??
					params?.pageSize ??
					20,
				filterCount: rawResponse.meta?.filterCount,
				print: rawResponse.meta?.print,
			},
		};

		log.debug("IXC list response", {
			endpoint,
			total: response.meta.total,
			page: response.meta.page,
		});

		return response;
	}

	async get<T>(endpoint: string, id: number): Promise<T> {
		log.info("Getting from IXC", { endpoint, id });

		const response = await this.request<PaginatedResponse<T>>({
			url: `${endpoint}:list`,
			method: "GET",
			params: {
				page: 1,
				pageSize: 1,
				filter: JSON.stringify({ id: { $eq: id } }),
			},
		});

		if (!response.data || response.data.length === 0) {
			throw new Error(`Registro ${id} não encontrado em ${endpoint}`);
		}

		return response.data[0];
	}

	async getContratos<T>(
		params?: ListParams & {
			filters?: {
				cpfCnpj?: string;
				nome?: string;
				status?: string;
				contratoId?: number;
			};
		},
	): Promise<PaginatedResponse<T>> {
		log.info("Fetching contratos from IXC", { params });

		const filter = this.buildContratoFilter(params?.filters);

		const response = await this.request<PaginatedResponse<T>>({
			url: "cliente_contrato:list",
			method: "GET",
			params: {
				page: params?.page || 1,
				pageSize: params?.pageSize || 20,
				appends: params?.appends || ["f_nc_cliente"],
				...(params?.sort && params.sort.length > 0 && { sort: params.sort }),
				...(filter && { filter: JSON.stringify(filter) }),
			},
		});

		return response;
	}

	private buildContratoFilter(filters?: {
		cpfCnpj?: string;
		nome?: string;
		status?: string;
		contratoId?: number;
	}): Record<string, unknown> | undefined {
		if (!filters) return undefined;

		const conditions: Record<string, unknown>[] = [];

		if (filters.cpfCnpj) {
			conditions.push({
				f_nc_cliente: { cnpj_cpf: { $includes: filters.cpfCnpj } },
			});
		}

		if (filters.nome) {
			conditions.push({
				f_nc_cliente: { razao: { $includes: filters.nome } },
			});
		}

		if (filters.status) {
			conditions.push({ status: { $eq: filters.status } });
		}

		if (filters.contratoId) {
			conditions.push({ id: { $eq: filters.contratoId } });
		}

		if (conditions.length === 0) return undefined;
		if (conditions.length === 1) return conditions[0];
		return { $and: conditions };
	}
}

export const ixcRepository = new IxcRepository();
