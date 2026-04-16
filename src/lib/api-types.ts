// Tipos compartilhados para respostas de API
// ⚠️ Usado como fonte única para tipos de paginação

export interface PaginatedResponse<T> {
	data: T[];
	meta: {
		total?: number;
		totalPage?: number;
		page?: number;
		pageSize?: number;
		filterCount?: number;
		[key: string]: unknown;
	};
}
