export type { NocoBaseFieldInterface } from "./nocobase-field-interfaces";

export interface NocoBaseCollection {
	name: string;
	title?: string;
}

export interface NocoBaseField {
	name: string;
	type: string;
	interface:
		| import("./nocobase-field-interfaces").NocoBaseFieldInterface
		| null;
	target?: string | null;
	uiSchema?: {
		enum?: Array<{
			value: string | number;
			label: string;
		}>;
		title?: string;
	};
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
