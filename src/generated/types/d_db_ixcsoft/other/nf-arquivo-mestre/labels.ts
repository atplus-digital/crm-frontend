/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const NFARQUIVOMESTRE_FINALIDADE_LABELS = {
	S: "S",
	N: "N",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const nf_arquivo_mestreFinalidadeSchema = z.enum(["S", "N"], {
	error: () => ({ message: "finalidade: valores válidos são [S, N]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type NfArquivoMestreFinalidade = z.infer<
	typeof nf_arquivo_mestreFinalidadeSchema
>;
