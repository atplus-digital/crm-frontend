/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const RELATORIOPATRIMONIO_TIPODATAAQUISICAO_LABELS = {
	D: "D",
	P: "P",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const relatorio_patrimonioTipoDataAquisicaoSchema = z.enum(["D", "P"], {
	error: () => ({ message: "tipo_data_aquisicao: valores válidos são [D, P]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type RelatorioPatrimonioTipoDataAquisicao = z.infer<
	typeof relatorio_patrimonioTipoDataAquisicaoSchema
>;
