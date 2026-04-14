import type { APIClient } from "@nocobase/sdk";

import type {
	CollectionMap,
	CollectionName,
	CollectionRelationsMap,
} from "#/@types/generated/crm/collections";
import { createLogger } from "#/lib/logger";
import { nocobaseClient } from "#/modules/auth/client";
import type {
	ApiRequestConfig,
	ListParams,
	NocoBaseClient,
	PaginatedResponse,
} from "./types";

const log = createLogger("repositories:nocobase");

/**
 * Wrapper type-safe para o APIClient do NocoBase.
 *
 * Restringe operações apenas às collections que existem no schema gerado,
 * proporcionando type safety completo e auto-complete na IDE.
 */
class TypedNocoBaseClient {
	constructor(private client: APIClient) {}

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

export class NocoBaseRepository {
	private client: NocoBaseClient;
	private typedClient: TypedNocoBaseClient;

	constructor(client: NocoBaseClient = nocobaseClient) {
		this.client = client;
		this.typedClient = new TypedNocoBaseClient(client);
	}

	async request<T>(config: ApiRequestConfig): Promise<T> {
		log.debug("NocoBase request", {
			url: config.url,
			method: config.method || "GET",
		});

		try {
			const response = await this.client.request(config);
			return response.data as T;
		} catch (error) {
			log.error("NocoBase request failed", {
				url: config.url,
				error: error instanceof Error ? error.message : String(error),
			});
			throw error;
		}
	}

	async list<T extends CollectionName>(
		collection: T,
		params?: ListParams & {
			appends?: Array<keyof CollectionRelationsMap[T]>;
		},
	): Promise<PaginatedResponse<CollectionMap[T]>> {
		log.info("Listing from collection", { collection, params });

		const response = await this.typedClient.list(collection, params);

		log.debug("List response", {
			collection,
			total: response.meta?.total,
			page: response.meta?.page,
		});

		return response;
	}

	async get<T extends CollectionName>(
		collection: T,
		id: number,
		options?: {
			appends?: Array<keyof CollectionRelationsMap[T]>;
			fields?: string[];
			except?: string[];
		},
	): Promise<CollectionMap[T]> {
		log.info("Getting from collection", { collection, id });

		return await this.typedClient.get(collection, id, options);
	}

	async create<T extends CollectionName>(
		collection: T,
		data: Partial<CollectionMap[T]>,
	): Promise<CollectionMap[T]> {
		log.info("Creating in collection", { collection });

		return await this.typedClient.create(collection, data);
	}

	async update<T extends CollectionName>(
		collection: T,
		id: number,
		data: Partial<CollectionMap[T]>,
	): Promise<CollectionMap[T]> {
		log.info("Updating in collection", { collection, id });

		return await this.typedClient.update(collection, id, data);
	}

	async delete<T extends CollectionName>(
		collection: T,
		id: number,
	): Promise<void> {
		log.info("Deleting from collection", { collection, id });

		await this.typedClient.delete(collection, id);
	}

	async signIn(credentials: {
		email: string;
		password: string;
	}): Promise<{ data: { data: { token: string; user: unknown } } }> {
		log.info("Sign in attempt", { email: credentials.email });
		return await this.client.auth.signIn(credentials);
	}

	async signOut(): Promise<void> {
		log.info("Signing out");
		await this.client.auth.signOut();
	}

	async checkAuth<T>(): Promise<T> {
		log.debug("Checking auth status");
		const response = await this.request<{ data: T }>({
			url: "auth:check",
			method: "GET",
			headers: {
				"X-Authenticator": "basic",
			},
		});
		return response.data;
	}

	clearToken(): void {
		this.client.auth.token = "";
	}

	async count<T extends CollectionName>(
		collection: T,
		params?: { filter?: Record<string, unknown> },
	): Promise<{ count: number }> {
		log.info("Counting in collection", { collection });

		return await this.typedClient.count(collection, params);
	}
}

export const nocobaseRepository = new NocoBaseRepository();
