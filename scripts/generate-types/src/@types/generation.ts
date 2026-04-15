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

export interface GeneratedTypes {
	scalars: Map<string, string>;
	relations: Map<string, RelationInfo>;
}

export type CollectionTypesMap = Record<string, GeneratedTypes>;

export interface IxcCollectionTypesResult {
	[collectionName: string]: {
		base: string;
		relations: string;
		relationKey: string;
	};
}
