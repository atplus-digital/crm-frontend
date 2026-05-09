/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const CENTRO_CUSTO_REL_VEICULOS_TABLE_NAME = "centro_custo_rel_veiculos";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const centro_custo_rel_veiculosBaseSchema = z.object({
	id: z.number(),
	id_centro_custo_rel_centro_custo_categoria: z.number(),
	id_veiculo: z.number(),
	porcentagem: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const centro_custo_rel_veiculosSchema =
	centro_custo_rel_veiculosBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const centro_custo_rel_veiculosCreateSchema =
	centro_custo_rel_veiculosSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const centro_custo_rel_veiculosUpdateSchema =
	centro_custo_rel_veiculosCreateSchema.partial();
