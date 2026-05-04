/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const PRODUTOS_TIPOIXC_LABELS = {
	I: "INTERNET",
	SMP: "SMP/MVNO",
	TV: "TV/STREAMING",
	S: "SERVICO",
	T: "STFC/TELEFONE",
	SVA: "SVA",
} as const;

export const PRODUTOS_TIPOPRODUTO_LABELS = {
	SVA: "SVA",
	INTERNET: "INTERNET",
	STFC: "STFC",
	MVNO: "MVNO",
	TV: "TV",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const produtosTipoIxcSchema = z.enum(
	["I", "SMP", "TV", "S", "T", "SVA"],
	{
		error: () => ({
			message:
				"tipo_ixc: valores válidos são [INTERNET, SMP/MVNO, TV/STREAMING, SERVICO, STFC/TELEFONE, SVA]",
		}),
	},
);

export const produtosTipoProdutoSchema = z.enum(
	["SVA", "INTERNET", "STFC", "MVNO", "TV"],
	{
		error: () => ({
			message:
				"tipo_produto: valores válidos são [SVA, INTERNET, STFC, MVNO, TV]",
		}),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type ProdutosTipoIxc = z.infer<typeof produtosTipoIxcSchema>;

export type ProdutosTipoProduto = z.infer<typeof produtosTipoProdutoSchema>;
