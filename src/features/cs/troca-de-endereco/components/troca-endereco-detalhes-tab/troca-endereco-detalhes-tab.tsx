import { InlineErrorAlert } from "#/components/feedback/inline-error-alert";
import { CardSectionSkeleton } from "#/features/cs/components/detail-skeleton";
import type { TrocaEnderecoWithRelations } from "#/features/cs/troca-de-endereco/troca-endereco-hooks";
import { ContatoCard } from "./troca-endereco-contato-card";
import { EnderecoCard } from "./troca-endereco-endereco-card";
import { ObservacoesCard } from "./troca-endereco-observacoes-card";
import { TrocaEnderecoSummaryCard } from "./troca-endereco-summary-card";

interface TrocaEnderecoDetalhesTabProps {
	trocaEndereco: TrocaEnderecoWithRelations | undefined;
	isLoading: boolean;
}

export function TrocaEnderecoDetalhesTab({
	trocaEndereco,
	isLoading,
}: TrocaEnderecoDetalhesTabProps) {
	if (isLoading) {
		return (
			<div className="flex flex-col gap-6">
				<CardSectionSkeleton />
				<CardSectionSkeleton />
				<CardSectionSkeleton />
				<CardSectionSkeleton />
			</div>
		);
	}

	if (!trocaEndereco) {
		return (
			<InlineErrorAlert>Troca de endereço não encontrada</InlineErrorAlert>
		);
	}

	return (
		<div className="flex flex-col gap-6">
			<TrocaEnderecoSummaryCard trocaEndereco={trocaEndereco} />

			<div className="grid gap-6 lg:grid-cols-2">
				<div className="space-y-6">
					<EnderecoCard trocaEndereco={trocaEndereco} />
				</div>
				<div className="space-y-6">
					<ContatoCard trocaEndereco={trocaEndereco} />
					<ObservacoesCard trocaEndereco={trocaEndereco} />
				</div>
			</div>
		</div>
	);
}
