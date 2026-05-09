/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	empresa_setorAtivoSchema,
	empresa_setorRecebeTelegramSetorSchema,
} from "./labels";

export const EMPRESA_SETOR_TABLE_NAME = "empresa_setor";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const empresa_setorBaseSchema = z.object({
	id: z.number(),
	ativo: empresa_setorAtivoSchema,
	cor: z.string(),
	empresa_setor_chatid_telegram: z.string(),
	id_chat: z.number(),
	id_depto: z.number(),
	recebe_telegram_setor: empresa_setorRecebeTelegramSetorSchema,
	setor: z.string(),
	token_bot_telegram_setor: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const empresa_setorSchema = empresa_setorBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const empresa_setorCreateSchema = empresa_setorSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const empresa_setorUpdateSchema = empresa_setorCreateSchema.partial();
