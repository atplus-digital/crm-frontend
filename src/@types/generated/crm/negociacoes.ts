/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type {
	AnexosNegociacoes,
	Contratos,
	CuponsDesconto,
	Empresas,
	NegociacoesComentarios,
	NegociacoesItens,
	OeQualirun,
	Pacotes,
	Pessoas,
	QualirunAssinaturaGov,
} from "./index";
import type { Users } from "./users";

export const T_NEGOCIACOES_TABLE_NAME = "t_negociacoes";

export interface Negociacoes {
	id: number;
	f_fk_contrato_ixc: number;
	f_fk_cupom_desconto: number;
	f_fk_negociacao_indicador: number;
	f_fk_negociacao_vendedor: number;
	f_fk_pacote: number;
	f_fk_pessoa_negociacao: number;
	f_fk_pessoa_pj_negociacao: number;
	f_apartamento: string;
	f_assinatura_gov: boolean;
	f_bairro: string;
	f_bairro_cobranca: string;
	f_bloco_quadra: string;
	f_cep: string;
	f_cep_cobranca: string;
	f_cidade_cobranca: string;
	f_complemento_cobranca: string;
	f_confissao_divida: string;
	f_contrato_ixc: string;
	f_cpf_cnpj: string;
	f_cpf_responsavel_assinatura: string;
	f_data_vencimento: string;
	f_email_cobranca: string;
	f_endereco: string;
	f_endereco_cidade: string;
	f_endereco_cobranca: string;
	f_endereco_complemento: string;
	f_endereco_de_cobranca: string;
	f_endereco_estado: string;
	f_endereco_numero: string;
	f_endereco_referencia: string;
	f_entrada_saldo_devedor: number;
	f_estado_cobranca: string;
	f_fidelidade: string;
	f_Incremento: string;
	f_ixc_tipo_cobranca: string;
	f_link_assinatura: string;
	f_motivo: string;
	f_motivo_pontos: string[];
	f_multa_juros: number;
	f_nome_edificio: string;
	f_nome_fantasia: string;
	f_nome_razao: string;
	f_numero_cobranca: string;
	f_ordenacao: number;
	f_parcelas_mensais: number;
	f_periodo_final: string;
	f_pontos_atencao: string;
	f_responsavel_assinatura: string;
	f_rg_ie: string;
	f_scm: number;
	f_smp: number;
	f_status: string;
	f_stfc: number;
	f_substatus: string;
	f_sva: number;
	f_telefone: string;
	f_telefone_2: string;
	f_tipo_pessoa: string;
	f_titulo: string;
	f_valor_beneficios: number;
	f_valor_da_parcela: string;
	f_valor_devedor: number;
	f_valor_devedor_total: string;
	f_valor_instalacao: number;
	f_valor_mensal: number;
	f_valor_mensal_antigo: number;
	f_valor_mensal_sem_desconto: number;
	f_valor_multa_mes_faltante: number;
	f_zapsign: boolean;
	updatedAt: string;
	createdAt: string;
}

export interface NegociacoesRelations {
	createdBy?: Users | null;
	f_anexos?: AnexosNegociacoes[];
	f_comentarios?: NegociacoesComentarios[];
	f_cupom_desconto?: CuponsDesconto | null;
	f_fk_oe_qualirun?: OeQualirun[];
	f_itens_negociacao?: NegociacoesItens[];
	f_negociacao_contrato?: Contratos[];
	f_negociacao_pessoa_juridica?: Empresas | null;
	f_pacote?: Pacotes | null;
	f_pacotes_adicionais?: Pacotes[];
	f_pessoa?: Pessoas | null;
	f_qualirun_assinatura_gov?: QualirunAssinaturaGov[];
	f_vendedor?: Users | null;
	updatedBy?: Users | null;
}

export type NegociacoesRelationKey = keyof NegociacoesRelations;
