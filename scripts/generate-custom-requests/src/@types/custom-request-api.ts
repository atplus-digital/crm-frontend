/**
 * Representa um custom request retornado pela API NocoBase.
 */
export interface CustomRequestApiEntry {
	key: string;
	name: string;
	options?: {
		method?: string;
		url?: string;
		collectionName?: string;
		dataSourceKey?: string;
		data?: Record<string, unknown>;
	};
}

/**
 * Resposta da API NocoBase para `customRequests:list`.
 */
export interface CustomRequestsListResponse {
	data: CustomRequestApiEntry[];
}
