/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const VOIP_URA_MODULOS_HO_TABLE_NAME = "voip_ura_modulos_ho";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const voip_ura_modulos_hoBaseSchema = z.object({
	id: z.number(),
	acao_id_fila_erro: z.number(),
	acao_id_fila_ok: z.number(),
	acao_id_modulo_erro: z.number(),
	acao_id_modulo_ok: z.number(),
	acao_id_ramal_erro: z.number(),
	acao_id_ramal_ok: z.number(),
	acao_numeroexterno_erro: z.string(),
	acao_numeroexterno_ok: z.string(),
	acao_tipo_erro: z.string(),
	acao_tipo_ok: z.string(),
	descricao: z.string(),
	id_modulo: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const voip_ura_modulos_hoSchema = voip_ura_modulos_hoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const voip_ura_modulos_hoCreateSchema = voip_ura_modulos_hoSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const voip_ura_modulos_hoUpdateSchema =
	voip_ura_modulos_hoCreateSchema.partial();
