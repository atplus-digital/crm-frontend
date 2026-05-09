/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const CAIXASUSUARIO_CAIXAPADRAO_LABELS = {
	S: "S",
	N: "N",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const caixas_usuarioCaixaPadraoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "caixa_padrao: valores válidos são [S, N]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type CaixasUsuarioCaixaPadrao = z.infer<
	typeof caixas_usuarioCaixaPadraoSchema
>;
