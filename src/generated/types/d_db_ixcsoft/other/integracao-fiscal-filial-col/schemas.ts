/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const INTEGRACAO_FISCAL_FILIAL_COL_TABLE_NAME =
	"integracao_fiscal_filial_col";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const integracao_fiscal_filial_colBaseSchema = z.object({
	id: z.number(),
	id_filial: z.number(),
	id_integracao_fiscal: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const integracao_fiscal_filial_colSchema =
	integracao_fiscal_filial_colBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const integracao_fiscal_filial_colCreateSchema =
	integracao_fiscal_filial_colSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const integracao_fiscal_filial_colUpdateSchema =
	integracao_fiscal_filial_colCreateSchema.partial();
