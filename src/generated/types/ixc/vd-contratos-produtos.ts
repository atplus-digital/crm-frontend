/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

export const VD_CONTRATOS_PRODUTOS_TABLE_NAME = "vd_contratos_produtos";

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

export type VdContratosProdutosFixarIp =
	keyof typeof VDCONTRATOSPRODUTOS_FIXARIP_LABELS;

export type VdContratosProdutosRepetir =
	keyof typeof VDCONTRATOSPRODUTOS_REPETIR_LABELS;

export type VdContratosProdutosTipo =
	keyof typeof VDCONTRATOSPRODUTOS_TIPO_LABELS;

export type VdContratosProdutosTipoDesconto =
	keyof typeof VDCONTRATOSPRODUTOS_TIPODESCONTO_LABELS;

export interface VdContratosProdutos {
	id: number;
	atualizado_por: string;
	desconto_percentual: string;
	desconto_proporcional: string;
	descricao: string;
	descricao_plano_valor_1: string;
	descricao_plano_valor_2: string;
	fixar_ip: VdContratosProdutosFixarIp;
	id_contrato: string;
	id_contrato_produto_plano: string;
	id_plano: number;
	id_produto: number;
	id_tipo_documento: number;
	id_unidade: string;
	id_vd_contrato: number;
	inserido_em: string;
	inserido_por: string;
	limite_pacote: string;
	logins_simultaneos: string;
	obs: string;
	qtde: number;
	qtde_repeticoes_desconto_produto: string;
	repetir: VdContratosProdutosRepetir;
	repetir_qtde: string;
	tipo: VdContratosProdutosTipo;
	tipo_desconto: VdContratosProdutosTipoDesconto;
	tv_pacotes_canais: string;
	ultima_atualizacao: string;
	valor_adicional_pacote: string;
	valor_ate_vencimento: string;
	valor_desconto_produto: string;
	valor_unit: string;
}

export interface VdContratosProdutosRelations {
	f_classificacao?: unknown | null;
	f_grupo?: unknown | null;
	f_subgrupo?: unknown | null;
	f_unidade?: unknown | null;
}

export type VdContratosProdutosRelationKey = keyof VdContratosProdutosRelations;
