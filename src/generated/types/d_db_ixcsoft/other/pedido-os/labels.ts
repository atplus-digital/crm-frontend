/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const PEDIDOOS_STATUSFATOS_LABELS = {
	N: "N",
	F: "F",
	C: "C",
	A: "A",
} as const;

export const PEDIDOOS_STATUSPEDIDOOS_LABELS = {
	A: "A",
	F: "F",
	C: "C",
} as const;

export const PEDIDOOS_TIPOPRODUTOS_LABELS = {
	PRO: "PRO",
	SER: "SER",
	COM: "COM",
	PAT: "PAT",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const pedido_osStatusFatOsSchema = z.enum(["N", "F", "C", "A"], {
	error: () => ({ message: "status_fat_os: valores válidos são [N, F, C, A]" }),
});

export const pedido_osStatusPedidoOsSchema = z.enum(["A", "F", "C"], {
	error: () => ({ message: "status_pedido_os: valores válidos são [A, F, C]" }),
});

export const pedido_osTipoProdutosSchema = z.enum(
	["PRO", "SER", "COM", "PAT"],
	{
		error: () => ({
			message: "tipo_produtos: valores válidos são [PRO, SER, COM, PAT]",
		}),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type PedidoOsStatusFatOs = z.infer<typeof pedido_osStatusFatOsSchema>;

export type PedidoOsStatusPedidoOs = z.infer<
	typeof pedido_osStatusPedidoOsSchema
>;

export type PedidoOsTipoProdutos = z.infer<typeof pedido_osTipoProdutosSchema>;
