/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

export const VD_CONTRATOS_PRODUTOS_TABLE_NAME = "vd_contratos_produtos";

export enum VdContratosProdutosDescontoPercentual {
	Value000 = "0.00",
}

export enum VdContratosProdutosDescricaoPlanoValor1 {
	Value000 = "0.00",
}

export enum VdContratosProdutosDescricaoPlanoValor2 {
	Value000 = "0.00",
}

export enum VdContratosProdutosFixarIp {
	Value0 = "0",
}

export enum VdContratosProdutosIdContratoProdutoPlano {
	Value0 = "0",
}

export enum VdContratosProdutosIdTipoDocumento {
	Value0 = "0",
}

export enum VdContratosProdutosQtde {
	Value1 = "1",
	Value3 = "3",
}

export enum VdContratosProdutosQtdeRepeticoesDescontoProduto {
	Value0 = "0",
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
	Value000 = "0.00",
}

export enum VdContratosProdutosValorDescontoProduto {
	Value000 = "0.00",
}

export interface VdContratosProdutos {
	id: number;
	atualizado_por: string;
	desconto_percentual: VdContratosProdutosDescontoPercentual;
	desconto_proporcional: string;
	descricao: string;
	descricao_plano_valor_1: VdContratosProdutosDescricaoPlanoValor1;
	descricao_plano_valor_2: VdContratosProdutosDescricaoPlanoValor2;
	fixar_ip: VdContratosProdutosFixarIp;
	id_contrato: string;
	id_contrato_produto_plano: VdContratosProdutosIdContratoProdutoPlano;
	id_plano: number;
	id_produto: number;
	id_tipo_documento: VdContratosProdutosIdTipoDocumento;
	id_unidade: string;
	id_vd_contrato: number;
	inserido_em: string;
	inserido_por: string;
	limite_pacote: string;
	logins_simultaneos: string;
	obs: string;
	qtde: VdContratosProdutosQtde;
	qtde_repeticoes_desconto_produto: VdContratosProdutosQtdeRepeticoesDescontoProduto;
	repetir: VdContratosProdutosRepetir;
	repetir_qtde: string;
	tipo: VdContratosProdutosTipo;
	tipo_desconto: VdContratosProdutosTipoDesconto;
	tv_pacotes_canais: string;
	ultima_atualizacao: string;
	valor_adicional_pacote: string;
	valor_ate_vencimento: VdContratosProdutosValorAteVencimento;
	valor_desconto_produto: VdContratosProdutosValorDescontoProduto;
	valor_unit: string;
}

export type VdContratosProdutosRelations = Record<string, never>;

export type VdContratosProdutosRelationKey = keyof VdContratosProdutosRelations;

export const VDCONTRATOSPRODUTOS_DESCONTOPERCENTUAL_LABELS: Record<
	VdContratosProdutosDescontoPercentual,
	string
> = {
	[VdContratosProdutosDescontoPercentual.Value000]: "0.00",
};

export const VDCONTRATOSPRODUTOS_DESCRICAOPLANOVALOR1_LABELS: Record<
	VdContratosProdutosDescricaoPlanoValor1,
	string
> = {
	[VdContratosProdutosDescricaoPlanoValor1.Value000]: "0.00",
};

export const VDCONTRATOSPRODUTOS_DESCRICAOPLANOVALOR2_LABELS: Record<
	VdContratosProdutosDescricaoPlanoValor2,
	string
> = {
	[VdContratosProdutosDescricaoPlanoValor2.Value000]: "0.00",
};

export const VDCONTRATOSPRODUTOS_FIXARIP_LABELS: Record<
	VdContratosProdutosFixarIp,
	string
> = {
	[VdContratosProdutosFixarIp.Value0]: "Inativo",
};

export const VDCONTRATOSPRODUTOS_IDCONTRATOPRODUTOPLANO_LABELS: Record<
	VdContratosProdutosIdContratoProdutoPlano,
	string
> = {
	[VdContratosProdutosIdContratoProdutoPlano.Value0]: "Inativo",
};

export const VDCONTRATOSPRODUTOS_IDTIPODOCUMENTO_LABELS: Record<
	VdContratosProdutosIdTipoDocumento,
	string
> = {
	[VdContratosProdutosIdTipoDocumento.Value0]: "Inativo",
};

export const VDCONTRATOSPRODUTOS_QTDE_LABELS: Record<
	VdContratosProdutosQtde,
	string
> = {
	[VdContratosProdutosQtde.Value1]: "Ativo",
	[VdContratosProdutosQtde.Value3]: "Código 3",
};

export const VDCONTRATOSPRODUTOS_QTDEREPETICOESDESCONTOPRODUTO_LABELS: Record<
	VdContratosProdutosQtdeRepeticoesDescontoProduto,
	string
> = {
	[VdContratosProdutosQtdeRepeticoesDescontoProduto.Value0]: "Inativo",
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
	[VdContratosProdutosValorAteVencimento.Value000]: "0.00",
};

export const VDCONTRATOSPRODUTOS_VALORDESCONTOPRODUTO_LABELS: Record<
	VdContratosProdutosValorDescontoProduto,
	string
> = {
	[VdContratosProdutosValorDescontoProduto.Value000]: "0.00",
};
