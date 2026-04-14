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
import { PessoasTable } from "./pessoas-table";

interface PessoaFisica {
	id: number;
	createdAt: string;
	f_nome: string;
	f_cpf: string;
	f_data_nascimento: string;
	f_credito: string | null;
	f_analise_ixc: string | null;
	f_sexo: "MASCULINO" | "FEMININO" | "INDEFINIDO";
	createdBy?: {
		nickname: string;
	};
}

interface PessoaJuridica {
	id: number;
	f_razao_social: string;
	f_nome_fantasia: string;
	f_cnpj: string;
	f_ie: string;
	f_responsavel: string;
	f_email_responsavel: string;
}

const pfColumns: ColumnDef<PessoaFisica, unknown>[] = [
	{ accessorKey: "id", header: "ID" },
	{
		accessorKey: "createdAt",
		header: "Criado em",
		cell: ({ row }) =>
			new Date(row.original.createdAt).toLocaleDateString("pt-BR"),
	},
	{ accessorKey: "f_nome", header: "Nome Completo" },
	{ accessorKey: "f_cpf", header: "CPF" },
	{ accessorKey: "f_data_nascimento", header: "Data de Nascimento" },
	{
		accessorKey: "f_credito",
		header: "Análise de Crédito",
		cell: ({ row }) => {
			const value = row.original.f_credito;
			if (!value) {
				return (
					<Badge variant="secondary" className="bg-gray-100 text-gray-600">
						Não analisado
					</Badge>
				);
			}
			const variants: Record<
				string,
				{
					variant: "default" | "secondary" | "destructive" | "outline";
					className: string;
					label: string;
				}
			> = {
				Aprovado: {
					variant: "default",
					className: "bg-green-500/10 text-green-600 hover:bg-green-500/20",
					label: "Aprovado",
				},
				"Aprovado com Atenção": {
					variant: "default",
					className: "bg-yellow-500/10 text-yellow-600 hover:bg-yellow-500/20",
					label: "Aprovado com Atenção",
				},
				Negado: { variant: "destructive", className: "", label: "Negado" },
			};
			const config = variants[value] || {
				variant: "secondary",
				className: "",
				label: value,
			};
			return (
				<Badge variant={config.variant} className={config.className}>
					{config.label}
				</Badge>
			);
		},
	},
	{
		accessorKey: "f_analise_ixc",
		header: "Análise no IXC",
		cell: ({ row }) => {
			const value = row.original.f_analise_ixc;
			if (!value) {
				return <Badge variant="secondary">Não analisado</Badge>;
			}
			const isSemPendencias = value === "Sem Pendências";
			return (
				<Badge
					variant={isSemPendencias ? "default" : "destructive"}
					className={cn(
						isSemPendencias &&
							"bg-green-500/10 text-green-600 hover:bg-green-500/20",
					)}
				>
					{value}
				</Badge>
			);
		},
	},
	{ accessorKey: "f_sexo", header: "Sexo" },
	{
		id: "createdBy.nickname",
		header: "Criado por",
		cell: ({ row }) => row.original.createdBy?.nickname || "-",
	},
];

const pjColumns: ColumnDef<PessoaJuridica, unknown>[] = [
	{ accessorKey: "id", header: "ID" },
	{ accessorKey: "f_razao_social", header: "Razão Social" },
	{ accessorKey: "f_nome_fantasia", header: "Nome Fantasia" },
	{ accessorKey: "f_cnpj", header: "CNPJ" },
	{ accessorKey: "f_ie", header: "IE" },
	{ accessorKey: "f_responsavel", header: "Responsável" },
	{ accessorKey: "f_email_responsavel", header: "Email" },
];

const mockPFData: PessoaFisica[] = [
	{
		id: 1,
		createdAt: "2024-01-15T10:30:00Z",
		f_nome: "João Silva",
		f_cpf: "123.456.789-00",
		f_data_nascimento: "15/03/1990",
		f_credito: "Aprovado",
		f_analise_ixc: "Sem Pendências",
		f_sexo: "MASCULINO",
		createdBy: { nickname: "admin" },
	},
	{
		id: 2,
		createdAt: "2024-02-20T14:45:00Z",
		f_nome: "Maria Santos",
		f_cpf: "987.654.321-00",
		f_data_nascimento: "22/07/1985",
		f_credito: "Aprovado com Atenção",
		f_analise_ixc: "Com Pendências",
		f_sexo: "FEMININO",
		createdBy: { nickname: "admin" },
	},
];

const mockPJData: PessoaJuridica[] = [
	{
		id: 1,
		f_razao_social: "Empresa ABC Ltda",
		f_nome_fantasia: "ABC Tecnologia",
		f_cnpj: "12.345.678/0001-90",
		f_ie: "123.456.789.012",
		f_responsavel: "Carlos Oliveira",
		f_email_responsavel: "carlos@abc.com",
	},
];

export function CSPessoasPage() {
	const [activeTab, setActiveTab] = useState<"pf" | "pj">("pf");

	const [pfFilters, setPFFilters] = useState({
		nome: "",
		cpf: "",
		analiseIxc: "all",
	});

	const [pjFilters, setPJFilters] = useState({
		razaoSocial: "",
		cnpj: "",
	});

	const [pagination, setPagination] = useState({
		page: 1,
		pageSize: 20,
		total: 2,
		totalPages: 1,
	});

	const handlePageChange = (page: number) => {
		setPagination((prev) => ({ ...prev, page }));
	};

	const handlePageSizeChange = (pageSize: number) => {
		setPagination((prev) => ({ ...prev, pageSize, page: 1 }));
	};

	const handleClearFilters = () => {
		if (activeTab === "pf") {
			setPFFilters({ nome: "", cpf: "", analiseIxc: "all" });
		} else {
			setPJFilters({ razaoSocial: "", cnpj: "" });
		}
	};

	const isLoading = false;

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
								<div className="flex-1 min-w-[200px]">
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
								<div className="w-[200px]">
									<Input
										placeholder="Filtrar por CPF..."
										value={pfFilters.cpf}
										onChange={(e) =>
											setPFFilters((prev) => ({ ...prev, cpf: e.target.value }))
										}
									/>
								</div>
								<div className="w-[200px]">
									<Select
										value={pfFilters.analiseIxc}
										onValueChange={(value) =>
											setPFFilters((prev) => ({ ...prev, analiseIxc: value }))
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
								<Button variant="outline" size="sm">
									<Filter className="mr-2 size-4" />
									Filtrar
								</Button>
								<Button variant="ghost" size="sm" onClick={handleClearFilters}>
									<RotateCw className="mr-2 size-4" />
									Limpar
								</Button>
							</div>

							<PessoasTable
								columns={pfColumns}
								data={mockPFData}
								isLoading={isLoading}
								pagination={pagination}
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
								<div className="flex-1 min-w-[200px]">
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
								<div className="w-[200px]">
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
								<Button variant="outline" size="sm">
									<Filter className="mr-2 size-4" />
									Filtrar
								</Button>
								<Button variant="ghost" size="sm" onClick={handleClearFilters}>
									<RotateCw className="mr-2 size-4" />
									Limpar
								</Button>
							</div>

							<PessoasTable
								columns={pjColumns}
								data={mockPJData}
								isLoading={isLoading}
								pagination={pagination}
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
