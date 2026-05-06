import { InlineErrorAlert } from "#/components/feedback/inline-error-alert";
import { PageLayout } from "#/components/layouts/page-layout";
import { TrocaTitularidadeList } from "#/features/cs/troca-titularidade";
import { TrocaTitularidadeFilterBar } from "#/features/cs/troca-titularidade/troca-titularidade-filters";
import { useTrocaTitularidade } from "#/features/cs/troca-titularidade/troca-titularidade-hooks";
import type { TrocaTitularidadeFilters } from "#/features/cs/troca-titularidade/troca-titularidade-types";
import { useListPage } from "#/hooks/use-list-page";

const DEFAULT_FILTERS: TrocaTitularidadeFilters = {};

export function TrocaTitularidadePage() {
	const {
		page,
		pageSize,
		sort,
		filters,
		setPage,
		setPageSize,
		handleSort,
		handleFilterChange,
	} = useListPage<TrocaTitularidadeFilters>({
		defaultFilters: DEFAULT_FILTERS,
		defaultSort: ["-createdAt"],
	});

	const { data, error, isLoading, isFetching } = useTrocaTitularidade({
		page,
		pageSize,
		sort,
		filters,
	});

	return (
		<PageLayout
			title="Transferência de Titularidade"
			subtitle="Solicitações de troca de titularidade"
		>
			<TrocaTitularidadeFilterBar
				filters={filters}
				onFilter={handleFilterChange}
			/>

			{error ? (
				<InlineErrorAlert>
					Erro ao carregar transferências de titularidade:{" "}
					{(error as Error).message}
				</InlineErrorAlert>
			) : (
				<TrocaTitularidadeList
					trocasTitularidade={data?.data ?? []}
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
