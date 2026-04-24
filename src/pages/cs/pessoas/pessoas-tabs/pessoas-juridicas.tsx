import { useState } from "react";
import { useSearchParams } from "react-router";
import { InlineErrorAlert } from "#/components/feedback/inline-error-alert";
import { DataTableContainer } from "#/components/table/data-table-container";
import { pjColumns } from "#/features/cs/pessoas/pessoas-columns";
import { PessoasJuridicasFilters } from "#/features/cs/pessoas/pessoas-filters";
import { usePessoasJuridicas } from "#/features/cs/pessoas/pessoas-hooks";
import {
	DEFAULT_PESSOA_JURIDICA_TABLE_FILTERS,
	type PessoaJuridicaFilters,
	type PessoaJuridicaTableFilters,
	toPessoaJuridicaFilters,
} from "#/features/cs/pessoas/pessoas-types";
import type { Empresas } from "#/generated/nocobase/empresas";

export function PessoasJuridicasTabPage() {
	const [filters, setFilters] = useState<PessoaJuridicaFilters>(
		toPessoaJuridicaFilters(DEFAULT_PESSOA_JURIDICA_TABLE_FILTERS),
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

	const { data, error } = usePessoasJuridicas({
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
		<DataTableContainer<Empresas, PessoaJuridicaTableFilters>
			columns={pjColumns}
			data={(data?.data as unknown as Empresas[]) ?? []}
			total={data?.meta?.total ?? 0}
			totalPages={data?.meta?.totalPage ?? 0}
			onPageChange={handlePageChange}
			onPageSizeChange={handlePageSizeChange}
			initialPage={page}
			initialPageSize={pageSize}
			initialFilters={DEFAULT_PESSOA_JURIDICA_TABLE_FILTERS}
			onFiltersApply={(nextFilters: PessoaJuridicaTableFilters) => {
				setFilters(toPessoaJuridicaFilters(nextFilters));
			}}
			onFiltersClear={() => {
				setFilters(
					toPessoaJuridicaFilters(DEFAULT_PESSOA_JURIDICA_TABLE_FILTERS),
				);
			}}
		>
			<PessoasJuridicasFilters />
		</DataTableContainer>
	);
}
