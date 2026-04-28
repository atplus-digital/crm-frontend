import { useId, useRef } from "react";
import {
	FilterActions,
	FilterBadgeGroup,
	FilterBadgeGroupWithMore,
	FilterInputField,
	FilterLayout,
	flushFilters,
} from "#/components/filters";
import type {
	KanbanDashboardFilters,
	NegociacaoMotivo,
	SourceCollection,
} from "./kanban-dashboard-types";
import {
	EXTRA_NEGOCIACAO_MOTIVO_OPTIONS,
	NEGOCIACAO_MOTIVO_BADGE,
	PRIMARY_NEGOCIACAO_MOTIVO_OPTIONS,
	SOURCE_COLLECTION_OPTIONS,
} from "./kanban-dashboard-types";

// ---------------------------------------------------------------------------
// Props
// ---------------------------------------------------------------------------

interface KanbanDashboardFilterBarProps {
	filters: KanbanDashboardFilters;
	onFilter: (filters: KanbanDashboardFilters) => void;
}

// ---------------------------------------------------------------------------
// Build tipo de negociação options from PRIMARY and EXTRA constants
// ---------------------------------------------------------------------------

const PRIMARY_NEGOCIACAO_OPTIONS = PRIMARY_NEGOCIACAO_MOTIVO_OPTIONS.map(
	(value) => ({
		value,
		...NEGOCIACAO_MOTIVO_BADGE[value],
	}),
);

const EXTRA_NEGOCIACAO_OPTIONS = EXTRA_NEGOCIACAO_MOTIVO_OPTIONS.map(
	(value) => ({
		value,
		...NEGOCIACAO_MOTIVO_BADGE[value],
	}),
);

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

	// Check if "Negociação" is selected in source collections filter
	const showNegociacaoFilter =
		!filters.sourceCollections ||
		filters.sourceCollections.length === 0 ||
		filters.sourceCollections.includes("neg");

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
		// If "Negociação" is being deselected, also clear tipoNegociacao filter
		const wasNegSelected = filters.sourceCollections?.includes("neg");
		const isNegSelected = value?.includes("neg");

		if (wasNegSelected && !isNegSelected) {
			onFilter({
				...filters,
				sourceCollections: value,
				tipoNegociacao: undefined,
			});
		} else {
			onFilter({ ...filters, sourceCollections: value });
		}
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
					<FilterBadgeGroupWithMore<NegociacaoMotivo>
						label="Tipo de Negociação"
						primaryOptions={PRIMARY_NEGOCIACAO_OPTIONS}
						extraOptions={EXTRA_NEGOCIACAO_OPTIONS}
						value={filters.tipoNegociacao}
						onChange={handleTipoNegociacaoChange}
						allLabel="Todos"
						compact
						disabled={!showNegociacaoFilter}
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
