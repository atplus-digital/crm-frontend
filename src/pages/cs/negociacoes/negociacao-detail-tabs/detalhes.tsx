import { useOutletContext } from "react-router";
import { NegociacaoDetalhesTab } from "#/features/cs/negociacoes/negociacao-detalhes-tab";
import type { NegociacaoDetailOutletContext } from "../negociacao-detail";

export function NegociacaoDetalhesTabPage() {
	const context = useOutletContext<NegociacaoDetailOutletContext>();

	return (
		<NegociacaoDetalhesTab
			negociacao={context.negociacao}
			isLoading={context.isLoading}
		/>
	);
}
