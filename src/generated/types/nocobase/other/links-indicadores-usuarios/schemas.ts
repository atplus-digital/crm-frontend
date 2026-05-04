/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const LINKS_INDICADORES_USUARIOS_TABLE_NAME =
	"links_indicadores_usuarios";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const links_indicadores_usuariosBaseSchema = z.object({
	f_fk_links_usuarios_1: z.number(),
	f_fk_links_usuarios_2: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const links_indicadores_usuariosSchema =
	links_indicadores_usuariosBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const links_indicadores_usuariosCreateSchema =
	links_indicadores_usuariosSchema;

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const links_indicadores_usuariosUpdateSchema =
	links_indicadores_usuariosCreateSchema.partial();
