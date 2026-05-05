/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const LINHAMVNO_API_LABELS = {
	A: "Na API e no IXC",
	I: "Apenas no IXC",
} as const;

export const LINHAMVNO_ESIM_LABELS = {
	S: "Sim",
	N: "Não",
} as const;

export const LINHAMVNO_PORTABILIDADE_LABELS = {
	S: "Sim",
	N: "Não",
} as const;

export const LINHAMVNO_TIPONUMERO_LABELS = {
	1: "Normal",
	2: "Gold",
	3: "DID Móvel",
	4: "M2M",
	5: "M2M Especial",
	6: "Teste",
	7: "QA",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const linha_mvnoApiSchema = z.enum(["A", "I"], {
	error: () => ({
		message: "api: valores válidos são [Na API e no IXC, Apenas no IXC]",
	}),
});

export const linha_mvnoEsimSchema = z.enum(["S", "N"], {
	error: () => ({ message: "esim: valores válidos são [Sim, Não]" }),
});

export const linha_mvnoPortabilidadeSchema = z.enum(["S", "N"], {
	error: () => ({ message: "portabilidade: valores válidos são [Sim, Não]" }),
});

export const linha_mvnoTipoNumeroSchema = z.enum(
	["1", "2", "3", "4", "5", "6", "7"],
	{
		error: () => ({
			message:
				"tipo_numero: valores válidos são [Normal, Gold, DID Móvel, M2M, M2M Especial, Teste, QA]",
		}),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type LinhaMvnoApi = z.infer<typeof linha_mvnoApiSchema>;

export type LinhaMvnoEsim = z.infer<typeof linha_mvnoEsimSchema>;

export type LinhaMvnoPortabilidade = z.infer<
	typeof linha_mvnoPortabilidadeSchema
>;

export type LinhaMvnoTipoNumero = z.infer<typeof linha_mvnoTipoNumeroSchema>;
