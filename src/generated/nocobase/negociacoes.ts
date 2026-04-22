/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */
import type { Empresas } from "./empresas";
import type {
	AnexosNegociacoes,
	Contratos,
	CuponsDesconto,
	NegociacoesComentarios,
	NegociacoesItens,
	OeQualirun,
	Pacotes,
	QualirunAssinaturaGov,
} from "./index";
import type { Pessoas } from "./pessoas";
import type { Users } from "./users";

export const T_NEGOCIACOES_TABLE_NAME = "t_negociacoes";

export const NEGOCIACOES_CONFISSAODIVIDA_LABELS = {
	Nao: "Nao",
	Sim: "Sim",
} as const;

export const NEGOCIACOES_DATAVENCIMENTO_LABELS = {
	"1": "Dia 01",
	"5": "Dia 05",
	"10": "Dia 10",
	"15": "Dia 15",
	"20": "Dia 20",
	"25": "Dia 25",
} as const;

export const NEGOCIACOES_ENDERECOCOBRANCA_LABELS = {
	"0": "Não",
	"1": "Sim",
} as const;

export const NEGOCIACOES_ENDERECOCOMPLEMENTO_LABELS = {
	Casa: "Casa",
	Apartamento: "Apartamento",
	Condominio: "Condominio",
	Comercial: "Comercial",
} as const;

export const NEGOCIACOES_FIDELIDADE_LABELS = {
	"0": "0 Meses",
	"12": "12 Meses",
	"24": "24 Meses",
	"36": "36 Meses",
	"48": "48 Meses",
	"60": "60 Meses",
} as const;

export const NEGOCIACOES_MOTIVO_LABELS = {
	I: "Venda Nova",
	M: "Mudança de Endereço",
	D: "Downgrade",
	U: "Upgrade",
	N: "Renegociação",
	R: "Reativação",
	T: "Mudança de Tecnologia",
	L: "Mudança de Titularidade",
	S: "Segunda Contratação",
	P: "Proposta",
} as const;

export const NEGOCIACOES_MOTIVOPONTOS_LABELS = {
	cep: "CEP duplicado",
	endereco: "Endereço duplicado",
	numero: "Número duplicado",
	telefone: "Telefone duplicado",
	TelefoneAdc: "Telefone adicional duplicado",
	email: "E-mail duplicado",
} as const;

export const NEGOCIACOES_PONTOSATENCAO_LABELS = {
	"0": "0 Pontos",
	"1": "1 Ponto",
	"2": "2 Pontos",
	"3": "3 Pontos",
	"4": "4 Pontos",
	"5": "5 Pontos",
	"6": "6 Pontos",
} as const;

export const NEGOCIACOES_STATUS_LABELS = {
	"1": "Novo",
	"2": "Negociando",
	"3": "Assinatura",
	"4": "Auditoria",
	"5": "Concluído",
	"6": "Arquivado",
} as const;

export const NEGOCIACOES_SUBSTATUS_LABELS = {
	"1": "NA",
	"2": "AGUARDANDO - Assinatura do contrato pelo cliente",
	"3": "AGUARDANDO - Auditoria",
	"4": "APROVADO - Aguardando inserção no IXC",
	"5": "REPROVADO - Divergência de Dados",
	"6": "REPROVADO - Fraude",
	"7": "REPROVADO - Análise de Crédito",
	"8": "APROVADO - Erro na integração com o IXC",
	"9": "APROVADO - Concluído",
	"10": "PERDIDO",
	"11": "APROVADO - Aguardando atualização no IXC",
	"12": "REPROVADO - Financeiro em Atraso",
	"13": "EM STANDBY",
} as const;

export const NEGOCIACOES_TIPOPESSOA_LABELS = {
	PF: "Pessoa Física",
	PJ: "Pessoa Jurídica",
} as const;

export type NegociacoesConfissaoDivida =
	keyof typeof NEGOCIACOES_CONFISSAODIVIDA_LABELS;

export type NegociacoesDataVencimento =
	keyof typeof NEGOCIACOES_DATAVENCIMENTO_LABELS;

export type NegociacoesEnderecoCobranca =
	keyof typeof NEGOCIACOES_ENDERECOCOBRANCA_LABELS;

export type NegociacoesEnderecoComplemento =
	keyof typeof NEGOCIACOES_ENDERECOCOMPLEMENTO_LABELS;

export type NegociacoesFidelidade = keyof typeof NEGOCIACOES_FIDELIDADE_LABELS;

export type NegociacoesMotivo = keyof typeof NEGOCIACOES_MOTIVO_LABELS;

export type NegociacoesMotivoPontos =
	keyof typeof NEGOCIACOES_MOTIVOPONTOS_LABELS;

export type NegociacoesPontosAtencao =
	keyof typeof NEGOCIACOES_PONTOSATENCAO_LABELS;

export type NegociacoesStatus = keyof typeof NEGOCIACOES_STATUS_LABELS;

export type NegociacoesSubstatus = keyof typeof NEGOCIACOES_SUBSTATUS_LABELS;

export type NegociacoesTipoPessoa = keyof typeof NEGOCIACOES_TIPOPESSOA_LABELS;

export interface Negociacoes {
	id: number;
	f_fk_auditoria_automatica: number;
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
	f_confissao_divida: NegociacoesConfissaoDivida;
	f_contrato_ixc: string;
	f_cpf_cnpj: string;
	f_cpf_responsavel_assinatura: string;
	f_data_vencimento: NegociacoesDataVencimento;
	f_email_cobranca: string;
	f_endereco: string;
	f_endereco_cidade: string;
	f_endereco_cobranca: NegociacoesEnderecoCobranca;
	f_endereco_complemento: NegociacoesEnderecoComplemento;
	f_endereco_de_cobranca: string;
	f_endereco_estado: string;
	f_endereco_numero: string;
	f_endereco_referencia: string;
	f_entrada_saldo_devedor: number;
	f_estado_cobranca: string;
	f_fidelidade: NegociacoesFidelidade;
	f_Incremento: string;
	f_ixc_tipo_cobranca: string;
	f_link_assinatura: string;
	f_motivo: NegociacoesMotivo;
	f_motivo_pontos: NegociacoesMotivoPontos;
	f_multa_juros: number;
	f_nome_edificio: string;
	f_nome_fantasia: string;
	f_nome_razao: string;
	f_numero_cobranca: string;
	f_ordenacao: number;
	f_parcelas_mensais: number;
	f_periodo_final: string;
	f_pontos_atencao: NegociacoesPontosAtencao;
	f_responsavel_assinatura: string;
	f_rg_ie: string;
	f_scm: number;
	f_smp: number;
	f_status: NegociacoesStatus;
	f_stfc: number;
	f_substatus: NegociacoesSubstatus;
	f_sva: number;
	f_telefone: string;
	f_telefone_2: string;
	f_tipo_pessoa: NegociacoesTipoPessoa;
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
