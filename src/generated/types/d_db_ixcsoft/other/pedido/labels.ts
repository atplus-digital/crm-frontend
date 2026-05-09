/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const PEDIDO_ATIVO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const PEDIDO_TIPO_LABELS = {
	P: "P",
	M: "M",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const pedidoAtivoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "ativo: valores válidos são [S, N]" }),
});

export const pedidoTipoSchema = z.enum(["P", "M"], {
	error: () => ({ message: "tipo: valores válidos são [P, M]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type PedidoAtivo = z.infer<typeof pedidoAtivoSchema>;

export type PedidoTipo = z.infer<typeof pedidoTipoSchema>;
