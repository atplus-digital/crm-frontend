/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const REQUISICAOMATERIAL_FIELD_LABELS = {
	data: "data",
	data_cancelamento: "data_cancelamento",
	data_confirmacao: "data_confirmacao",
	id: "id",
	id_almox: "id_almox",
	id_filial: "id_filial",
	id_mot_cancelamento: "id_mot_cancelamento",
	id_tecnico: "id_tecnico",
	id_tecnico_confirma: "id_tecnico_confirma",
	id_usuario_cancelamento: "id_usuario_cancelamento",
	id_usuario_confirma: "id_usuario_confirma",
	obs: "obs",
	pref_almox: "pref_almox",
	status: "status",
	tipo: "tipo",
} as const;

export const REQUISICAOMATERIAL_STATUS_LABELS = {
	A: "A",
	P: "P",
	F: "F",
	C: "C",
} as const;

export const REQUISICAOMATERIAL_TIPO_LABELS = {
	A: "A",
	M: "M",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const requisicao_materialStatusSchema = z.enum(["A", "P", "F", "C"], {
	error: () => ({ message: "status: valores válidos são [A, P, F, C]" }),
});

export const requisicao_materialTipoSchema = z.enum(["A", "M"], {
	error: () => ({ message: "tipo: valores válidos são [A, M]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type RequisicaoMaterialStatus = z.infer<
	typeof requisicao_materialStatusSchema
>;

export type RequisicaoMaterialTipo = z.infer<
	typeof requisicao_materialTipoSchema
>;
