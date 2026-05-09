/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const FATURA_GERAESTOQUE_LABELS = {
	S: "S",
	N: "N",
} as const;

export const FATURA_ISENTO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const FATURA_PARCELAPROPORCIONALGERADASUSPENSAO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const FATURA_PREVISAO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const FATURA_STATUS_LABELS = {
	A: "A",
	F: "F",
	C: "C",
	D: "D",
} as const;

export const FATURA_TIPOCOBRANCA_LABELS = {
	P: "P",
	I: "I",
	E: "E",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const faturaGeraEstoqueSchema = z.enum(["S", "N"], {
	error: () => ({ message: "gera_estoque: valores válidos são [S, N]" }),
});

export const faturaIsentoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "isento: valores válidos são [S, N]" }),
});

export const faturaParcelaProporcionalGeradaSuspensaoSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message:
				"parcela_proporcional_gerada_suspensao: valores válidos são [S, N]",
		}),
	},
);

export const faturaPrevisaoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "previsao: valores válidos são [S, N]" }),
});

export const faturaStatusSchema = z.enum(["A", "F", "C", "D"], {
	error: () => ({ message: "status: valores válidos são [A, F, C, D]" }),
});

export const faturaTipoCobrancaSchema = z.enum(["P", "I", "E"], {
	error: () => ({ message: "tipo_cobranca: valores válidos são [P, I, E]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type FaturaGeraEstoque = z.infer<typeof faturaGeraEstoqueSchema>;

export type FaturaIsento = z.infer<typeof faturaIsentoSchema>;

export type FaturaParcelaProporcionalGeradaSuspensao = z.infer<
	typeof faturaParcelaProporcionalGeradaSuspensaoSchema
>;

export type FaturaPrevisao = z.infer<typeof faturaPrevisaoSchema>;

export type FaturaStatus = z.infer<typeof faturaStatusSchema>;

export type FaturaTipoCobranca = z.infer<typeof faturaTipoCobrancaSchema>;
