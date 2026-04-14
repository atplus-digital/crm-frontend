// ---------------------------------------------------------------------------
// Status e Substatus
// ---------------------------------------------------------------------------

export const NegociacaoStatus = {
	Novo: "Novo",
	Negociando: "Negociando",
	Assinatura: "Assinatura",
	Auditoria: "Auditoria",
	Concluído: "Concluído",
	Arquivado: "Arquivado",
} as const;

export type NegociacaoStatus =
	(typeof NegociacaoStatus)[keyof typeof NegociacaoStatus];

export const NEGOCIACAO_STATUS_LABELS: Record<NegociacaoStatus, string> = {
	[NegociacaoStatus.Novo]: "Novo",
	[NegociacaoStatus.Negociando]: "Negociando",
	[NegociacaoStatus.Assinatura]: "Assinatura",
	[NegociacaoStatus.Auditoria]: "Auditoria",
	[NegociacaoStatus.Concluído]: "Concluído",
	[NegociacaoStatus.Arquivado]: "Arquivado",
};

export const NegociacaoSubstatus = {
	AguardandoContato: "Aguardando contato",
	EmAnalise: "Em análise",
	PropostaEnviada: "Proposta enviada",
	AguardandoAssinatura: "Aguardando assinatura",
	VerificacaoCadastral: "Verificação cadastral",
	ContratoAssinado: "Contrato assinado",
} as const;

export type NegociacaoSubstatus =
	(typeof NegociacaoSubstatus)[keyof typeof NegociacaoSubstatus];

// ---------------------------------------------------------------------------
// Negociação
// ---------------------------------------------------------------------------

export interface Negociacao {
	id: number;
	f_titulo: string;
	f_valor_mensal?: number | null;
	f_status: NegociacaoStatus;
	f_substatus?: NegociacaoSubstatus | null;
	f_descricao?: string | null;
	f_data_inicio?: string | null;
	f_data_fim?: string | null;
	f_probabilidade?: number | null;
	f_valor_total?: number | null;
	f_pessoa_id?: number | null;
	f_pessoa_juridica_id?: number | null;
	f_vendedor_id?: number | null;
	f_pessoa?: {
		f_nome: string;
		f_cpf: string;
	} | null;
	f_pessoa_juridica?: {
		f_razao_social: string;
		f_cnpj: string;
	} | null;
	f_vendedor?: {
		nickname: string;
		email: string;
	} | null;
	createdAt?: string;
	updatedAt?: string;
}

// ---------------------------------------------------------------------------
// Filters
// ---------------------------------------------------------------------------

export interface NegociacaoFilters {
	titulo?: string;
	status?: NegociacaoStatus;
	substatus?: NegociacaoSubstatus;
	vendedorId?: number;
	pessoaId?: number;
	pessoaJuridicaId?: number;
	valorMin?: number;
	valorMax?: number;
	dataInicioDe?: string;
	dataInicioAte?: string;
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
		print?: number;
		[key: string]: unknown;
	};
}
