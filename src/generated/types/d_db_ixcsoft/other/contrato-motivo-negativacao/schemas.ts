/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const CONTRATO_MOTIVO_NEGATIVACAO_TABLE_NAME =
	"contrato_motivo_negativacao";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const contrato_motivo_negativacaoBaseSchema = z.object({
	id: z.number(),
	motivo: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const contrato_motivo_negativacaoSchema =
	contrato_motivo_negativacaoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const contrato_motivo_negativacaoCreateSchema =
	contrato_motivo_negativacaoSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const contrato_motivo_negativacaoUpdateSchema =
	contrato_motivo_negativacaoCreateSchema.partial();
