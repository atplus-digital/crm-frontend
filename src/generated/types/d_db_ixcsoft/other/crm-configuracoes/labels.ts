/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const CRMCONFIGURACOES_FIELD_LABELS = {
	chat_habilita: "chat_habilita",
	id: "id",
} as const;

export const CRMCONFIGURACOES_CHATHABILITA_LABELS = {
	S: "S",
	N: "N",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const crm_configuracoesChatHabilitaSchema = z.enum(["S", "N"], {
	error: () => ({ message: "chat_habilita: valores válidos são [S, N]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type CrmConfiguracoesChatHabilita = z.infer<
	typeof crm_configuracoesChatHabilitaSchema
>;
