export type RelationInterface =
	| "m2o"
	| "belongsTo"
	| "o2m"
	| "hasMany"
	| "m2m"
	| "manyToMany"
	| "oho"
	| "obo"
	| "mbm"
	| "belongsToArray"
	| "hasOne";

export type RelationCardinality = "one" | "many";

export interface RelationInfo {
	type: RelationInterface;
	targetCollection: string;
}

export interface EnumOption {
	value: string | number;
	label: string;
}

export interface GeneratedTypes {
	scalars: Map<string, string>;
	relations: Map<string, RelationInfo>;
	enums: Map<string, EnumOption[]>;
	/**
	 * Indica se o schema da collection foi obtido com sucesso pela rota primária.
	 * `false` significa que a rota primária falhou (ex: 404) e foi usado fallback via sample.
	 * Usado para decidir se a inferência de enums deve rodar como fallback.
	 */
	schemaAvailable: boolean;
}

export type CollectionTypesMap = Record<string, GeneratedTypes>;
