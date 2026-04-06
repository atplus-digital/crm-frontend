export interface NocoBaseCollection {
	name: string;
	title?: string;
}

export interface NocoBaseField {
	name: string;
	type: string;
	interface: string;
	target?: string;
}

export interface NocoBaseCollectionResponse {
	data: {
		collection: NocoBaseCollection;
		fields: NocoBaseField[];
	};
}

export interface NocoBaseCollectionsListResponse {
	data: NocoBaseCollection[];
}

export interface GeneratedTypes {
	scalars: Map<string, string>;
	relations: Map<string, { type: string; targetCollection: string }>;
}

export interface CollectionTypesMap {
	[collectionName: string]: GeneratedTypes;
}
