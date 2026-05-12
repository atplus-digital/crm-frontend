export type { NocoBaseFieldInterface } from "./nocobase-field-interfaces";

export interface NocoBaseCredentials {
	baseUrl: string;
	token: string;
	timeoutMs: number;
}
