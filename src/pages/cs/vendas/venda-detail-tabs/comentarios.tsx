import { useParams } from "react-router";
import { NegociacaoComentariosTab } from "#/features/cs/negociacoes/negociacao-comentarios-tab";

export function VendaComentariosTabPage() {
	const { id } = useParams<{ id: string }>();
	return <NegociacaoComentariosTab negociacaoId={Number(id)} />;
}
