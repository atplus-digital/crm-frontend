import { useParams } from "react-router";
import { InlineErrorAlert } from "#/components/feedback/inline-error-alert";
import { Skeleton } from "#/components/ui/skeleton";
import { BackButton } from "#/features/cs/back-button";
import { CardSectionSkeleton } from "#/features/cs/detail-skeleton";
import { useSuspensaoContratoById } from "#/features/cs/suspensao-de-contrato/suspensao-de-contrato-hooks";
import { routePaths } from "#/routes/route-paths";
import { SuspensaoContratoTabs } from "./sections/suspensao-contrato-tabs";

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
							<h1 className="text-2xl font-bold tracking-tight">
								SUSPENSÃO DE CONTRATO (ID {suspensaoContrato?.f_id_contrato}) -{" "}
								{suspensaoContrato?.f_titulo}
							</h1>
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
					<SuspensaoContratoTabs suspensaoContrato={suspensaoContrato} />
				) : (
					<InlineErrorAlert>
						Suspensão de contrato não encontrada
					</InlineErrorAlert>
				)}
			</div>
		</div>
	);
}
