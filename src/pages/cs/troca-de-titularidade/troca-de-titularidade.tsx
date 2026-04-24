import { InlineErrorAlert } from "#/components/feedback/inline-error-alert";
import { PageLayout } from "#/components/page-layot/page-layout";
import { TrocaTitularidadeList } from "#/features/cs/troca-titularidade";
import { TrocaTitularidadeFilterBar } from "#/features/cs/troca-titularidade/troca-titularidade-filters";
import { useTrocaTitularidade } from "#/features/cs/troca-titularidade/troca-titularidade-hooks";
import { useListPage } from "#/hooks/use-list-page";

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
	} = useListPage();

	const { data, error } = useTrocaTitularidade({
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
