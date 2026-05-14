/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const CLIENTECONTRATOMOTIVODESISTENCIA_FIELD_LABELS = {
	ativo: "ativo",
	id: "id",
	motivo: "motivo",
} as const;

export const CLIENTECONTRATOMOTIVODESISTENCIA_ATIVO_LABELS = {
	S: "S",
	N: "N",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const cliente_contrato_motivo_desistenciaAtivoSchema = z.enum(
	["S", "N"],
	{
		error: () => ({ message: "ativo: valores válidos são [S, N]" }),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type ClienteContratoMotivoDesistenciaAtivo = z.infer<
	typeof cliente_contrato_motivo_desistenciaAtivoSchema
>;
