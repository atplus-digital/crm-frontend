import { InlineErrorAlert } from "#/components/feedback/inline-error-alert";
import { FilterProvider } from "#/components/filters";
import { DataTableContainer } from "#/components/table/data-table-container";
import { pjColumns } from "#/features/cs/pessoas/pessoas-columns";
import { usePessoasJuridicas } from "#/features/cs/pessoas/pessoas-hooks";
import { PessoasJuridicasFilters } from "#/features/cs/pessoas/pessoas-juridicas-filters";
import {
	DEFAULT_PESSOA_JURIDICA_TABLE_FILTERS,
	type PessoaJuridicaTableFilters,
	toPessoaJuridicaFilters,
} from "#/features/cs/pessoas/pessoas-types";
import type { Empresas } from "#/generated/types/nocobase/empresas";
import { useListPage } from "#/hooks/use-list-page";

export function PessoasJuridicasTabPage() {
	const { page, pageSize, filters, setPage, setPageSize, handleFilterChange } =
		useListPage<PessoaJuridicaTableFilters>({
			defaultFilters: DEFAULT_PESSOA_JURIDICA_TABLE_FILTERS,
			defaultSort: ["-createdAt"],
		});

	const apiFilters = toPessoaJuridicaFilters(filters);

	const { data, error } = usePessoasJuridicas({
		page,
		pageSize,
		sort: ["-createdAt"],
		filters: apiFilters,
	});

	if (error) {
		return (
			<InlineErrorAlert>
				Erro ao carregar: {(error as Error).message}
			</InlineErrorAlert>
		);
	}

	return (
		<DataTableContainer<Empresas, PessoaJuridicaTableFilters>
			columns={pjColumns}
			data={(data?.data as unknown as Empresas[]) ?? []}
			total={data?.meta?.total ?? 0}
			totalPages={data?.meta?.totalPage ?? 0}
			onPageChange={setPage}
			onPageSizeChange={setPageSize}
			initialPage={page}
			initialPageSize={pageSize}
			initialFilters={DEFAULT_PESSOA_JURIDICA_TABLE_FILTERS}
			onFiltersApply={(nextFilters: PessoaJuridicaTableFilters) => {
				handleFilterChange(nextFilters);
			}}
			onFiltersClear={() => {
				handleFilterChange(DEFAULT_PESSOA_JURIDICA_TABLE_FILTERS);
			}}
		>
			<FilterProvider onFilter={handleFilterChange}>
				<PessoasJuridicasFilters />
			</FilterProvider>
		</DataTableContainer>
	);
}
