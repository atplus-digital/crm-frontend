/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const HS_ADMIN_MENU_TABLE_NAME = "hs_admin_menu";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const hs_admin_menuBaseSchema = z.object({
	id: z.number(),
	descricao: z.string(),
	estilo: z.string(),
	grid_espacos: z.string(),
	nome_unico: z.string(),
	titulo: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const hs_admin_menuSchema = hs_admin_menuBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const hs_admin_menuCreateSchema = hs_admin_menuSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const hs_admin_menuUpdateSchema = hs_admin_menuCreateSchema.partial();
