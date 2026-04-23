import { useId } from "react";
import {
	FilterActions,
	FilterDateField,
	FilterInputField,
	FilterLayout,
	FilterSelectField,
} from "#/components/filters";
import type {
	NegociacaoFilters,
	NegociacaoStatus,
} from "#/features/cs/negociacoes/negociacoes-types";
import {
	NEGOCIACAO_STATUS_FILTER_OPTIONS,
	NEGOCIACAO_SUBSTATUS_FILTER_OPTIONS,
} from "#/features/cs/negociacoes/negociacoes-types";

export interface ListaFiltersProps {
	filters: NegociacaoFilters;
	onFilter: (filters: NegociacaoFilters) => void;
}

export function ListaFilters({ filters, onFilter }: ListaFiltersProps) {
	const hasFilters =
		filters.status ||
		filters.substatus ||
		filters.titulo ||
		filters.cpfCnpj ||
		filters.criadoEmInicio ||
		filters.criadoEmFim;

	const clearFilters = () => {
		onFilter({});
	};

	const statusId = useId();
	const substatusId = useId();
	const tituloId = useId();
	const cpfCnpjId = useId();
	const criadoEmInicioId = useId();
	const criadoEmFimId = useId();

	return (
		<FilterLayout
			actions={
				<FilterActions
					onApply={() => onFilter(filters)}
					onClear={clearFilters}
					canClear={Boolean(hasFilters)}
					clearVariant="ghost"
				/>
			}
		>
			<FilterSelectField<NegociacaoStatus>
				id={statusId}
				label="Status"
				value={filters.status || "all"}
				placeholder="Selecione o status"
				options={NEGOCIACAO_STATUS_FILTER_OPTIONS}
				onChange={(v) => onFilter({ ...filters, status: v })}
			/>
			<FilterSelectField<string>
				id={substatusId}
				label="Substatus"
				value={filters.substatus || "all"}
				placeholder="Selecione o substatus"
				options={NEGOCIACAO_SUBSTATUS_FILTER_OPTIONS}
				onChange={(v) => onFilter({ ...filters, substatus: v })}
			/>
			<FilterInputField
				id={tituloId}
				label="Título"
				placeholder="Buscar por título"
				value={filters.titulo || ""}
				onChange={(v) => onFilter({ ...filters, titulo: v })}
			/>
			<FilterInputField
				id={cpfCnpjId}
				label="CPF/CNPJ"
				placeholder="000.000.000-00 ou 00.000.000/0000-00"
				value={filters.cpfCnpj || ""}
				onChange={(v) => onFilter({ ...filters, cpfCnpj: v })}
			/>
			<FilterDateField
				id={criadoEmInicioId}
				label="Criado em início"
				value={filters.criadoEmInicio || ""}
				onChange={(v) => onFilter({ ...filters, criadoEmInicio: v })}
			/>
			<FilterDateField
				id={criadoEmFimId}
				label="Criado em fim"
				value={filters.criadoEmFim || ""}
				onChange={(v) => onFilter({ ...filters, criadoEmFim: v })}
			/>
		</FilterLayout>
	);
}
