/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const VDCONTRATOSPRODUTOS_FIXARIP_LABELS = {
	"1": "Sim",
	"0": "Não",
} as const;

export const VDCONTRATOSPRODUTOS_REPETIR_LABELS = {
	V: "Quantidade",
	S: "Sempre",
} as const;

export const VDCONTRATOSPRODUTOS_TIPO_LABELS = {
	I: "Internet",
	T: "Telefonia",
	S: "Serviços",
	SVA: "SVA",
	TV: "TV",
	SMP: "MVNO/Telefonia Móvel",
} as const;

export const VDCONTRATOSPRODUTOS_TIPODESCONTO_LABELS = {
	V: "Valor",
	P: "Percentual",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const vd_contratos_produtosFixarIpSchema = z.enum(["1", "0"], {
	error: () => ({ message: "fixar_ip: valores válidos são [Sim, Não]" }),
});

export const vd_contratos_produtosRepetirSchema = z.enum(["V", "S"], {
	error: () => ({
		message: "repetir: valores válidos são [Quantidade, Sempre]",
	}),
});

export const vd_contratos_produtosTipoSchema = z.enum(
	["I", "T", "S", "SVA", "TV", "SMP"],
	{
		error: () => ({
			message:
				"tipo: valores válidos são [Internet, Telefonia, Serviços, SVA, TV, MVNO/Telefonia Móvel]",
		}),
	},
);

export const vd_contratos_produtosTipoDescontoSchema = z.enum(["V", "P"], {
	error: () => ({
		message: "tipo_desconto: valores válidos são [Valor, Percentual]",
	}),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type VdContratosProdutosFixarIp = z.infer<
	typeof vd_contratos_produtosFixarIpSchema
>;

export type VdContratosProdutosRepetir = z.infer<
	typeof vd_contratos_produtosRepetirSchema
>;

export type VdContratosProdutosTipo = z.infer<
	typeof vd_contratos_produtosTipoSchema
>;

export type VdContratosProdutosTipoDesconto = z.infer<
	typeof vd_contratos_produtosTipoDescontoSchema
>;
