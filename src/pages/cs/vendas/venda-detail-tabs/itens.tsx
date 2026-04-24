import { useParams } from "react-router";
import { NegociacaoItensTab } from "#/features/cs/negociacoes/negociacao-itens-tab";

export function VendaItensTabPage() {
	const { id } = useParams<{ id: string }>();
	return <NegociacaoItensTab negociacaoId={Number(id)} />;
}
