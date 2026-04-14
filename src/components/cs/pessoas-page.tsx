import type { ColumnDef } from "@tanstack/react-table";
import { Filter, Plus, RotateCw } from "lucide-react";
import { useState } from "react";
import { Badge } from "#/components/ui/badge";
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
import { cn } from "#/lib/utils";
import { usePessoas } from "#/modules/cs/pessoas-hooks";
import type { PessoaFisica, PessoaJuridica } from "#/modules/cs/pessoas-types";
import { PessoasTable } from "./pessoas-table";

const pfColumns: ColumnDef<PessoaFisica, unknown>[] = [
	{ accessorKey: "id", header: "ID" },
	{
		accessorKey: "createdAt",
		header: "Criado em",
		cell: ({ row }) =>
			row.original.createdAt
				? new Date(row.original.createdAt).toLocaleDateString("pt-BR")
				: "-",
	},
	{ accessorKey: "f_nome", header: "Nome Completo" },
	{ accessorKey: "f_cpf", header: "CPF" },
	{
		accessorKey: "f_data_nascimento",
		header: "Data de Nascimento",
		cell: ({ row }) => row.original.f_data_nascimento || "-",
	},
	{ accessorKey: "f_credito", header: "Análise de Crédito" },
	{ accessorKey: "f_analise_ixc", header: "Análise no IXC" },
	{ accessorKey: "f_sexo", header: "Sexo" },
	{
		id: "createdBy.nickname",
		header: "Criado por",
		cell: ({ row }) =>
			(row.original as PessoaFisica & { createdBy?: { nickname: string } })
				?.createdBy?.nickname || "-",
	},
];

const pjColumns: ColumnDef<PessoaJuridica, unknown>[] = [
	{ accessorKey: "id", header: "ID" },
	{ accessorKey: "f_razao_social", header: "Razão Social" },
	{ accessorKey: "f_nome_fantasia", header: "Nome Fantasia" },
	{ accessorKey: "f_cnpj", header: "CNPJ" },
	{ accessorKey: "f_inscricao_estadual", header: "IE" },
	{ accessorKey: "f_email", header: "Email" },
	{ accessorKey: "f_telefone", header: "Telefone" },
];

export function CSPessoasPage() {
	const [activeTab, setActiveTab] = useState<"fisica" | "juridica">("fisica");
	const [page, setPage] = useState(1);
	const [pageSize, setPageSize] = useState(20);
	const [filters, setFilters] = useState({
		nome: "",
		cpf: "",
		razaoSocial: "",
		cnpj: "",
	});

	const queryFilters =
		activeTab === "fisica"
			? {
					nome: filters.nome || undefined,
					cpf: filters.cpf || undefined,
				}
			: {
					razaoSocial: filters.razaoSocial || undefined,
					cnpj: filters.cnpj || undefined,
				};

	const { data, isLoading, error } = usePessoas({
		page,
		pageSize,
		filters: queryFilters,
		type: activeTab,
	});

	const pessoas = data?.data || [];
	const total = data?.meta?.total || 0;
	const totalPages = data?.meta?.totalPage || 1;

	const handlePageChange = (newPage: number) => {
		setPage(newPage);
	};

	const handlePageSizeChange = (newPageSize: number) => {
		setPageSize(newPageSize);
		setPage(1);
	};

	const handleClearFilters = () => {
		setFilters({
			nome: "",
			cpf: "",
			razaoSocial: "",
			cnpj: "",
		});
	};

	return (
		<div className="flex min-h-screen flex-col gap-6 bg-background p-4 md:p-6 lg:p-8">
			<div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
				<h1 className="font-heading text-2xl font-bold">Pessoas</h1>
				<Button size="sm">
					<Plus className="mr-2 size-4" />
					Nova Pessoa
				</Button>
			</div>

			<Tabs
				value={activeTab}
				onValueChange={(value) => setActiveTab(value as "fisica" | "juridica")}
				className="w-full"
			>
				<TabsList className="w-fit">
					<TabsTrigger value="fisica">Pessoas Físicas</TabsTrigger>
					<TabsTrigger value="juridica">Pessoas Jurídicas</TabsTrigger>
				</TabsList>

				<TabsContent value="fisica" className="mt-6">
					<Card>
						<CardHeader>
							<CardTitle className="text-lg">Pessoas Físicas</CardTitle>
						</CardHeader>
						<CardContent className="space-y-4">
							<div className="flex flex-wrap items-end gap-3">
								<div className="flex-1 min-w-[200px]">
									<Input
										placeholder="Filtrar por nome..."
										value={filters.nome}
										onChange={(e) =>
											setFilters((prev) => ({
												...prev,
												nome: e.target.value,
											}))
										}
									/>
								</div>
								<div className="w-[200px]">
									<Input
										placeholder="Filtrar por CPF..."
										value={filters.cpf}
										onChange={(e) =>
											setFilters((prev) => ({ ...prev, cpf: e.target.value }))
										}
									/>
								</div>
								<Button
									variant="outline"
									size="sm"
									onClick={handleClearFilters}
								>
									<RotateCw className="mr-2 size-4" />
									Limpar
								</Button>
							</div>

							{error && (
								<div className="rounded-md bg-destructive/10 p-4 text-destructive">
									Erro ao carregar pessoas:{" "}
									{error instanceof Error ? error.message : "Erro desconhecido"}
								</div>
							)}

							<PessoasTable
								columns={pfColumns}
								data={pessoas as PessoaFisica[]}
								isLoading={isLoading}
								pagination={{
									page,
									pageSize,
									total,
									totalPages,
								}}
								onPageChange={handlePageChange}
								onPageSizeChange={handlePageSizeChange}
								emptyMessage="Nenhuma pessoa física encontrada"
							/>
						</CardContent>
					</Card>
				</TabsContent>

				<TabsContent value="juridica" className="mt-6">
					<Card>
						<CardHeader>
							<CardTitle className="text-lg">Pessoas Jurídicas</CardTitle>
						</CardHeader>
						<CardContent className="space-y-4">
							<div className="flex flex-wrap items-end gap-3">
								<div className="flex-1 min-w-[200px]">
									<Input
										placeholder="Filtrar por razão social..."
										value={filters.razaoSocial}
										onChange={(e) =>
											setFilters((prev) => ({
												...prev,
												razaoSocial: e.target.value,
											}))
										}
									/>
								</div>
								<div className="w-[200px]">
									<Input
										placeholder="Filtrar por CNPJ..."
										value={filters.cnpj}
										onChange={(e) =>
											setFilters((prev) => ({
												...prev,
												cnpj: e.target.value,
											}))
										}
									/>
								</div>
								<Button
									variant="outline"
									size="sm"
									onClick={handleClearFilters}
								>
									<RotateCw className="mr-2 size-4" />
									Limpar
								</Button>
							</div>

							{error && (
								<div className="rounded-md bg-destructive/10 p-4 text-destructive">
									Erro ao carregar pessoas jurídicas:{" "}
									{error instanceof Error ? error.message : "Erro desconhecido"}
								</div>
							)}

							<PessoasTable
								columns={pjColumns}
								data={pessoas as PessoaJuridica[]}
								isLoading={isLoading}
								pagination={{
									page,
									pageSize,
									total,
									totalPages,
								}}
								onPageChange={handlePageChange}
								onPageSizeChange={handlePageSizeChange}
								emptyMessage="Nenhuma pessoa jurídica encontrada"
							/>
						</CardContent>
					</Card>
				</TabsContent>
			</Tabs>
		</div>
	);
}
