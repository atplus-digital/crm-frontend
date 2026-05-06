import { InlineErrorAlert } from "#/components/feedback/inline-error-alert";
import { PageLayout } from "#/components/layouts/page-layout";
import { TrocaEnderecoList } from "#/features/cs/troca-de-endereco";
import { TrocaEnderecoFilterBar } from "#/features/cs/troca-de-endereco/troca-endereco-filters";
import { useTrocaEndereco } from "#/features/cs/troca-de-endereco/troca-endereco-hooks";
import type { TrocaEnderecoFilters } from "#/features/cs/troca-de-endereco/troca-endereco-types";
import { useListPage } from "#/hooks/use-list-page";

const DEFAULT_FILTERS: TrocaEnderecoFilters = {};

export function TrocaDeEnderecoPage() {
	const {
		page,
		pageSize,
		sort,
		filters,
		setPage,
		setPageSize,
		handleSort,
		handleFilterChange,
	} = useListPage<TrocaEnderecoFilters>({
		defaultFilters: DEFAULT_FILTERS,
		defaultSort: ["-createdAt"],
	});

	const { data, error, isLoading, isFetching } = useTrocaEndereco({
		page,
		pageSize,
		sort,
		filters,
	});

	return (
		<PageLayout title="Troca de Endereço" subtitle="Atendimentos">
			<TrocaEnderecoFilterBar filters={filters} onFilter={handleFilterChange} />

			{error ? (
				<InlineErrorAlert>
					Erro ao carregar trocas de endereço: {(error as Error).message}
				</InlineErrorAlert>
			) : (
				<TrocaEnderecoList
					trocasEndereco={data?.data ?? []}
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
