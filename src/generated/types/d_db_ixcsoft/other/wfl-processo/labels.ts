/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const WFLPROCESSO_FIELD_LABELS = {
	ativo: "ativo",
	descricao: "descricao",
	id: "id",
	id_depto: "id_depto",
	operador_ultima_atualizacao: "operador_ultima_atualizacao",
	ultima_atualizacao: "ultima_atualizacao",
} as const;

export const WFLPROCESSO_ATIVO_LABELS = {
	S: "S",
	N: "N",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const wfl_processoAtivoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "ativo: valores válidos são [S, N]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type WflProcessoAtivo = z.infer<typeof wfl_processoAtivoSchema>;
