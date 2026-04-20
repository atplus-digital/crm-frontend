/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

export const VD_CONTRATOS_PRODUTOS_TABLE_NAME = "vd_contratos_produtos";

export enum VdContratosProdutosDescricaoPlanoValor1 {
	Value1 = "1",
	Value0 = "0",
}

export enum VdContratosProdutosId {
	I = "I",
	T = "T",
	S = "S",
	Sva = "SVA",
	Tv = "TV",
	Smp = "SMP",
}

export enum VdContratosProdutosObs {
	V = "V",
	P = "P",
}

export enum VdContratosProdutosQtde {
	Value1 = "1",
	Value3 = "3",
}

export enum VdContratosProdutosRepetir {
	V = "V",
}

export enum VdContratosProdutosTipo {
	I = "I",
	S = "S",
	Sva = "SVA",
	Tv = "TV",
}

export enum VdContratosProdutosTipoDesconto {
	V = "V",
}

export enum VdContratosProdutosValorAteVencimento {
	V = "V",
	S = "S",
}

export interface VdContratosProdutos {
	id: VdContratosProdutosId;
	atualizado_por: string;
	desconto_percentual: string;
	desconto_proporcional: string;
	descricao: string;
	descricao_plano_valor_1: VdContratosProdutosDescricaoPlanoValor1;
	descricao_plano_valor_2: string;
	fixar_ip: number;
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
	obs: VdContratosProdutosObs;
	qtde: VdContratosProdutosQtde;
	qtde_repeticoes_desconto_produto: string;
	repetir: VdContratosProdutosRepetir;
	repetir_qtde: string;
	tipo: VdContratosProdutosTipo;
	tipo_desconto: VdContratosProdutosTipoDesconto;
	tv_pacotes_canais: string;
	ultima_atualizacao: string;
	valor_adicional_pacote: string;
	valor_ate_vencimento: VdContratosProdutosValorAteVencimento;
	valor_desconto_produto: string;
	valor_unit: string;
}

export type VdContratosProdutosRelations = Record<string, never>;

export type VdContratosProdutosRelationKey = keyof VdContratosProdutosRelations;

export const VDCONTRATOSPRODUTOS_DESCRICAOPLANOVALOR1_LABELS: Record<
	VdContratosProdutosDescricaoPlanoValor1,
	string
> = {
	[VdContratosProdutosDescricaoPlanoValor1.Value1]: "Sim",
	[VdContratosProdutosDescricaoPlanoValor1.Value0]: "Não",
};

export const VDCONTRATOSPRODUTOS_ID_LABELS: Record<
	VdContratosProdutosId,
	string
> = {
	[VdContratosProdutosId.I]: "Internet",
	[VdContratosProdutosId.T]: "Telefonia",
	[VdContratosProdutosId.S]: "Serviços",
	[VdContratosProdutosId.Sva]: "SVA",
	[VdContratosProdutosId.Tv]: "TV",
	[VdContratosProdutosId.Smp]: "MVNO/Telefonia Móvel",
};

export const VDCONTRATOSPRODUTOS_OBS_LABELS: Record<
	VdContratosProdutosObs,
	string
> = {
	[VdContratosProdutosObs.V]: "Valor",
	[VdContratosProdutosObs.P]: "Percentual",
};

export const VDCONTRATOSPRODUTOS_QTDE_LABELS: Record<
	VdContratosProdutosQtde,
	string
> = {
	[VdContratosProdutosQtde.Value1]: "Ativo",
	[VdContratosProdutosQtde.Value3]: "Código 3",
};

export const VDCONTRATOSPRODUTOS_REPETIR_LABELS: Record<
	VdContratosProdutosRepetir,
	string
> = {
	[VdContratosProdutosRepetir.V]: "V",
};

export const VDCONTRATOSPRODUTOS_TIPO_LABELS: Record<
	VdContratosProdutosTipo,
	string
> = {
	[VdContratosProdutosTipo.I]: "Inativo",
	[VdContratosProdutosTipo.S]: "Sim",
	[VdContratosProdutosTipo.Sva]: "SVA",
	[VdContratosProdutosTipo.Tv]: "TV",
};

export const VDCONTRATOSPRODUTOS_TIPODESCONTO_LABELS: Record<
	VdContratosProdutosTipoDesconto,
	string
> = {
	[VdContratosProdutosTipoDesconto.V]: "V",
};

export const VDCONTRATOSPRODUTOS_VALORATEVENCIMENTO_LABELS: Record<
	VdContratosProdutosValorAteVencimento,
	string
> = {
	[VdContratosProdutosValorAteVencimento.V]: "Quantidade",
	[VdContratosProdutosValorAteVencimento.S]: "Sempre",
};
