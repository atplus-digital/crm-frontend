/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { onus_autorizacao_massa_logsStatusSchema } from "./labels";

export const ONUS_AUTORIZACAO_MASSA_LOGS_TABLE_NAME =
	"onus_autorizacao_massa_logs";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const onus_autorizacao_massa_logsBaseSchema = z.object({
	id: z.number(),
	concluido_em: z.string(),
	id_autorizacao_massa: z.number(),
	id_cliente_fibra: z.number(),
	id_ponid: z.number(),
	id_script: z.number(),
	iniciado_em: z.string(),
	mac: z.string(),
	modelo: z.string(),
	retorno: z.string(),
	status: onus_autorizacao_massa_logsStatusSchema,
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const onus_autorizacao_massa_logsSchema =
	onus_autorizacao_massa_logsBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const onus_autorizacao_massa_logsCreateSchema =
	onus_autorizacao_massa_logsSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const onus_autorizacao_massa_logsUpdateSchema =
	onus_autorizacao_massa_logsCreateSchema.partial();
