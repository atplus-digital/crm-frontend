export interface DataSourceCollection {
	name: string;
	title?: string;
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
 * Interface genérica para clientes de datasource
 * Permite que o script seja agnóstico em relação à fonte de dados
 */
export interface DataSourceClient {
	readonly baseUrl: string;

	fetchCollections(): Promise<DataSourceCollection[]>;

	/**
	 * Busca campos de uma collection.
	 * @returns Objeto com campos e flag indicando se o schema foi obtido pela rota primária.
	 *         `schemaAvailable: false` indica que a rota primária falhou (ex: 404) e foi usado fallback.
	 */
	fetchCollectionFields(
		collectionName: string,
	): Promise<{ fields: DataSourceField[]; schemaAvailable: boolean }>;

	inferEnumsFromData(
		collectionName: string,
		fieldNames: string[],
		sampleSize?: number,
	): Promise<{ enums: InferredEnumsMap; rejected: RejectedFieldsMap }>;

	fetchCollectionSample(
		collectionName: string,
		pageSize?: number,
	): Promise<Array<Record<string, unknown>>>;
}
