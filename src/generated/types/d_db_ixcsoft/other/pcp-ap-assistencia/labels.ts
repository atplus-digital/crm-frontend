/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const PCPAPASSISTENCIA_FIELD_LABELS = {
	data: "data",
	data_coleta: "data_coleta",
	data_concerto: "data_concerto",
	data_devolucao: "data_devolucao",
	descricao: "descricao",
	filial_id: "filial_id",
	id: "id",
	id_cliente: "id_cliente",
	id_itens_pedido: "id_itens_pedido",
	laudo: "laudo",
	previsao_coleta: "previsao_coleta",
	solicitante: "solicitante",
	status: "status",
} as const;

export const PCPAPASSISTENCIA_STATUS_LABELS = {
	N: "N",
	C: "C",
	A: "A",
	F: "F",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const pcp_ap_assistenciaStatusSchema = z.enum(["N", "C", "A", "F"], {
	error: () => ({ message: "status: valores válidos são [N, C, A, F]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type PcpApAssistenciaStatus = z.infer<
	typeof pcp_ap_assistenciaStatusSchema
>;
