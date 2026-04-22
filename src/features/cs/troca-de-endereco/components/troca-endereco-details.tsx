import { FileText, MapPin, MessageSquare, Phone } from "lucide-react";
import { useParams } from "react-router";
import { StatusBadge as SharedStatusBadge } from "#/components/badges/status-badge";
import { InlineErrorAlert } from "#/components/feedback/inline-error-alert";
import { Skeleton } from "#/components/ui/skeleton";
import { BackButton } from "#/features/cs/back-button";
import { DetailField } from "#/features/cs/detail-field";
import { DetailSection } from "#/features/cs/detail-section";
import { CardSectionSkeleton } from "#/features/cs/detail-skeleton";
import { useTrocaEnderecoById } from "#/features/cs/troca-de-endereco/troca-endereco-hooks";
import {
	TROCAENDERECO_STATUS_LABELS,
	TROCAENDERECO_TAXAINSTALACAO_LABELS,
} from "#/generated/nocobase/troca-endereco";
import { formatDatePtBR, formatPhone } from "#/lib/utils";
import { routePaths } from "#/routes/route-paths";

export function TrocaEnderecoDetailPage() {
	const { id } = useParams<{ id: string }>();
	const trocaEnderecoId = Number(id);

	const {
		data: trocaEndereco,
		isLoading,
		error,
	} = useTrocaEnderecoById(trocaEnderecoId);

	if (error) {
		return (
			<div className="flex-1 overflow-auto bg-background">
				<div className="mx-auto max-w-400 p-4">
					<InlineErrorAlert>
						Erro ao carregar detalhes da troca de endereço:{" "}
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
					<BackButton fallbackTo={routePaths.cs_troca_de_endereco} />
					<div>
						{isLoading ? (
							<>
								<Skeleton className="h-7 w-64 mb-1" />
								<Skeleton className="h-4 w-96" />
							</>
						) : (
							<>
								<h1 className="text-2xl font-bold tracking-tight">
									Troca de Endereço #{trocaEndereco?.id ?? id}
								</h1>
								{trocaEndereco?.f_cliente && (
									<p className="text-muted-foreground">
										{trocaEndereco.f_cliente} — Contrato{" "}
										{trocaEndereco.f_id_contrato}
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
					</div>
				) : trocaEndereco ? (
					<div className="flex flex-col gap-6">
						<DetailSection
							title="Identificação"
							description="Informações básicas sobre a troca de endereço"
							icon={<FileText className="size-4" />}
						>
							<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
								<DetailField label="ID">{trocaEndereco.id}</DetailField>
								<DetailField label="Cliente">
									{trocaEndereco.f_cliente || "—"}
								</DetailField>
								<DetailField label="ID Contrato">
									{trocaEndereco.f_id_contrato || "—"}
								</DetailField>
								<DetailField label="ID Atendimento">
									{trocaEndereco.f_id_atendimento || "—"}
								</DetailField>
								<DetailField label="Status">
									<SharedStatusBadge
										value={trocaEndereco.f_status}
										labels={TROCAENDERECO_STATUS_LABELS}
										variant="inline"
										defaultVariant="secondary"
									/>
								</DetailField>
								<DetailField label="Taxa de Instalação">
									{trocaEndereco.f_taxa_instalacao
										? (TROCAENDERECO_TAXAINSTALACAO_LABELS[
												trocaEndereco.f_taxa_instalacao
											] ?? trocaEndereco.f_taxa_instalacao)
										: "—"}
								</DetailField>
								<DetailField label="Data de Criação">
									{formatDatePtBR(trocaEndereco.createdAt)}
								</DetailField>
							</div>
						</DetailSection>

						<DetailSection
							title="Endereço"
							description="Novo endereço de instalação"
							icon={<MapPin className="size-4" />}
						>
							<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
								<DetailField label="Logradouro">
									{trocaEndereco.f_endereco || "—"}
								</DetailField>
								<DetailField label="Número">
									{trocaEndereco.f_endereco_numero || "—"}
								</DetailField>
								<DetailField label="Complemento">
									{trocaEndereco.f_endereco_complemento || "—"}
								</DetailField>
								<DetailField label="Bairro">
									{trocaEndereco.f_bairro || "—"}
								</DetailField>
								<DetailField label="Cidade">
									{trocaEndereco.f_endereco_cidade || "—"}
								</DetailField>
								<DetailField label="Estado">
									{trocaEndereco.f_endereco_estado || "—"}
								</DetailField>
								<DetailField label="CEP">
									{trocaEndereco.f_cep || "—"}
								</DetailField>
							</div>
						</DetailSection>

						<DetailSection
							title="Contato"
							description="Dados de contato para visita técnica"
							icon={<Phone className="size-4" />}
						>
							<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
								<DetailField label="Telefone de Contato">
									{trocaEndereco.f_telefone_contato
										? formatPhone(trocaEndereco.f_telefone_contato)
										: "—"}
								</DetailField>
								<DetailField label="Referência">
									{trocaEndereco.f_endereco_referencia || "—"}
								</DetailField>
							</div>
						</DetailSection>

						<DetailSection
							title="Observações"
							description="Notas adicionais sobre a solicitação"
							icon={<MessageSquare className="size-4" />}
						>
							<div className="grid grid-cols-1 gap-4">
								<DetailField label="Observação">
									{trocaEndereco.f_obs || "—"}
								</DetailField>
							</div>
						</DetailSection>
					</div>
				) : (
					<InlineErrorAlert>Troca de endereço não encontrada</InlineErrorAlert>
				)}
			</div>
		</div>
	);
}
