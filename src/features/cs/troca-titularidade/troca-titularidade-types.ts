import type {
	CrmTrocaTitularidadeEstado,
	CrmTrocaTitularidadeStatus,
	CrmTrocaTitularidadeSubstatus,
} from "#/generated/nocobase/crm-troca-titularidade";
import {
	CRMTROCATITULARIDADE_ESTADO_LABELS,
	CRMTROCATITULARIDADE_STATUS_LABELS,
	CRMTROCATITULARIDADE_SUBSTATUS_LABELS,
} from "#/generated/nocobase/crm-troca-titularidade";
import type { ListParams } from "#/repositories/types";

// ---------------------------------------------------------------------------
// Filter Options
// ---------------------------------------------------------------------------

export const TROCA_STATUS_FILTER_OPTIONS: {
	value: CrmTrocaTitularidadeStatus;
	label: string;
}[] = Object.entries(CRMTROCATITULARIDADE_STATUS_LABELS).map(
	([value, label]) => ({
		value: value as CrmTrocaTitularidadeStatus,
		label,
	}),
);

export const TROCA_SUBSTATUS_FILTER_OPTIONS: {
	value: CrmTrocaTitularidadeSubstatus;
	label: string;
}[] = Object.entries(CRMTROCATITULARIDADE_SUBSTATUS_LABELS).map(
	([value, label]) => ({
		value: value as CrmTrocaTitularidadeSubstatus,
		label,
	}),
);

export const TROCA_ESTADO_FILTER_OPTIONS: {
	value: CrmTrocaTitularidadeEstado;
	label: string;
}[] = Object.entries(CRMTROCATITULARIDADE_ESTADO_LABELS).map(
	([value, label]) => ({
		value: value as CrmTrocaTitularidadeEstado,
		label,
	}),
);

// ---------------------------------------------------------------------------
// Status Variants for Badges
// ---------------------------------------------------------------------------

export const TROCA_STATUS_VARIANTS: Record<
	string,
	"default" | "secondary" | "destructive" | "outline"
> = {
	"0": "secondary",
	"1": "default",
	"2": "outline",
	"3": "default",
	"9": "destructive",
};

export const TROCA_SUBSTATUS_VARIANTS: Record<
	string,
	"default" | "secondary" | "destructive" | "outline"
> = {
	"0": "secondary",
	"1": "default",
	"2": "destructive",
	"3": "default",
	"4": "destructive",
	"5": "destructive",
	"6": "outline",
};

// ---------------------------------------------------------------------------
// Filters
// ---------------------------------------------------------------------------

export interface TrocaTitularidadeFilters {
	status?: CrmTrocaTitularidadeStatus;
	substatus?: CrmTrocaTitularidadeSubstatus;
	estado?: CrmTrocaTitularidadeEstado;
	cidade?: string;
	contratoId?: string;
	cedente?: string;
	cessionario?: string;
	criadoEmInicio?: string;
}

// ---------------------------------------------------------------------------
// List Params
// ---------------------------------------------------------------------------

export type TrocaTitularidadeListParams = Omit<ListParams, "filter"> & {
	filters?: TrocaTitularidadeFilters;
	appends?: Array<
		| "f_vendedor"
		| "f_pessoa_pf"
		| "f_pessoa_pj"
		| "f_comentarios"
		| "f_anexos"
		| "f_trocadetitularidade_contrato"
		| "createdBy"
		| "updatedBy"
	>;
};
