import type { z } from "zod";

export type CustomRequestMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export interface CustomRequestOptions {
	method: CustomRequestMethod;
	url: string;
	timeout?: number;
	headers?: Record<string, string>;
}

export interface CustomRequestEntry {
	key: string;
	name: string;
	collection: string;
	method: CustomRequestMethod;
	url?: string;
	timeout?: number;
	headers?: Record<string, string>;
	payloadSchema: z.ZodType<unknown>;
	responseSchema?: z.ZodType<unknown>;
	_hasEnhancedSchema?: boolean;
}

export interface SendRequestOptions {
	payload: unknown;
	signal?: AbortSignal;
}

export interface SendRequestResult {
	success: boolean;
	data: unknown;
}

export interface TemplateContext {
	currentRecord: Record<string, unknown>;
	currentUser: {
		id: number;
		email: string;
		username: string;
	};
	currentTime: string;
}
