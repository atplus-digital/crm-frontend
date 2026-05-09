/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { hs_linksPublicadoSchema } from "./labels";

export const HS_LINKS_TABLE_NAME = "hs_links";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const hs_linksBaseSchema = z.object({
	id: z.number(),
	id_categoria: z.number(),
	Nome: z.string(),
	ordernar: z.string(),
	publicado: hs_linksPublicadoSchema,
	url: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const hs_linksSchema = hs_linksBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const hs_linksCreateSchema = hs_linksSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const hs_linksUpdateSchema = hs_linksCreateSchema.partial();
