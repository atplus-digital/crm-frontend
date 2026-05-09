/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { transf_almox_patrimonio_wizardStatusSchema } from "./labels";

export const TRANSF_ALMOX_PATRIMONIO_WIZARD_TABLE_NAME =
	"transf_almox_patrimonio_wizard";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const transf_almox_patrimonio_wizardBaseSchema = z.object({
	id: z.number(),
	data_insercao: z.string(),
	id_almox_destino: z.number(),
	id_almox_origem: z.number(),
	id_filial_destino: z.number(),
	id_filial_origem: z.number(),
	id_produto: z.number(),
	id_transf: z.number(),
	id_transf_almox_item: z.number(),
	qtde_patrimonio: z.number(),
	status: transf_almox_patrimonio_wizardStatusSchema,
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const transf_almox_patrimonio_wizardSchema =
	transf_almox_patrimonio_wizardBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const transf_almox_patrimonio_wizardCreateSchema =
	transf_almox_patrimonio_wizardSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const transf_almox_patrimonio_wizardUpdateSchema =
	transf_almox_patrimonio_wizardCreateSchema.partial();
