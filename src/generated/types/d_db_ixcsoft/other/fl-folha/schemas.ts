/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { fl_folhaDescontarAdiantamentosSchema } from "./labels";

export const FL_FOLHA_TABLE_NAME = "fl_folha";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const fl_folhaBaseSchema = z.object({
	id: z.number(),
	ano: z.number(),
	descontar_adiantamentos: fl_folhaDescontarAdiantamentosSchema,
	descricao: z.string(),
	mes: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const fl_folhaSchema = fl_folhaBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const fl_folhaCreateSchema = fl_folhaSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const fl_folhaUpdateSchema = fl_folhaCreateSchema.partial();
