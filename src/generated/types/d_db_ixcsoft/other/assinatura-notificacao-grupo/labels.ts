/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const ASSINATURANOTIFICACAOGRUPO_FIELD_LABELS = {
	ativo: "ativo",
	create_time: "create_time",
	descricao: "descricao",
	id: "id",
	update_time: "update_time",
} as const;

export const ASSINATURANOTIFICACAOGRUPO_ATIVO_LABELS = {
	S: "S",
	N: "N",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const assinatura_notificacao_grupoAtivoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "ativo: valores válidos são [S, N]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type AssinaturaNotificacaoGrupoAtivo = z.infer<
	typeof assinatura_notificacao_grupoAtivoSchema
>;
