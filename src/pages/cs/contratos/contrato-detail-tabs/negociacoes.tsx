import { useParams } from "react-router";
import { ContratoNegociacoesTab } from "#/features/cs/contratos/contrato-detalhes/contrato-negociacoes-tab/contrato-negociacoes-tab";

export function ContratoNegociacoesTabPage() {
	const { id } = useParams<{ id: string }>();
	return <ContratoNegociacoesTab contratoId={Number(id)} />;
}
