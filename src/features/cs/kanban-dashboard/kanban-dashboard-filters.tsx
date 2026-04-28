import { useId, useState } from "react";
import {
	FilterBadgeGroup,
	FilterInputField,
	FilterLayout,
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
	const [localSearch, setLocalSearch] = useState(filters.searchTerm ?? "");

	const searchId = useId();
	const responsibleId = useId();

	const handleSearchChange = (value: string) => {
		setLocalSearch(value);
	};

	const handleSourceChange = (value: SourceCollection[] | undefined) => {
		onFilter({ ...filters, sourceCollections: value });
	};

		return (
			<FilterLayout
				className="space-y-1"
				fieldsClassName="gap-y-2 gap-x-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
				actions={
					<div className="flex items-center gap-2">
						{/* FilterActions will be composed by the parent page */}
					</div>
				}
			>
			<div className="lg:col-span-1">
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
				value={localSearch}
				onChange={handleSearchChange}
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
	);
}
