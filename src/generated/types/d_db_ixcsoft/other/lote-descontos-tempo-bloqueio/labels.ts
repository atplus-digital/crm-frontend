/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const LOTEDESCONTOSTEMPOBLOQUEIO_FIELD_LABELS = {
	data_hora_criacao: "data_hora_criacao",
	descontos_aplicados: "descontos_aplicados",
	descontos_armazenados: "descontos_armazenados",
	id: "id",
	prazo_expiracao: "prazo_expiracao",
	status: "status",
} as const;

export const LOTEDESCONTOSTEMPOBLOQUEIO_STATUS_LABELS = {
	A: "A",
	F: "F",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const lote_descontos_tempo_bloqueioStatusSchema = z.enum(["A", "F"], {
	error: () => ({ message: "status: valores válidos são [A, F]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type LoteDescontosTempoBloqueioStatus = z.infer<
	typeof lote_descontos_tempo_bloqueioStatusSchema
>;
