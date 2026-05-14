/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const PVMARKETING_FIELD_LABELS = {
	cliente_envia: "cliente_envia",
	id: "id",
	texto: "texto",
	tipo_msg: "tipo_msg",
} as const;

export const PVMARKETING_TIPOMSG_LABELS = {
	S: "S",
	E: "E",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const pv_marketingTipoMsgSchema = z.enum(["S", "E"], {
	error: () => ({ message: "tipo_msg: valores válidos são [S, E]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type PvMarketingTipoMsg = z.infer<typeof pv_marketingTipoMsgSchema>;
