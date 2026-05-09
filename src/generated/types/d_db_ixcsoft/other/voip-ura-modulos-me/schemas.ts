/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	voip_ura_modulos_meAguardaAudioSchema,
	voip_ura_modulos_meTipoSchema,
} from "./labels";

export const VOIP_URA_MODULOS_ME_TABLE_NAME = "voip_ura_modulos_me";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const voip_ura_modulos_meBaseSchema = z.object({
	id: z.number(),
	acao_id_fila_0: z.number(),
	acao_id_fila_1: z.number(),
	acao_id_fila_2: z.number(),
	acao_id_fila_3: z.number(),
	acao_id_fila_4: z.number(),
	acao_id_fila_5: z.number(),
	acao_id_fila_6: z.number(),
	acao_id_fila_7: z.number(),
	acao_id_fila_8: z.number(),
	acao_id_fila_9: z.number(),
	acao_id_fila_erro: z.number(),
	acao_id_fila_time: z.number(),
	acao_id_modulo_0: z.number(),
	acao_id_modulo_1: z.number(),
	acao_id_modulo_2: z.number(),
	acao_id_modulo_3: z.number(),
	acao_id_modulo_4: z.number(),
	acao_id_modulo_5: z.number(),
	acao_id_modulo_6: z.number(),
	acao_id_modulo_7: z.number(),
	acao_id_modulo_8: z.number(),
	acao_id_modulo_9: z.number(),
	acao_id_modulo_erro: z.number(),
	acao_id_modulo_time: z.number(),
	acao_id_ramal_0: z.number(),
	acao_id_ramal_1: z.number(),
	acao_id_ramal_2: z.number(),
	acao_id_ramal_3: z.number(),
	acao_id_ramal_4: z.number(),
	acao_id_ramal_5: z.number(),
	acao_id_ramal_6: z.number(),
	acao_id_ramal_7: z.number(),
	acao_id_ramal_8: z.number(),
	acao_id_ramal_9: z.number(),
	acao_id_ramal_erro: z.number(),
	acao_id_ramal_time: z.number(),
	acao_numeroexterno_time: z.string(),
	acao_numexterno_0: z.string(),
	acao_numexterno_1: z.string(),
	acao_numexterno_2: z.string(),
	acao_numexterno_3: z.string(),
	acao_numexterno_4: z.string(),
	acao_numexterno_5: z.string(),
	acao_numexterno_6: z.string(),
	acao_numexterno_7: z.string(),
	acao_numexterno_8: z.string(),
	acao_numexterno_9: z.string(),
	acao_numexterno_erro: z.string(),
	acao_tipo_0: z.string(),
	acao_tipo_1: z.string(),
	acao_tipo_2: z.string(),
	acao_tipo_3: z.string(),
	acao_tipo_4: z.string(),
	acao_tipo_5: z.string(),
	acao_tipo_6: z.string(),
	acao_tipo_7: z.string(),
	acao_tipo_8: z.string(),
	acao_tipo_9: z.string(),
	acao_tipo_erro: z.string(),
	acao_tipo_time: z.string(),
	aguarda_audio: voip_ura_modulos_meAguardaAudioSchema,
	audio: z.string(),
	descricao: z.string(),
	repeticao: z.number(),
	texto: z.string(),
	tipo: voip_ura_modulos_meTipoSchema,
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const voip_ura_modulos_meSchema = voip_ura_modulos_meBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const voip_ura_modulos_meCreateSchema = voip_ura_modulos_meSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const voip_ura_modulos_meUpdateSchema =
	voip_ura_modulos_meCreateSchema.partial();
