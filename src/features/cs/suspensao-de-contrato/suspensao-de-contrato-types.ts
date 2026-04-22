import type {
	SuspensaoContrato,
	SuspensaoContratoRelations,
} from "#/generated/nocobase/suspensao-contrato";
import type { ListParams } from "#/repositories/types";

export const SUSPENSAO_CONTRATO_STATUS_LABELS = {
	"1": "Nova Solicitação",
	"2": "Aguardando Assinatura",
	"3": "Assinatura Concluída",
	"4": "Concluído",
	"5": "Cancelado",
} as const;

export type SuspensaoContratoStatus =
	keyof typeof SUSPENSAO_CONTRATO_STATUS_LABELS;

export const SUSPENSAO_CONTRATO_STATUS_FILTER_OPTIONS: {
	value: SuspensaoContratoStatus;
	label: string;
}[] = Object.entries(SUSPENSAO_CONTRATO_STATUS_LABELS).map(
	([value, label]) => ({
		value: value as SuspensaoContratoStatus,
		label,
	}),
);

export const SUSPENSAO_CONTRATO_STATUS_VARIANTS: Record<
	string,
	"default" | "secondary" | "destructive" | "outline"
> = {
	"1": "secondary",
	"2": "default",
	"3": "outline",
	"4": "default",
	"5": "destructive",
};

export interface SuspensaoContratoFilters {
	createdAt?: string;
	updatedAt?: string;
	titulo?: string;
	criadoPor?: number;
	status?: SuspensaoContratoStatus;
}

export type SuspensaoContratoListParams = Omit<ListParams, "filter"> & {
	filters?: SuspensaoContratoFilters;
	appends?: Array<
		| "createdBy"
		| "updatedBy"
		| "f_comentarios"
		| "f_contratos"
		| "f_pessoas"
		| "f_pessoas_pj"
		| "f_responsavel"
	>;
};

export type SuspensaoContratoWithRelations = SuspensaoContrato &
	SuspensaoContratoRelations;
