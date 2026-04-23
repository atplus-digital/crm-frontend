import { Plus } from "lucide-react";
import { useState } from "react";
import { useSearchParams } from "react-router";
import { InlineErrorAlert } from "#/components/feedback/inline-error-alert";
import { DataTableContainer } from "#/components/table/data-table-container";
import { Button } from "#/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "#/components/ui/tabs";
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

export function CSPessoasPage() {
	const [activeTab, setActiveTab] = useState<"pf" | "pj">("pf");

	const [pfFilters, setPFFilters] = useState<PessoaFisicaFilters>(
		toPessoaFisicaFilters(DEFAULT_PESSOA_FISICA_TABLE_FILTERS),
	);
	const [pjFilters, setPJFilters] = useState<PessoaJuridicaFilters>(
		toPessoaJuridicaFilters(DEFAULT_PESSOA_JURIDICA_TABLE_FILTERS),
	);

	const [searchParams, setSearchParams] = useSearchParams();

	const page = Number(searchParams.get("page")) || 1;
	const pageSize = Number(searchParams.get("pageSize")) || 20;

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
		<div className="flex min-h-screen flex-col gap-6 bg-background p-4">
			<div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
				<h1 className="font-heading text-2xl font-bold">Pessoas</h1>
				<Button size="sm">
					<Plus className="mr-2 size-4" />
					Nova Pessoa
				</Button>
			</div>

			{error && (
				<InlineErrorAlert>
					Erro ao carregar: {(error as Error).message}
				</InlineErrorAlert>
			)}

			<Tabs
				value={activeTab}
				onValueChange={(value) => setActiveTab(value as "pf" | "pj")}
				className="w-full"
			>
				<TabsList className="w-fit">
					<TabsTrigger value="pf">Pessoas Físicas</TabsTrigger>
					<TabsTrigger value="pj">Pessoas Jurídicas</TabsTrigger>
				</TabsList>

				<TabsContent value="pf" className="mt-6">
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
				</TabsContent>

				<TabsContent value="pj" className="mt-6">
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
				</TabsContent>
			</Tabs>
		</div>
	);
}
