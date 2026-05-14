import { useId } from "react";
import {
	FilterBarContainer,
	FilterDateField,
	FilterInputField,
	FilterSelectField,
} from "#/components/filters";
import { useFilterContext } from "#/components/filters/filter-context";
import {
	TROCA_STATUS_FILTER_OPTIONS,
	type TrocaEnderecoFilters,
} from "#/features/cs/troca-de-endereco/troca-endereco-types";
import type { TrocaEnderecoStatus } from "#/generated/types/nocobase/troca-endereco";

interface TrocaEnderecoFilterBarProps {
	filters: TrocaEnderecoFilters;
}

export function TrocaEnderecoFilterBar({
	filters,
}: TrocaEnderecoFilterBarProps) {
	const { onFilter } = useFilterContext<TrocaEnderecoFilters>();

	const statusId = useId();
	const clienteId = useId();
	const contratoId = useId();
	const atendimentoId = useId();
	const criadoEmInicioId = useId();

	return (
		<FilterBarContainer filters={filters} onApply={() => onFilter(filters)}>
			<FilterSelectField<TrocaEnderecoStatus>
				id={statusId}
				label="Status"
				value={filters.status || "all"}
				placeholder="Selecione o status"
				options={TROCA_STATUS_FILTER_OPTIONS}
				onChange={(v) => onFilter({ ...filters, status: v })}
			/>
			<FilterInputField
				id={clienteId}
				label="Cliente"
				placeholder="Buscar por cliente"
				value={filters.cliente || ""}
				onChange={(v) => onFilter({ ...filters, cliente: v })}
			/>
			<FilterInputField
				id={contratoId}
				label="ID Contrato"
				placeholder="Buscar por ID do contrato"
				value={filters.idContrato || ""}
				onChange={(v) => onFilter({ ...filters, idContrato: v })}
			/>
			<FilterInputField
				id={atendimentoId}
				label="ID Atendimento"
				placeholder="Buscar por ID do atendimento"
				value={filters.idAtendimento || ""}
				onChange={(v) => onFilter({ ...filters, idAtendimento: v })}
			/>
			<FilterDateField
				id={criadoEmInicioId}
				label="Criado depois de"
				value={filters.criadoEmInicio || ""}
				onChange={(v) => onFilter({ ...filters, criadoEmInicio: v })}
			/>
		</FilterBarContainer>
	);
}
