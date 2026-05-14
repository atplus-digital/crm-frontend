import type { SortingState } from "@tanstack/react-table";
import { useMemo } from "react";
import { FilterProvider } from "#/components/filters";
import { DataTableContainer } from "#/components/table/data-table-container";
import type { ContratosTableFilters } from "#/features/cs/contratos/contratos-types";
import {
	ContratoStatus,
	toContratoFilters,
} from "#/features/cs/contratos/contratos-types";

export const DEFAULT_CONTRATOS_TABLE_FILTERS: ContratosTableFilters = {
	cpfCnpj: "",
	nome: "",
	status: JSON.stringify([ContratoStatus.Ativo]),
	servicoStatus: JSON.stringify([]),
	contratoId: "",
};

import { getColumns } from "./columns";
import { parseSort, serializeSort } from "./sorting";
import type { ContratosTableProps } from "./types";

export function ContratosTable({
	contratos,
	isLoading,
	hasInitialQueryData,
	sort,
	onSort,
	pagination,
	onPageChange,
	onPageSizeChange,
	onFilterChange,
	onFilterProvider,
	children,
}: ContratosTableProps) {
	const sorting = useMemo(() => parseSort(sort), [sort]);

	const onSortingChange = (
		updater: SortingState | ((old: SortingState) => SortingState),
	) => {
		const next = typeof updater === "function" ? updater(sorting) : updater;
		const first = next[0];
		if (!first) {
			onSort("");
			return;
		}
		onSort(serializeSort([first]));
	};

	const columns = useMemo(() => getColumns(), []);

	return (
		<DataTableContainer
			columns={columns}
			data={contratos}
			isLoading={isLoading}
			hasInitialQueryData={hasInitialQueryData}
			total={pagination.total}
			totalPages={pagination.totalPages}
			emptyMessage="Nenhum contrato encontrado"
			onPageChange={onPageChange}
			onPageSizeChange={onPageSizeChange}
			initialPage={pagination.page}
			initialPageSize={pagination.pageSize}
			initialFilters={DEFAULT_CONTRATOS_TABLE_FILTERS}
			onFiltersApply={(filters: ContratosTableFilters) => {
				onFilterChange(toContratoFilters(filters));
			}}
			onFiltersClear={() => {
				onFilterChange({});
			}}
			sorting={sorting.length > 0 ? sorting : undefined}
			onSortingChange={onSortingChange}
		>
			{onFilterProvider ? (
				<FilterProvider
					onFilter={onFilterProvider}
					cleanToDefault
					defaultFilters={DEFAULT_CONTRATOS_TABLE_FILTERS}
				>
					{children}
				</FilterProvider>
			) : (
				children
			)}
		</DataTableContainer>
	);
}
