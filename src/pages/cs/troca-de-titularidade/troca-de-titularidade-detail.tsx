import { useParams } from "react-router";
import { BackButton } from "#/components/back-button";
import { InlineErrorAlert } from "#/components/feedback/inline-error-alert";
import { PageLayout } from "#/components/layouts/page-layout";
import { Skeleton } from "#/components/ui/skeleton";
import { CardSectionSkeleton } from "#/features/cs/components/detail-skeleton";
import {
	AddressSection,
	AttachmentsSection,
	CommentsSection,
	IdentificationSection,
	PersonSection,
	RelationshipsSection,
	SignatureSection,
} from "#/features/cs/troca-titularidade/components/sections";
import { useTrocaTitularidadeById } from "#/features/cs/troca-titularidade/troca-titularidade-hooks";
import { getErrorMessage } from "#/lib/api-errors";
import { routePaths } from "#/routes/route-paths";

export function TrocaTitularidadeDetailPage() {
	const { id } = useParams<{ id: string }>();
	const trocaTitularidadeId = Number(id);

	const {
		data: trocaTitularidade,
		isLoading,
		error,
	} = useTrocaTitularidadeById(trocaTitularidadeId);

	const title = trocaTitularidade
		? `Transferência de Titularidade #${trocaTitularidade.id}`
		: undefined;

	const subtitle = trocaTitularidade?.f_cedente
		? `De: ${trocaTitularidade.f_cedente} → Para: ${trocaTitularidade.f_cessionario}`
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

	if (!isLoading && !trocaTitularidade) {
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
			title={title ?? <Skeleton className="h-7 w-64" />}
			subtitle={
				subtitle ?? (isLoading ? <Skeleton className="h-4 w-96" /> : undefined)
			}
			prefixElement={
				<BackButton fallbackTo={routePaths.cs_troca_de_titularidade} />
			}
		>
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
					<IdentificationSection trocaTitularidade={trocaTitularidade} />
					<PersonSection
						trocaTitularidade={trocaTitularidade}
						variant="cedente"
					/>
					<PersonSection
						trocaTitularidade={trocaTitularidade}
						variant="cessionario"
					/>
					<AddressSection trocaTitularidade={trocaTitularidade} />
					<SignatureSection trocaTitularidade={trocaTitularidade} />
					<RelationshipsSection trocaTitularidade={trocaTitularidade} />
					<AttachmentsSection trocaTitularidade={trocaTitularidade} />
					<CommentsSection trocaTitularidade={trocaTitularidade} />
				</div>
			) : null}
		</PageLayout>
	);
}
