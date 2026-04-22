import { Clock, FileText, Link2, Mail, User } from "lucide-react";
import { useParams } from "react-router";
import { StatusBadge as SharedStatusBadge } from "#/components/badges/status-badge";
import { InlineErrorAlert } from "#/components/feedback/inline-error-alert";
import { Button } from "#/components/ui/button";
import { Skeleton } from "#/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "#/components/ui/tabs";
import { BackButton } from "#/features/cs/back-button";
import { DetailField } from "#/features/cs/detail-field";
import { CardSectionSkeleton } from "#/features/cs/detail-skeleton";
import { useSuspensaoContratoById } from "#/features/cs/suspensao-de-contrato/suspensao-de-contrato-hooks";
import { SUSPENSAO_CONTRATO_STATUS_LABELS } from "#/features/cs/suspensao-de-contrato/suspensao-de-contrato-types";
import type { ComentariosSuspensaoDeContrato } from "#/generated/nocobase/comentarios-suspensao-de-contrato";
import type { Contratos } from "#/generated/nocobase/index";
import { formatDatePtBR, formatPhone } from "#/lib/utils";
import { routePaths } from "#/routes/route-paths";
import { DetailSection } from "../detail-section";

export function SuspensaoContratoDetailPage() {
	const { id } = useParams<{ id: string }>();
	const suspensaoContratoId = Number(id);

	const {
		data: suspensaoContrato,
		isLoading,
		error,
	} = useSuspensaoContratoById(suspensaoContratoId);

	if (error) {
		return (
			<div className="flex-1 overflow-auto bg-background">
				<div className="mx-auto max-w-400 p-4">
					<InlineErrorAlert>
						Erro ao carregar detalhes da suspensão: {(error as Error).message}
					</InlineErrorAlert>
				</div>
			</div>
		);
	}

	return (
		<div className="flex-1 overflow-auto bg-background">
			<div className="mx-auto max-w-400 p-4">
				<div className="flex items-center gap-4 mb-6">
					<BackButton fallbackTo={routePaths.cs_suspensao_de_contrato} />
					<div>
						{isLoading ? (
							<>
								<Skeleton className="h-7 w-64 mb-1" />
								<Skeleton className="h-4 w-96" />
							</>
						) : (
							<>
								<h1 className="text-2xl font-bold tracking-tight">
									SUSPENSÃO DE CONTRATO (ID {suspensaoContrato?.f_id_contrato})
									- {suspensaoContrato?.f_titulo}
								</h1>
							</>
						)}
					</div>
				</div>

				{isLoading ? (
					<div className="flex flex-col gap-6">
						<CardSectionSkeleton />
						<CardSectionSkeleton />
						<CardSectionSkeleton />
					</div>
				) : suspensaoContrato ? (
					<Tabs defaultValue="detalhes" className="w-full">
						<TabsList className="mb-6">
							<TabsTrigger value="detalhes">Detalhes Suspensão</TabsTrigger>
							<TabsTrigger value="contrato">Contrato</TabsTrigger>
						</TabsList>

						<TabsContent value="detalhes" className="space-y-6">
							<DetailSection
								title="Status"
								description="Status atual da solicitação"
								icon={<FileText className="size-4" />}
							>
								<div className="flex items-center gap-2">
									<SharedStatusBadge
										value={suspensaoContrato.f_status}
										labels={SUSPENSAO_CONTRATO_STATUS_LABELS}
										variant="inline"
										defaultVariant="secondary"
									/>
								</div>
							</DetailSection>

							<DetailSection
								title="Dados do Cliente"
								description="Informações do cliente"
								icon={<FileText className="size-4" />}
							>
								<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
									<DetailField label="Título">
										{suspensaoContrato.f_titulo}
									</DetailField>
									<DetailField label="CPF">
										{suspensaoContrato.f_cpf}
									</DetailField>
									<DetailField label="ID Contrato">
										{suspensaoContrato.f_id_contrato}
									</DetailField>
								</div>
							</DetailSection>

							<DetailSection
								title="Envio de Assinatura"
								description="Dados para envio da assinatura"
								icon={<Mail className="size-4" />}
							>
								<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
									<DetailField label="Email">
										{suspensaoContrato.f_email}
									</DetailField>
									<DetailField label="Telefone">
										{suspensaoContrato.f_telefone
											? formatPhone(suspensaoContrato.f_telefone)
											: "—"}
									</DetailField>
								</div>
							</DetailSection>

							<DetailSection
								title="Suspensão"
								description="Dados da suspensão"
								icon={<Clock className="size-4" />}
							>
								<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
									<DetailField label="Dias Suspenso">
										{suspensaoContrato.f_dias_suspensao}
									</DetailField>
								</div>
							</DetailSection>

							<div className="flex gap-4">
								<Button type="button" disabled>
									Enviar para Assinatura
								</Button>
								<Button type="button" disabled>
									Concluir
								</Button>
								<Button type="button" disabled variant="destructive">
									Arquivar
								</Button>
							</div>

							{suspensaoContrato.f_comentarios &&
								suspensaoContrato.f_comentarios.length > 0 && (
									<DetailSection
										title="Comentários"
										description="Observações registradas"
										icon={<FileText className="size-4" />}
									>
										<div className="space-y-4">
											{suspensaoContrato.f_comentarios.map(
												(comentario: ComentariosSuspensaoDeContrato) => (
													<div
														key={comentario.id}
														className="border-b pb-3 last:border-b-0"
													>
														<div className="flex justify-between items-start">
															<p className="text-sm">
																{comentario.f_comentario}
															</p>
															<span className="text-xs text-muted-foreground ml-2">
																{formatDatePtBR(comentario.createdAt)}
															</span>
														</div>
														<div className="text-xs text-muted-foreground mt-1">
															Por: Usuário
														</div>
													</div>
												),
											)}
										</div>
									</DetailSection>
								)}
						</TabsContent>

						<TabsContent value="contrato" className="space-y-6">
							<DetailSection
								title="Dados do Assinante"
								description="Informações do assinante"
								icon={<User className="size-4" />}
							>
								<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
									<DetailField label="Título">
										{suspensaoContrato.f_titulo}
									</DetailField>
									<DetailField label="CPF">
										{suspensaoContrato.f_cpf}
									</DetailField>
								</div>
							</DetailSection>

							<DetailSection
								title="Dados de Envio"
								description="Informações para envio"
								icon={<Mail className="size-4" />}
							>
								<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
									<DetailField label="Email">
										{suspensaoContrato.f_email}
									</DetailField>
									<DetailField label="Telefone">
										{suspensaoContrato.f_telefone
											? formatPhone(suspensaoContrato.f_telefone)
											: "—"}
									</DetailField>
								</div>
							</DetailSection>

							<DetailSection
								title="Contrato e Link para Assinatura"
								description="Documentos e links"
								icon={<Link2 className="size-4" />}
							>
								<div className="space-y-4">
									<DetailField label="Contratos">
										{suspensaoContrato.f_contratos &&
										suspensaoContrato.f_contratos.length > 0 ? (
											<div className="space-y-2">
												{suspensaoContrato.f_contratos.map(
													(contrato: Contratos) => (
														<div key={contrato.id}>
															<a
																href={contrato.url || "#"}
																target="_blank"
																rel="noopener noreferrer"
																className="text-blue-600 hover:underline"
															>
																{contrato.title || `Contrato ${contrato.id}`}
															</a>
														</div>
													),
												)}
											</div>
										) : (
											"Após assinado o contrato irá aparecer aqui."
										)}
									</DetailField>
									<DetailField label="Link para Assinatura">
										{suspensaoContrato.f_link_assinatura ? (
											<a
												href={suspensaoContrato.f_link_assinatura}
												target="_blank"
												rel="noopener noreferrer"
												className="text-blue-600 hover:underline"
											>
												Abrir link
											</a>
										) : (
											"—"
										)}
									</DetailField>
								</div>
							</DetailSection>
						</TabsContent>
					</Tabs>
				) : (
					<InlineErrorAlert>
						Suspensão de contrato não encontrada
					</InlineErrorAlert>
				)}
			</div>
		</div>
	);
}
