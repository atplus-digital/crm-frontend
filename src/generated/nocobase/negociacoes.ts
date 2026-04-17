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

export enum NegociacoesConfissaoDivida {
	Nao = "Nao",
	Sim = "Sim",
}

export enum NegociacoesDataVencimento {
	Value1 = "1",
	Value5 = "5",
	Value10 = "10",
	Value15 = "15",
	Value20 = "20",
	Value25 = "25",
}

export enum NegociacoesEnderecoCidade {
	Curibanos = "Curibanos",
	Curitibanos = "Curitibanos",
	FlorianPolis = "Florianópolis",
	Lages = "Lages",
}

export enum NegociacoesEnderecoCobranca {
	Value0 = "0",
	Value1 = "1",
}

export enum NegociacoesEnderecoComplemento {
	Casa = "Casa",
	Apartamento = "Apartamento",
	Condominio = "Condominio",
	Comercial = "Comercial",
}

export enum NegociacoesEnderecoEstado {
	Rs = "RS",
	SantaCatarina = "santa catarina",
	Sc = "sc",
}

export enum NegociacoesFidelidade {
	Value0 = "0",
	Value12 = "12",
	Value24 = "24",
	Value36 = "36",
	Value48 = "48",
	Value60 = "60",
}

export enum NegociacoesFkCupomDesconto {
	Value0 = "0",
	Value10 = "10",
	Value21 = "21",
}

export enum NegociacoesFkNegociacaoIndicador {
	Value12 = "12",
	Value9 = "9",
}

export enum NegociacoesFkNegociacaoVendedor {
	Value12 = "12",
	Value20 = "20",
	Value27 = "27",
	Value31 = "31",
	Value32 = "32",
	Value34 = "34",
	Value35 = "35",
	Value36 = "36",
	Value37 = "37",
	Value38 = "38",
}

export enum NegociacoesMotivo {
	I = "I",
	M = "M",
	D = "D",
	U = "U",
	N = "N",
	R = "R",
	T = "T",
	L = "L",
	S = "S",
	P = "P",
}

export enum NegociacoesMotivoPontos {
	Cep = "cep",
	Endereco = "endereco",
	Numero = "numero",
	Telefone = "telefone",
	TelefoneAdc = "telefone-adc",
	Email = "email",
}

export enum NegociacoesParcelasMensais {
	Value1 = "1",
}

export enum NegociacoesPontosAtencao {
	Value0 = "0",
	Value1 = "1",
	Value2 = "2",
	Value3 = "3",
	Value4 = "4",
	Value5 = "5",
	Value6 = "6",
}

export enum NegociacoesScm {
	Value0 = "0",
	Value1 = "1",
}

export enum NegociacoesSmp {
	Value0 = "0",
	Value1 = "1",
}

export enum NegociacoesStatus {
	Value1 = "1",
	Value2 = "2",
	Value3 = "3",
	Value4 = "4",
	Value5 = "5",
	Value6 = "6",
}

export enum NegociacoesStfc {
	Value0 = "0",
	Value1 = "1",
}

export enum NegociacoesSubstatus {
	Value1 = "1",
	Value2 = "2",
	Value3 = "3",
	Value4 = "4",
	Value5 = "5",
	Value6 = "6",
	Value7 = "7",
	Value8 = "8",
	Value9 = "9",
	Value10 = "10",
	Value11 = "11",
	Value12 = "12",
	Value13 = "13",
}

export enum NegociacoesSva {
	Value0 = "0",
	Value1 = "1",
}

export enum NegociacoesTipoPessoa {
	Pf = "PF",
	Pj = "PJ",
}

export enum NegociacoesValorDevedorTotal {
	Value0 = "0",
}

export enum NegociacoesValorInstalacao {
	Value0 = "0",
	Value20 = "20",
	Value300 = "300",
	Value30000 = "30000",
	Value500 = "500",
}

export interface Negociacoes {
	id: number;
	f_fk_auditoria_automatica: number;
	f_fk_contrato_ixc: number;
	f_fk_cupom_desconto: NegociacoesFkCupomDesconto;
	f_fk_negociacao_indicador: NegociacoesFkNegociacaoIndicador;
	f_fk_negociacao_vendedor: NegociacoesFkNegociacaoVendedor;
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
	f_endereco_cidade: NegociacoesEnderecoCidade;
	f_endereco_cobranca: NegociacoesEnderecoCobranca;
	f_endereco_complemento: NegociacoesEnderecoComplemento;
	f_endereco_de_cobranca: string;
	f_endereco_estado: NegociacoesEnderecoEstado;
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
	f_parcelas_mensais: NegociacoesParcelasMensais;
	f_periodo_final: string;
	f_pontos_atencao: NegociacoesPontosAtencao;
	f_responsavel_assinatura: string;
	f_rg_ie: string;
	f_scm: NegociacoesScm;
	f_smp: NegociacoesSmp;
	f_status: NegociacoesStatus;
	f_stfc: NegociacoesStfc;
	f_substatus: NegociacoesSubstatus;
	f_sva: NegociacoesSva;
	f_telefone: string;
	f_telefone_2: string;
	f_tipo_pessoa: NegociacoesTipoPessoa;
	f_titulo: string;
	f_valor_beneficios: number;
	f_valor_da_parcela: string;
	f_valor_devedor: number;
	f_valor_devedor_total: NegociacoesValorDevedorTotal;
	f_valor_instalacao: NegociacoesValorInstalacao;
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

export const NEGOCIACOES_CONFISSAODIVIDA_LABELS: Record<
	NegociacoesConfissaoDivida,
	string
> = {
	[NegociacoesConfissaoDivida.Nao]: "Nao",
	[NegociacoesConfissaoDivida.Sim]: "Sim",
};

export const NEGOCIACOES_DATAVENCIMENTO_LABELS: Record<
	NegociacoesDataVencimento,
	string
> = {
	[NegociacoesDataVencimento.Value1]: "Dia 01",
	[NegociacoesDataVencimento.Value5]: "Dia 05",
	[NegociacoesDataVencimento.Value10]: "Dia 10",
	[NegociacoesDataVencimento.Value15]: "Dia 15",
	[NegociacoesDataVencimento.Value20]: "Dia 20",
	[NegociacoesDataVencimento.Value25]: "Dia 25",
};

export const NEGOCIACOES_ENDERECOCIDADE_LABELS: Record<
	NegociacoesEnderecoCidade,
	string
> = {
	[NegociacoesEnderecoCidade.Curibanos]: "Curibanos",
	[NegociacoesEnderecoCidade.Curitibanos]: "Curitibanos",
	[NegociacoesEnderecoCidade.FlorianPolis]: "Florianópolis",
	[NegociacoesEnderecoCidade.Lages]: "Lages",
};

export const NEGOCIACOES_ENDERECOCOBRANCA_LABELS: Record<
	NegociacoesEnderecoCobranca,
	string
> = {
	[NegociacoesEnderecoCobranca.Value0]: "Não",
	[NegociacoesEnderecoCobranca.Value1]: "Sim",
};

export const NEGOCIACOES_ENDERECOCOMPLEMENTO_LABELS: Record<
	NegociacoesEnderecoComplemento,
	string
> = {
	[NegociacoesEnderecoComplemento.Casa]: "Casa",
	[NegociacoesEnderecoComplemento.Apartamento]: "Apartamento",
	[NegociacoesEnderecoComplemento.Condominio]: "Condominio",
	[NegociacoesEnderecoComplemento.Comercial]: "Comercial",
};

export const NEGOCIACOES_ENDERECOESTADO_LABELS: Record<
	NegociacoesEnderecoEstado,
	string
> = {
	[NegociacoesEnderecoEstado.Rs]: "RS",
	[NegociacoesEnderecoEstado.SantaCatarina]: "Santa Catarina",
	[NegociacoesEnderecoEstado.Sc]: "Sc",
};

export const NEGOCIACOES_FIDELIDADE_LABELS: Record<
	NegociacoesFidelidade,
	string
> = {
	[NegociacoesFidelidade.Value0]: "0 Meses",
	[NegociacoesFidelidade.Value12]: "12 Meses",
	[NegociacoesFidelidade.Value24]: "24 Meses",
	[NegociacoesFidelidade.Value36]: "36 Meses",
	[NegociacoesFidelidade.Value48]: "48 Meses",
	[NegociacoesFidelidade.Value60]: "60 Meses",
};

export const NEGOCIACOES_FKCUPOMDESCONTO_LABELS: Record<
	NegociacoesFkCupomDesconto,
	string
> = {
	[NegociacoesFkCupomDesconto.Value0]: "Inativo",
	[NegociacoesFkCupomDesconto.Value10]: "Código 10",
	[NegociacoesFkCupomDesconto.Value21]: "Código 21",
};

export const NEGOCIACOES_FKNEGOCIACAOINDICADOR_LABELS: Record<
	NegociacoesFkNegociacaoIndicador,
	string
> = {
	[NegociacoesFkNegociacaoIndicador.Value12]: "Código 12",
	[NegociacoesFkNegociacaoIndicador.Value9]: "Código 9",
};

export const NEGOCIACOES_FKNEGOCIACAOVENDEDOR_LABELS: Record<
	NegociacoesFkNegociacaoVendedor,
	string
> = {
	[NegociacoesFkNegociacaoVendedor.Value12]: "Código 12",
	[NegociacoesFkNegociacaoVendedor.Value20]: "Código 20",
	[NegociacoesFkNegociacaoVendedor.Value27]: "Código 27",
	[NegociacoesFkNegociacaoVendedor.Value31]: "Código 31",
	[NegociacoesFkNegociacaoVendedor.Value32]: "Código 32",
	[NegociacoesFkNegociacaoVendedor.Value34]: "Código 34",
	[NegociacoesFkNegociacaoVendedor.Value35]: "Código 35",
	[NegociacoesFkNegociacaoVendedor.Value36]: "Código 36",
	[NegociacoesFkNegociacaoVendedor.Value37]: "Código 37",
	[NegociacoesFkNegociacaoVendedor.Value38]: "Código 38",
};

export const NEGOCIACOES_MOTIVO_LABELS: Record<NegociacoesMotivo, string> = {
	[NegociacoesMotivo.I]: "Venda Nova",
	[NegociacoesMotivo.M]: "Mudança de Endereço",
	[NegociacoesMotivo.D]: "Downgrade",
	[NegociacoesMotivo.U]: "Upgrade",
	[NegociacoesMotivo.N]: "Renegociação",
	[NegociacoesMotivo.R]: "Reativação",
	[NegociacoesMotivo.T]: "Mudança de Tecnologia",
	[NegociacoesMotivo.L]: "Mudança de Titularidade",
	[NegociacoesMotivo.S]: "Segunda Contratação",
	[NegociacoesMotivo.P]: "Proposta",
};

export const NEGOCIACOES_MOTIVOPONTOS_LABELS: Record<
	NegociacoesMotivoPontos,
	string
> = {
	[NegociacoesMotivoPontos.Cep]: "CEP duplicado",
	[NegociacoesMotivoPontos.Endereco]: "Endereço duplicado",
	[NegociacoesMotivoPontos.Numero]: "Número duplicado",
	[NegociacoesMotivoPontos.Telefone]: "Telefone duplicado",
	[NegociacoesMotivoPontos.TelefoneAdc]: "Telefone adicional duplicado",
	[NegociacoesMotivoPontos.Email]: "E-mail duplicado",
};

export const NEGOCIACOES_PARCELASMENSAIS_LABELS: Record<
	NegociacoesParcelasMensais,
	string
> = {
	[NegociacoesParcelasMensais.Value1]: "Ativo",
};

export const NEGOCIACOES_PONTOSATENCAO_LABELS: Record<
	NegociacoesPontosAtencao,
	string
> = {
	[NegociacoesPontosAtencao.Value0]: "0 Pontos",
	[NegociacoesPontosAtencao.Value1]: "1 Ponto",
	[NegociacoesPontosAtencao.Value2]: "2 Pontos",
	[NegociacoesPontosAtencao.Value3]: "3 Pontos",
	[NegociacoesPontosAtencao.Value4]: "4 Pontos",
	[NegociacoesPontosAtencao.Value5]: "5 Pontos",
	[NegociacoesPontosAtencao.Value6]: "6 Pontos",
};

export const NEGOCIACOES_SCM_LABELS: Record<NegociacoesScm, string> = {
	[NegociacoesScm.Value0]: "Inativo",
	[NegociacoesScm.Value1]: "Ativo",
};

export const NEGOCIACOES_SMP_LABELS: Record<NegociacoesSmp, string> = {
	[NegociacoesSmp.Value0]: "Inativo",
	[NegociacoesSmp.Value1]: "Ativo",
};

export const NEGOCIACOES_STATUS_LABELS: Record<NegociacoesStatus, string> = {
	[NegociacoesStatus.Value1]: "Novo",
	[NegociacoesStatus.Value2]: "Negociando",
	[NegociacoesStatus.Value3]: "Assinatura",
	[NegociacoesStatus.Value4]: "Auditoria",
	[NegociacoesStatus.Value5]: "Concluído",
	[NegociacoesStatus.Value6]: "Arquivado",
};

export const NEGOCIACOES_STFC_LABELS: Record<NegociacoesStfc, string> = {
	[NegociacoesStfc.Value0]: "Inativo",
	[NegociacoesStfc.Value1]: "Ativo",
};

export const NEGOCIACOES_SUBSTATUS_LABELS: Record<
	NegociacoesSubstatus,
	string
> = {
	[NegociacoesSubstatus.Value1]: "NA",
	[NegociacoesSubstatus.Value2]:
		"AGUARDANDO - Assinatura do contrato pelo cliente",
	[NegociacoesSubstatus.Value3]: "AGUARDANDO - Auditoria",
	[NegociacoesSubstatus.Value4]: "APROVADO - Aguardando inserção no IXC",
	[NegociacoesSubstatus.Value5]: "REPROVADO - Divergência de Dados",
	[NegociacoesSubstatus.Value6]: "REPROVADO - Fraude",
	[NegociacoesSubstatus.Value7]: "REPROVADO - Análise de Crédito",
	[NegociacoesSubstatus.Value8]: "APROVADO - Erro na integração com o IXC",
	[NegociacoesSubstatus.Value9]: "APROVADO - Concluído",
	[NegociacoesSubstatus.Value10]: "PERDIDO",
	[NegociacoesSubstatus.Value11]: "APROVADO - Aguardando atualização no IXC",
	[NegociacoesSubstatus.Value12]: "REPROVADO - Financeiro em Atraso",
	[NegociacoesSubstatus.Value13]: "EM STANDBY",
};

export const NEGOCIACOES_SVA_LABELS: Record<NegociacoesSva, string> = {
	[NegociacoesSva.Value0]: "Inativo",
	[NegociacoesSva.Value1]: "Ativo",
};

export const NEGOCIACOES_TIPOPESSOA_LABELS: Record<
	NegociacoesTipoPessoa,
	string
> = {
	[NegociacoesTipoPessoa.Pf]: "Pessoa Física",
	[NegociacoesTipoPessoa.Pj]: "Pessoa Jurídica",
};

export const NEGOCIACOES_VALORDEVEDORTOTAL_LABELS: Record<
	NegociacoesValorDevedorTotal,
	string
> = {
	[NegociacoesValorDevedorTotal.Value0]: "Inativo",
};

export const NEGOCIACOES_VALORINSTALACAO_LABELS: Record<
	NegociacoesValorInstalacao,
	string
> = {
	[NegociacoesValorInstalacao.Value0]: "Inativo",
	[NegociacoesValorInstalacao.Value20]: "Código 20",
	[NegociacoesValorInstalacao.Value300]: "300",
	[NegociacoesValorInstalacao.Value30000]: "30000",
	[NegociacoesValorInstalacao.Value500]: "500",
};
