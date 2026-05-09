/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const FNMOVIMFINANLIQUIDACOES_TIPOLIQUIDACAO_LABELS = {
	Dinheiro: "Dinheiro",
	Cheque: "Cheque",
	Cartao: "Cartao",
	Adiantamento: "Adiantamento",
	Duplicata: "Duplicata",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const fn_movim_finan_liquidacoesTipoLiquidacaoSchema = z.enum(
	["Dinheiro", "Cheque", "Cartao", "Adiantamento", "Duplicata"],
	{
		error: () => ({
			message:
				"tipo_liquidacao: valores válidos são [Dinheiro, Cheque, Cartao, Adiantamento, Duplicata]",
		}),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type FnMovimFinanLiquidacoesTipoLiquidacao = z.infer<
	typeof fn_movim_finan_liquidacoesTipoLiquidacaoSchema
>;
