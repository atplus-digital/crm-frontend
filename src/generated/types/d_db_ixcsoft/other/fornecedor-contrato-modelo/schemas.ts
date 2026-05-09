/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const FORNECEDOR_CONTRATO_MODELO_TABLE_NAME =
	"fornecedor_contrato_modelo";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const fornecedor_contrato_modeloBaseSchema = z.object({
	id: z.number(),
	Contrato: z.string(),
	texto: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const fornecedor_contrato_modeloSchema =
	fornecedor_contrato_modeloBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const fornecedor_contrato_modeloCreateSchema =
	fornecedor_contrato_modeloSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const fornecedor_contrato_modeloUpdateSchema =
	fornecedor_contrato_modeloCreateSchema.partial();
