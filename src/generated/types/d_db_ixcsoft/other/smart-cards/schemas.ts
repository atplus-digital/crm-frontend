/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { smart_cardsSituacaoSchema } from "./labels";

export const SMART_CARDS_TABLE_NAME = "smart_cards";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const smart_cardsBaseSchema = z.object({
	id: z.number(),
	pin: z.string(),
	situacao: smart_cardsSituacaoSchema,
	sn: z.string(),
	subscriber_code: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const smart_cardsSchema = smart_cardsBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const smart_cardsCreateSchema = smart_cardsSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const smart_cardsUpdateSchema = smart_cardsCreateSchema.partial();
