import { Plus } from "lucide-react";
import { useState } from "react";
import { useSearchParams } from "react-router";
import { FilterActions } from "#/components/filters/filter-actions";
import { DataTableContainer } from "#/components/table/data-table-container";
import { useDataTableContext } from "#/components/table/data-table-context";
import { Button } from "#/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "#/components/ui/card";
import { Input } from "#/components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "#/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "#/components/ui/tabs";
import { pfColumns, pjColumns } from "#/features/cs/pessoas/pessoas-columns";
import {
	usePessoasFisicas,
	usePessoasJuridicas,
} from "#/features/cs/pessoas/pessoas-hooks";
import type {
	PessoaFisicaFilters,
	PessoaJuridicaFilters,
} from "#/features/cs/pessoas/pessoas-types";
import type { Empresas } from "#/generated/nocobase/empresas";
import type { Pessoas } from "#/generated/nocobase/pessoas";

interface PessoaFisicaTableFilters {
	[key: string]: string;
	f_nome: string;
	f_cpf: string;
	f_analise_ixc: NonNullable<PessoaFisicaFilters["f_analise_ixc"]>;
}

interface PessoaJuridicaTableFilters {
	[key: string]: string;
	f_razao_social: string;
	f_cnpj: string;
}

const DEFAULT_PESSOA_FISICA_TABLE_FILTERS: PessoaFisicaTableFilters = {
	f_nome: "",
	f_cpf: "",
	f_analise_ixc: "all",
};

const DEFAULT_PESSOA_JURIDICA_TABLE_FILTERS: PessoaJuridicaTableFilters = {
	f_razao_social: "",
	f_cnpj: "",
};

function toPessoaFisicaFilters(
	filters: PessoaFisicaTableFilters,
): PessoaFisicaFilters {
	return {
		f_nome: filters.f_nome,
		f_cpf: filters.f_cpf,
		f_analise_ixc: filters.f_analise_ixc,
	};
}

function toPessoaJuridicaFilters(
	filters: PessoaJuridicaTableFilters,
): PessoaJuridicaFilters {
	return {
		f_razao_social: filters.f_razao_social,
		f_cnpj: filters.f_cnpj,
	};
}

function PessoasFisicasFilters() {
	const { filters, setFilter, applyFilters, clearFilters } =
		useDataTableContext<unknown, PessoaFisicaTableFilters>();

	return (
		<div className="flex flex-wrap items-end gap-3">
			<div className="flex-1 min-w-50">
				<Input
					placeholder="Filtrar por nome..."
					value={filters.f_nome}
					onChange={(e) => setFilter("f_nome", e.target.value)}
				/>
			</div>
			<div className="w-50">
				<Input
					placeholder="Filtrar por CPF..."
					value={filters.f_cpf}
					onChange={(e) => setFilter("f_cpf", e.target.value)}
				/>
			</div>
			<div className="w-50">
				<Select
					value={filters.f_analise_ixc}
					onValueChange={(value) => {
						const analise = (
							value === "all" ? "all" : value
						) as PessoaFisicaTableFilters["f_analise_ixc"];
						setFilter("f_analise_ixc", analise);
					}}
				>
					<SelectTrigger>
						<SelectValue placeholder="Análise IXC" />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="all">Todos</SelectItem>
						<SelectItem value="1">Sem Pendências</SelectItem>
						<SelectItem value="0">Com Pendências</SelectItem>
					</SelectContent>
				</Select>
			</div>
			<FilterActions
				onApply={applyFilters}
				onClear={clearFilters}
				canClear={
					Boolean(filters.f_nome) ||
					Boolean(filters.f_cpf) ||
					filters.f_analise_ixc !== "all"
				}
				applyVariant="outline"
				clearVariant="ghost"
			/>
		</div>
	);
}

function PessoasJuridicasFilters() {
	const { filters, setFilter, applyFilters, clearFilters } =
		useDataTableContext<unknown, PessoaJuridicaTableFilters>();

	return (
		<div className="flex flex-wrap items-end gap-3">
			<div className="flex-1 min-w-50">
				<Input
					placeholder="Filtrar por razão social..."
					value={filters.f_razao_social}
					onChange={(e) => setFilter("f_razao_social", e.target.value)}
				/>
			</div>
			<div className="w-50">
				<Input
					placeholder="Filtrar por CNPJ..."
					value={filters.f_cnpj}
					onChange={(e) => setFilter("f_cnpj", e.target.value)}
				/>
			</div>
			<FilterActions
				onApply={applyFilters}
				onClear={clearFilters}
				canClear={Boolean(filters.f_razao_social || filters.f_cnpj)}
				applyVariant="outline"
				clearVariant="ghost"
			/>
		</div>
	);
}

export function CSPessoasPage() {
	const [activeTab, setActiveTab] = useState<"pf" | "pj">("pf");

	const [pfFilters, setPFFilters] = useState<PessoaFisicaFilters>(
		toPessoaFisicaFilters(DEFAULT_PESSOA_FISICA_TABLE_FILTERS),
	);
	const [pjFilters, setPJFilters] = useState<PessoaJuridicaFilters>(
		toPessoaJuridicaFilters(DEFAULT_PESSOA_JURIDICA_TABLE_FILTERS),
	);

	const [searchParams, setSearchParams] = useSearchParams();

	// Read pagination from URL, defaulting to page 1 and pageSize 20
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
				prev.set("page", "1"); // Reset to page 1 when changing page size
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
				<Card className="border-destructive">
					<CardHeader>
						<CardTitle className="text-destructive">Erro ao carregar</CardTitle>
					</CardHeader>
					<CardContent>
						<p className="text-sm text-muted-foreground">
							Não foi possível carregar os dados. Tente novamente.
						</p>
					</CardContent>
				</Card>
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
					<Card>
						<CardHeader>
							<CardTitle className="text-lg">Pessoas Físicas</CardTitle>
						</CardHeader>
						<CardContent className="space-y-4">
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
						</CardContent>
					</Card>
				</TabsContent>

				<TabsContent value="pj" className="mt-6">
					<Card>
						<CardHeader>
							<CardTitle className="text-lg">Pessoas Jurídicas</CardTitle>
						</CardHeader>
						<CardContent className="space-y-4">
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
										toPessoaJuridicaFilters(
											DEFAULT_PESSOA_JURIDICA_TABLE_FILTERS,
										),
									);
								}}
							>
								<PessoasJuridicasFilters />
							</DataTableContainer>
						</CardContent>
					</Card>
				</TabsContent>
			</Tabs>
		</div>
	);
}
