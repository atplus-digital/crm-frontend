/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const ITENSPEDIDO_ASSISTENCIA_LABELS = {
	N: "N",
	S: "S",
} as const;

export const ITENSPEDIDO_TIPO_LABELS = {
	S: "S",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const itens_pedidoAssistenciaSchema = z.enum(["N", "S"], {
	error: () => ({ message: "assistencia: valores válidos são [N, S]" }),
});

export const itens_pedidoTipoSchema = z.enum(["S"], {
	error: () => ({ message: "tipo: valores válidos são [S]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type ItensPedidoAssistencia = z.infer<
	typeof itens_pedidoAssistenciaSchema
>;

export type ItensPedidoTipo = z.infer<typeof itens_pedidoTipoSchema>;
