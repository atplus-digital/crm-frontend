/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const UNIDADES_FIELD_LABELS = {
	ativo: "ativo",
	codigo: "codigo",
	descricao: "descricao",
	id: "id",
	sigla: "sigla",
	ultima_atualizacao: "ultima_atualizacao",
	ultima_atualizacao_original: "ultima_atualizacao_original",
} as const;

export const UNIDADES_ATIVO_LABELS = {
	S: "S",
	N: "N",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const unidadesAtivoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "ativo: valores válidos são [S, N]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type UnidadesAtivo = z.infer<typeof unidadesAtivoSchema>;
