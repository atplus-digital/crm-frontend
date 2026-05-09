/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const VOIP_URA_MODULOS_TABLE_NAME = "voip_ura_modulos";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const voip_ura_modulosBaseSchema = z.object({
	id: z.number(),
	audio_id: z.number(),
	descricao: z.string(),
	fila_id: z.number(),
	horario_id: z.number(),
	menu_id: z.number(),
	numexterno: z.string(),
	ramal_id: z.number(),
	tipo: z.string(),
	ura_id: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const voip_ura_modulosSchema = voip_ura_modulosBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const voip_ura_modulosCreateSchema = voip_ura_modulosSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const voip_ura_modulosUpdateSchema =
	voip_ura_modulosCreateSchema.partial();
