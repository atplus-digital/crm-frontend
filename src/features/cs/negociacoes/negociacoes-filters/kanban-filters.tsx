import { useId, useState } from "react";
import {
	FilterActions,
	FilterDateField,
	FilterLayout,
	FilterSelectField,
} from "#/components/filters";
import { Button } from "#/components/ui/button";
import type {
	NegociacaoFilters,
	NegociacaoStatus,
} from "#/features/cs/negociacoes/negociacoes-types";
import {
	NEGOCIACAO_STATUS_FILTER_OPTIONS,
	NEGOCIACAO_SUBSTATUS_FILTER_OPTIONS,
} from "#/features/cs/negociacoes/negociacoes-types";

export interface KanbanFiltersProps {
	filters: NegociacaoFilters;
	onFilter: (filters: NegociacaoFilters) => void;
}

export function KanbanFilters({ filters, onFilter }: KanbanFiltersProps) {
	const [selectedStatuses, setSelectedStatuses] = useState<string[]>(
		filters.status ? [filters.status] : [],
	);
	const [substatus, setSubstatus] = useState<string>(
		filters.substatus || "all",
	);

	const toggleStatus = (status: string) => {
		const newStatuses = selectedStatuses.includes(status)
			? selectedStatuses.filter((s) => s !== status)
			: [status];
		setSelectedStatuses(newStatuses);
		onFilter({ ...filters, status: newStatuses[0] as NegociacaoStatus });
	};

	const clearFilters = () => {
		setSelectedStatuses([]);
		setSubstatus("all");
		onFilter({});
	};

	const hasFilters =
		selectedStatuses.length > 0 ||
		substatus !== "all" ||
		filters.criadoEmInicio;
	const substatusId = useId();

	return (
		<FilterLayout
			fieldsClassName="sm:grid-cols-1 lg:grid-cols-1"
			actions={
				<FilterActions
					onApply={() => onFilter(filters)}
					onClear={clearFilters}
					canClear={Boolean(hasFilters)}
					clearVariant="ghost"
				/>
			}
		>
			<div className="flex flex-col gap-4 sm:flex-row sm:items-start">
				<div className="flex-1 space-y-2">
					<FilterDateField
						id="kanban-created-after"
						label="Criado depois de"
						value={filters.criadoEmInicio || ""}
						onChange={(v) => onFilter({ ...filters, criadoEmInicio: v })}
					/>
				</div>

				<div className="flex-1 space-y-2">
					<span className="text-xs font-medium text-muted-foreground">
						Status
					</span>
					<div className="flex flex-wrap gap-1.5">
						{NEGOCIACAO_STATUS_FILTER_OPTIONS.map((status) => (
							<Button
								key={status.value}
								variant={
									selectedStatuses.includes(status.value)
										? "default"
										: "outline"
								}
								size="xs"
								onClick={() => toggleStatus(status.value)}
								className="text-xs"
							>
								{status.label}
							</Button>
						))}
					</div>
				</div>

				<div className="space-y-2 sm:w-48">
					<FilterSelectField<string>
						id={substatusId}
						label="Substatus"
						value={substatus}
						placeholder="Selecione o substatus"
						options={NEGOCIACAO_SUBSTATUS_FILTER_OPTIONS}
						onChange={(v) => {
							setSubstatus(v ?? "all");
							onFilter({ ...filters, substatus: v });
						}}
					/>
				</div>
			</div>
		</FilterLayout>
	);
}
