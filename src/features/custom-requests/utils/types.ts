import { z } from "zod";

// ─── Request Keys ───────────────────────────────────────────────────────────

/** All registered custom request keys (manual + generated) */
export type CustomRequestKey =
	| "criarContratoIxc"
	| "qualirunInfo"
	| "n8nCompras";

// ─── Payload Types ──────────────────────────────────────────────────────────

/** Payload for IXC contract creation request */
export interface CriarContratoIxcPayload {
	id_contrato: number;
	id_cliente: number;
	produto: string;
	quantidade?: number;
}

/** Payload for Qualirun info lookup request */
export interface QualirunInfoPayload {
	cnpj: string;
	razao_social?: string;
}

/** Payload for N8N compras workflow request */
export interface N8nComprasPayload {
	id_pedido: number;
	id_fornecedor: number;
	valor: number;
}

// ─── Response Types ─────────────────────────────────────────────────────────

/** Response from IXC contract creation */
export interface CriarContratoIxcResponse {
	sucesso: boolean;
	id_contrato_gerado?: number;
	mensagem?: string;
}

/** Response from Qualirun info lookup */
export interface QualirunInfoResponse {
	encontrado: boolean;
	dados?: {
		razao_social: string;
		cnpj: string;
		status: string;
	};
}

/** Response from N8N compras workflow */
export interface N8nComprasResponse {
	sucesso: boolean;
	id_workflow_execucao?: string;
	mensagem?: string;
}

// ─── Payload / Response Maps ────────────────────────────────────────────────

/** Maps each request key to its payload type */
export interface CustomRequestPayloads {
	criarContratoIxc: CriarContratoIxcPayload;
	qualirunInfo: QualirunInfoPayload;
	n8nCompras: N8nComprasPayload;
}

/** Maps each request key to its response type */
export interface CustomRequestResponses {
	criarContratoIxc: CriarContratoIxcResponse;
	qualirunInfo: QualirunInfoResponse;
	n8nCompras: N8nComprasResponse;
}

// ─── Request Options ────────────────────────────────────────────────────────

/** HTTP method for custom requests */
export type CustomRequestMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

/** HTTP request options for a custom request */
export interface CustomRequestOptions {
	method: CustomRequestMethod;
	url: string;
	timeout?: number;
	headers?: Record<string, string>;
}

// ─── Registry Entry ─────────────────────────────────────────────────────────

/** Zod schema for validating request options */
export const customRequestOptionsSchema = z.object({
	method: z.enum(["GET", "POST", "PUT", "PATCH", "DELETE"]).default("POST"),
	url: z.string().url(),
	timeout: z.number().optional(),
	headers: z.record(z.string(), z.string()).optional(),
});

/** Registry entry for a single custom request */
export interface CustomRequestEntry {
	key: CustomRequestKey;
	name: string;
	collection: string;
	options: CustomRequestOptions;
	payloadSchema: z.ZodType<unknown>;
	responseSchema?: z.ZodType<unknown>;
}

// ─── Helper Types ───────────────────────────────────────────────────────────

/** Extract payload type for a given request key */
export type PayloadFor<K extends CustomRequestKey> = CustomRequestPayloads[K];

/** Extract response type for a given request key */
export type ResponseFor<K extends CustomRequestKey> = CustomRequestResponses[K];

/** Extract collection name for a given request key (resolved at registry level) */
export type CollectionFor = string;

// ─── Send Request Types ─────────────────────────────────────────────────────

/** Options for sending a custom request */
export interface SendRequestOptions<K extends CustomRequestKey> {
	payload: PayloadFor<K>;
	signal?: AbortSignal;
}

/** Result of sending a custom request */
export interface SendRequestResult<K extends CustomRequestKey> {
	success: boolean;
	data: ResponseFor<K>;
}

// ─── Template Variables ─────────────────────────────────────────────────────

/** Template variable context for URL/data interpolation */
export interface TemplateContext {
	currentRecord: Record<string, unknown>;
	currentUser: {
		id: number;
		email: string;
		username: string;
	};
	currentTime: string;
}

/** Zod schema for validating template context */
export const templateContextSchema = z.object({
	currentRecord: z.record(z.string(), z.unknown()),
	currentUser: z.object({
		id: z.number(),
		email: z.string(),
		username: z.string(),
	}),
	currentTime: z.string(),
});
