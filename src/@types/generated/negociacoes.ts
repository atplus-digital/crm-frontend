/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { ContratosBase } from "./contratos";
import type { EmpresasBase } from "./empresas";
import type {
	AnexosNegociacoesBase,
	CuponsDescontoBase,
	NegociacoesComentariosBase,
	NegociacoesItensBase,
	OeQualirunBase,
	PacotesBase,
	QualirunAssinaturaGovBase,
} from "./index";
import type { PessoasBase } from "./pessoas";
import type { UsersBase } from "./users";

export interface NegociacoesBase {
	createdAt: string;
	createdBy: UsersBase | null;
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
	f_fk_contrato_ixc: number;
	f_fk_cupom_desconto: number;
	f_fk_negociacao_indicador: number;
	f_fk_negociacao_vendedor: number;
	f_fk_pacote: number;
	f_fk_pessoa_negociacao: number;
	f_fk_pessoa_pj_negociacao: number;
	f_Incremento: string;
	f_ixc_tipo_cobranca: string;
	f_link_assinatura: string;
	f_motivo: string;
	f_motivo_pontos: unknown[];
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
	id: number;
	updatedAt: string;
	updatedBy: UsersBase | null;
	f_cupom_desconto: CuponsDescontoBase | null;
	f_negociacao_pessoa_juridica: EmpresasBase | null;
	f_pacote: PacotesBase | null;
	f_pessoa: PessoasBase | null;
	f_vendedor: UsersBase | null;
}

export interface NegociacoesRelations {
	f_anexos?: AnexosNegociacoesBase[];
	f_comentarios?: NegociacoesComentariosBase[];
	f_cupom_desconto?: CuponsDescontoBase | null;
	f_fk_oe_qualirun?: OeQualirunBase[];
	f_itens_negociacao?: NegociacoesItensBase[];
	f_negociacao_contrato?: ContratosBase[];
	f_negociacao_pessoa_juridica?: EmpresasBase | null;
	f_pacote?: PacotesBase | null;
	f_pacotes_adicionais?: PacotesBase[];
	f_pessoa?: PessoasBase | null;
	f_qualirun_assinatura_gov?: QualirunAssinaturaGovBase[];
	f_vendedor?: UsersBase | null;
}

export type NegociacoesRelationKey = keyof NegociacoesRelations;
