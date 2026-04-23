import { useId } from "react";
import {
	FilterActions,
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

	const clearFilters = () => onFilter({});

	const statusId = useId();
	const tituloId = useId();
	const createdAtId = useId();
	const updatedAtId = useId();
	const criadoPorId = useId();

	return (
		<div className="space-y-4">
			<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
			</div>

			<FilterActions
				onApply={() => onFilter(filters)}
				onClear={clearFilters}
				canClear={Boolean(hasFilters)}
				clearVariant="ghost"
			/>
		</div>
	);
}
