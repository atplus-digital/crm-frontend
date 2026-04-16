// Status da negociação
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

// Substatus comuns
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

// Pessoa Física
export interface NegociacaoPessoaFisica {
	id: number;
	f_nome: string;
	f_cpf?: string;
	f_email?: string;
	f_telefone?: string;
}

// Pessoa Jurídica
export interface NegociacaoPessoaJuridica {
	id: number;
	f_razao_social: string;
	f_cnpj?: string;
	f_email?: string;
	f_telefone?: string;
}

// Vendedor
export interface NegociacaoVendedor {
	id: number;
	nickname: string;
	email?: string;
}

// Negociação completa
export interface Negociacao {
	id: number;
	createdAt: string;
	updatedAt: string;
	f_titulo?: string;
	f_valor_mensal?: number;
	f_status: NegociacaoStatus;
	f_substatus?: string;
	f_descricao?: string;
	f_vendedor?: NegociacaoVendedor | null;
	f_pessoa?: NegociacaoPessoaFisica | null;
	f_negociacao_pessoa_juridica?: NegociacaoPessoaJuridica | null;
	f_data_criacao?: string;
	f_data_atualizacao?: string;
	f_contrato_ixc?: number | null;
}

// Negociação com todos os relacionamentos
export type NegociacaoWithRelations = Negociacao & {
	f_vendedor: NegociacaoVendedor;
} & (
		| {
				f_pessoa: NegociacaoPessoaFisica;
				f_negociacao_pessoa_juridica?: null;
		  }
		| {
				f_pessoa?: null;
				f_negociacao_pessoa_juridica: NegociacaoPessoaJuridica;
		  }
	);

// ---------------------------------------------------------------------------
// Filters
// ---------------------------------------------------------------------------

export interface NegociacaoFilters {
	titulo?: string;
	vendedorId?: number;
	status?: NegociacaoStatus;
	substatus?: string;
	cpfCnpj?: string;
	pacote?: string;
	criadoEmInicio?: string;
	criadoEmFim?: string;
	contratoId?: number;
}

export interface NegociacaoListParams {
	page?: number;
	pageSize?: number;
	sort?: string[];
	filters?: NegociacaoFilters;
	appends?: string[];
}

// ---------------------------------------------------------------------------
// Shared types
// ---------------------------------------------------------------------------

export interface PaginatedResponse<T> {
	data: T[];
	meta: {
		total?: number;
		totalPage?: number;
		page?: number;
		pageSize?: number;
		filterCount?: number;
		[key: string]: unknown;
	};
}
