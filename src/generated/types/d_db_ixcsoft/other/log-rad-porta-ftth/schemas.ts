/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { log_rad_porta_ftthTipoAlteracaoSchema } from "./labels";

export const LOG_RAD_PORTA_FTTH_TABLE_NAME = "log_rad_porta_ftth";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const log_rad_porta_ftthBaseSchema = z.object({
	id: z.number(),
	data_atualizacao: z.string(),
	ftth_porta: z.number(),
	id_alteracao: z.number(),
	id_cadastro: z.number(),
	id_caixa: z.number(),
	motivo: z.string(),
	status_porta: z.number(),
	tabela_cadastro: z.string(),
	tipo_alteracao: log_rad_porta_ftthTipoAlteracaoSchema,
	usuario: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const log_rad_porta_ftthSchema = log_rad_porta_ftthBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const log_rad_porta_ftthCreateSchema = log_rad_porta_ftthSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const log_rad_porta_ftthUpdateSchema =
	log_rad_porta_ftthCreateSchema.partial();
