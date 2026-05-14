import {
	FilterActions,
	FilterInputField,
	FilterLayout,
	FilterMultiSelect,
} from "#/components/filters";
import { useFilterContext } from "#/components/filters/filter-context";
import type { BadgeColor } from "#/components/ui/badge";
import {
	CONTRATO_STATUS_LABELS,
	type ContratoStatus,
	type ContratosTableFilters,
	INTERNET_STATUS_LABELS,
	type InternetStatus,
} from "#/features/cs/contratos/contratos-types";

interface ContratosFiltersProps {
	filters: ContratosTableFilters;
}

const STATUS_BADGE_COLOR_MAP: Record<ContratoStatus, BadgeColor> = {
	A: "green",
	I: "slate",
	D: "orange",
	C: "red",
	P: "blue",
	N: "purple",
};

const SERVICO_STATUS_BADGE_COLOR_MAP: Record<InternetStatus, BadgeColor> = {
	A: "emerald",
	D: "red",
	FA: "amber",
	CM: "orange",
	CA: "orange",
	CE: "purple",
	AA: "blue",
};

export function ContratosFilters({ filters }: ContratosFiltersProps) {
	const { onFilter, hasActiveFilters, getCleanFilters } = useFilterContext();

	const selectedStatuses = JSON.parse(filters.status) as ContratoStatus[];
	const selectedServicoStatuses = JSON.parse(
		filters.servicoStatus,
	) as InternetStatus[];

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
			fieldsClassName="lg:grid-cols-3 xl:grid-cols-5"
			actions={
				<div className="flex items-center justify-end">
					<FilterActions
						onApply={() => onFilter(filters)}
						onClear={() => onFilter(getCleanFilters())}
						canClear={hasActiveFilters(filters)}
						clearVariant="ghost"
					/>
				</div>
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
				label="Nome / Razão Social"
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
				badgeColorMap={STATUS_BADGE_COLOR_MAP}
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
				badgeColorMap={SERVICO_STATUS_BADGE_COLOR_MAP}
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
