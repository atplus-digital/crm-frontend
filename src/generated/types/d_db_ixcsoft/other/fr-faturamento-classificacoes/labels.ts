/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const FRFATURAMENTOCLASSIFICACOES_FIELD_LABELS = {
	ativo: "ativo",
	descricao: "descricao",
	id: "id",
	porcentagem: "porcentagem",
	ultima_atualizacao: "ultima_atualizacao",
} as const;

export const FRFATURAMENTOCLASSIFICACOES_ATIVO_LABELS = {
	S: "S",
	N: "N",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const fr_faturamento_classificacoesAtivoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "ativo: valores válidos são [S, N]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type FrFaturamentoClassificacoesAtivo = z.infer<
	typeof fr_faturamento_classificacoesAtivoSchema
>;
