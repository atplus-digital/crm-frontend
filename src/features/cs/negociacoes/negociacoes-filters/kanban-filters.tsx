import { Calendar } from "lucide-react";
import { useId, useState } from "react";
import { FilterActions } from "#/components/filters/filter-actions";
import { Button } from "#/components/ui/button";
import { Input } from "#/components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "#/components/ui/select";
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
		<div className="space-y-4">
			<div className="flex flex-col gap-4 sm:flex-row sm:items-start">
				<div className="flex-1 space-y-2">
					<div className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
						<Calendar className="size-3.5" aria-hidden="true" />
						<span>Criado depois de</span>
					</div>
					<Input
						type="date"
						className="h-8 w-full sm:w-40"
						value={filters.criadoEmInicio || ""}
						onChange={(e) =>
							onFilter({ ...filters, criadoEmInicio: e.target.value })
						}
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
					<label
						htmlFor={substatusId}
						className="text-xs font-medium text-muted-foreground"
					>
						Substatus
					</label>
					<Select
						value={substatus}
						onValueChange={(value) => {
							setSubstatus(value);
							onFilter({
								...filters,
								substatus: value === "all" ? undefined : value,
							});
						}}
					>
						<SelectTrigger id={substatusId} className="h-8">
							<SelectValue placeholder="Selecione o substatus" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="all">Todos</SelectItem>
							{NEGOCIACAO_SUBSTATUS_FILTER_OPTIONS.map((opt) => (
								<SelectItem key={opt.value} value={opt.value}>
									{opt.label}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
				</div>
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
