import type {
	SuspensaoContrato,
	SuspensaoContratoRelations,
	SuspensaoContratoStatus,
} from "#/generated/types/nocobase/suspensao-contrato";
import { SUSPENSAOCONTRATO_STATUS_LABELS } from "#/generated/types/nocobase/suspensao-contrato";
import type { ListParams } from "#/repositories/types";

export type { SuspensaoContratoStatus };
// Re-export generated labels and status type for consumers
export { SUSPENSAOCONTRATO_STATUS_LABELS };

const STATUS_KEYS = Object.keys(
	SUSPENSAOCONTRATO_STATUS_LABELS,
) as SuspensaoContratoStatus[];

export const SUSPENSAO_CONTRATO_STATUS_FILTER_OPTIONS: {
	value: SuspensaoContratoStatus;
	label: string;
}[] = STATUS_KEYS.map((value) => ({
	value,
	label:
		SUSPENSAOCONTRATO_STATUS_LABELS[
			Number(value) as keyof typeof SUSPENSAOCONTRATO_STATUS_LABELS
		],
}));

export const SUSPENSAO_CONTRATO_STATUS_VARIANTS: Partial<
	Record<
		SuspensaoContratoStatus,
		"default" | "secondary" | "destructive" | "outline"
	>
> = {
	"0": "secondary",
	"1": "secondary",
	"2": "default",
	"3": "outline",
	"4": "destructive",
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
