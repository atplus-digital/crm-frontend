import { useState } from "react";
import { useSearchParams } from "react-router";
import { InlineErrorAlert } from "#/components/feedback/inline-error-alert";
import { DataTableContainer } from "#/components/table/data-table-container";
import { pfColumns } from "#/features/cs/pessoas/pessoas-columns";
import { PessoasFisicasFilters } from "#/features/cs/pessoas/pessoas-filters";
import { usePessoasFisicas } from "#/features/cs/pessoas/pessoas-hooks";
import {
	DEFAULT_PESSOA_FISICA_TABLE_FILTERS,
	type PessoaFisicaFilters,
	type PessoaFisicaTableFilters,
	toPessoaFisicaFilters,
} from "#/features/cs/pessoas/pessoas-types";
import type { Pessoas } from "#/generated/nocobase/pessoas";

export function PessoasFisicasTabPage() {
	const [filters, setFilters] = useState<PessoaFisicaFilters>(
		toPessoaFisicaFilters(DEFAULT_PESSOA_FISICA_TABLE_FILTERS),
	);

	const [searchParams, setSearchParams] = useSearchParams();
	const page = Number(searchParams.get("page")) || 1;
	const pageSize = Number(searchParams.get("pageSize")) || 15;

	const handlePageChange = (newPage: number) => {
		setSearchParams(
			(prev) => {
				prev.set("page", String(newPage));
				return prev;
			},
			{ replace: true },
		);
	};

	const handlePageSizeChange = (newPageSize: number) => {
		setSearchParams(
			(prev) => {
				prev.set("pageSize", String(newPageSize));
				prev.set("page", "1");
				return prev;
			},
			{ replace: true },
		);
	};

	const { data, error } = usePessoasFisicas({
		page,
		pageSize,
		filters,
	});

	if (error) {
		return (
			<InlineErrorAlert>
				Erro ao carregar: {(error as Error).message}
			</InlineErrorAlert>
		);
	}

	return (
		<DataTableContainer<Pessoas, PessoaFisicaTableFilters>
			columns={pfColumns}
			data={(data?.data as unknown as Pessoas[]) ?? []}
			total={data?.meta?.total ?? 0}
			totalPages={data?.meta?.totalPage ?? 0}
			onPageChange={handlePageChange}
			onPageSizeChange={handlePageSizeChange}
			initialPage={page}
			initialPageSize={pageSize}
			initialFilters={DEFAULT_PESSOA_FISICA_TABLE_FILTERS}
			onFiltersApply={(nextFilters: PessoaFisicaTableFilters) => {
				setFilters(toPessoaFisicaFilters(nextFilters));
			}}
			onFiltersClear={() => {
				setFilters(toPessoaFisicaFilters(DEFAULT_PESSOA_FISICA_TABLE_FILTERS));
			}}
		>
			<PessoasFisicasFilters />
		</DataTableContainer>
	);
}
