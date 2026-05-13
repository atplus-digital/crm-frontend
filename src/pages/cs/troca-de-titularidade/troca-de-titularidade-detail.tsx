import { useParams } from "react-router";
import { BackButton } from "#/components/back-button";
import { InlineErrorAlert } from "#/components/feedback/inline-error-alert";
import { PageLayout } from "#/components/layouts/page-layout";
import {
	AddressSection,
	AttachmentsSection,
	CommentsSection,
	IdentificationSection,
	PersonSection,
	RelationshipsSection,
	SignatureSection,
	TransferenciaTitularidadeDetailSkeleton,
	TransferenciaTitularidadeSummaryCard,
} from "#/features/cs/troca-titularidade/components/sections";
import { useTrocaTitularidadeById } from "#/features/cs/troca-titularidade/troca-titularidade-hooks";
import { getErrorMessage } from "#/lib/api-errors";
import { routePaths } from "#/routes/route-paths";

export function TrocaTitularidadeDetailPage() {
	const { id } = useParams<{ id: string }>();
	const transferenciaId = Number(id);

	const {
		data: transferencia,
		isLoading,
		error,
	} = useTrocaTitularidadeById(transferenciaId);

	const title = transferencia
		? `Transferência de Titularidade #${transferencia.id}`
		: undefined;

	if (error) {
		return (
			<PageLayout
				title="Transferência de Titularidade"
				prefixElement={
					<BackButton fallbackTo={routePaths.cs_troca_de_titularidade} />
				}
			>
				<InlineErrorAlert>
					Erro ao carregar detalhes da transferência: {getErrorMessage(error)}
				</InlineErrorAlert>
			</PageLayout>
		);
	}

	if (!isLoading && !transferencia) {
		return (
			<PageLayout
				title="Transferência de Titularidade"
				prefixElement={
					<BackButton fallbackTo={routePaths.cs_troca_de_titularidade} />
				}
			>
				<InlineErrorAlert>
					Transferência de titularidade não encontrada
				</InlineErrorAlert>
			</PageLayout>
		);
	}

	return (
		<PageLayout
			title={title ?? "Transferência de Titularidade"}
			prefixElement={
				<BackButton fallbackTo={routePaths.cs_troca_de_titularidade} />
			}
		>
			{isLoading ? (
				<TransferenciaTitularidadeDetailSkeleton />
			) : transferencia ? (
				<div className="flex flex-col gap-6">
					{/* Hero summary with quick info */}
					<TransferenciaTitularidadeSummaryCard transferencia={transferencia} />

					{/* Identification section - full width */}
					<IdentificationSection trocaTitularidade={transferencia} />

					{/* Two-column layout: Cedente + Cessionário */}
					<div className="grid gap-6 lg:grid-cols-2">
						<PersonSection
							trocaTitularidade={transferencia}
							variant="cedente"
						/>
						<PersonSection
							trocaTitularidade={transferencia}
							variant="cessionario"
						/>
					</div>

					{/* Address section - full width */}
					<AddressSection trocaTitularidade={transferencia} />

					{/* Signature links */}
					<SignatureSection trocaTitularidade={transferencia} />

					{/* Relationships */}
					<RelationshipsSection trocaTitularidade={transferencia} />

					{/* Two-column: Attachments + Comments */}
					<div className="grid gap-6 lg:grid-cols-2">
						<AttachmentsSection trocaTitularidade={transferencia} />
						<CommentsSection trocaTitularidade={transferencia} />
					</div>
				</div>
			) : null}
		</PageLayout>
	);
}
