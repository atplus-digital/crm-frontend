import { useParams } from "react-router";
import { BackButton } from "#/components/back-button";
import { InlineErrorAlert } from "#/components/feedback/inline-error-alert";
import { useSuspensaoContratoById } from "#/features/cs/suspensao-de-contrato/suspensao-de-contrato-hooks";
import { getErrorMessage } from "#/lib/api-errors";
import { routePaths } from "#/routes/route-paths";
import { SuspensaoContratoDetalhesTab } from "./suspensao-contrato-detalhes-tab/suspensao-contrato-detalhes-tab";

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
						Erro ao carregar detalhes da suspensão: {getErrorMessage(error)}
					</InlineErrorAlert>
				</div>
			</div>
		);
	}

	return (
		<div className="flex-1 overflow-auto bg-background">
			<div className="mx-auto max-w-400 p-4">
				<div className="mb-6">
					<BackButton fallbackTo={routePaths.cs_suspensao_de_contrato} />
				</div>

				<SuspensaoContratoDetalhesTab
					suspensaoContrato={suspensaoContrato}
					isLoading={isLoading}
				/>
			</div>
		</div>
	);
}
