/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const FNRENEGOCIACAO_FIELD_LABELS = {
	data_emissao: "data_emissao",
	data_exclusao: "data_exclusao",
	data_finalizada: "data_finalizada",
	id: "id",
	id_carteira_cobranca: "id_carteira_cobranca",
	id_cliente: "id_cliente",
	id_condicao_pagamento: "id_condicao_pagamento",
	id_conta: "id_conta",
	id_contrato: "id_contrato",
	id_filial: "id_filial",
	operador_responsavel_final: "operador_responsavel_final",
	operador_responsavel_inicial: "operador_responsavel_inicial",
	previsao: "previsao",
	status: "status",
	valor_acrescimos: "valor_acrescimos",
	valor_descontos: "valor_descontos",
	valor_parcelas: "valor_parcelas",
	valor_total: "valor_total",
} as const;

export const FNRENEGOCIACAO_PREVISAO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const FNRENEGOCIACAO_STATUS_LABELS = {
	A: "A",
	F: "F",
	E: "E",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const fn_renegociacaoPrevisaoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "previsao: valores válidos são [S, N]" }),
});

export const fn_renegociacaoStatusSchema = z.enum(["A", "F", "E"], {
	error: () => ({ message: "status: valores válidos são [A, F, E]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type FnRenegociacaoPrevisao = z.infer<
	typeof fn_renegociacaoPrevisaoSchema
>;

export type FnRenegociacaoStatus = z.infer<typeof fn_renegociacaoStatusSchema>;
