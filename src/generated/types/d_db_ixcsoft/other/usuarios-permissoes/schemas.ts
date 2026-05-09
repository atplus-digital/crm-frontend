/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const USUARIOS_PERMISSOES_TABLE_NAME = "usuarios_permissoes";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const usuarios_permissoesBaseSchema = z.object({
	id: z.number(),
	id_grupo: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const usuarios_permissoesSchema = usuarios_permissoesBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const usuarios_permissoesCreateSchema = usuarios_permissoesSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const usuarios_permissoesUpdateSchema =
	usuarios_permissoesCreateSchema.partial();
