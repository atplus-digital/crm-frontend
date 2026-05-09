/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const VIEWRADGRUPOSVDCONTRATOSPRODUTOS_REDATIVO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const VIEWRADGRUPOSVDCONTRATOSPRODUTOS_TIPO_LABELS = {
	I: "I",
	T: "T",
	S: "S",
} as const;

export const VIEWRADGRUPOSVDCONTRATOSPRODUTOS_TURATIVO_LABELS = {
	S: "S",
	N: "N",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const view_radgrupos_vd_contratos_produtosRedAtivoSchema = z.enum(
	["S", "N"],
	{
		error: () => ({ message: "red_ativo: valores válidos são [S, N]" }),
	},
);

export const view_radgrupos_vd_contratos_produtosTipoSchema = z.enum(
	["I", "T", "S"],
	{
		error: () => ({ message: "tipo: valores válidos são [I, T, S]" }),
	},
);

export const view_radgrupos_vd_contratos_produtosTurAtivoSchema = z.enum(
	["S", "N"],
	{
		error: () => ({ message: "tur_ativo: valores válidos são [S, N]" }),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type ViewRadgruposVdContratosProdutosRedAtivo = z.infer<
	typeof view_radgrupos_vd_contratos_produtosRedAtivoSchema
>;

export type ViewRadgruposVdContratosProdutosTipo = z.infer<
	typeof view_radgrupos_vd_contratos_produtosTipoSchema
>;

export type ViewRadgruposVdContratosProdutosTurAtivo = z.infer<
	typeof view_radgrupos_vd_contratos_produtosTurAtivoSchema
>;
