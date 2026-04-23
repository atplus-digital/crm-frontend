import { useId } from "react";
import {
	FilterActions,
	FilterDateField,
	FilterInputField,
	FilterLayout,
	FilterSelectField,
} from "#/components/filters";
import {
	TROCA_STATUS_FILTER_OPTIONS,
	type TrocaEnderecoFilters,
} from "#/features/cs/troca-de-endereco/troca-endereco-types";
import type { TrocaEnderecoStatus } from "#/generated/nocobase/troca-endereco";

interface TrocaEnderecoFilterBarProps {
	filters: TrocaEnderecoFilters;
	onFilter: (filters: TrocaEnderecoFilters) => void;
}

export function TrocaEnderecoFilterBar({
	filters,
	onFilter,
}: TrocaEnderecoFilterBarProps) {
	const hasFilters =
		filters.status ||
		filters.cliente ||
		filters.idContrato ||
		filters.idAtendimento ||
		filters.criadoEmInicio;

	const clearFilters = () => onFilter({});

	const statusId = useId();
	const clienteId = useId();
	const contratoId = useId();
	const atendimentoId = useId();
	const criadoEmInicioId = useId();

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
		</FilterLayout>
	);
}
