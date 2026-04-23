import {
	FilterActions,
	FilterInputField,
	FilterSelectField,
} from "#/components/filters";
import { useDataTableContext } from "#/components/table/data-table-context";
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
				<FilterInputField
					id="filter-contratos-cpfCnpj"
					label="CPF/CNPJ"
					placeholder="000.000.000-00"
					value={filters.cpfCnpj}
					onChange={(v) => setFilter("cpfCnpj", v)}
				/>
				<FilterInputField
					id="filter-contratos-nome"
					label="Nome"
					placeholder="Buscar por nome..."
					value={filters.nome}
					onChange={(v) => setFilter("nome", v)}
				/>
				<FilterSelectField<string>
					id="filter-contratos-status"
					label="Status"
					value={filters.status}
					placeholder="Status do Contrato"
					options={Object.entries(CONTRATO_STATUS_LABELS).map(
						([value, label]) => ({
							value,
							label,
						}),
					)}
					onChange={(v) => setFilter("status", v ?? "all")}
				/>
				<FilterInputField
					id="filter-contratos-id"
					label="ID Contrato"
					placeholder="ID do contrato"
					value={filters.contratoId}
					onChange={(v) => setFilter("contratoId", v)}
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
