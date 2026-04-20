// Tipos para Negociações
// ⚠️ Usando tipos gerados automaticamente como fonte de verdade

import type { Empresas } from "#/generated/nocobase/empresas";
import type {
	AnexosNegociacoes,
	CuponsDesconto,
	NegociacoesComentarios,
	NegociacoesItens,
	Pacotes,
} from "#/generated/nocobase/index";
import type {
	Negociacoes,
	NegociacoesRelations,
} from "#/generated/nocobase/negociacoes";
import type { Pessoas } from "#/generated/nocobase/pessoas";
import type { Users } from "#/generated/nocobase/users";
import type { ListParams } from "#/repositories/types";

// ---------------------------------------------------------------------------
// Status (enumerações de domínio - não geradas)
// ---------------------------------------------------------------------------

export const NegociacaoStatus = {
	Novo: "Novo",
	Negociando: "Negociando",
	Assinatura: "Assinatura",
	Auditoria: "Auditoria",
	Concluido: "Concluido",
	Arquivado: "Arquivado",
} as const;

export type NegociacaoStatus =
	(typeof NegociacaoStatus)[keyof typeof NegociacaoStatus];

export const NegociacaoSubstatus = {
	AguardandoContato: "Aguardando contato",
	EmAnalise: "Em análise",
	PropostaEnviada: "Proposta enviada",
	AguardandoAssinatura: "Aguardando assinatura",
	VerificacaoCadastral: "Verificação cadastral",
	ContratoAssinado: "Contrato assinado",
	NovoLead: "Novo lead",
	EmNegociacao: "Em negociação",
} as const;

export type NegociacaoSubstatus =
	(typeof NegociacaoSubstatus)[keyof typeof NegociacaoSubstatus];

// ---------------------------------------------------------------------------
// Filter Options
// ---------------------------------------------------------------------------

export const NEGOCIACAO_STATUS_FILTER_OPTIONS: {
	value: NegociacaoStatus;
	label: string;
}[] = [
	{ value: "Novo", label: "Novo" },
	{ value: "Negociando", label: "Negociando" },
	{ value: "Assinatura", label: "Assinatura" },
	{ value: "Auditoria", label: "Auditoria" },
	{ value: "Concluido", label: "Concluído" },
	{ value: "Arquivado", label: "Arquivado" },
];

export const NEGOCIACAO_SUBSTATUS_FILTER_OPTIONS = [
	{ value: "Aguardando contato", label: "Aguardando contato" },
	{ value: "Em análise", label: "Em análise" },
	{ value: "Proposta enviada", label: "Proposta enviada" },
	{ value: "Aguardando assinatura", label: "Aguardando assinatura" },
	{ value: "Verificação cadastral", label: "Verificação cadastral" },
	{ value: "Contrato assinado", label: "Contrato assinado" },
];

// ---------------------------------------------------------------------------
// Enums de Domínio - Motivo Renegociação
// ---------------------------------------------------------------------------

export const MotivoRenegociacao = {
	MudancaEndereco: "M",
	Downgrade: "D",
	Upgrade: "U",
	Renegociacao: "N",
	Reativacao: "R",
	MudancaTecnologia: "T",
	MudancaTitularidade: "L",
} as const;

export type MotivoRenegociacao =
	(typeof MotivoRenegociacao)[keyof typeof MotivoRenegociacao];

// ---------------------------------------------------------------------------
// Enums de Domínio - Tipos e Opções
// ---------------------------------------------------------------------------

export const TipoPessoa = {
	Fisica: "PF",
	Juridica: "PJ",
} as const;

export type TipoPessoa = (typeof TipoPessoa)[keyof typeof TipoPessoa];

export const FidelidadeMeses = {
	Zero: "0",
	Doze: "12",
	VinteQuatro: "24",
	TrintaSeis: "36",
	QuarentaOito: "48",
	Sessenta: "60",
} as const;

export type FidelidadeMeses =
	(typeof FidelidadeMeses)[keyof typeof FidelidadeMeses];

export const DataVencimento = {
	Dia01: "1",
	Dia05: "5",
	Dia10: "10",
	Dia15: "15",
	Dia20: "20",
	Dia25: "25",
} as const;

export type DataVencimento =
	(typeof DataVencimento)[keyof typeof DataVencimento];

export const PontosAtencao = {
	Zero: "0",
	Um: "1",
	Dois: "2",
	Tres: "3",
	Quatro: "4",
	Cinco: "5",
	Seis: "6",
} as const;

export type PontosAtencao = (typeof PontosAtencao)[keyof typeof PontosAtencao];

export const ConfissaoDivida = {
	Sim: "Sim",
	Nao: "Nao",
} as const;

export type ConfissaoDivida =
	(typeof ConfissaoDivida)[keyof typeof ConfissaoDivida];

export const EnderecoCobrancaDiferente = {
	Sim: "1",
	Nao: "0",
} as const;

export type EnderecoCobrancaDiferente =
	(typeof EnderecoCobrancaDiferente)[keyof typeof EnderecoCobrancaDiferente];

// ---------------------------------------------------------------------------
// Tipos derivados dos gerados
// ---------------------------------------------------------------------------

export type NegociacaoVendedor = Pick<Users, "id" | "nickname" | "email">;

// Negociação completa
export type Negociacao = Omit<Negociacoes, "f_contrato_ixc"> & {
	f_status: NegociacaoStatus;
	f_vendedor?: NegociacaoVendedor | null;
	f_pessoa?: NegociacaoPessoaFisica | null;
	f_negociacao_pessoa_juridica?: NegociacaoPessoaJuridica | null;
	f_contrato_ixc?: number | string | null;
};

// ---------------------------------------------------------------------------
// Relation Types (7 must-have relations)
// ---------------------------------------------------------------------------

export type NegociacaoItens = NegociacoesItens;
export type NegociacaoAnexos = AnexosNegociacoes;
export type NegociacaoComentarios = NegociacoesComentarios;
export type NegociacaoPacotes = Pacotes;
export type NegociacaoCupomDesconto = CuponsDesconto;

// ---------------------------------------------------------------------------
// NegociacaoWithRelations (complete with all 7 relations)
// ---------------------------------------------------------------------------

export type NegociacaoWithRelations = Negociacoes & {
	f_vendedor: Users;
	f_pessoa?: Pessoas | null;
	f_negociacao_pessoa_juridica?: Empresas | null;
	f_itens_negociacao?: NegociacoesItens[];
	f_anexos?: AnexosNegociacoes[];
	f_comentarios?: NegociacoesComentarios[];
	f_pacote?: Pacotes | null;
	f_pacotes_adicionais?: Pacotes[];
	f_cupom_desconto?: CuponsDesconto | null;
	createdBy?: Users | null;
	updatedBy?: Users | null;
};

// ---------------------------------------------------------------------------
// Display Labels (internal code → UI text for badges/details)
// ---------------------------------------------------------------------------

export const MOTIVO_LABELS: Record<string, string> = {
	I: "Inadimplência",
	M: "Mudança Endereço",
	D: "Downgrade",
	U: "Upgrade",
	N: "Renegociação",
	R: "Reativação",
	T: "Mudança Tecnologia",
	L: "Mudança Titularidade",
	S: "Suspensão",
	P: "Outros",
};

export const NEGOCIACAO_STATUS_LABELS: Record<string, string> = {
	"1": "Novo",
	"2": "Negociando",
	"3": "Assinatura",
	"4": "Auditoria",
	"5": "Concluído",
	"6": "Arquivado",
};

export const NEGOCIACAO_STATUS_VARIANTS: Record<
	string,
	"default" | "secondary" | "destructive"
> = {
	"1": "default",
	"2": "secondary",
	"3": "secondary",
	"4": "secondary",
	"5": "default",
	"6": "destructive",
};

export const NEGOCIACAO_SUBSTATUS_LABELS: Record<string, string> = {
	"1": "NA",
	"2": "AGUARDANDO Assinatura",
	"3": "AGUARDANDO Auditoria",
	"4": "APROVADO Aguardando IXC",
	"5": "REPROVADO Divergência",
	"6": "REPROVADO Fraude",
	"7": "REPROVADO Crédito",
	"8": "APROVADO Erro IXC",
	"9": "APROVADO Concluído",
	"10": "PERDIDO",
	"11": "APROVADO Aguardando atualização",
	"12": "REPROVADO Financeiro",
	"13": "EM STANDBY",
};

export const NEGOCIACAO_SUBSTATUS_VARIANTS: Record<
	string,
	"default" | "secondary" | "destructive"
> = {
	"1": "secondary",
	"2": "secondary",
	"3": "secondary",
	"4": "default",
	"5": "destructive",
	"6": "destructive",
	"7": "destructive",
	"8": "default",
	"9": "default",
	"10": "destructive",
	"11": "default",
	"12": "destructive",
	"13": "secondary",
};

export const TIPO_PESSOA_LABELS: Record<string, string> = {
	PF: "Pessoa Física",
	PJ: "Pessoa Jurídica",
};

export const FIDELIDADE_LABELS: Record<string, string> = {
	"0": "0 Meses",
	"12": "12 Meses",
	"24": "24 Meses",
	"36": "36 Meses",
	"48": "48 Meses",
	"60": "60 Meses",
};

export const DATA_VENCIMENTO_LABELS: Record<string, string> = {
	"1": "Dia 01",
	"5": "Dia 05",
	"10": "Dia 10",
	"15": "Dia 15",
	"20": "Dia 20",
	"25": "Dia 25",
};

export const PONTOS_ATENCAO_LABELS: Record<string, string> = {
	"0": "0 Pontos",
	"1": "1 Ponto",
	"2": "2 Pontos",
	"3": "3 Pontos",
	"4": "4 Pontos",
	"5": "5 Pontos",
	"6": "6 Pontos",
};

export const ENDERECO_COMPLEMENTO_LABELS: Record<string, string> = {
	Casa: "Casa",
	Apartamento: "Apartamento",
	Condominio: "Condomínio",
	Comercial: "Comercial",
};

export const CONFISAO_DIVIDA_LABELS: Record<string, string> = {
	Sim: "Sim",
	Nao: "Não",
};

// ---------------------------------------------------------------------------
// Legacy aliases (para compatibilidade com código existente)
// ---------------------------------------------------------------------------

export type NegociacaoPessoaFisica = Pessoas;
export type NegociacaoPessoaJuridica = Empresas;

// ---------------------------------------------------------------------------
// Filters
// ---------------------------------------------------------------------------

export interface NegociacaoFilters {
	// Identificação
	titulo?: string;
	contratoIxc?: string;
	motivo?: MotivoRenegociacao;
	status?: NegociacaoStatus;
	substatus?: string;

	// Tipo de Pessoa
	tipoPessoa?: TipoPessoa;
	cpfCnpj?: string;
	nomeFantasia?: string;
	nomeRazao?: string;

	// Contato
	telefone?: string;
	telefone2?: string;
	emailCobranca?: string;

	// Endereço
	cep?: string;
	bairro?: string;
	cidade?: string;
	estado?: string;

	// Pacote e Serviços
	pacote?: number;
	scm?: number;
	smp?: number;
	stfc?: number;
	sva?: number;

	// Valores Financeiros
	valorMensal?: number;
	valorDevedor?: number;
	valorDevedorGte?: number;
	valorDevedorLte?: number;
	multaJuros?: number;
	multaJurosGte?: number;
	multaJurosLte?: number;
	parcelasMensais?: number;
	fidelidade?: FidelidadeMeses;

	// Vendedor
	vendedorId?: number;

	// Período
	criadoEmInicio?: string;
	criadoEmFim?: string;

	// Pontos de Atenção
	pontosAtencao?: PontosAtencao;

	// Assinatura
	zapsign?: boolean;
	assinaturaGov?: boolean;

	// Contrato
	contratoId?: number;
}

export type NegociacaoListParams = Omit<ListParams, "filter"> & {
	filters?: NegociacaoFilters;
	appends?: Array<keyof NegociacoesRelations>;
};
