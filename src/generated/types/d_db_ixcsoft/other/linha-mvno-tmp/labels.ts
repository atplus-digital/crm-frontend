/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const LINHAMVNOTMP_FIELD_LABELS = {
	api: "api",
	data_agendamento: "data_agendamento",
	ddd_telefone: "ddd_telefone",
	id: "id",
	id_account_mvno: "id_account_mvno",
	id_assinatura_cliente: "id_assinatura_cliente",
	id_assinatura_cliente_produto: "id_assinatura_cliente_produto",
	id_contrato: "id_contrato",
	id_contrato_integracao: "id_contrato_integracao",
	id_customer_mvno: "id_customer_mvno",
	id_integracao: "id_integracao",
	id_linha_integracao: "id_linha_integracao",
	id_prod_ixc_mvno: "id_prod_ixc_mvno",
	msisdn: "msisdn",
	numero_telefone: "numero_telefone",
	portabilidade: "portabilidade",
	profile_mvno: "profile_mvno",
	simcard: "simcard",
	tipo_numero: "tipo_numero",
} as const;

export const LINHAMVNOTMP_API_LABELS = {
	A: "A",
	I: "I",
} as const;

export const LINHAMVNOTMP_PORTABILIDADE_LABELS = {
	S: "S",
	N: "N",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const linha_mvno_tmpApiSchema = z.enum(["A", "I"], {
	error: () => ({ message: "api: valores válidos são [A, I]" }),
});

export const linha_mvno_tmpPortabilidadeSchema = z.enum(["S", "N"], {
	error: () => ({ message: "portabilidade: valores válidos são [S, N]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type LinhaMvnoTmpApi = z.infer<typeof linha_mvno_tmpApiSchema>;

export type LinhaMvnoTmpPortabilidade = z.infer<
	typeof linha_mvno_tmpPortabilidadeSchema
>;
