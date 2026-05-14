/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const VOIPURA_FIELD_LABELS = {
	descricao: "descricao",
	gravacao: "gravacao",
	id: "id",
	id_modulo_entrada: "id_modulo_entrada",
} as const;

export const VOIPURA_GRAVACAO_LABELS = {
	S: "S",
	N: "N",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const voip_uraGravacaoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "gravacao: valores válidos são [S, N]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type VoipUraGravacao = z.infer<typeof voip_uraGravacaoSchema>;
