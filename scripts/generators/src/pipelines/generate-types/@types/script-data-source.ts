export interface DataSourceCollection {
	name: string;
	title?: string;
	/** Fields returned by the API (collections:list returns fields embedded) */
	fields?: DataSourceField[];
}

export interface RejectedField {
	fieldName: string;
	uniqueValues: number;
	totalRecords: number;
	reason: string;
	suggestion?: string;
}

export type RejectedFieldsMap = Record<string, RejectedField>;

export interface DataSourceField {
	name: string;
	type: string;
	interface?: string | null;
	target?: string | null;
	uiSchema?: {
		enum?: Array<{
			value: string | number;
			label: string;
		}>;
		title?: string;
	};
}

export interface InferredEnumsMap {
	[fieldName: string]: {
		values: string[];
		labels: Record<string, string>;
		cardinality: number;
		totalRecords: number;
		origin: "api" | "adapter" | "inferencia";
	};
}

/**
 * Interface genérica para clientes de datasource.
 * Permite que o script seja agnóstico em relação à fonte de dados.
 */
export interface DataSourceClient {
	readonly baseUrl: string;

	fetchCollections(dataSourceKey: string): Promise<DataSourceCollection[]>;
}
