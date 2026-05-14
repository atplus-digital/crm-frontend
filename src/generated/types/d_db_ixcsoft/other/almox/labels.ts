/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const ALMOX_FIELD_LABELS = {
	ativo: "ativo",
	descricao: "descricao",
	id: "id",
	id_filial: "id_filial",
	requisitar_preferencialmente_de: "requisitar_preferencialmente_de",
} as const;

export const ALMOX_ATIVO_LABELS = {
	S: "S",
	N: "N",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const almoxAtivoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "ativo: valores válidos são [S, N]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type AlmoxAtivo = z.infer<typeof almoxAtivoSchema>;
