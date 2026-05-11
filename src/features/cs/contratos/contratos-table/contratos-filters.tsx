import {
	FilterActions,
	FilterInputField,
	FilterLayout,
	FilterMultiSelect,
} from "#/components/filters";
import { useFilterContext } from "#/components/filters/filter-context";
import {
	CONTRATO_STATUS_LABELS,
	type ContratoStatus,
	type ContratosTableFilters,
	DEFAULT_CONTRATOS_TABLE_FILTERS,
	INTERNET_STATUS_LABELS,
	type InternetStatus,
} from "#/features/cs/contratos/contratos-types";

interface ContratosFiltersProps {
	filters: ContratosTableFilters;
}

const STATUS_BADGE_COLORS: Record<ContratoStatus, string> = {
	A: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400",
	I: "bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-400",
	D: "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400",
	C: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400",
	P: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400",
	N: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400",
};

const SERVICO_STATUS_BADGE_COLORS: Record<InternetStatus, string> = {
	A: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400",
	D: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400",
	FA: "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400",
	CM: "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400",
	CA: "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400",
	CE: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400",
	AA: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400",
};

export function ContratosFilters({ filters }: ContratosFiltersProps) {
	const { onFilter } = useFilterContext();

	const selectedStatuses = JSON.parse(filters.status) as ContratoStatus[];
	const selectedServicoStatuses = JSON.parse(
		filters.servicoStatus,
	) as InternetStatus[];

	const canClear =
		Boolean(filters.cpfCnpj) ||
		Boolean(filters.nome) ||
		Boolean(filters.contratoId) ||
		selectedStatuses.length > 0 ||
		selectedServicoStatuses.length > 0;

	const statusOptions = Object.entries(CONTRATO_STATUS_LABELS).map(
		([value, label]) => ({
			value: value as ContratoStatus,
			label,
		}),
	);

	const servicoStatusOptions = Object.entries(INTERNET_STATUS_LABELS).map(
		([value, label]) => ({
			value: value as InternetStatus,
			label,
		}),
	);

	return (
		<FilterLayout
			fieldsClassName="lg:grid-cols-3 xl:grid-cols-6"
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
			<FilterMultiSelect<ContratoStatus>
				id="filter-contratos-status"
				label="Status Contrato"
				placeholder="Selecionar..."
				options={statusOptions}
				value={selectedStatuses}
				onChange={(newStatuses) => {
					onFilter({
						...filters,
						status: JSON.stringify(newStatuses),
					});
				}}
				badgeTrigger
				badgeColorClass={(value) => STATUS_BADGE_COLORS[value]}
			/>
			<FilterMultiSelect<InternetStatus>
				id="filter-contratos-servico-status"
				label="Status Serviço"
				placeholder="Selecionar..."
				options={servicoStatusOptions}
				value={selectedServicoStatuses}
				onChange={(newStatuses) => {
					onFilter({
						...filters,
						servicoStatus: JSON.stringify(newStatuses),
					});
				}}
				badgeTrigger
				badgeColorClass={(value) => SERVICO_STATUS_BADGE_COLORS[value]}
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
