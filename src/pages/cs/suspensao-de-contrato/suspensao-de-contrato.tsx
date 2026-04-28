import { InlineErrorAlert } from "#/components/feedback/inline-error-alert";
import { PageLayout } from "#/components/page-layout/page-layout";
import { SuspensaoContratoList } from "#/features/cs/suspensao-de-contrato";
import { SuspensaoContratoFilterBar as FilterBar } from "#/features/cs/suspensao-de-contrato/suspensao-de-contrato-filters";
import { useSuspensaoContrato } from "#/features/cs/suspensao-de-contrato/suspensao-de-contrato-hooks";
import type { SuspensaoContratoFilters } from "#/features/cs/suspensao-de-contrato/suspensao-de-contrato-types";
import { useListPage } from "#/hooks/use-list-page";

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

	const { data, error } = useSuspensaoContrato({
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
			<FilterBar filters={filters} onFilter={handleFilterChange} />

			{error ? (
				<InlineErrorAlert>
					Erro ao carregar suspensões de contrato: {(error as Error).message}
				</InlineErrorAlert>
			) : (
				<SuspensaoContratoList
					suspensaoContratos={data?.data ?? []}
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
