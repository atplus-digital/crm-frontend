/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const SUCANALATENDIMENTO_FIELD_LABELS = {
	ativo: "ativo",
	canal_atendimento: "canal_atendimento",
	descricao: "descricao",
	id: "id",
} as const;

export const SUCANALATENDIMENTO_ATIVO_LABELS = {
	S: "S",
	N: "N",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const su_canal_atendimentoAtivoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "ativo: valores válidos são [S, N]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type SuCanalAtendimentoAtivo = z.infer<
	typeof su_canal_atendimentoAtivoSchema
>;
