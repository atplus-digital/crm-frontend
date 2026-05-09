/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const ALTPLANOPRODUTOSERVICO_GERARPRORATASERVADIC_LABELS = {
	S: "S",
	N: "N",
} as const;

export const ALTPLANOPRODUTOSERVICO_TIPO_LABELS = {
	I: "I",
	T: "T",
	S: "S",
	SVA: "SVA",
	TV: "TV",
	SMP: "SMP",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const alt_plano_produto_servicoGerarProrataServAdicSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "gerar_prorata_serv_adic: valores válidos são [S, N]",
		}),
	},
);

export const alt_plano_produto_servicoTipoSchema = z.enum(
	["I", "T", "S", "SVA", "TV", "SMP"],
	{
		error: () => ({
			message: "tipo: valores válidos são [I, T, S, SVA, TV, SMP]",
		}),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type AltPlanoProdutoServicoGerarProrataServAdic = z.infer<
	typeof alt_plano_produto_servicoGerarProrataServAdicSchema
>;

export type AltPlanoProdutoServicoTipo = z.infer<
	typeof alt_plano_produto_servicoTipoSchema
>;
