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
import type { PaginatedResponse } from "#/lib/api-types";

// Re-export PaginatedResponse para compatibilidade
export type { PaginatedResponse };

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

export interface NegociacaoListParams {
	page?: number;
	pageSize?: number;
	sort?: string[];
	filters?: NegociacaoFilters;
	appends?: Array<keyof NegociacoesRelations>;
}
