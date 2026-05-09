/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const PATRIMONIO_DEPRECIACAO_TABLE_NAME = "patrimonio_depreciacao";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const patrimonio_depreciacaoBaseSchema = z.object({
	id: z.number(),
	data_depreciacao: z.string(),
	depreciacao_acumulada: z.number(),
	id_patrimonio: z.number(),
	valor_depreciado: z.number(),
	valor_final: z.number(),
	valor_inicial: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const patrimonio_depreciacaoSchema = patrimonio_depreciacaoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const patrimonio_depreciacaoCreateSchema =
	patrimonio_depreciacaoSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const patrimonio_depreciacaoUpdateSchema =
	patrimonio_depreciacaoCreateSchema.partial();
