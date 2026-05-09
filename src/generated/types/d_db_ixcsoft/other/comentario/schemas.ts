/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { comentarioDirecaoInOutSchema } from "./labels";

export const COMENTARIO_TABLE_NAME = "comentario";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const comentarioBaseSchema = z.object({
	id: z.number(),
	bandeja: z.number(),
	comentario: z.string(),
	data_cadastro: z.string(),
	direcao_in_out: comentarioDirecaoInOutSchema,
	id_elemento: z.number(),
	id_tabela: z.number(),
	id_usuario: z.number(),
	interface: z.number(),
	porta: z.number(),
	tabela: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const comentarioSchema = comentarioBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const comentarioCreateSchema = comentarioSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const comentarioUpdateSchema = comentarioCreateSchema.partial();
