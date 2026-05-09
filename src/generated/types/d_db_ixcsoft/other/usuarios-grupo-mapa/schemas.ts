/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { usuarios_grupo_mapaPermissaoSchema } from "./labels";

export const USUARIOS_GRUPO_MAPA_TABLE_NAME = "usuarios_grupo_mapa";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const usuarios_grupo_mapaBaseSchema = z.object({
	id: z.number(),
	descricao: z.string(),
	id_grupo: z.number(),
	permissao: usuarios_grupo_mapaPermissaoSchema,
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const usuarios_grupo_mapaSchema = usuarios_grupo_mapaBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const usuarios_grupo_mapaCreateSchema = usuarios_grupo_mapaSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const usuarios_grupo_mapaUpdateSchema =
	usuarios_grupo_mapaCreateSchema.partial();
