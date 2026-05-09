/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { usuarios_menu_favoritosAtivoSchema } from "./labels";

export const USUARIOS_MENU_FAVORITOS_TABLE_NAME = "usuarios_menu_favoritos";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const usuarios_menu_favoritosBaseSchema = z.object({
	id: z.number(),
	ativo: usuarios_menu_favoritosAtivoSchema,
	fullpath: z.string(),
	grid: z.string(),
	usuario_id: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const usuarios_menu_favoritosSchema = usuarios_menu_favoritosBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const usuarios_menu_favoritosCreateSchema =
	usuarios_menu_favoritosSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const usuarios_menu_favoritosUpdateSchema =
	usuarios_menu_favoritosCreateSchema.partial();
