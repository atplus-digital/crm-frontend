import { InlineErrorAlert } from "#/components/feedback/inline-error-alert";
import { FilterProvider } from "#/components/filters";
import { PageLayout } from "#/components/layouts/page-layout";
import { SuspensaoContratoList } from "#/features/cs/suspensao-de-contrato";
import { SuspensaoContratoFilterBar as FilterBar } from "#/features/cs/suspensao-de-contrato/suspensao-de-contrato-filters";
import { useSuspensaoContrato } from "#/features/cs/suspensao-de-contrato/suspensao-de-contrato-hooks";
import type { SuspensaoContratoFilters } from "#/features/cs/suspensao-de-contrato/suspensao-de-contrato-types";
import { useListPage } from "#/hooks/use-list-page";
import { getErrorMessage } from "#/lib/api-errors";

const DEFAULT_FILTERS: SuspensaoContratoFilters = {};

export function SuspensaoContratoPage() {
	const {
		page,
		pageSize,
		sort,
		filters,
		setPage,
		setPageSize,
		handleSort,
		handleFilterChange,
	} = useListPage<SuspensaoContratoFilters>({
		defaultFilters: DEFAULT_FILTERS,
		defaultSort: ["-createdAt"],
	});

	const { data, error, isLoading, isFetching } = useSuspensaoContrato({
		page,
		pageSize,
		sort,
		filters,
	});

	return (
		<PageLayout
			title="Suspensão de Contrato"
			subtitle="Todas as Suspensões de Contrato"
		>
			<FilterProvider<SuspensaoContratoFilters>
				onFilter={handleFilterChange}
				defaultFilters={DEFAULT_FILTERS}
			>
				<FilterBar filters={filters} />
			</FilterProvider>

			{error ? (
				<InlineErrorAlert>
					Erro ao carregar suspensões de contrato: {getErrorMessage(error)}
				</InlineErrorAlert>
			) : (
				<SuspensaoContratoList
					suspensaoContratos={data?.data ?? []}
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
				/>
			)}
		</PageLayout>
	);
}
