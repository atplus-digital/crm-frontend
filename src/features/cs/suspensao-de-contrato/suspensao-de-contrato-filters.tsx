import { useId } from "react";
import {
	FilterBarContainer,
	FilterDateField,
	FilterInputField,
	FilterSelectField,
} from "#/components/filters";
import type { SuspensaoContratoStatus } from "#/features/cs/suspensao-de-contrato/suspensao-de-contrato-types";
import {
	SUSPENSAO_CONTRATO_STATUS_FILTER_OPTIONS,
	type SuspensaoContratoFilters,
} from "#/features/cs/suspensao-de-contrato/suspensao-de-contrato-types";

interface SuspensaoContratoFilterBarProps {
	filters: SuspensaoContratoFilters;
	onFilter: (filters: SuspensaoContratoFilters) => void;
}

export function SuspensaoContratoFilterBar({
	filters,
	onFilter,
}: SuspensaoContratoFilterBarProps) {
	const hasFilters =
		filters.status ||
		filters.titulo ||
		filters.createdAt ||
		filters.updatedAt ||
		filters.criadoPor;

	const statusId = useId();
	const tituloId = useId();
	const createdAtId = useId();
	const updatedAtId = useId();
	const criadoPorId = useId();

	return (
		<FilterBarContainer
			onApply={() => onFilter(filters)}
			onClear={() => onFilter({})}
			canClear={Boolean(hasFilters)}
		>
			<FilterSelectField<SuspensaoContratoStatus>
				id={statusId}
				label="Status"
				value={filters.status || "all"}
				placeholder="Selecione o status"
				options={SUSPENSAO_CONTRATO_STATUS_FILTER_OPTIONS}
				onChange={(v) => onFilter({ ...filters, status: v })}
			/>
			<FilterInputField
				id={tituloId}
				label="Título"
				placeholder="Buscar por título"
				value={filters.titulo || ""}
				onChange={(v) => onFilter({ ...filters, titulo: v })}
			/>
			<FilterDateField
				id={createdAtId}
				label="Criado em"
				value={filters.createdAt || ""}
				onChange={(v) => onFilter({ ...filters, createdAt: v })}
			/>
			<FilterDateField
				id={updatedAtId}
				label="Atualizado em"
				value={filters.updatedAt || ""}
				onChange={(v) => onFilter({ ...filters, updatedAt: v })}
			/>
			<FilterInputField
				id={criadoPorId}
				label="Criado por"
				placeholder="Buscar por criador"
				value={filters.criadoPor?.toString() || ""}
				onChange={(v) =>
					onFilter({
						...filters,
						criadoPor: Number(v) || undefined,
					})
				}
			/>
		</FilterBarContainer>
	);
}
