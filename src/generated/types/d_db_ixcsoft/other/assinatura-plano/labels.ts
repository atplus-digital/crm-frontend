/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const ASSINATURAPLANO_ATIVO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const ASSINATURAPLANO_TIPOPLANO_LABELS = {
	R: "R",
	C: "C",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const assinatura_planoAtivoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "ativo: valores válidos são [S, N]" }),
});

export const assinatura_planoTipoPlanoSchema = z.enum(["R", "C"], {
	error: () => ({ message: "tipo_plano: valores válidos são [R, C]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type AssinaturaPlanoAtivo = z.infer<typeof assinatura_planoAtivoSchema>;

export type AssinaturaPlanoTipoPlano = z.infer<
	typeof assinatura_planoTipoPlanoSchema
>;
