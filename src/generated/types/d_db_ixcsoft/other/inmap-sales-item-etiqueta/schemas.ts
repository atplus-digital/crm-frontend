/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { inmap_sales_item_etiquetaItemTipoSchema } from "./labels";

export const INMAP_SALES_ITEM_ETIQUETA_TABLE_NAME = "inmap_sales_item_etiqueta";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const inmap_sales_item_etiquetaBaseSchema = z.object({
	id: z.number(),
	id_etiqueta: z.number(),
	id_item: z.number(),
	item_tipo: inmap_sales_item_etiquetaItemTipoSchema,
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const inmap_sales_item_etiquetaSchema =
	inmap_sales_item_etiquetaBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const inmap_sales_item_etiquetaCreateSchema =
	inmap_sales_item_etiquetaSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const inmap_sales_item_etiquetaUpdateSchema =
	inmap_sales_item_etiquetaCreateSchema.partial();
