import { FilterActions } from "#/components/filters/filter-actions";
import { useDataTableContext } from "#/components/table/data-table-context";
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
	type ContratosTableFilters,
} from "#/features/cs/contratos/contratos-types";

export function ContratosFilters() {
	const { filters, setFilter, applyFilters, clearFilters } =
		useDataTableContext<unknown, ContratosTableFilters>();

	const canClear =
		Boolean(filters.cpfCnpj) ||
		Boolean(filters.nome) ||
		Boolean(filters.contratoId) ||
		filters.status !== "all";

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
				onApply={applyFilters}
				onClear={clearFilters}
				canClear={canClear}
			/>
		</div>
	);
}
