import { useOutletContext } from "react-router";
import { NegociacaoDetalhesTab } from "#/features/cs/negociacoes/negociacao-detalhes-tab";
import type { NegociacaoDetailOutletContext } from "#/pages/cs/negociacoes/negociacao-detail";

export function VendaDetalhesTabPage() {
	const context = useOutletContext<NegociacaoDetailOutletContext>();

	return (
		<NegociacaoDetalhesTab
			negociacao={context.negociacao}
			isLoading={context.isLoading}
		/>
	);
}
