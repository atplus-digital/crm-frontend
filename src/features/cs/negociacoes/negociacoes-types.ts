// ⚠️ Tipos gerados automaticamente são a fonte de verdade — NÃO redefinir manualmente

import type { Empresas } from "#/generated/types/nocobase/empresas";
import type {
	Negociacoes,
	NegociacoesFidelidade,
	NegociacoesMotivo,
	NegociacoesPontosAtencao,
	NegociacoesRelations,
	NegociacoesStatus,
	NegociacoesSubstatus,
	NegociacoesTipoPessoa,
} from "#/generated/types/nocobase/negociacoes";
import {
	NEGOCIACOES_MOTIVO_LABELS,
	NEGOCIACOES_STATUS_LABELS,
	NEGOCIACOES_SUBSTATUS_LABELS,
} from "#/generated/types/nocobase/negociacoes";
import type { Pessoas } from "#/generated/types/nocobase/pessoas";
import type { Users } from "#/generated/types/nocobase/users";
import type { ListParams } from "#/repositories/types";

export type {
	NegociacoesMotivo as MotivoRenegociacao,
	NegociacoesStatus as NegociacaoStatus,
	NegociacoesSubstatus as NegociacaoSubstatus,
} from "#/generated/types/nocobase/negociacoes";

export {
	NEGOCIACOES_CONFISSAODIVIDA_LABELS as CONFISAO_DIVIDA_LABELS,
	NEGOCIACOES_DATAVENCIMENTO_LABELS as DATA_VENCIMENTO_LABELS,
	NEGOCIACOES_ENDERECOCOMPLEMENTO_LABELS as ENDERECO_COMPLEMENTO_LABELS,
	NEGOCIACOES_FIDELIDADE_LABELS as FIDELIDADE_LABELS,
	NEGOCIACOES_MOTIVO_LABELS as MOTIVO_LABELS,
	NEGOCIACOES_MOTIVOPONTOS_LABELS as MOTIVO_PONTOS_LABELS,
	NEGOCIACOES_PONTOSATENCAO_LABELS as PONTOS_ATENCAO_LABELS,
	NEGOCIACOES_STATUS_LABELS as NEGOCIACAO_STATUS_LABELS,
	NEGOCIACOES_SUBSTATUS_LABELS as NEGOCIACAO_SUBSTATUS_LABELS,
	NEGOCIACOES_TIPOPESSOA_LABELS as TIPO_PESSOA_LABELS,
} from "#/generated/types/nocobase/negociacoes";

export const NEGOCIACAO_STATUS_FILTER_OPTIONS: {
	value: NegociacoesStatus;
	label: string;
}[] = Object.entries(NEGOCIACOES_STATUS_LABELS).map(([value, label]) => ({
	value: value as NegociacoesStatus,
	label,
}));

export const NEGOCIACAO_SUBSTATUS_FILTER_OPTIONS: {
	value: NegociacoesSubstatus;
	label: string;
}[] = Object.entries(NEGOCIACOES_SUBSTATUS_LABELS).map(([value, label]) => ({
	value: value as NegociacoesSubstatus,
	label,
}));

export const MOTIVO_FILTER_OPTIONS: {
	value: NegociacoesMotivo;
	label: string;
}[] = Object.entries(NEGOCIACOES_MOTIVO_LABELS).map(([value, label]) => ({
	value: value as NegociacoesMotivo,
	label,
}));

export type NegociacaoVendedor = Pick<Users, "id" | "nickname" | "email">;

export type Negociacao = Omit<Negociacoes, "f_contrato_ixc"> & {
	f_vendedor?: NegociacaoVendedor | null;
	f_pessoa?: Pessoas | null;
	f_negociacao_pessoa_juridica?: Empresas | null;
	f_contrato_ixc?: number | string | null;
};

export type NegociacaoWithRelations = Negociacoes & NegociacoesRelations;

export const NEGOCIACAO_STATUS_VARIANTS: Record<
	keyof typeof NEGOCIACOES_STATUS_LABELS,
	"default" | "secondary" | "destructive"
> = {
	"1": "default",
	"2": "secondary",
	"3": "secondary",
	"4": "secondary",
	"5": "default",
	"6": "destructive",
};

export const NEGOCIACAO_SUBSTATUS_VARIANTS: Record<
	keyof typeof NEGOCIACOES_SUBSTATUS_LABELS,
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
	"14": "destructive",
};

export interface NegociacaoFilters {
	titulo?: string;
	contratoIxc?: string;
	motivo?: NegociacoesMotivo;
	status?: NegociacoesStatus;
	substatus?: string;

	tipoPessoa?: NegociacoesTipoPessoa;
	cpfCnpj?: string;
	nomeFantasia?: string;
	nomeRazao?: string;

	telefone?: string;
	telefone2?: string;
	emailCobranca?: string;

	cep?: string;
	bairro?: string;
	cidade?: string;
	estado?: string;

	pacote?: number;
	scm?: number;
	smp?: number;
	stfc?: number;
	sva?: number;

	valorMensal?: number;
	valorDevedor?: number;
	valorDevedorGte?: number;
	valorDevedorLte?: number;
	multaJuros?: number;
	multaJurosGte?: number;
	multaJurosLte?: number;
	parcelasMensais?: number;
	fidelidade?: NegociacoesFidelidade;

	vendedorId?: number;

	criadoEmInicio?: string;
	criadoEmFim?: string;

	pontosAtencao?: NegociacoesPontosAtencao;

	zapsign?: boolean;
	assinaturaGov?: boolean;

	contratoId?: number;
}

function parseOptionalNumber(value: unknown): number | undefined {
	if (value === undefined || value === null || value === "") {
		return undefined;
	}

	const parsedValue = Number(value);
	return Number.isFinite(parsedValue) ? parsedValue : undefined;
}

function parseOptionalBoolean(value: unknown): boolean | undefined {
	if (value === undefined || value === null || value === "") {
		return undefined;
	}

	if (typeof value === "boolean") {
		return value;
	}

	if (value === "true") {
		return true;
	}

	if (value === "false") {
		return false;
	}

	return undefined;
}

export function normalizeNegociacaoFilters(
	filters: NegociacaoFilters,
): NegociacaoFilters {
	return {
		...filters,
		pacote: parseOptionalNumber(filters.pacote),
		scm: parseOptionalNumber(filters.scm),
		smp: parseOptionalNumber(filters.smp),
		stfc: parseOptionalNumber(filters.stfc),
		sva: parseOptionalNumber(filters.sva),
		valorMensal: parseOptionalNumber(filters.valorMensal),
		valorDevedor: parseOptionalNumber(filters.valorDevedor),
		valorDevedorGte: parseOptionalNumber(filters.valorDevedorGte),
		valorDevedorLte: parseOptionalNumber(filters.valorDevedorLte),
		multaJuros: parseOptionalNumber(filters.multaJuros),
		multaJurosGte: parseOptionalNumber(filters.multaJurosGte),
		multaJurosLte: parseOptionalNumber(filters.multaJurosLte),
		parcelasMensais: parseOptionalNumber(filters.parcelasMensais),
		vendedorId: parseOptionalNumber(filters.vendedorId),
		contratoId: parseOptionalNumber(filters.contratoId),
		zapsign: parseOptionalBoolean(filters.zapsign),
		assinaturaGov: parseOptionalBoolean(filters.assinaturaGov),
	};
}

export type NegociacaoListParams = Omit<ListParams, "filter"> & {
	filters?: NegociacaoFilters;
	appends?: Array<keyof NegociacoesRelations>;
};
