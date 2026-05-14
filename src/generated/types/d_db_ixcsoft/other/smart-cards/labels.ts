/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const SMARTCARDS_FIELD_LABELS = {
	id: "id",
	pin: "pin",
	situacao: "situacao",
	sn: "sn",
	subscriber_code: "subscriber_code",
} as const;

export const SMARTCARDS_SITUACAO_LABELS = {
	D: "D",
	I: "I",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const smart_cardsSituacaoSchema = z.enum(["D", "I"], {
	error: () => ({ message: "situacao: valores válidos são [D, I]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type SmartCardsSituacao = z.infer<typeof smart_cardsSituacaoSchema>;
