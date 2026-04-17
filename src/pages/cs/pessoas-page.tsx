import { Plus } from "lucide-react";
import { useState } from "react";
import { useSearchParams } from "react-router";
import { FilterActions } from "#/components/filters/filter-actions";
import { DataTableWithPagination } from "#/components/table/data-table-with-pagination";
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
import { pfColumns, pjColumns } from "#/features/cs/components/pessoas-columns";
import {
	usePessoasFisicas,
	usePessoasJuridicas,
} from "#/features/cs/pessoas/pessoas-hooks";
import type {
	PessoaFisicaFilters,
	PessoaFisicaListItem,
	PessoaJuridicaFilters,
	PessoaJuridicaListItem,
} from "#/features/cs/pessoas/pessoas-types";

export function CSPessoasPage() {
	const [activeTab, setActiveTab] = useState<"pf" | "pj">("pf");

	const [pfFilters, setPFFilters] = useState<PessoaFisicaFilters>({
		nome: "",
		cpf: "",
		analiseIxc: "all",
	});

	const [pjFilters, setPJFilters] = useState<PessoaJuridicaFilters>({
		razaoSocial: "",
		cnpj: "",
	});

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

	const handleClearFilters = () => {
		if (activeTab === "pf") {
			setPFFilters({ nome: "", cpf: "", analiseIxc: "all" });
		} else {
			setPJFilters({ razaoSocial: "", cnpj: "" });
		}
		handlePageChange(1);
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
							<div className="flex flex-wrap items-end gap-3">
								<div className="flex-1 min-w-50">
									<Input
										placeholder="Filtrar por nome..."
										value={pfFilters.nome}
										onChange={(e) =>
											setPFFilters((prev) => ({
												...prev,
												nome: e.target.value,
											}))
										}
									/>
								</div>
								<div className="w-50">
									<Input
										placeholder="Filtrar por CPF..."
										value={pfFilters.cpf}
										onChange={(e) =>
											setPFFilters((prev) => ({ ...prev, cpf: e.target.value }))
										}
									/>
								</div>
								<div className="w-50">
									<Select
										value={pfFilters.analiseIxc}
										onValueChange={(value) =>
											setPFFilters((prev) => ({
												...prev,
												analiseIxc: value as
													| "all"
													| "Sem Pendências"
													| "Com Pendências",
											}))
										}
									>
										<SelectTrigger>
											<SelectValue placeholder="Análise IXC" />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value="all">Todos</SelectItem>
											<SelectItem value="Sem Pendências">
												Sem Pendências
											</SelectItem>
											<SelectItem value="Com Pendências">
												Com Pendências
											</SelectItem>
										</SelectContent>
									</Select>
								</div>
								<FilterActions
									onApply={() => handlePageChange(1)}
									onClear={handleClearFilters}
									canClear={
										Boolean(pfFilters.nome) ||
										Boolean(pfFilters.cpf) ||
										pfFilters.analiseIxc !== "all"
									}
									applyVariant="outline"
									clearVariant="ghost"
								/>
							</div>

							<DataTableWithPagination
								columns={pfColumns}
								data={(pfData?.data as unknown as PessoaFisicaListItem[]) ?? []}
								total={pfData?.meta?.total ?? 0}
								totalPages={pfData?.meta?.totalPage ?? 0}
								onPageChange={handlePageChange}
								onPageSizeChange={handlePageSizeChange}
							/>
						</CardContent>
					</Card>
				</TabsContent>

				<TabsContent value="pj" className="mt-6">
					<Card>
						<CardHeader>
							<CardTitle className="text-lg">Pessoas Jurídicas</CardTitle>
						</CardHeader>
						<CardContent className="space-y-4">
							<div className="flex flex-wrap items-end gap-3">
								<div className="flex-1 min-w-50">
									<Input
										placeholder="Filtrar por razão social..."
										value={pjFilters.razaoSocial}
										onChange={(e) =>
											setPJFilters((prev) => ({
												...prev,
												razaoSocial: e.target.value,
											}))
										}
									/>
								</div>
								<div className="w-50">
									<Input
										placeholder="Filtrar por CNPJ..."
										value={pjFilters.cnpj}
										onChange={(e) =>
											setPJFilters((prev) => ({
												...prev,
												cnpj: e.target.value,
											}))
										}
									/>
								</div>
								<FilterActions
									onApply={() => handlePageChange(1)}
									onClear={handleClearFilters}
									canClear={Boolean(pjFilters.razaoSocial || pjFilters.cnpj)}
									applyVariant="outline"
									clearVariant="ghost"
								/>
							</div>

							<DataTableWithPagination
								columns={pjColumns}
								data={
									(pjData?.data as unknown as PessoaJuridicaListItem[]) ?? []
								}
								total={pjData?.meta?.total ?? 0}
								totalPages={pjData?.meta?.totalPage ?? 0}
								onPageChange={handlePageChange}
								onPageSizeChange={handlePageSizeChange}
							/>
						</CardContent>
					</Card>
				</TabsContent>
			</Tabs>
		</div>
	);
}
