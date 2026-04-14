import { createLogger } from "#/lib/logger";
import { nocobaseClient } from "#/modules/auth/client";
import type {
	ApiRequestConfig,
	ListParams,
	NocoBaseClient,
	PaginatedResponse,
} from "./types";

const log = createLogger("repositories:nocobase");

export class NocoBaseRepository {
	private client: NocoBaseClient;

	constructor(client: NocoBaseClient = nocobaseClient) {
		this.client = client;
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

	async list<T>(
		collection: string,
		params?: ListParams,
	): Promise<PaginatedResponse<T>> {
		log.info("Listing from collection", { collection, params });

		const response = await this.request<PaginatedResponse<T>>({
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

		log.debug("List response", {
			collection,
			total: response.meta?.total,
			page: response.meta?.page,
		});

		return response;
	}

	async get<T>(collection: string, id: number): Promise<T> {
		log.info("Getting from collection", { collection, id });

		const response = await this.request<{ data: T }>({
			url: `${collection}:get`,
			method: "GET",
			params: {
				filterByTk: id,
			},
		});

		return response.data;
	}

	async create<T, CreateDto = Partial<T>>(
		collection: string,
		data: CreateDto,
	): Promise<T> {
		log.info("Creating in collection", { collection });

		const response = await this.request<{ data: T }>({
			url: `${collection}:create`,
			method: "POST",
			data,
		});

		return response.data;
	}

	async update<T, UpdateDto = Partial<T>>(
		collection: string,
		id: number,
		data: UpdateDto,
	): Promise<T> {
		log.info("Updating in collection", { collection, id });

		const response = await this.request<{ data: T }>({
			url: `${collection}:update`,
			method: "POST",
			params: {
				filterByTk: id,
			},
			data,
		});

		return response.data;
	}

	async delete(collection: string, id: number): Promise<void> {
		log.info("Deleting from collection", { collection, id });

		await this.request({
			url: `${collection}:destroy`,
			method: "POST",
			params: {
				filterByTk: id,
			},
		});
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
}

export const nocobaseRepository = new NocoBaseRepository();
