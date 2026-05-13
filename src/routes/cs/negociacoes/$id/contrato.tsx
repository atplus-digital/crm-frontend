import { useOutletContext } from "react-router";
import { CardSectionSkeleton } from "#/components/detail-skeleton";
import { InlineErrorAlert } from "#/components/feedback/inline-error-alert";
import { NegociacaoContratoTab } from "#/features/cs/negociacoes/negociacao-contrato-tab";
import type { NegociacaoDetailOutletContext } from "#/pages/cs/negociacoes/negociacao-detail";

export function Component() {
	const { negociacao, isLoading } =
		useOutletContext<NegociacaoDetailOutletContext>();

	if (isLoading) return <CardSectionSkeleton />;
	if (!negociacao)
		return <InlineErrorAlert>Negociação não encontrada</InlineErrorAlert>;

	return <NegociacaoContratoTab negociacao={negociacao} />;
}
