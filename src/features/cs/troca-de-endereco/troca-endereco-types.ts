import type {
	TrocaEnderecoStatus,
	TrocaEnderecoTaxaInstalacao,
} from "#/generated/nocobase/troca-endereco";
import {
	TROCAENDERECO_STATUS_LABELS,
	TROCAENDERECO_TAXA_INSTALACAO_LABELS,
} from "#/generated/nocobase/troca-endereco";

export const TROCA_STATUS_FILTER_OPTIONS: {
	value: TrocaEnderecoStatus;
	label: string;
}[] = Object.entries(TROCAENDERECO_STATUS_LABELS).map(([value, label]) => ({
	value: value as TrocaEnderecoStatus,
	label,
}));

export const TROCA_TAXA_INSTALACAO_FILTER_OPTIONS: {
	value: TrocaEnderecoTaxaInstalacao;
	label: string;
}[] = Object.entries(TROCAENDERECO_TAXA_INSTALACAO_LABELS).map(
	([value, label]) => ({
		value: value as TrocaEnderecoTaxaInstalacao,
		label,
	}),
);

export const TROCA_STATUS_VARIANTS: Record<
	string,
	"default" | "secondary" | "destructive" | "outline"
> = {
	"0": "secondary",
	"1": "default",
	"2": "outline",
	"3": "default",
	"4": "destructive",
};

export const TROCA_STATUS_COLOR_CLASSES: Record<string, string> = {
	"0": "bg-gray-100 text-gray-800 dark:bg-gray-800/30 dark:text-gray-400",
	"1": "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400",
	"2": "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400",
	"3": "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400",
	"4": "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400",
};

export interface TrocaEnderecoFilters {
	status?: TrocaEnderecoStatus;
	cliente?: string;
	idContrato?: string;
	idAtendimento?: string;
	criadoEmInicio?: string;
}
