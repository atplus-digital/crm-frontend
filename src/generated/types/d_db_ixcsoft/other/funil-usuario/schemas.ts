/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { funil_usuarioPadraoSchema } from "./labels";

export const FUNIL_USUARIO_TABLE_NAME = "funil_usuario";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const funil_usuarioBaseSchema = z.object({
	id: z.number(),
	id_funil: z.number(),
	id_usuario: z.number(),
	padrao: funil_usuarioPadraoSchema,
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const funil_usuarioSchema = funil_usuarioBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const funil_usuarioCreateSchema = funil_usuarioSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const funil_usuarioUpdateSchema = funil_usuarioCreateSchema.partial();
