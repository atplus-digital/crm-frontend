import { useId, useRef } from "react";
import {
	FilterActions,
	FilterBadgeGroup,
	FilterInputField,
	FilterLayout,
	flushFilters,
} from "#/components/filters";
import type {
	KanbanDashboardFilters,
	NegociacaoMotivo,
	SourceCollection,
} from "./kanban-dashboard-types";
import { SOURCE_COLLECTION_OPTIONS } from "./kanban-dashboard-types";

// ---------------------------------------------------------------------------
// Props
// ---------------------------------------------------------------------------

interface KanbanDashboardFilterBarProps {
	filters: KanbanDashboardFilters;
	onFilter: (filters: KanbanDashboardFilters) => void;
}

// ---------------------------------------------------------------------------
// Tipo de Negociação options (only the ones requested)
// ---------------------------------------------------------------------------

// Filter values for the three allowed types
const TIPO_NEGOCIACAO_VALUES = ["M", "N", "L"] as const;
type TipoNegociacaoValue = (typeof TIPO_NEGOCIACAO_VALUES)[number];

// Human-readable labels for the allowed values
const TIPO_NEGOCIACAO_LABELS: Record<TipoNegociacaoValue, string> = {
	M: "Mudança de Endereço",
	N: "Renegociação",
	L: "Mudança de Titularidade",
};

const TIPO_NEGOCIACAO_OPTIONS = TIPO_NEGOCIACAO_VALUES.map((value) => ({
	value: value as NegociacaoMotivo,
	label: TIPO_NEGOCIACAO_LABELS[value],
	colorClass:
		"bg-teal-100 text-teal-800 dark:bg-teal-900/60 dark:text-teal-200",
	bgClass: "bg-teal-100 text-teal-800 dark:bg-teal-900/60 dark:text-teal-200",
}));

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export function KanbanDashboardFilterBar({
	filters,
	onFilter,
}: KanbanDashboardFilterBarProps) {
	const containerRef = useRef<HTMLDivElement>(null);

	const searchId = useId();
	const responsibleId = useId();

	const hasFilters = Boolean(
		filters.searchTerm ||
			filters.responsibleName ||
			(filters.tipoNegociacao && filters.tipoNegociacao.length > 0) ||
			(filters.sourceCollections && filters.sourceCollections.length > 0),
	);

	const handleClearFilters = () => {
		onFilter({});
	};

	const handleSourceChange = (value: SourceCollection[] | undefined) => {
		onFilter({ ...filters, sourceCollections: value });
	};

	const handleTipoNegociacaoChange = (
		value: NegociacaoMotivo[] | undefined,
	) => {
		onFilter({ ...filters, tipoNegociacao: value });
	};

	return (
		<div ref={containerRef}>
			<FilterLayout
				className="space-y-1"
				fieldsClassName="gap-y-2 gap-x-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
				actions={
					<FilterActions
						onApply={() => {
							flushFilters(containerRef.current);
							onFilter(filters);
						}}
						onClear={handleClearFilters}
						canClear={hasFilters}
						clearVariant="ghost"
					/>
				}
			>
				<div className="w-full">
					<FilterBadgeGroup<SourceCollection>
						label="Tipo de Solicitação"
						options={SOURCE_COLLECTION_OPTIONS}
						value={filters.sourceCollections}
						onChange={handleSourceChange}
						allLabel="Todos"
						compact
					/>
				</div>
				<div className="w-full">
					<FilterBadgeGroup<NegociacaoMotivo>
						label="Tipo de Negociação"
						options={TIPO_NEGOCIACAO_OPTIONS}
						value={filters.tipoNegociacao}
						onChange={handleTipoNegociacaoChange}
						allLabel="Todos"
						compact
					/>
				</div>
				<FilterInputField
					id={searchId}
					label="Nome do Cliente"
					placeholder="Buscar por nome..."
					value={filters.searchTerm ?? ""}
					onChange={(value) =>
						onFilter({ ...filters, searchTerm: value || undefined })
					}
				/>
				<FilterInputField
					id={responsibleId}
					label="Responsável"
					placeholder="Buscar por responsável..."
					value={filters.responsibleName ?? ""}
					onChange={(value) =>
						onFilter({ ...filters, responsibleName: value || undefined })
					}
				/>
			</FilterLayout>
		</div>
	);
}
