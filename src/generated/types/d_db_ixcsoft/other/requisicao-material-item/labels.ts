/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const REQUISICAOMATERIALITEM_FIELD_LABELS = {
	almoxarifados_vinculados: "almoxarifados_vinculados",
	data_cancelamento: "data_cancelamento",
	descricao: "descricao",
	id: "id",
	id_mot_cancelamento: "id_mot_cancelamento",
	id_produto: "id_produto",
	id_requisicao: "id_requisicao",
	id_usuario: "id_usuario",
	id_usuario_cancelamento: "id_usuario_cancelamento",
	qtde: "qtde",
	qtde_cancelada: "qtde_cancelada",
	qtde_saldo: "qtde_saldo",
	saldo_almox_solicitante: "saldo_almox_solicitante",
	status: "status",
} as const;

export const REQUISICAOMATERIALITEM_STATUS_LABELS = {
	A: "A",
	P: "P",
	F: "F",
	C: "C",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const requisicao_material_itemStatusSchema = z.enum(
	["A", "P", "F", "C"],
	{
		error: () => ({ message: "status: valores válidos são [A, P, F, C]" }),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type RequisicaoMaterialItemStatus = z.infer<
	typeof requisicao_material_itemStatusSchema
>;
