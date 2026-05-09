/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { caixas_usuarioCaixaPadraoSchema } from "./labels";

export const CAIXAS_USUARIO_TABLE_NAME = "caixas_usuario";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const caixas_usuarioBaseSchema = z.object({
	id: z.number(),
	caixa_padrao: caixas_usuarioCaixaPadraoSchema,
	descricao: z.string(),
	id_conta: z.number(),
	id_usuario: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const caixas_usuarioSchema = caixas_usuarioBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const caixas_usuarioCreateSchema = caixas_usuarioSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const caixas_usuarioUpdateSchema = caixas_usuarioCreateSchema.partial();
