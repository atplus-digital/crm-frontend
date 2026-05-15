import type { APIClient } from "@nocobase/sdk";

export interface ApiRequestConfig {
	url: string;
	method?: string;
	params?: Record<string, unknown>;
	data?: unknown;
	headers?: Record<string, string>;
	signal?: AbortSignal;
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

export interface ListParams {
	page?: number;
	pageSize?: number;
	sort?: string[];
	filter?: Record<string, unknown> | string;
	appends?: string[];
	fields?: string[];
	paginate?: boolean;
}

export type NocoBaseClient = APIClient;
