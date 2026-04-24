import { useParams } from "react-router";
import { NegociacaoAnexosTab } from "#/features/cs/negociacoes/negociacao-anexos-tab";

export function VendaAnexosTabPage() {
	const { id } = useParams<{ id: string }>();
	return <NegociacaoAnexosTab negociacaoId={Number(id)} />;
}
