import type { ZodError } from "zod";
import type { CustomRequestPayloads } from "./schemas";

// ============================================================================
// Core Types
// ============================================================================

export interface CustomRequestConfig {
	id: string;
	name: string;
	endpoint: string;
	method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
}

export interface CustomRequestState {
	requests: CustomRequestConfig[];
	isLoading: boolean;
	error: string | null;
}

export class CustomRequestValidationError extends Error {
	constructor(
		message: string,
		public readonly zodError?: ZodError,
	) {
		super(message);
		this.name = "CustomRequestValidationError";
	}
}

// ============================================================================
// Derived Types from Registry and Schemas
// ============================================================================

/**
 * Configuration type for a specific request key
 */
export type CustomRequestConfigFor<T extends string> = CustomRequestConfig & {
	id: T;
};

/**
 * Payload type for a specific request key (from schemas)
 */
export type PayloadFor<T extends keyof CustomRequestPayloads> =
	CustomRequestPayloads[T];

/**
 * Union of all valid custom request keys.
 * Derived from CustomRequestPayloads mapped type.
 */
export type CustomRequestKey = keyof CustomRequestPayloads;

/**
 * Maps request keys to their target collection names.
 */
export interface CollectionMap {
	"37yaihkravc": "cliente_contrato";
	"0j7f9fuzuo7": "t_qualirun_info_adicionais";
	h32vk2yid08: "t_negociacoes";
}

/**
 * Type-level function: Get the collection name for a given request key.
 */
export type CollectionFor<T extends CustomRequestKey> = CollectionMap[T];

// ============================================================================
// Collection to Requests Mapping
// ============================================================================

/**
 * Maps collection names to arrays of request keys that target them.
 */
export interface CollectionToRequestsMap {
	cliente_contrato: Array<"37yaihkravc">;
	t_qualirun_info_adicionais: Array<"0j7f9fuzuo7">;
	t_negociacoes: Array<"h32vk2yid08">;
}

/**
 * Runtime mapping from collection names to request keys.
 */
export const COLLECTION_TO_REQUESTS: CollectionToRequestsMap = {
	cliente_contrato: ["37yaihkravc"],
	t_qualirun_info_adicionais: ["0j7f9fuzuo7"],
	t_negociacoes: ["h32vk2yid08"],
};

/**
 * Type-level function: Get all request keys that target a specific collection.
 */
export type RequestsForCollection<T extends keyof CollectionToRequestsMap> =
	CollectionToRequestsMap[T][number];

// ============================================================================
// Service Layer Helper Types
// ============================================================================

/**
 * Options for sending a custom request
 */
export interface SendCustomRequestOptions<
	T extends keyof CustomRequestPayloads,
> {
	requestKey: T;
	payload?: PayloadFor<T>;
	params?: Record<string, unknown>;
}

/**
 * Result from sending a custom request
 */
export interface SendCustomRequestResult<T = unknown> {
	data?: T;
	success: boolean;
	error?: string;
}
