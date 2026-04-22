import {
	Database,
	FilePlus,
	FolderOpen,
	Phone,
	Smartphone,
} from "lucide-react";
import { useParams } from "react-router";
import { BackButton } from "#/components/detail/back-button";
import { DetailField } from "#/components/detail/detail-field";
import { DetailSkeleton } from "#/components/detail/detail-skeleton";
import { InlineErrorAlert } from "#/components/feedback/inline-error-alert";
import { EmptyTable } from "#/components/table/empty-table";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "#/components/ui/card";
import { Separator } from "#/components/ui/separator";
import { Skeleton } from "#/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "#/components/ui/tabs";
import { ContratoAtendimentosTab } from "#/features/cs/contratos/contrato-atendimentos-tab";
import { ContratoMovelTab } from "#/features/cs/contratos/contrato-movel-tab";
import { ContratoNegociacoesTab } from "#/features/cs/contratos/contrato-negociacoes-tab";
import { ContratoRegistrosTab } from "#/features/cs/contratos/contrato-registros-tab";
import {
	ContratoStatusBadge,
	InternetStatusBadge,
} from "#/features/cs/contratos/contrato-status-badge";
import {
	useContratoById,
	useContratoFaturas,
	useContratoProdutos,
} from "#/features/cs/contratos/contratos-hooks";
import type {
	Fatura,
	ProdutoContrato,
} from "#/features/cs/contratos/contratos-types";
import { formatDatePtBR } from "#/lib/utils";
import { routePaths } from "#/routes/route-paths";

export function ContratoDetailPage() {
	const { id } = useParams<{ id: string }>();
	const contratoId = Number(id);
	const { data: contrato, isLoading, error } = useContratoById(contratoId);
	const {
		data: produtosData,
		isLoading: isLoadingProdutos,
		error: produtosError,
	} = useContratoProdutos(contratoId);
	const {
		data: faturasData,
		isLoading: isLoadingFaturas,
		error: faturasError,
	} = useContratoFaturas(contratoId);

	const produtos: ProdutoContrato[] = produtosData?.data ?? [];
	const faturas: Fatura[] = faturasData?.data ?? [];

	if (error) {
		return (
			<div className="flex-1 overflow-auto bg-background">
				<div className="mx-auto max-w-400 p-4">
					<InlineErrorAlert>
						Erro ao carregar contrato: {(error as Error).message}
					</InlineErrorAlert>
				</div>
			</div>
		);
	}

	return (
		<div className="flex-1 overflow-auto bg-background">
			<div className="mx-auto max-w-400 p-4">
				{/* Header */}
				<div className="flex items-center gap-4 mb-6">
					<BackButton fallbackTo={routePaths.cs_contratos} />
					<div>
						{isLoading ? (
							<>
								<Skeleton className="h-7 w-48 mb-1" />
								<Skeleton className="h-4 w-64" />
							</>
						) : (
							<>
								<h1 className="text-2xl font-bold tracking-tight">
									Contrato #{contrato?.id ?? id}
								</h1>
								{contrato?.contrato && (
									<p className="text-muted-foreground">{contrato.contrato}</p>
								)}
							</>
						)}
					</div>
				</div>

				{/* Tabs */}
				<Tabs defaultValue="detalhes">
					<div className="overflow-x-auto pb-2">
						<TabsList variant="line" className="flex whitespace-nowrap">
							<TabsTrigger value="detalhes">
								<Database className="size-4" />
								Detalhes
							</TabsTrigger>
							<TabsTrigger value="movel">
								<Phone className="size-4" />
								Móvel
							</TabsTrigger>
							<TabsTrigger value="negociacoes">
								<FolderOpen className="size-4" />
								Negociações
							</TabsTrigger>
							<TabsTrigger value="atendimentos">
								<Smartphone className="size-4" />
								Atendimentos IXC
							</TabsTrigger>
							<TabsTrigger value="registros">
								<FilePlus className="size-4" />
								Registros
							</TabsTrigger>
						</TabsList>
					</div>

					{/* Tab: Detalhes */}
					<TabsContent value="detalhes" className="mt-6">
						{isLoading ? (
							<DetailSkeleton />
						) : contrato ? (
							<div className="flex flex-col gap-6">
								{/* Dados do Cliente */}
								<Card>
									<CardHeader>
										<CardTitle>Dados do Cliente</CardTitle>
									</CardHeader>
									<CardContent>
										<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
											<DetailField label="Nome/Razão Social">
												{contrato.f_nc_cliente?.razao ?? "—"}
											</DetailField>
											<DetailField label="CPF/CNPJ">
												{contrato.f_nc_cliente?.cnpj_cpf ?? "—"}
											</DetailField>
											<DetailField label="Status Contrato">
												<ContratoStatusBadge status={contrato.status} />
											</DetailField>
											<DetailField label="Status Serviço">
												<InternetStatusBadge
													status={contrato.status_internet}
												/>
											</DetailField>
										</div>
									</CardContent>
								</Card>

								{/* Dados do Contrato */}
								<Card>
									<CardHeader>
										<CardTitle>Dados do Contrato</CardTitle>
									</CardHeader>
									<CardContent>
										<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
											<DetailField label="ID Contrato IXC">
												{contrato.id}
											</DetailField>
											<DetailField label="Data de Ativação">
												{formatDatePtBR(contrato.data_ativacao ?? "")}
											</DetailField>
											<DetailField label="Descrição Contrato IXC">
												{contrato.contrato}
											</DetailField>
											<DetailField label="Fidelidade">
												{contrato.fidelidade
													? `${contrato.fidelidade} meses`
													: "—"}
											</DetailField>
											<DetailField label="Data Expiração">
												{formatDatePtBR(contrato.data_validade ?? "")}
											</DetailField>
											<DetailField label="Valor Unitário">
												{contrato.valor_unitario
													? Number(contrato.valor_unitario).toLocaleString(
															"pt-BR",
															{
																style: "currency",
																currency: "BRL",
															},
														)
													: "—"}
											</DetailField>
										</div>
									</CardContent>
								</Card>

								{/* Dados do Endereço */}
								<Card>
									<CardHeader>
										<CardTitle>Dados do Endereço</CardTitle>
									</CardHeader>
									<CardContent>
										<div className="flex flex-col gap-6">
											<div>
												<h4 className="text-sm font-semibold mb-3">
													Endereço do Contrato
												</h4>
												<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
													<DetailField label="Endereço">
														{contrato.endereco ?? "—"}
													</DetailField>
													<DetailField label="Número">
														{contrato.numero ?? "—"}
													</DetailField>
													<DetailField label="Bairro">
														{contrato.bairro ?? "—"}
													</DetailField>
													<DetailField label="CEP">
														{contrato.cep ?? "—"}
													</DetailField>
												</div>
											</div>
											<Separator />
											{contrato.f_nc_cliente && (
												<div>
													<h4 className="text-sm font-semibold mb-3">
														Endereço do Cliente
													</h4>
													<p className="text-sm text-muted-foreground">
														Endereço cadastrado do cliente
													</p>
												</div>
											)}
										</div>
									</CardContent>
								</Card>

								{/* Produtos */}
								<Card>
									<CardHeader>
										<CardTitle>Produtos</CardTitle>
										<CardDescription>
											Produtos vinculados ao contrato
										</CardDescription>
									</CardHeader>
									<CardContent>
										{isLoadingProdutos ? (
											<Skeleton className="h-32 w-full" />
										) : produtosError ? (
											<InlineErrorAlert>
												Erro ao carregar produtos:{" "}
												{(produtosError as Error).message}
											</InlineErrorAlert>
										) : produtos.length === 0 ? (
											<EmptyTable
												columns={["Descrição", "Valor", "Quantidade"]}
												message="Nenhum produto encontrado"
											/>
										) : (
											<div className="overflow-x-auto">
												<table className="w-full text-sm">
													<thead className="bg-muted/50">
														<tr>
															<th className="px-4 py-3 text-left font-medium">
																Descrição
															</th>
															<th className="px-4 py-3 text-left font-medium">
																Valor
															</th>
															<th className="px-4 py-3 text-left font-medium">
																Quantidade
															</th>
														</tr>
													</thead>
													<tbody className="divide-y divide-border">
														{produtos.map((produto) => (
															<tr key={produto.id}>
																<td className="px-4 py-3">
																	{produto.descricao || "—"}
																</td>
																<td className="px-4 py-3">
																	{produto.valor_unit
																		? Number(produto.valor_unit).toLocaleString(
																				"pt-BR",
																				{
																					style: "currency",
																					currency: "BRL",
																				},
																			)
																		: "—"}
																</td>
																<td className="px-4 py-3">
																	{produto.qtde ?? "—"}
																</td>
															</tr>
														))}
													</tbody>
												</table>
											</div>
										)}
									</CardContent>
								</Card>

								{/* Últimas Faturas */}
								<Card>
									<CardHeader>
										<CardTitle>Últimas Faturas</CardTitle>
										<CardDescription>
											Últimas faturas geradas para este contrato
										</CardDescription>
									</CardHeader>
									<CardContent>
										{isLoadingFaturas ? (
											<Skeleton className="h-32 w-full" />
										) : faturasError ? (
											<InlineErrorAlert>
												Erro ao carregar faturas:{" "}
												{(faturasError as Error).message}
											</InlineErrorAlert>
										) : faturas.length === 0 ? (
											<EmptyTable
												columns={[
													"Status",
													"Valor",
													"Data de Vencimento",
													"Data de Pagamento",
												]}
												message="Nenhuma fatura encontrada"
											/>
										) : (
											<div className="overflow-x-auto">
												<table className="w-full text-sm">
													<thead className="bg-muted/50">
														<tr>
															<th className="px-4 py-3 text-left font-medium">
																Status
															</th>
															<th className="px-4 py-3 text-left font-medium">
																Valor
															</th>
															<th className="px-4 py-3 text-left font-medium">
																Data de Vencimento
															</th>
															<th className="px-4 py-3 text-left font-medium">
																Data de Pagamento
															</th>
														</tr>
													</thead>
													<tbody className="divide-y divide-border">
														{faturas.map((fatura) => (
															<tr key={fatura.id}>
																<td className="px-4 py-3">
																	{fatura.status || "—"}
																</td>
																<td className="px-4 py-3">
																	{fatura.valor
																		? Number(fatura.valor).toLocaleString(
																				"pt-BR",
																				{
																					style: "currency",
																					currency: "BRL",
																				},
																			)
																		: "—"}
																</td>
																<td className="px-4 py-3">
																	{formatDatePtBR(fatura.data_vencimento ?? "")}
																</td>
																<td className="px-4 py-3">
																	{formatDatePtBR(fatura.data_pagamento ?? "")}
																</td>
															</tr>
														))}
													</tbody>
												</table>
											</div>
										)}
									</CardContent>
								</Card>
							</div>
						) : (
							<InlineErrorAlert>Contrato não encontrado</InlineErrorAlert>
						)}
					</TabsContent>

					{/* Tab: Móvel */}
					<TabsContent value="movel" className="mt-6">
						<ContratoMovelTab contratoId={contratoId} />
					</TabsContent>

					{/* Tab: Negociações */}
					<TabsContent value="negociacoes" className="mt-6">
						<ContratoNegociacoesTab contratoId={contratoId} />
					</TabsContent>

					{/* Tab: Atendimentos IXC */}
					<TabsContent value="atendimentos" className="mt-6">
						<ContratoAtendimentosTab contratoId={contratoId} />
					</TabsContent>

					{/* Tab: Registros */}
					<TabsContent value="registros" className="mt-6">
						<ContratoRegistrosTab contratoId={contratoId} />
					</TabsContent>
				</Tabs>
			</div>
		</div>
	);
}
