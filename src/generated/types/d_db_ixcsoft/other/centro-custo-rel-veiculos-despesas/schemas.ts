/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const CENTRO_CUSTO_REL_VEICULOS_DESPESAS_TABLE_NAME =
	"centro_custo_rel_veiculos_despesas";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const centro_custo_rel_veiculos_despesasBaseSchema = z.object({
	id: z.number(),
	id_centro_custo_rel_centro_custo_categoria: z.number(),
	id_veiculos_depesas: z.number(),
	porcentagem: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const centro_custo_rel_veiculos_despesasSchema =
	centro_custo_rel_veiculos_despesasBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const centro_custo_rel_veiculos_despesasCreateSchema =
	centro_custo_rel_veiculos_despesasSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const centro_custo_rel_veiculos_despesasUpdateSchema =
	centro_custo_rel_veiculos_despesasCreateSchema.partial();
