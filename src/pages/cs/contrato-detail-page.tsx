import {
	ArrowLeft,
	Database,
	FilePlus,
	FolderOpen,
	Phone,
	Smartphone,
} from "lucide-react";
import { Link, useParams } from "react-router";
import { InlineErrorAlert } from "#/components/feedback/inline-error-alert";
import { EmptyTable } from "#/components/table/empty-table";
import { Button } from "#/components/ui/button";
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
import { ContratoAtendimentosTab } from "#/features/cs/components/contrato-atendimentos-tab";
import { ContratoMovelTab } from "#/features/cs/components/contrato-movel-tab";
import { ContratoNegociacoesTab } from "#/features/cs/components/contrato-negociacoes-tab";
import { ContratoRegistrosTab } from "#/features/cs/components/contrato-registros-tab";
import {
	ContratoStatusBadge,
	InternetStatusBadge,
} from "#/features/cs/components/contrato-status-badge";
import { useContratoById } from "#/features/cs/contratos-hooks";

function formatDatePtBR(dateStr: string | null | undefined): string {
	if (!dateStr || dateStr.startsWith("0000")) return "—";
	return new Intl.DateTimeFormat("pt-BR", {
		day: "2-digit",
		month: "2-digit",
		year: "numeric",
	}).format(new Date(dateStr));
}

function DetailField({
	label,
	children,
}: {
	label: string;
	children: React.ReactNode;
}) {
	return (
		<div className="flex flex-col gap-1">
			<span className="text-sm font-medium text-muted-foreground">{label}</span>
			<span className="text-sm">{children}</span>
		</div>
	);
}

function DetailSkeleton() {
	const sectionKeys = ["section-1", "section-2", "section-3"] as const;
	const fieldKeys = [
		"field-1",
		"field-2",
		"field-3",
		"field-4",
		"field-5",
		"field-6",
	] as const;

	return (
		<div className="flex flex-col gap-6">
			{sectionKeys.map((sectionKey) => (
				<Card key={sectionKey}>
					<CardHeader>
						<Skeleton className="h-5 w-48" />
					</CardHeader>
					<CardContent>
						<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
							{fieldKeys.map((fieldKey) => (
								<div
									key={`${sectionKey}-${fieldKey}`}
									className="flex flex-col gap-1"
								>
									<Skeleton className="h-3 w-24" />
									<Skeleton className="h-4 w-32" />
								</div>
							))}
						</div>
					</CardContent>
				</Card>
			))}
		</div>
	);
}

export function ContratoDetailPage() {
	const { id } = useParams<{ id: string }>();
	const contratoId = Number(id);
	const { data: contrato, isLoading, error } = useContratoById(contratoId);

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
					<Button variant="ghost" size="icon" asChild>
						<Link to="/cs/contratos">
							<ArrowLeft className="size-4" />
						</Link>
					</Button>
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
												{formatDatePtBR(contrato.data_ativacao)}
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
												{formatDatePtBR(contrato.data_validade)}
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
										<EmptyTable
											columns={["Descrição", "Valor", "Quantidade"]}
											message="Nenhum produto encontrado"
										/>
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
										<EmptyTable
											columns={[
												"Status",
												"Valor",
												"Data de Vencimento",
												"Data de Pagamento",
											]}
											message="Nenhuma fatura encontrada"
										/>
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
