/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { cliente_contrato_motivo_desistenciaAtivoSchema } from "./labels";

export const CLIENTE_CONTRATO_MOTIVO_DESISTENCIA_TABLE_NAME =
	"cliente_contrato_motivo_desistencia";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const cliente_contrato_motivo_desistenciaBaseSchema = z.object({
	id: z.number(),
	ativo: cliente_contrato_motivo_desistenciaAtivoSchema,
	motivo: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const cliente_contrato_motivo_desistenciaSchema =
	cliente_contrato_motivo_desistenciaBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const cliente_contrato_motivo_desistenciaCreateSchema =
	cliente_contrato_motivo_desistenciaSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const cliente_contrato_motivo_desistenciaUpdateSchema =
	cliente_contrato_motivo_desistenciaCreateSchema.partial();
