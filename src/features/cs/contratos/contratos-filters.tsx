import { useEffect } from "react";
import { FilterActions } from "#/components/filters/filter-actions";
import { Input } from "#/components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "#/components/ui/select";
import {
	CONTRATO_STATUS_LABELS,
	type ContratoFilters,
} from "#/features/cs/contratos/contratos-types";
import { useFilterState } from "#/hooks/use-filter-state";

interface FilterFormState {
	[key: string]: string;
	cpfCnpj: string;
	nome: string;
	status: string;
	contratoId: string;
}

interface ContratosFiltersProps {
	onFilter: (filters: ContratoFilters) => void;
	currentFilters: ContratoFilters;
}

export function ContratosFilters({
	onFilter,
	currentFilters,
}: ContratosFiltersProps) {
	const { filters, setFilter, setFilters, clearFilters, canClear } =
		useFilterState<FilterFormState>({
			cpfCnpj: currentFilters.cpfCnpj ?? "",
			nome: currentFilters.nome ?? "",
			status: currentFilters.status ?? "",
			contratoId: currentFilters.contratoId?.toString() ?? "",
		});

	useEffect(() => {
		setFilters({
			cpfCnpj: currentFilters.cpfCnpj ?? "",
			nome: currentFilters.nome ?? "",
			status: currentFilters.status ?? "",
			contratoId: currentFilters.contratoId?.toString() ?? "",
		});
	}, [currentFilters, setFilters]);

	function handleFilter() {
		onFilter({
			cpfCnpj: filters.cpfCnpj || undefined,
			nome: filters.nome || undefined,
			status: (filters.status || undefined) as ContratoFilters["status"],
			contratoId: filters.contratoId ? Number(filters.contratoId) : undefined,
		});
	}

	function handleClear() {
		clearFilters();
		onFilter({});
	}

	return (
		<div className="rounded-lg border bg-card p-4">
			<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
				<Input
					placeholder="000.000.000-00"
					value={filters.cpfCnpj}
					onChange={(e) => setFilter("cpfCnpj", e.target.value)}
				/>
				<Input
					placeholder="Buscar por nome..."
					value={filters.nome}
					onChange={(e) => setFilter("nome", e.target.value)}
				/>
				<Select
					value={filters.status}
					onValueChange={(value) => setFilter("status", value)}
				>
					<SelectTrigger className="w-full">
						<SelectValue placeholder="Status do Contrato" />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="all">Todos</SelectItem>
						{Object.entries(CONTRATO_STATUS_LABELS).map(([value, label]) => (
							<SelectItem key={value} value={value}>
								{label}
							</SelectItem>
						))}
					</SelectContent>
				</Select>
				<Input
					type="number"
					placeholder="ID do contrato"
					value={filters.contratoId}
					onChange={(e) => setFilter("contratoId", e.target.value)}
				/>
			</div>
			<FilterActions
				className="mt-4"
				onApply={handleFilter}
				onClear={handleClear}
				canClear={canClear}
			/>
		</div>
	);
}
