import { useId, useState } from "react";
import {
	FilterInputField,
	FilterLayout,
	FilterSelectField,
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
	const sourceId = useId();
	const responsibleId = useId();

	const handleSearchChange = (value: string) => {
		setLocalSearch(value);
	};

	const handleSourceChange = (value: SourceCollection | undefined) => {
		onFilter({ ...filters, sourceCollection: value });
	};

	return (
		<FilterLayout
			fieldsClassName="sm:grid-cols-1 lg:grid-cols-3"
			actions={
				<div className="flex items-center gap-2">
					{/* FilterActions will be composed by the parent page */}
				</div>
			}
		>
			<FilterSelectField<SourceCollection>
				id={sourceId}
				label="Tipo de Solicitação"
				placeholder="Todas"
				value={filters.sourceCollection ?? "all"}
				options={SOURCE_COLLECTION_OPTIONS}
				onChange={(value) => handleSourceChange(value)}
			/>
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
				placeholder="Buscar por nome do responsável..."
				value={filters.responsibleName ?? ""}
				onChange={(value) =>
					onFilter({ ...filters, responsibleName: value || undefined })
				}
			/>
		</FilterLayout>
	);
}
