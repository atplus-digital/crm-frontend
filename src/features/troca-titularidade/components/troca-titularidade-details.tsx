import { Calendar, FileText, MapPin, User } from "lucide-react";
import { useParams } from "react-router";
import { StatusBadge as SharedStatusBadge } from "#/components/badges/status-badge";
import { BackButton } from "#/components/detail/back-button";
import { DetailField } from "#/components/detail/detail-field";
import { DetailSection } from "#/components/detail/detail-section";
import { CardSectionSkeleton } from "#/components/detail/detail-skeleton";
import { InlineErrorAlert } from "#/components/feedback/inline-error-alert";
import { Skeleton } from "#/components/ui/skeleton";
import { useTrocaTitularidadeById } from "#/features/troca-titularidade/troca-titularidade-hooks";
import {
	CRMTROCATITULARIDADE_STATUS_LABELS,
	CRMTROCATITULARIDADE_SUBSTATUS_LABELS,
} from "#/generated/nocobase/crm-troca-titularidade";
import { formatDatePtBR, formatPhone } from "#/lib/utils";

export function TrocaTitularidadeDetailPage() {
	const { id } = useParams<{ id: string }>();
	const trocaTitularidadeId = Number(id);

	const {
		data: trocaTitularidade,
		isLoading,
		error,
	} = useTrocaTitularidadeById(trocaTitularidadeId);

	if (error) {
		return (
			<div className="flex-1 overflow-auto bg-background">
				<div className="mx-auto max-w-400 p-4">
					<InlineErrorAlert>
						Erro ao carregar detalhes da transferência:{" "}
						{(error as Error).message}
					</InlineErrorAlert>
				</div>
			</div>
		);
	}

	return (
		<div className="flex-1 overflow-auto bg-background">
			<div className="mx-auto max-w-400 p-4">
				<div className="flex items-center gap-4 mb-6">
					<BackButton fallbackTo="/troca-titularidade" />
					<div>
						{isLoading ? (
							<>
								<Skeleton className="h-7 w-64 mb-1" />
								<Skeleton className="h-4 w-96" />
							</>
						) : (
							<>
								<h1 className="text-2xl font-bold tracking-tight">
									Transferência de Titularidade #{trocaTitularidade?.id ?? id}
								</h1>
								{trocaTitularidade?.f_cedente && (
									<p className="text-muted-foreground">
										De: {trocaTitularidade.f_cedente} → Para:{" "}
										{trocaTitularidade.f_cessionario}
									</p>
								)}
							</>
						)}
					</div>
				</div>

				{isLoading ? (
					<div className="flex flex-col gap-6">
						<CardSectionSkeleton />
						<CardSectionSkeleton />
						<CardSectionSkeleton />
						<CardSectionSkeleton />
						<CardSectionSkeleton />
						<CardSectionSkeleton />
						<CardSectionSkeleton />
					</div>
				) : trocaTitularidade ? (
					<div className="flex flex-col gap-6">
						<DetailSection
							title="Dados da Transferência"
							description="Informações básicas sobre a transferência"
							icon={<FileText className="size-4" />}
						>
							<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
								<DetailField label="ID">{trocaTitularidade.id}</DetailField>
								<DetailField label="Status">
									<SharedStatusBadge
										value={trocaTitularidade.f_status}
										labels={CRMTROCATITULARIDADE_STATUS_LABELS}
										variant="inline"
										defaultVariant="secondary"
									/>
								</DetailField>
								<DetailField label="Substatus">
									<SharedStatusBadge
										value={trocaTitularidade.f_substatus}
										labels={CRMTROCATITULARIDADE_SUBSTATUS_LABELS}
										variant="inline"
										defaultVariant="secondary"
									/>
								</DetailField>
								<DetailField label="Data de Criação">
									{formatDatePtBR(trocaTitularidade.createdAt)}
								</DetailField>
								<DetailField label="Data de Atualização">
									{formatDatePtBR(trocaTitularidade.updatedAt)}
								</DetailField>
								<DetailField label="ID do Contrato">
									{trocaTitularidade.f_id_contrato}
								</DetailField>
							</div>
						</DetailSection>

						<DetailSection
							title="Cedente"
							description="Dados da pessoa que cede a titularidade"
							icon={<User className="size-4" />}
						>
							<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
								<DetailField label="Nome">
									{trocaTitularidade.f_cedente}
								</DetailField>
								<DetailField label="Documento">
									{trocaTitularidade.f_cedente_documento}
								</DetailField>
								<DetailField label="Email">
									{trocaTitularidade.f_cedente_email}
								</DetailField>
								<DetailField label="Telefone">
									{trocaTitularidade.f_cedente_telefone
										? formatPhone(trocaTitularidade.f_cedente_telefone)
										: "—"}
								</DetailField>
								<DetailField label="Responsável Legal">
									{trocaTitularidade.f_cedente_responsavel_legal}
								</DetailField>
								<DetailField label="Link de Assinatura">
									{trocaTitularidade.f_link_assinatura_cedente ? (
										<a
											href={trocaTitularidade.f_link_assinatura_cedente}
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

						<DetailSection
							title="Cedente"
							description="Dados da pessoa que cede a titularidade"
							icon={<User className="size-4" />}
						>
							<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
								<DetailField label="Nome">
									{trocaTitularidade.f_cedente}
								</DetailField>
								<DetailField label="Documento">
									{trocaTitularidade.f_cedente_documento}
								</DetailField>
								<DetailField label="Email">
									{trocaTitularidade.f_cedente_email}
								</DetailField>
								<DetailField label="Telefone">
									{trocaTitularidade.f_cedente_telefone
										? formatPhone(trocaTitularidade.f_cedente_telefone)
										: "—"}
								</DetailField>
								<DetailField label="Responsável Legal">
									{trocaTitularidade.f_cedente_responsavel_legal}
								</DetailField>
								<DetailField label="Link de Assinatura">
									{trocaTitularidade.f_link_assinatura_cedente ? (
										<a
											href={trocaTitularidade.f_link_assinatura_cedente}
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

						<DetailSection
							title="Endereço"
							description="Localização associada à transferência"
							icon={<MapPin className="size-4" />}
						>
							<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
								<DetailField label="Logradouro">
									{trocaTitularidade.f_endereco}
								</DetailField>
								<DetailField label="Número">
									{trocaTitularidade.f_numero}
								</DetailField>
								<DetailField label="Complemento">
									{trocaTitularidade.f_complemento}
								</DetailField>
								<DetailField label="Bairro">
									{trocaTitularidade.f_bairro}
								</DetailField>
								<DetailField label="Cidade">
									{trocaTitularidade.f_cidade}-{trocaTitularidade.f_estado}
								</DetailField>
								<DetailField label="CEP">{trocaTitularidade.f_cep}</DetailField>
							</div>
						</DetailSection>

						<DetailSection
							title="Cessionário"
							description="Dados da pessoa que recebe a titularidade"
							icon={<User className="size-4" />}
						>
							<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
								<DetailField label="Nome">
									{trocaTitularidade.f_cessionario}
								</DetailField>
								<DetailField label="Documento">
									{trocaTitularidade.f_cessionario_documento}
								</DetailField>
								<DetailField label="Email">
									{trocaTitularidade.f_cessionario_email}
								</DetailField>
								<DetailField label="Telefone">
									{trocaTitularidade.f_cessionario_telefone
										? formatPhone(trocaTitularidade.f_cessionario_telefone)
										: "—"}
								</DetailField>
								<DetailField label="Responsável">
									{trocaTitularidade.f_cessionario_responsavel}
								</DetailField>
								<DetailField label="Link de Assinatura">
									{trocaTitularidade.f_link_assinatura_cessionario ? (
										<a
											href={trocaTitularidade.f_link_assinatura_cessionario}
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

						{trocaTitularidade.f_anexos &&
							trocaTitularidade.f_anexos.length > 0 && (
								<DetailSection
									title="Anexos"
									description="Documentos anexados à transferência"
									icon={<FileText className="size-4" />}
								>
									<div className="space-y-2">
										{trocaTitularidade.f_anexos.map((anexo) => (
											<div key={anexo.id} className="flex items-center gap-2">
												<FileText className="size-4 text-muted-foreground" />
												<a
													href={anexo.url || "#"}
													target="_blank"
													rel="noopener noreferrer"
													className="text-blue-600 hover:underline"
												>
													{anexo.title || `Anexo ${anexo.id}`}
												</a>
											</div>
										))}
									</div>
								</DetailSection>
							)}

						{trocaTitularidade.f_comentarios &&
							trocaTitularidade.f_comentarios.length > 0 && (
								<DetailSection
									title="Comentários"
									description="Observações registradas sobre a transferência"
									icon={<Calendar className="size-4" />}
								>
									<div className="space-y-4">
										{trocaTitularidade.f_comentarios.map((comentario) => (
											<div
												key={comentario.id}
												className="border-b pb-3 last:border-b-0"
											>
												<div className="flex justify-between items-start">
													<p className="text-sm">{comentario.f_comentario}</p>
													<span className="text-xs text-muted-foreground ml-2">
														{formatDatePtBR(comentario.createdAt)}
													</span>
												</div>
												<div className="text-xs text-muted-foreground mt-1">
													Por: {"Usuário"}
												</div>
											</div>
										))}
									</div>
								</DetailSection>
							)}
					</div>
				) : (
					<InlineErrorAlert>
						Transferência de titularidade não encontrada
					</InlineErrorAlert>
				)}
			</div>
		</div>
	);
}
