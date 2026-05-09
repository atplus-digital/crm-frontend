/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const CENTRO_CUSTO_REL_FUNCIONARIO_TABLE_NAME =
	"centro_custo_rel_funcionario";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const centro_custo_rel_funcionarioBaseSchema = z.object({
	id: z.number(),
	id_centro_custo_rel_centro_custo_categoria: z.number(),
	id_funcionario: z.number(),
	porcentagem: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const centro_custo_rel_funcionarioSchema =
	centro_custo_rel_funcionarioBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const centro_custo_rel_funcionarioCreateSchema =
	centro_custo_rel_funcionarioSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const centro_custo_rel_funcionarioUpdateSchema =
	centro_custo_rel_funcionarioCreateSchema.partial();
