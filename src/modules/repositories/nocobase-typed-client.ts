import type { APIClient } from "@nocobase/sdk";
import type {
	CollectionMap,
	CollectionName,
	CollectionRelationsMap,
} from "#/@types/generated/crm/collections";

/**
 * Parâmetros para listagem com paginação e filtros.
 */
export interface ListParams<T extends CollectionName> {
	/** Número da página (default: 1) */
	page?: number;
	/** Quantidade de itens por página (default: 20) */
	pageSize?: number;
	/** Campos para ordenação (prefixo - para descendente) */
	sort?: string[];
	/** Filtro complexo (objeto ou JSON string) */
	filter?: Record<string, unknown> | string;
	/** Relações para incluir no response (appends) */
	appends?: Array<keyof CollectionRelationsMap[T]>;
	/** Campos para excluir do response */
	except?: string[];
	/** Campos específicos para retornar */
	fields?: string[];
}

/**
 * Response paginado padronizado.
 */
export interface PaginatedResponse<T> {
	data: T[];
	meta: {
		total?: number;
		totalPage?: number;
		page?: number;
		pageSize?: number;
		filterCount?: number;
	};
}

/**
 * Wrapper type-safe para o APIClient do NocoBase.
 *
 * @example
 * ```typescript
 * import { typedClient } from "#/modules/repositories";
 *
 * // Listar usuários com relations
 * const users = await typedClient.list("users", {
 *   page: 1,
 *   pageSize: 20,
 *   appends: ["roles", "departments"]
 * });
 *
 * // Buscar usuário específico
 * const user = await typedClient.get("users", 123);
 *
 * // Criar novo usuário
 * const newUser = await typedClient.create("users", {
 *   email: "user@example.com",
 *   nickname: "User"
 * });
 *
 * // Atualizar usuário
 * await typedClient.update("users", 123, { phone: "123456789" });
 *
 * // Deletar usuário
 * await typedClient.delete("users", 123);
 * ```
 */
export class TypedNocoBaseClient {
	constructor(private client: APIClient) {}

	/**
	 * Lista registros de uma collection com paginação.
	 *
	 * @template T - Nome da collection (type-safe)
	 * @param collection - Nome da collection
	 * @param params - Parâmetros de listagem
	 * @returns Response paginado com os registros
	 *
	 * @example
	 * ```typescript
	 * const users = await typedClient.list("users", {
	 *   page: 1,
	 *   pageSize: 20,
	 *   appends: ["roles"]
	 * });
	 * ```
	 */
	async list<T extends CollectionName>(
		collection: T,
		params?: ListParams<T>,
	): Promise<PaginatedResponse<CollectionMap[T]>> {
		const response = await this.client.request({
			url: `${collection}:list`,
			method: "GET",
			params: {
				page: params?.page || 1,
				pageSize: params?.pageSize || 20,
				...(params?.sort && params.sort.length > 0 && { sort: params.sort }),
				...(params?.filter && {
					filter:
						typeof params.filter === "string"
							? params.filter
							: JSON.stringify(params.filter),
				}),
				...(params?.appends && { appends: params.appends }),
				...(params?.except && { except: params.except }),
				...(params?.fields && { fields: params.fields }),
			},
		});

		return response.data as PaginatedResponse<CollectionMap[T]>;
	}

	/**
	 * Busca um registro específico por ID.
	 *
	 * @template T - Nome da collection (type-safe)
	 * @param collection - Nome da collection
	 * @param id - ID do registro
	 * @param appends - Relações para incluir no response
	 * @returns Registro completo
	 *
	 * @example
	 * ```typescript
	 * const user = await typedClient.get("users", 123, ["roles", "departments"]);
	 * ```
	 */
	async get<T extends CollectionName>(
		collection: T,
		id: number,
		appends?: Array<keyof CollectionRelationsMap[T]>,
	): Promise<CollectionMap[T]> {
		const response = await this.client.request({
			url: `${collection}:get`,
			method: "GET",
			params: {
				filterByTk: id,
				...(appends && appends.length > 0 && { appends }),
			},
		});

		return response.data as CollectionMap[T];
	}

	/**
	 * Cria um novo registro em uma collection.
	 *
	 * @template T - Nome da collection (type-safe)
	 * @param collection - Nome da collection
	 * @param data - Dados para criação (parciais, campos opcionais)
	 * @returns Registro criado
	 *
	 * @example
	 * ```typescript
	 * const newUser = await typedClient.create("users", {
	 *   email: "user@example.com",
	 *   nickname: "User"
	 * });
	 * ```
	 */
	async create<T extends CollectionName>(
		collection: T,
		data: Partial<CollectionMap[T]>,
	): Promise<CollectionMap[T]> {
		const response = await this.client.request({
			url: `${collection}:create`,
			method: "POST",
			data,
		});

		return response.data as CollectionMap[T];
	}

	/**
	 * Atualiza um registro existente.
	 *
	 * @template T - Nome da collection (type-safe)
	 * @param collection - Nome da collection
	 * @param id - ID do registro
	 * @param data - Dados para atualização (parciais)
	 * @returns Registro atualizado
	 *
	 * @example
	 * ```typescript
	 * const updated = await typedClient.update("users", 123, {
	 *   phone: "123456789"
	 * });
	 * ```
	 */
	async update<T extends CollectionName>(
		collection: T,
		id: number,
		data: Partial<CollectionMap[T]>,
	): Promise<CollectionMap[T]> {
		const response = await this.client.request({
			url: `${collection}:update`,
			method: "POST",
			params: {
				filterByTk: id,
			},
			data,
		});

		return response.data as CollectionMap[T];
	}

	/**
	 * Deleta um registro específico.
	 *
	 * @template T - Nome da collection (type-safe)
	 * @param collection - Nome da collection
	 * @param id - ID do registro
	 *
	 * @example
	 * ```typescript
	 * await typedClient.delete("users", 123);
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
	 * @template T - Nome da collection (type-safe)
	 * @param collection - Nome da collection
	 * @param filter - Filtro opcional
	 * @returns Quantidade de registros
	 *
	 * @example
	 * ```typescript
	 * const count = await typedClient.count("users", {
	 *   status: { $eq: "active" }
	 * });
	 * ```
	 */
	async count<T extends CollectionName>(
		collection: T,
		filter?: Record<string, unknown>,
	): Promise<{ total: number }> {
		const response = await this.client.request({
			url: `${collection}:count`,
			method: "GET",
			params: {
				...(filter && { filter: JSON.stringify(filter) }),
			},
		});

		return response.data as { total: number };
	}
}

/**
 * Instância singleton do client type-safe.
 * Usa o mesmo client base do módulo auth.
 */
export const typedClient = new TypedNocoBaseClient(
	(await import("#/modules/auth/client")).nocobaseClient,
);
