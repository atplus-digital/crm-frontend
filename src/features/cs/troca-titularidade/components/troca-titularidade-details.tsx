import { useParams } from "react-router";
import { InlineErrorAlert } from "#/components/feedback/inline-error-alert";
import { Skeleton } from "#/components/ui/skeleton";
import { BackButton } from "#/features/cs/back-button";
import { CardSectionSkeleton } from "#/features/cs/detail-skeleton";
import { useTrocaTitularidadeById } from "#/features/cs/troca-titularidade/troca-titularidade-hooks";
import { routePaths } from "#/routes/route-paths";
import {
	AddressSection,
	AttachmentsSection,
	CommentsSection,
	IdentificationSection,
	PersonSection,
	RelationshipsSection,
	SignatureSection,
} from "./sections";

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
					<BackButton fallbackTo={routePaths.cs_troca_de_titularidade} />
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
				) : (
					<InlineErrorAlert>
						Transferência de titularidade não encontrada
					</InlineErrorAlert>
				)}
			</div>
		</div>
	);
}
