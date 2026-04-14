import type { APIClient } from "@nocobase/sdk";

import type {
	CollectionMap,
	CollectionName,
	CollectionRelationsMap,
} from "#/@types/generated/crm/collections";
import type { ListParams, PaginatedResponse } from "./types";

/**
 * Wrapper type-safe para o APIClient do NocoBase.
 *
 * Restringe operações apenas às collections que existem no schema gerado,
 * proporcionando type safety completo e auto-complete na IDE.
 *
 * @example
 * ```typescript
 * const client = new TypedNocoBaseClient(nocobaseClient);
 *
 * // Type-safe: só aceita collections que existem
 * const users = await client.list("users", { page: 1, pageSize: 20 });
 *
 * // Appends type-safe: só permite relations que existem na collection
 * const userWithRoles = await client.get("users", 1, {
 *   appends: ["roles", "departments"]
 * });
 *
 * // Erro de compilação se usar collection que não existe:
 * await client.list("invalid_collection" as any); // ❌
 *
 * // Erro de compilação se usar relation que não existe:
 * await client.get("users", 1, {
 *   appends: ["invalid_relation"] // ❌
 * });
 * ```
 */
export class TypedNocoBaseClient {
	constructor(private client: APIClient) {}

	/**
	 * Lista registros de uma collection com paginação e filtros.
	 *
	 * @param collection - Nome da collection (apenas collections válidas)
	 * @param params - Parâmetros de listagem (page, pageSize, sort, filter, appends)
	 * @returns Resposta paginada com os registros
	 *
	 * @example
	 * ```typescript
	 * const response = await client.list("users", {
	 *   page: 1,
	 *   pageSize: 20,
	 *   sort: ["-createdAt"],
	 *   filter: { status: { $eq: "active" } },
	 *   appends: ["roles"]
	 * });
	 *
	 * // response.data é tipado como Users[]
	 * // response.meta contém paginação
	 * ```
	 */
	async list<T extends CollectionName>(
		collection: T,
		params?: ListParams & {
			appends?: Array<keyof CollectionRelationsMap[T]>;
		},
	): Promise<PaginatedResponse<CollectionMap[T]>> {
		const response = await this.client.request({
			url: `${collection}:list`,
			method: "GET",
			params: {
				page: params?.page || 1,
				pageSize: params?.pageSize || 20,
				...(params?.sort && params.sort.length > 0 && { sort: params.sort }),
				...(params?.filter && { filter: JSON.stringify(params.filter) }),
				...(params?.appends && { appends: params.appends }),
			},
		});

		return response.data as PaginatedResponse<CollectionMap[T]>;
	}

	/**
	 * Busca um registro único por ID.
	 *
	 * @param collection - Nome da collection (apenas collections válidas)
	 * @param id - ID do registro
	 * @param options - Opções adicionais (appends para incluir relações)
	 * @returns O registro tipado
	 *
	 * @example
	 * ```typescript
	 * const user = await client.get("users", 123);
	 *
	 * // Com relações incluídas
	 * const userWithDept = await client.get("users", 123, {
	 *   appends: ["departments", "roles"]
	 * });
	 * ```
	 */
	async get<T extends CollectionName>(
		collection: T,
		id: number,
		options?: {
			appends?: Array<keyof CollectionRelationsMap[T]>;
			fields?: string[];
			except?: string[];
		},
	): Promise<CollectionMap[T]> {
		const response = await this.client.request<{ data: CollectionMap[T] }>({
			url: `${collection}:get`,
			method: "POST",
			data: {
				filterByTk: id,
				...(options?.appends && { appends: options.appends }),
				...(options?.fields && { fields: options.fields }),
				...(options?.except && { except: options.except }),
			},
		});

		return response.data.data;
	}

	/**
	 * Cria um novo registro em uma collection.
	 *
	 * @param collection - Nome da collection (apenas collections válidas)
	 * @param data - Dados para criação (parcial, todos os campos são opcionais)
	 * @returns O registro criado tipado
	 *
	 * @example
	 * ```typescript
	 * const user = await client.create("users", {
	 *   email: "user@example.com",
	 *   nickname: "User"
	 * });
	 * ```
	 */
	async create<T extends CollectionName>(
		collection: T,
		data: Partial<CollectionMap[T]>,
	): Promise<CollectionMap[T]> {
		const response = await this.client.request<{ data: CollectionMap[T] }>({
			url: `${collection}:create`,
			method: "POST",
			data,
		});

		return response.data.data;
	}

	/**
	 * Atualiza um registro existente.
	 *
	 * @param collection - Nome da collection (apenas collections válidas)
	 * @param id - ID do registro a atualizar
	 * @param data - Dados para atualização (parcial)
	 * @returns O registro atualizado tipado
	 *
	 * @example
	 * ```typescript
	 * const user = await client.update("users", 123, {
	 *   phone: "123456789"
	 * });
	 * ```
	 */
	async update<T extends CollectionName>(
		collection: T,
		id: number,
		data: Partial<CollectionMap[T]>,
	): Promise<CollectionMap[T]> {
		const response = await this.client.request<{ data: CollectionMap[T] }>({
			url: `${collection}:update`,
			method: "POST",
			params: {
				filterByTk: id,
			},
			data,
		});

		return response.data.data;
	}

	/**
	 * Remove um registro.
	 *
	 * @param collection - Nome da collection (apenas collections válidas)
	 * @param id - ID do registro a remover
	 *
	 * @example
	 * ```typescript
	 * await client.delete("users", 123);
	 * ```
	 */
	async delete<T extends CollectionName>(
		collection: T,
		id: number,
	): Promise<void> {
		await this.client.request({
			url: `${collection}:destroy`,
			method: "POST",
			params: {
				filterByTk: id,
			},
		});
	}

	/**
	 * Conta registros em uma collection.
	 *
	 * @param collection - Nome da collection (apenas collections válidas)
	 * @param params - Parâmetros opcionais (filter)
	 * @returns Número de registros
	 *
	 * @example
	 * ```typescript
	 * const count = await client.count("users");
	 *
	 * // Com filtro
	 * const activeCount = await client.count("users", {
	 *   filter: { status: { $eq: "active" } }
	 * });
	 * ```
	 */
	async count<T extends CollectionName>(
		collection: T,
		params?: {
			filter?: Record<string, unknown>;
		},
	): Promise<{ count: number }> {
		const response = await this.client.request<{ count: number }>({
			url: `${collection}:count`,
			method: "GET",
			params: {
				...(params?.filter && { filter: JSON.stringify(params.filter) }),
			},
		});

		return response.data;
	}
}
