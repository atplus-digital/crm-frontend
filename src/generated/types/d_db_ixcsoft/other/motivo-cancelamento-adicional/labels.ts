/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const MOTIVOCANCELAMENTOADICIONAL_FIELD_LABELS = {
	ativo: "ativo",
	descricao: "descricao",
	id: "id",
	id_fn_areceber_mot_cancelamento: "id_fn_areceber_mot_cancelamento",
	motivo_adicional: "motivo_adicional",
} as const;

export const MOTIVOCANCELAMENTOADICIONAL_ATIVO_LABELS = {
	S: "S",
	N: "N",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const motivo_cancelamento_adicionalAtivoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "ativo: valores válidos são [S, N]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type MotivoCancelamentoAdicionalAtivo = z.infer<
	typeof motivo_cancelamento_adicionalAtivoSchema
>;
