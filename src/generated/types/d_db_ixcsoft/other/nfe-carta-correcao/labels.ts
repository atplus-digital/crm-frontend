/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const NFECARTACORRECAO_EMITIDA_LABELS = {
	S: "S",
	N: "N",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const nfe_carta_correcaoEmitidaSchema = z.enum(["S", "N"], {
	error: () => ({ message: "emitida: valores válidos são [S, N]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type NfeCartaCorrecaoEmitida = z.infer<
	typeof nfe_carta_correcaoEmitidaSchema
>;
