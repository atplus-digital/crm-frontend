import { InlineErrorAlert } from "#/components/feedback/inline-error-alert";
import { FilterProvider } from "#/components/filters";
import { DataTableContainer } from "#/components/table/data-table-container";
import { pfColumns } from "#/features/cs/pessoas/pessoas-columns";
import { PessoasFisicasFilters } from "#/features/cs/pessoas/pessoas-fisicas-filters";
import { usePessoasFisicas } from "#/features/cs/pessoas/pessoas-hooks";
import {
	DEFAULT_PESSOA_FISICA_TABLE_FILTERS,
	type PessoaFisicaTableFilters,
	toPessoaFisicaFilters,
} from "#/features/cs/pessoas/pessoas-types";
import type { Pessoas } from "#/generated/types/nocobase/pessoas";
import { useListPage } from "#/hooks/use-list-page";
import { getErrorMessage } from "#/lib/api-errors";

export function PessoasFisicasTabPage() {
	const { page, pageSize, filters, setPage, setPageSize, handleFilterChange } =
		useListPage<PessoaFisicaTableFilters>({
			defaultFilters: DEFAULT_PESSOA_FISICA_TABLE_FILTERS,
			defaultSort: ["-createdAt"],
		});

	const apiFilters = toPessoaFisicaFilters(filters);

	const { data, error, isLoading, isFetching } = usePessoasFisicas({
		page,
		pageSize,
		sort: ["-createdAt"],
		filters: apiFilters,
	});

	if (error) {
		return (
			<InlineErrorAlert>
				Erro ao carregar: {getErrorMessage(error)}
			</InlineErrorAlert>
		);
	}

	return (
		<DataTableContainer<Pessoas, PessoaFisicaTableFilters>
			columns={pfColumns}
			data={(data?.data as unknown as Pessoas[]) ?? []}
			isLoading={isLoading || isFetching}
			hasInitialQueryData={data !== undefined}
			total={data?.meta?.total ?? 0}
			totalPages={data?.meta?.totalPage ?? 0}
			onPageChange={setPage}
			onPageSizeChange={setPageSize}
			initialPage={page}
			initialPageSize={pageSize}
			initialFilters={DEFAULT_PESSOA_FISICA_TABLE_FILTERS}
			onFiltersApply={(nextFilters: PessoaFisicaTableFilters) => {
				handleFilterChange(nextFilters);
			}}
			onFiltersClear={() => {
				handleFilterChange(DEFAULT_PESSOA_FISICA_TABLE_FILTERS);
			}}
		>
			<FilterProvider<PessoaFisicaTableFilters>
				onFilter={handleFilterChange}
				cleanToDefault
				defaultFilters={DEFAULT_PESSOA_FISICA_TABLE_FILTERS}
			>
				<PessoasFisicasFilters filters={filters} />
			</FilterProvider>
		</DataTableContainer>
	);
}
