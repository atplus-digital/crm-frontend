/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const AUTH_USUARIOS_TABLE_NAME = "auth_usuarios";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const auth_usuariosBaseSchema = z.object({
	id: z.number(),
	descricao: z.string(),
	grupo_usuarios: z.string(),
	login: z.string(),
	opcao: z.string(),
	senha: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const auth_usuariosSchema = auth_usuariosBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const auth_usuariosCreateSchema = auth_usuariosSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const auth_usuariosUpdateSchema = auth_usuariosCreateSchema.partial();
