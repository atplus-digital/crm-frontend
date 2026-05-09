/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	requisicao_materialStatusSchema,
	requisicao_materialTipoSchema,
} from "./labels";

export const REQUISICAO_MATERIAL_TABLE_NAME = "requisicao_material";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const requisicao_materialBaseSchema = z.object({
	id: z.number(),
	data: z.string(),
	data_cancelamento: z.string(),
	data_confirmacao: z.string(),
	id_almox: z.number(),
	id_filial: z.number(),
	id_mot_cancelamento: z.number(),
	id_tecnico: z.number(),
	id_tecnico_confirma: z.number(),
	id_usuario_cancelamento: z.number(),
	id_usuario_confirma: z.number(),
	obs: z.string(),
	pref_almox: z.number(),
	status: requisicao_materialStatusSchema,
	tipo: requisicao_materialTipoSchema,
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const requisicao_materialSchema = requisicao_materialBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const requisicao_materialCreateSchema = requisicao_materialSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const requisicao_materialUpdateSchema =
	requisicao_materialCreateSchema.partial();
