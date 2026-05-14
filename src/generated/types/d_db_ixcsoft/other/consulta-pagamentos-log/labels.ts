/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const CONSULTAPAGAMENTOSLOG_FIELD_LABELS = {
	created_at: "created_at",
	id: "id",
	id_carteira_cobranca: "id_carteira_cobranca",
	log: "log",
	method: "method",
	request_body: "request_body",
	request_headers: "request_headers",
	response_body: "response_body",
	response_http_status: "response_http_status",
	status: "status",
	tipo_integracao: "tipo_integracao",
	url: "url",
} as const;

export const CONSULTAPAGAMENTOSLOG_STATUS_LABELS = {
	S: "S",
	F: "F",
} as const;

export const CONSULTAPAGAMENTOSLOG_TIPOINTEGRACAO_LABELS = {
	PIX: "PIX",
	GATEWAY: "GATEWAY",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const consulta_pagamentos_logStatusSchema = z.enum(["S", "F"], {
	error: () => ({ message: "status: valores válidos são [S, F]" }),
});

export const consulta_pagamentos_logTipoIntegracaoSchema = z.enum(
	["PIX", "GATEWAY"],
	{
		error: () => ({
			message: "tipo_integracao: valores válidos são [PIX, GATEWAY]",
		}),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type ConsultaPagamentosLogStatus = z.infer<
	typeof consulta_pagamentos_logStatusSchema
>;

export type ConsultaPagamentosLogTipoIntegracao = z.infer<
	typeof consulta_pagamentos_logTipoIntegracaoSchema
>;
