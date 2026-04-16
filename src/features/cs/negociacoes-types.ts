// Tipos para Negociações
// ⚠️ Usando tipos gerados automaticamente como fonte de verdade

import type { Empresas } from "#/generated/nocobase/empresas";
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
// Tipos derivados dos gerados
// ---------------------------------------------------------------------------

export type NegociacaoVendedor = Pick<Users, "id" | "nickname" | "email">;

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

export type NegociacaoWithRelations = Negociacoes & {
	f_vendedor: Users;
	f_pessoa?: Pessoas | null;
	f_negociacao_pessoa_juridica?: Empresas | null;
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
	appends?: Array<keyof NegociacoesRelations>;
}
