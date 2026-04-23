import type { TrocaEnderecoStatus } from "#/generated/nocobase/troca-endereco";
import { TROCAENDERECO_STATUS_LABELS } from "#/generated/nocobase/troca-endereco";

export const TROCA_STATUS_FILTER_OPTIONS: {
	value: TrocaEnderecoStatus;
	label: string;
}[] = Object.entries(TROCAENDERECO_STATUS_LABELS).map(([value, label]) => ({
	value: value as TrocaEnderecoStatus,
	label: label as string,
}));

export interface TrocaEnderecoFilters {
	status?: TrocaEnderecoStatus;
	cliente?: string;
	idContrato?: string;
	idAtendimento?: string;
	criadoEmInicio?: string;
}
