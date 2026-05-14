/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const REQUISICAOMATERIALPATRIMONIOWIZARD_FIELD_LABELS = {
	gerar_qtd_patrimonio: "gerar_qtd_patrimonio",
	id: "id",
	id_almox_destino: "id_almox_destino",
	id_almox_origem: "id_almox_origem",
	id_filial_destino: "id_filial_destino",
	id_filial_origem: "id_filial_origem",
	id_trans_almox: "id_trans_almox",
	status: "status",
	total_produtos: "total_produtos",
	total_produtos_patrimonio: "total_produtos_patrimonio",
} as const;

export const REQUISICAOMATERIALPATRIMONIOWIZARD_STATUS_LABELS = {
	A: "A",
	B: "B",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const requisicao_material_patrimonio_wizardStatusSchema = z.enum(
	["A", "B"],
	{
		error: () => ({ message: "status: valores válidos são [A, B]" }),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type RequisicaoMaterialPatrimonioWizardStatus = z.infer<
	typeof requisicao_material_patrimonio_wizardStatusSchema
>;
