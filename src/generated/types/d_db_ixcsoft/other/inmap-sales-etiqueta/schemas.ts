/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const INMAP_SALES_ETIQUETA_TABLE_NAME = "inmap_sales_etiqueta";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const inmap_sales_etiquetaBaseSchema = z.object({
	id: z.number(),
	cor: z.string(),
	titulo: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const inmap_sales_etiquetaSchema = inmap_sales_etiquetaBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const inmap_sales_etiquetaCreateSchema = inmap_sales_etiquetaSchema.omit(
	{
		id: true,
	},
);

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const inmap_sales_etiquetaUpdateSchema =
	inmap_sales_etiquetaCreateSchema.partial();
