/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const TRANSFALMOXPATRIMONIOWIZARD_FIELD_LABELS = {
	data_insercao: "data_insercao",
	id: "id",
	id_almox_destino: "id_almox_destino",
	id_almox_origem: "id_almox_origem",
	id_filial_destino: "id_filial_destino",
	id_filial_origem: "id_filial_origem",
	id_produto: "id_produto",
	id_transf: "id_transf",
	id_transf_almox_item: "id_transf_almox_item",
	qtde_patrimonio: "qtde_patrimonio",
	status: "status",
} as const;

export const TRANSFALMOXPATRIMONIOWIZARD_STATUS_LABELS = {
	A: "A",
	F: "F",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const transf_almox_patrimonio_wizardStatusSchema = z.enum(["A", "F"], {
	error: () => ({ message: "status: valores válidos são [A, F]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type TransfAlmoxPatrimonioWizardStatus = z.infer<
	typeof transf_almox_patrimonio_wizardStatusSchema
>;
