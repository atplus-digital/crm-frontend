/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { cliente_contrato_motivo_inclusaoAtivoSchema } from "./labels";

export const CLIENTE_CONTRATO_MOTIVO_INCLUSAO_TABLE_NAME =
	"cliente_contrato_motivo_inclusao";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const cliente_contrato_motivo_inclusaoBaseSchema = z.object({
	id: z.number(),
	ativo: cliente_contrato_motivo_inclusaoAtivoSchema,
	motivo: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const cliente_contrato_motivo_inclusaoSchema =
	cliente_contrato_motivo_inclusaoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const cliente_contrato_motivo_inclusaoCreateSchema =
	cliente_contrato_motivo_inclusaoSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const cliente_contrato_motivo_inclusaoUpdateSchema =
	cliente_contrato_motivo_inclusaoCreateSchema.partial();
