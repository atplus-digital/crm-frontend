/**
 * Representa um mapeamento de collection para seu schema Zod.
 */
export interface CollectionSchemaMapping {
	/** Nome da collection no NocoBase (ex: t_negociacoes, cliente_contrato) */
	collectionName: string;
	/** DataSource key (ex: main, d_db_ixcsoft) */
	dataSourceKey: string;
	/** Path relativo para o arquivo do schema (ex: #/generated/types/nocobase/negociacoes) */
	schemaImportPath: string;
	/** Nome do schema principal exportado (ex: negociacoesSchema) */
	schemaName: string;
	/** Nome do schema base exportado (ex: negociacoesBaseSchema) */
	baseSchemaName: string;
	/** Campos top-level disponíveis no schema da collection para validação de .pick() */
	availableFields?: Set<string>;
}

/**
 * Resultado do carregamento de schemas - informações sobre collections não encontradas.
 */
export interface SchemaLoadResult {
	/** Mapeamentos de collections encontrados */
	mappings: CollectionSchemaMapping[];
	/** Registry dos schemas carregados */
	registry: SchemaRegistry;
	/** Collections referenciadas mas não encontradas nos schemas */
	notFound: CollectionSchemaMapping[];
}

/**
 * Coleção de schemas carregados indexados por collection name.
 */
export type SchemaRegistry = Map<string, CollectionSchemaMapping>;

/**
 * Representa uma collection de relação que não foi encontrada nos schemas.
 * Usado para reportar ao usuário quais collections ele precisa inserir
 * para completar as relações referenciadas nos custom requests.
 */
export interface RelationCollectionNotFound {
	[key: string]: string;
	relationCollectionName: string;
	relationFieldName: string;
	dataSourceKey: string;
	parentCollectionName: string;
	requestKey: string;
	requestName: string;
}
