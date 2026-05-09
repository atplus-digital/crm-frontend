/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const HS_MODULO_MENU_TABLE_NAME = "hs_modulo_menu";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const hs_modulo_menuBaseSchema = z.object({
	id: z.number(),
	filtro: z.string(),
	id_menu: z.number(),
	id_modulo: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const hs_modulo_menuSchema = hs_modulo_menuBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const hs_modulo_menuCreateSchema = hs_modulo_menuSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const hs_modulo_menuUpdateSchema = hs_modulo_menuCreateSchema.partial();
