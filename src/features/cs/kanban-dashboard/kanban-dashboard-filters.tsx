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
			(filters.sourceCollections && filters.sourceCollections.length > 0),
	);

	const handleClearFilters = () => {
		onFilter({});
	};

	const handleSourceChange = (value: SourceCollection[] | undefined) => {
		onFilter({ ...filters, sourceCollections: value });
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
