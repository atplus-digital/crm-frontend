/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { onus_autorizacao_massa_configStatusSchema } from "./labels";

export const ONUS_AUTORIZACAO_MASSA_CONFIG_TABLE_NAME =
	"onus_autorizacao_massa_config";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const onus_autorizacao_massa_configBaseSchema = z.object({
	id: z.number(),
	concluido_em: z.string(),
	id_transmissor: z.number(),
	iniciado_em: z.string(),
	ponids: z.string(),
	scripts: z.string(),
	status: onus_autorizacao_massa_configStatusSchema,
	total_onus: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const onus_autorizacao_massa_configSchema =
	onus_autorizacao_massa_configBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const onus_autorizacao_massa_configCreateSchema =
	onus_autorizacao_massa_configSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const onus_autorizacao_massa_configUpdateSchema =
	onus_autorizacao_massa_configCreateSchema.partial();
