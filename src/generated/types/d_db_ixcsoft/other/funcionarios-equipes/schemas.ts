/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const FUNCIONARIOS_EQUIPES_TABLE_NAME = "funcionarios_equipes";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const funcionarios_equipesBaseSchema = z.object({
	id: z.number(),
	id_equipe: z.number(),
	id_funcionario: z.number(),
	percentual_comissao: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const funcionarios_equipesSchema = funcionarios_equipesBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const funcionarios_equipesCreateSchema = funcionarios_equipesSchema.omit(
	{
		id: true,
	},
);

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const funcionarios_equipesUpdateSchema =
	funcionarios_equipesCreateSchema.partial();
