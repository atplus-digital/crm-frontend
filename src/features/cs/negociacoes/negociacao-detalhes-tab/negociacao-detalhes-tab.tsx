import { DetailSkeleton } from "#/components/detail-skeleton";
import { InlineErrorAlert } from "#/components/feedback/inline-error-alert";
import { Card, CardContent, CardHeader, CardTitle } from "#/components/ui/card";
import type { NegociacaoWithRelations } from "#/features/cs/negociacoes/negociacoes-types";
import { DadosClienteCard } from "./dados-cliente-card";
import { NegociacaoEditForm } from "./negociacao-edit-form";
import { NegociacaoSituacaoSidebar } from "./negociacao-situacao-sidebar";
import { NegociacaoSummaryCard } from "./negociacao-summary-card";

interface NegociacaoDetalhesTabProps {
	negociacao: NegociacaoWithRelations | undefined;
	isLoading: boolean;
}

export function NegociacaoDetalhesTab({
	negociacao,
	isLoading,
}: NegociacaoDetalhesTabProps) {
	if (isLoading) {
		return <DetailSkeleton />;
	}

	if (!negociacao) {
		return <InlineErrorAlert>Negociação não encontrada</InlineErrorAlert>;
	}

	return (
		<div className="flex flex-col gap-6">
			<NegociacaoSummaryCard negociacao={negociacao} />

			<div className="flex flex-col lg:grid lg:grid-cols-[64%_36%] gap-6">
				<div className="space-y-6">
					<DadosClienteCard negociacao={negociacao} />

					<Card>
						<CardHeader>
							<CardTitle>Atualize os dados abaixo</CardTitle>
						</CardHeader>
						<CardContent>
							<NegociacaoEditForm negociacao={negociacao} />
						</CardContent>
					</Card>
				</div>

				<NegociacaoSituacaoSidebar negociacao={negociacao} />
			</div>
		</div>
	);
}
