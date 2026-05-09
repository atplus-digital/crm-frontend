/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { hs_htmlImportSchema } from "./labels";

export const HS_HTML_TABLE_NAME = "hs_html";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const hs_htmlBaseSchema = z.object({
	id: z.number(),
	html: z.string(),
	import: hs_htmlImportSchema,
	titulo: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const hs_htmlSchema = hs_htmlBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const hs_htmlCreateSchema = hs_htmlSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const hs_htmlUpdateSchema = hs_htmlCreateSchema.partial();
