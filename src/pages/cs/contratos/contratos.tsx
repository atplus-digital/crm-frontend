import { InlineErrorAlert } from "#/components/feedback/inline-error-alert";
import { PageLayout } from "#/components/layouts/page-layout";
import { ContratosFilters } from "#/features/cs/contratos/contratos-filters";
import { useContratos } from "#/features/cs/contratos/contratos-hooks";
import { ContratosTable } from "#/features/cs/contratos/contratos-table";
import {
	type ContratoFilters,
	type ContratosTableFilters,
	DEFAULT_CONTRATOS_TABLE_FILTERS,
	toContratoFilters,
} from "#/features/cs/contratos/contratos-types";
import { useListPage } from "#/hooks/use-list-page";

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
		<PageLayout title="Contratos" subtitle="Contratos encontrados no IXC">
			{error ? (
				<InlineErrorAlert>
					Erro ao carregar contratos: {(error as Error).message}
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
					<ContratosFilters />
				</ContratosTable>
			)}
		</PageLayout>
	);
}
