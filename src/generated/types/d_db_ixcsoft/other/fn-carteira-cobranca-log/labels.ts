/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const FNCARTEIRACOBRANCALOG_FIELD_LABELS = {
	ambiente: "ambiente",
	created_at: "created_at",
	id: "id",
	id_carteira_cobranca: "id_carteira_cobranca",
	log: "log",
	metodo_http: "metodo_http",
	request_body: "request_body",
	request_headers: "request_headers",
	response_body: "response_body",
	response_http_status: "response_http_status",
	status: "status",
	url: "url",
} as const;

export const FNCARTEIRACOBRANCALOG_AMBIENTE_LABELS = {
	P: "P",
	H: "H",
	T: "T",
} as const;

export const FNCARTEIRACOBRANCALOG_STATUS_LABELS = {
	S: "S",
	F: "F",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const fn_carteira_cobranca_logAmbienteSchema = z.enum(["P", "H", "T"], {
	error: () => ({ message: "ambiente: valores válidos são [P, H, T]" }),
});

export const fn_carteira_cobranca_logStatusSchema = z.enum(["S", "F"], {
	error: () => ({ message: "status: valores válidos são [S, F]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type FnCarteiraCobrancaLogAmbiente = z.infer<
	typeof fn_carteira_cobranca_logAmbienteSchema
>;

export type FnCarteiraCobrancaLogStatus = z.infer<
	typeof fn_carteira_cobranca_logStatusSchema
>;
