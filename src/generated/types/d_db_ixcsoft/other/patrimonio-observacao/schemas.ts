/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const PATRIMONIO_OBSERVACAO_TABLE_NAME = "patrimonio_observacao";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const patrimonio_observacaoBaseSchema = z.object({
	id: z.number(),
	data_registro: z.string(),
	id_registro: z.number(),
	motivo: z.string(),
	observacao: z.string(),
	operador: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const patrimonio_observacaoSchema = patrimonio_observacaoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const patrimonio_observacaoCreateSchema =
	patrimonio_observacaoSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const patrimonio_observacaoUpdateSchema =
	patrimonio_observacaoCreateSchema.partial();
