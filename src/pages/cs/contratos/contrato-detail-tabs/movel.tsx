import { useParams } from "react-router";
import { ContratoMovelTab } from "#/features/cs/contratos/contrato-detalhes/tabs/movel/contrato-movel-tab";

export function ContratoMovelTabPage() {
	const { id } = useParams<{ id: string }>();
	return <ContratoMovelTab contratoId={Number(id)} />;
}
