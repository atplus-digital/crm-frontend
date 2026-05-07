import {
	FilterActions,
	FilterInputField,
	FilterLayout,
	FilterSelectField,
} from "#/components/filters";
import { useFilterContext } from "#/components/filters/filter-context";
import {
	CONTRATO_STATUS_LABELS,
	type ContratosTableFilters,
	DEFAULT_CONTRATOS_TABLE_FILTERS,
} from "#/features/cs/contratos/contratos-types";

interface ContratosFiltersProps {
	filters: ContratosTableFilters;
}

export function ContratosFilters({ filters }: ContratosFiltersProps) {
	const { onFilter } = useFilterContext();

	const canClear =
		Boolean(filters.cpfCnpj) ||
		Boolean(filters.nome) ||
		Boolean(filters.contratoId) ||
		filters.status !== "all";

	return (
		<FilterLayout
			fieldsClassName="lg:grid-cols-4"
			actions={
				<FilterActions
					onApply={() => onFilter(filters)}
					onClear={() => onFilter(DEFAULT_CONTRATOS_TABLE_FILTERS)}
					canClear={canClear}
					clearVariant="ghost"
				/>
			}
		>
			<FilterInputField
				id="filter-contratos-cpfCnpj"
				label="CPF/CNPJ"
				placeholder="000.000.000-00"
				value={filters.cpfCnpj}
				onChange={(v) => {
					onFilter({ ...filters, cpfCnpj: v });
				}}
			/>
			<FilterInputField
				id="filter-contratos-nome"
				label="Nome"
				placeholder="Buscar por nome..."
				value={filters.nome}
				onChange={(v) => {
					onFilter({ ...filters, nome: v });
				}}
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
				onChange={(v) => {
					const newStatus = (v ?? "all") as ContratosTableFilters["status"];
					onFilter({ ...filters, status: newStatus });
				}}
			/>
			<FilterInputField
				id="filter-contratos-id"
				label="ID Contrato"
				placeholder="ID do contrato"
				value={filters.contratoId}
				onChange={(v) => {
					onFilter({ ...filters, contratoId: v });
				}}
			/>
		</FilterLayout>
	);
}
