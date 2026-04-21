/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

export const VD_CONTRATOS_PRODUTOS_TABLE_NAME = "vd_contratos_produtos";

export enum VdContratosProdutosFixarIp {
	Value1 = "1",
	Value0 = "0",
}

export enum VdContratosProdutosRepetir {
	V = "V",
	S = "S",
}

export enum VdContratosProdutosTipo {
	I = "I",
	T = "T",
	S = "S",
	Sva = "SVA",
	Tv = "TV",
	Smp = "SMP",
}

export enum VdContratosProdutosTipoDesconto {
	V = "V",
	P = "P",
}

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

export const VDCONTRATOSPRODUTOS_FIXARIP_LABELS: Record<
	VdContratosProdutosFixarIp,
	string
> = {
	[VdContratosProdutosFixarIp.Value1]: "Sim",
	[VdContratosProdutosFixarIp.Value0]: "Não",
};

export const VDCONTRATOSPRODUTOS_REPETIR_LABELS: Record<
	VdContratosProdutosRepetir,
	string
> = {
	[VdContratosProdutosRepetir.V]: "Quantidade",
	[VdContratosProdutosRepetir.S]: "Sempre",
};

export const VDCONTRATOSPRODUTOS_TIPO_LABELS: Record<
	VdContratosProdutosTipo,
	string
> = {
	[VdContratosProdutosTipo.I]: "Internet",
	[VdContratosProdutosTipo.T]: "Telefonia",
	[VdContratosProdutosTipo.S]: "Serviços",
	[VdContratosProdutosTipo.Sva]: "SVA",
	[VdContratosProdutosTipo.Tv]: "TV",
	[VdContratosProdutosTipo.Smp]: "MVNO/Telefonia Móvel",
};

export const VDCONTRATOSPRODUTOS_TIPODESCONTO_LABELS: Record<
	VdContratosProdutosTipoDesconto,
	string
> = {
	[VdContratosProdutosTipoDesconto.V]: "Valor",
	[VdContratosProdutosTipoDesconto.P]: "Percentual",
};
