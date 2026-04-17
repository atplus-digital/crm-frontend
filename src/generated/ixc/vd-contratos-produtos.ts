/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

export const VD_CONTRATOS_PRODUTOS_TABLE_NAME = "vd_contratos_produtos";

export interface VdContratosProdutos {
	id: number;
	atualizado_por: string;
	desconto_percentual: string;
	desconto_proporcional: string;
	descricao: string;
	descricao_plano_valor_1: string;
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
	obs: string;
	qtde: number;
	qtde_repeticoes_desconto_produto: string;
	repetir: string;
	repetir_qtde: string;
	tipo: string;
	tipo_desconto: string;
	tv_pacotes_canais: string;
	ultima_atualizacao: string;
	valor_adicional_pacote: string;
	valor_ate_vencimento: string;
	valor_desconto_produto: string;
	valor_unit: string;
}

export type VdContratosProdutosRelations = Record<string, never>;

export type VdContratosProdutosRelationKey = keyof VdContratosProdutosRelations;
