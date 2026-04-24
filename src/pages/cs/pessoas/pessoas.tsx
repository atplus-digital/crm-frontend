import { Plus } from "lucide-react";
import { useState } from "react";
import { useSearchParams } from "react-router";
import { InlineErrorAlert } from "#/components/feedback/inline-error-alert";
import {
	PageLayout,
	PageTabContent,
} from "#/components/page-layout/page-layout";
import { DataTableContainer } from "#/components/table/data-table-container";
import { Button } from "#/components/ui/button";
import { pfColumns, pjColumns } from "#/features/cs/pessoas/pessoas-columns";
import {
	PessoasFisicasFilters,
	PessoasJuridicasFilters,
} from "#/features/cs/pessoas/pessoas-filters";
import {
	usePessoasFisicas,
	usePessoasJuridicas,
} from "#/features/cs/pessoas/pessoas-hooks";
import {
	DEFAULT_PESSOA_FISICA_TABLE_FILTERS,
	DEFAULT_PESSOA_JURIDICA_TABLE_FILTERS,
	type PessoaFisicaFilters,
	type PessoaFisicaTableFilters,
	type PessoaJuridicaFilters,
	type PessoaJuridicaTableFilters,
	toPessoaFisicaFilters,
	toPessoaJuridicaFilters,
} from "#/features/cs/pessoas/pessoas-types";
import type { Empresas } from "#/generated/nocobase/empresas";
import type { Pessoas } from "#/generated/nocobase/pessoas";
import { usePageTab } from "#/hooks/use-page-tab";

export function CSPessoasPage() {
	const [activeTab] = usePageTab("pf");

	const [pfFilters, setPFFilters] = useState<PessoaFisicaFilters>(
		toPessoaFisicaFilters(DEFAULT_PESSOA_FISICA_TABLE_FILTERS),
	);
	const [pjFilters, setPJFilters] = useState<PessoaJuridicaFilters>(
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

	const { data: pfData, error: pfError } = usePessoasFisicas({
		page,
		pageSize,
		filters: pfFilters,
	});

	const { data: pjData, error: pjError } = usePessoasJuridicas({
		page,
		pageSize,
		filters: pjFilters,
	});

	const error = activeTab === "pf" ? pfError : pjError;

	return (
		<PageLayout
			title="Pessoas"
			sideElement={
				<Button size="sm">
					<Plus className="mr-2 size-4" />
					Nova Pessoa
				</Button>
			}
			tabs={[
				{ value: "pf", label: "Pessoas Físicas" },
				{ value: "pj", label: "Pessoas Jurídicas" },
			]}
			defaultTab="pf"
		>
			{error && (
				<InlineErrorAlert>
					Erro ao carregar: {(error as Error).message}
				</InlineErrorAlert>
			)}

			<PageTabContent value="pf">
				<DataTableContainer<Pessoas, PessoaFisicaTableFilters>
					columns={pfColumns}
					data={(pfData?.data as unknown as Pessoas[]) ?? []}
					total={pfData?.meta?.total ?? 0}
					totalPages={pfData?.meta?.totalPage ?? 0}
					onPageChange={handlePageChange}
					onPageSizeChange={handlePageSizeChange}
					initialPage={page}
					initialPageSize={pageSize}
					initialFilters={DEFAULT_PESSOA_FISICA_TABLE_FILTERS}
					onFiltersApply={(filters: PessoaFisicaTableFilters) => {
						setPFFilters(toPessoaFisicaFilters(filters));
					}}
					onFiltersClear={() => {
						setPFFilters(
							toPessoaFisicaFilters(DEFAULT_PESSOA_FISICA_TABLE_FILTERS),
						);
					}}
				>
					<PessoasFisicasFilters />
				</DataTableContainer>
			</PageTabContent>

			<PageTabContent value="pj">
				<DataTableContainer<Empresas, PessoaJuridicaTableFilters>
					columns={pjColumns}
					data={(pjData?.data as unknown as Empresas[]) ?? []}
					total={pjData?.meta?.total ?? 0}
					totalPages={pjData?.meta?.totalPage ?? 0}
					onPageChange={handlePageChange}
					onPageSizeChange={handlePageSizeChange}
					initialPage={page}
					initialPageSize={pageSize}
					initialFilters={DEFAULT_PESSOA_JURIDICA_TABLE_FILTERS}
					onFiltersApply={(filters: PessoaJuridicaTableFilters) => {
						setPJFilters(toPessoaJuridicaFilters(filters));
					}}
					onFiltersClear={() => {
						setPJFilters(
							toPessoaJuridicaFilters(DEFAULT_PESSOA_JURIDICA_TABLE_FILTERS),
						);
					}}
				>
					<PessoasJuridicasFilters />
				</DataTableContainer>
			</PageTabContent>
		</PageLayout>
	);
}
