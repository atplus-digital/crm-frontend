/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const DESCONTOSBLOQUEIO_FIELD_LABELS = {
	data_bloqueio: "data_bloqueio",
	data_desbloqueio: "data_desbloqueio",
	id: "id",
	id_contrato: "id_contrato",
	id_desconto_adicional: "id_desconto_adicional",
	id_lote: "id_lote",
	limite_desconto: "limite_desconto",
	obs: "obs",
	razao: "razao",
	status: "status",
	tipo_desbloqueio: "tipo_desbloqueio",
	valor_desconto: "valor_desconto",
	valor_plano: "valor_plano",
} as const;

export const DESCONTOSBLOQUEIO_STATUS_LABELS = {
	B: "B",
	A: "A",
	R: "R",
	E: "E",
	I: "I",
	N: "N",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const descontos_bloqueioStatusSchema = z.enum(
	["B", "A", "R", "E", "I", "N"],
	{
		error: () => ({
			message: "status: valores válidos são [B, A, R, E, I, N]",
		}),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type DescontosBloqueioStatus = z.infer<
	typeof descontos_bloqueioStatusSchema
>;
