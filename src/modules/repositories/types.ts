import type { APIClient } from "@nocobase/sdk";

export interface ApiRequestConfig {
	url: string;
	method?: string;
	params?: Record<string, unknown>;
	data?: unknown;
	headers?: Record<string, string>;
}

export interface PaginatedResponse<T> {
	data: T[];
	meta: {
		total?: number;
		totalPage?: number;
		page?: number;
		pageSize?: number;
		filterCount?: number;
		print?: number;
		[key: string]: unknown;
	};
}

export interface IRepository<
	T,
	CreateDto = Partial<T>,
	UpdateDto = Partial<T>,
> {
	findAll(params?: ListParams): Promise<PaginatedResponse<T>>;
	findById(id: number): Promise<T>;
	create(data: CreateDto): Promise<T>;
	update(id: number, data: UpdateDto): Promise<T>;
	delete(id: number): Promise<void>;
}

export interface ListParams {
	page?: number;
	pageSize?: number;
	sort?: string[];
	filter?: Record<string, unknown> | string;
	appends?: string[];
}

export type NocoBaseClient = APIClient;
