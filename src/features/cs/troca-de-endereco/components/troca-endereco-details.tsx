import { useParams } from "react-router";
import { BackButton } from "#/components/back-button";
import { InlineErrorAlert } from "#/components/feedback/inline-error-alert";
import { useTrocaEnderecoById } from "#/features/cs/troca-de-endereco/troca-endereco-hooks";
import { getErrorMessage } from "#/lib/api-errors";
import { routePaths } from "#/routes/route-paths";
import { TrocaEnderecoDetalhesTab } from "./troca-endereco-detalhes-tab/troca-endereco-detalhes-tab";

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
						{getErrorMessage(error)}
					</InlineErrorAlert>
				</div>
			</div>
		);
	}

	return (
		<div className="flex-1 overflow-auto bg-background">
			<div className="mx-auto max-w-400 p-4">
				<div className="mb-6">
					<BackButton fallbackTo={routePaths.cs_troca_de_endereco} />
				</div>
				<TrocaEnderecoDetalhesTab
					trocaEndereco={trocaEndereco}
					isLoading={isLoading}
				/>
			</div>
		</div>
	);
}
