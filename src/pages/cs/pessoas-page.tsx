import type { ColumnDef } from "@tanstack/react-table";
import { Filter, Plus, RotateCw } from "lucide-react";
import { useState } from "react";
import { PessoasTable } from "#/components/cs/pessoas-table";
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
import {
	usePessoasFisicas,
	usePessoasJuridicas,
} from "#/features/cs/pessoas-hooks";
import type {
	PessoaFisicaFilters,
	PessoaJuridicaFilters,
} from "#/features/cs/pessoas-types";
import { cn } from "#/lib/utils";

const pfColumns: ColumnDef<
	{
		id: number | string;
		createdAt?: string | null;
		f_nome?: string | null;
		f_cpf?: string | null;
		f_data_nascimento?: string | null;
		f_credito?: string | null;
		f_analise_ixc?: string | null;
		f_sexo?: "MASCULINO" | "FEMININO" | "INDEFINIDO" | null;
		createdBy?: { nickname: string; email?: string | null } | null;
	},
	unknown
>[] = [
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

const pjColumns: ColumnDef<
	{
		id: number | string;
		f_razao_social?: string | null;
		f_nome_fantasia?: string | null;
		f_cnpj?: string | null;
		f_ie?: string | null;
		f_responsavel?: string | null;
		f_email_responsavel?: string | null;
	},
	unknown
>[] = [
	{ accessorKey: "id", header: "ID" },
	{ accessorKey: "f_razao_social", header: "Razão Social" },
	{ accessorKey: "f_nome_fantasia", header: "Nome Fantasia" },
	{ accessorKey: "f_cnpj", header: "CNPJ" },
	{ accessorKey: "f_ie", header: "IE" },
	{ accessorKey: "f_responsavel", header: "Responsável" },
	{ accessorKey: "f_email_responsavel", header: "Email" },
];

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

	const [pagination, setPagination] = useState({
		page: 1,
		pageSize: 20,
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

	const {
		data: pfData,
		isLoading: isPFLoding,
		error: pfError,
	} = usePessoasFisicas({
		page: pagination.page,
		pageSize: pagination.pageSize,
		filters: pfFilters,
	});

	const {
		data: pjData,
		isLoading: isPJLoding,
		error: pjError,
	} = usePessoasJuridicas({
		page: pagination.page,
		pageSize: pagination.pageSize,
		filters: pjFilters,
	});

	const isLoading = activeTab === "pf" ? isPFLoding : isPJLoding;
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
								data={pfData?.data ?? []}
								isLoading={isLoading}
								pagination={{
									...pagination,
									total: pfData?.meta?.total ?? 0,
									totalPages: pfData?.meta?.totalPage ?? 0,
								}}
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
								data={pjData?.data ?? []}
								isLoading={isLoading}
								pagination={{
									...pagination,
									total: pjData?.meta?.total ?? 0,
									totalPages: pjData?.meta?.totalPage ?? 0,
								}}
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
