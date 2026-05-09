/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const RELATORIOVDSAIDA_TIPODATAEMISSAO_LABELS = {
	P: "P",
	D: "D",
} as const;

export const RELATORIOVDSAIDA_TIPODATASAIDA_LABELS = {
	P: "P",
	D: "D",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const relatorio_vd_saidaTipoDataEmissaoSchema = z.enum(["P", "D"], {
	error: () => ({ message: "tipo_data_emissao: valores válidos são [P, D]" }),
});

export const relatorio_vd_saidaTipoDataSaidaSchema = z.enum(["P", "D"], {
	error: () => ({ message: "tipo_data_saida: valores válidos são [P, D]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type RelatorioVdSaidaTipoDataEmissao = z.infer<
	typeof relatorio_vd_saidaTipoDataEmissaoSchema
>;

export type RelatorioVdSaidaTipoDataSaida = z.infer<
	typeof relatorio_vd_saidaTipoDataSaidaSchema
>;
