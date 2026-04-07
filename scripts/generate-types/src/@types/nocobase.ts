export interface NocoBaseCollection {
	name: string;
	title?: string;
}

export interface NocoBaseField {
	name: string;
	type: string;
	interface: string | null;
	target?: string | null;
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

export interface NocoBaseCredentials {
	baseUrl: string;
	token: string;
	timeoutMs: number;
}
