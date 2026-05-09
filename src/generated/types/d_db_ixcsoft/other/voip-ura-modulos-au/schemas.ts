/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { voip_ura_modulos_auTipoSchema } from "./labels";

export const VOIP_URA_MODULOS_AU_TABLE_NAME = "voip_ura_modulos_au";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const voip_ura_modulos_auBaseSchema = z.object({
	id: z.number(),
	acao_id_fila: z.number(),
	acao_id_modulo: z.number(),
	acao_id_ramal: z.number(),
	acao_numexterno: z.string(),
	acao_tipo: z.string(),
	audio: z.string(),
	descricao: z.string(),
	texto: z.string(),
	tipo: voip_ura_modulos_auTipoSchema,
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const voip_ura_modulos_auSchema = voip_ura_modulos_auBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const voip_ura_modulos_auCreateSchema = voip_ura_modulos_auSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const voip_ura_modulos_auUpdateSchema =
	voip_ura_modulos_auCreateSchema.partial();
