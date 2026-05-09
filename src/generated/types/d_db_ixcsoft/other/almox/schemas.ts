/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { almoxAtivoSchema } from "./labels";

export const ALMOX_TABLE_NAME = "almox";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const almoxBaseSchema = z.object({
	id: z.number(),
	ativo: almoxAtivoSchema,
	descricao: z.string(),
	id_filial: z.number(),
	requisitar_preferencialmente_de: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const almoxSchema = almoxBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const almoxCreateSchema = almoxSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const almoxUpdateSchema = almoxCreateSchema.partial();
