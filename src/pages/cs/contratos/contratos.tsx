import { InlineErrorAlert } from "#/components/feedback/inline-error-alert";
import { PageLayout } from "#/components/layouts/page-layout";
import { useContratos } from "#/features/cs/contratos/contratos-hooks";
import {
	ContratosTable,
	DEFAULT_CONTRATOS_TABLE_FILTERS,
} from "#/features/cs/contratos/contratos-table";
import { ContratosFilters } from "#/features/cs/contratos/contratos-table/contratos-filters";
import {
	type ContratoFilters,
	type ContratosTableFilters,
	toContratoFilters,
} from "#/features/cs/contratos/contratos-types";
import { useListPage } from "#/hooks/use-list-page";
import { getErrorMessage } from "#/lib/api-errors";

export function ContratosPage() {
	const {
		page,
		pageSize,
		sort,
		filters,
		setPage,
		setPageSize,
		handleSort,
		handleFilterChange,
	} = useListPage<ContratosTableFilters>({
		defaultFilters: DEFAULT_CONTRATOS_TABLE_FILTERS,
		defaultSort: ["-ultima_atualizacao"],
	});

	const { data, error, isLoading, isFetching } = useContratos({
		page,
		pageSize,
		filters: toContratoFilters(filters),
		sort,
	});

	return (
		<PageLayout title="Contratos" subtitle="Contratos IXC">
			{error ? (
				<InlineErrorAlert>
					Erro ao carregar contratos: {getErrorMessage(error)}
				</InlineErrorAlert>
			) : (
				<ContratosTable
					contratos={data?.data ?? []}
					isLoading={isLoading || isFetching}
					hasInitialQueryData={data !== undefined}
					sort={sort}
					onSort={handleSort}
					pagination={{
						page,
						pageSize,
						total: data?.meta.total ?? 0,
						totalPages: data?.meta.totalPage ?? 1,
					}}
					onPageChange={setPage}
					onPageSizeChange={setPageSize}
					onFilterChange={
						handleFilterChange as unknown as (f: ContratoFilters) => void
					}
					onFilterProvider={
						handleFilterChange as (filters: Record<string, unknown>) => void
					}
				>
					<ContratosFilters filters={filters} />
				</ContratosTable>
			)}
		</PageLayout>
	);
}
