/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { almox_usuarioPadraoUsuarioSchema } from "./labels";

export const ALMOX_USUARIO_TABLE_NAME = "almox_usuario";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const almox_usuarioBaseSchema = z.object({
	id: z.number(),
	id_almox: z.number(),
	id_usuario: z.number(),
	padrao_usuario: almox_usuarioPadraoUsuarioSchema,
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const almox_usuarioSchema = almox_usuarioBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const almox_usuarioCreateSchema = almox_usuarioSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const almox_usuarioUpdateSchema = almox_usuarioCreateSchema.partial();
