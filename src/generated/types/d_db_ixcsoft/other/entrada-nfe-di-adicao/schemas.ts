/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const ENTRADA_NFE_DI_ADICAO_TABLE_NAME = "entrada_nfe_di_adicao";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const entrada_nfe_di_adicaoBaseSchema = z.object({
	id: z.number(),
	c_fabricante: z.string(),
	id_entrada: z.number(),
	n_adicao: z.number(),
	n_item_ped: z.number(),
	n_seq_adicao: z.number(),
	v_desc_di: z.number(),
	xPed: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const entrada_nfe_di_adicaoSchema = entrada_nfe_di_adicaoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const entrada_nfe_di_adicaoCreateSchema =
	entrada_nfe_di_adicaoSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const entrada_nfe_di_adicaoUpdateSchema =
	entrada_nfe_di_adicaoCreateSchema.partial();
