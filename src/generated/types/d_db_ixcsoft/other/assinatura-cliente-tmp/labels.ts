/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const ASSINATURACLIENTETMP_STATUSASSINATURA_LABELS = {
	P: "P",
	A: "A",
	I: "I",
	NF: "NF",
} as const;

export const ASSINATURACLIENTETMP_STATUSFINANCEIRO_LABELS = {
	N: "N",
	P: "P",
	B: "B",
} as const;

export const ASSINATURACLIENTETMP_STATUSVALIDADE_LABELS = {
	N: "N",
	FA: "FA",
	V: "V",
	D: "D",
} as const;

export const ASSINATURACLIENTETMP_TIPOPLANO_LABELS = {
	R: "R",
	C: "C",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const assinatura_cliente_tmpStatusAssinaturaSchema = z.enum(
	["P", "A", "I", "NF"],
	{
		error: () => ({
			message: "status_assinatura: valores válidos são [P, A, I, NF]",
		}),
	},
);

export const assinatura_cliente_tmpStatusFinanceiroSchema = z.enum(
	["N", "P", "B"],
	{
		error: () => ({
			message: "status_financeiro: valores válidos são [N, P, B]",
		}),
	},
);

export const assinatura_cliente_tmpStatusValidadeSchema = z.enum(
	["N", "FA", "V", "D"],
	{
		error: () => ({
			message: "status_validade: valores válidos são [N, FA, V, D]",
		}),
	},
);

export const assinatura_cliente_tmpTipoPlanoSchema = z.enum(["R", "C"], {
	error: () => ({ message: "tipo_plano: valores válidos são [R, C]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type AssinaturaClienteTmpStatusAssinatura = z.infer<
	typeof assinatura_cliente_tmpStatusAssinaturaSchema
>;

export type AssinaturaClienteTmpStatusFinanceiro = z.infer<
	typeof assinatura_cliente_tmpStatusFinanceiroSchema
>;

export type AssinaturaClienteTmpStatusValidade = z.infer<
	typeof assinatura_cliente_tmpStatusValidadeSchema
>;

export type AssinaturaClienteTmpTipoPlano = z.infer<
	typeof assinatura_cliente_tmpTipoPlanoSchema
>;
