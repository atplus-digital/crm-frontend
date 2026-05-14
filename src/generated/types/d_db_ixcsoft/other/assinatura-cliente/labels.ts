/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const ASSINATURACLIENTE_FIELD_LABELS = {
	comissao: "comissao",
	create_time: "create_time",
	data_ativacao: "data_ativacao",
	data_emissao: "data_emissao",
	data_ultimo_pagamento: "data_ultimo_pagamento",
	data_validade: "data_validade",
	descricao: "descricao",
	id: "id",
	id_assinatura_notificacao_grupo: "id_assinatura_notificacao_grupo",
	id_carteira_cobranca: "id_carteira_cobranca",
	id_cliente: "id_cliente",
	id_filial: "id_filial",
	id_tipo_cobranca: "id_tipo_cobranca",
	id_tipo_documento: "id_tipo_documento",
	id_vendedor: "id_vendedor",
	obs: "obs",
	status_assinatura: "status_assinatura",
	status_financeiro: "status_financeiro",
	status_validade: "status_validade",
	tipo_plano: "tipo_plano",
	update_time: "update_time",
} as const;

export const ASSINATURACLIENTE_STATUSASSINATURA_LABELS = {
	P: "P",
	A: "A",
	I: "I",
	NF: "NF",
} as const;

export const ASSINATURACLIENTE_STATUSFINANCEIRO_LABELS = {
	N: "N",
	P: "P",
	B: "B",
} as const;

export const ASSINATURACLIENTE_STATUSVALIDADE_LABELS = {
	N: "N",
	FA: "FA",
	V: "V",
	D: "D",
} as const;

export const ASSINATURACLIENTE_TIPOPLANO_LABELS = {
	R: "R",
	C: "C",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const assinatura_clienteStatusAssinaturaSchema = z.enum(
	["P", "A", "I", "NF"],
	{
		error: () => ({
			message: "status_assinatura: valores válidos são [P, A, I, NF]",
		}),
	},
);

export const assinatura_clienteStatusFinanceiroSchema = z.enum(
	["N", "P", "B"],
	{
		error: () => ({
			message: "status_financeiro: valores válidos são [N, P, B]",
		}),
	},
);

export const assinatura_clienteStatusValidadeSchema = z.enum(
	["N", "FA", "V", "D"],
	{
		error: () => ({
			message: "status_validade: valores válidos são [N, FA, V, D]",
		}),
	},
);

export const assinatura_clienteTipoPlanoSchema = z.enum(["R", "C"], {
	error: () => ({ message: "tipo_plano: valores válidos são [R, C]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type AssinaturaClienteStatusAssinatura = z.infer<
	typeof assinatura_clienteStatusAssinaturaSchema
>;

export type AssinaturaClienteStatusFinanceiro = z.infer<
	typeof assinatura_clienteStatusFinanceiroSchema
>;

export type AssinaturaClienteStatusValidade = z.infer<
	typeof assinatura_clienteStatusValidadeSchema
>;

export type AssinaturaClienteTipoPlano = z.infer<
	typeof assinatura_clienteTipoPlanoSchema
>;
