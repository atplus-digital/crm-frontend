/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const TRANSFALMOX_FIELD_LABELS = {
	data: "data",
	documento: "documento",
	id: "id",
	id_almox_entrada: "id_almox_entrada",
	id_almox_saida: "id_almox_saida",
	id_entrada: "id_entrada",
	id_filial: "id_filial",
	id_filial_entrada: "id_filial_entrada",
	id_oss_chamado: "id_oss_chamado",
	id_produto: "id_produto",
	id_requisicao_material: "id_requisicao_material",
	id_saida: "id_saida",
	id_unidade: "id_unidade",
	obs: "obs",
	operador: "operador",
	qtde: "qtde",
	status: "status",
} as const;

export const TRANSFALMOX_STATUS_LABELS = {
	A: "A",
	F: "F",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const transf_almoxStatusSchema = z.enum(["A", "F"], {
	error: () => ({ message: "status: valores válidos são [A, F]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type TransfAlmoxStatus = z.infer<typeof transf_almoxStatusSchema>;
