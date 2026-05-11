import { useParams } from "react-router";
import { ContratoAtendimentosTab } from "#/features/cs/contratos/contrato-detalhes/tabs/atendimentos/contrato-atendimentos-tab";

export function ContratoAtendimentosTabPage() {
	const { id } = useParams<{ id: string }>();
	return <ContratoAtendimentosTab contratoId={Number(id)} />;
}
