export const ContratoStatus = {
	Ativo: "A",
	Inativo: "I",
	Desativado: "D",
	Cancelado: "C",
} as const;

export type ContratoStatus =
	(typeof ContratoStatus)[keyof typeof ContratoStatus];

export const CONTRATO_STATUS_LABELS: Record<ContratoStatus, string> = {
	[ContratoStatus.Ativo]: "Ativo",
	[ContratoStatus.Inativo]: "Inativo",
	[ContratoStatus.Desativado]: "Desativado",
	[ContratoStatus.Cancelado]: "Cancelado",
};

export const InternetStatus = {
	Ativo: "A",
	Desconectado: "D",
	FinanceiroAtraso: "FA",
} as const;

export type InternetStatus =
	(typeof InternetStatus)[keyof typeof InternetStatus];

export const INTERNET_STATUS_LABELS: Record<InternetStatus, string> = {
	[InternetStatus.Ativo]: "Ativo",
	[InternetStatus.Desconectado]: "Desconectado",
	[InternetStatus.FinanceiroAtraso]: "Financeiro Atraso",
};

export interface Contrato {
	id: number;
	id_cliente: number;
	id_vd_contrato: number;
	contrato: string;
	status: ContratoStatus;
	status_internet: InternetStatus;
	ultima_atualizacao: string;
	data: string;
	data_ativacao: string;
	data_cancelamento: string;
	data_validade: string | null;
	pago_ate_data: string | null;
	email_cobranca: string | null;
	valor_unitario: string | null;
	fidelidade: number;
	tipo_cobranca: string;
	tipo: string;
	cidade: number | string;
	bairro: string | null;
	cep: string | null;
	endereco: string | null;
	numero: string | null;
	complemento: string | null;
}

export interface ContratoCliente {
	id: number;
	razao: string;
	cnpj_cpf: string;
	fantasia: string;
	email: string;
	telefone_celular: string;
	tipo_pessoa: string;
}

export type ContratoWithCliente = Contrato & {
	f_nc_cliente?: ContratoCliente | null;
};

// ---------------------------------------------------------------------------
// Filters
// ---------------------------------------------------------------------------

export interface ContratoFilters {
	cpfCnpj?: string;
	nome?: string;
	status?: ContratoStatus;
	contratoId?: number;
}

export interface ContratoListParams {
	page?: number;
	pageSize?: number;
	sort?: string[];
	filters?: ContratoFilters;
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
