import { useParams } from "react-router";
import { ContratoRegistrosTab } from "#/features/cs/contratos/contrato-detalhes/tabs/registros/contrato-registros-tab";

export function ContratoRegistrosTabPage() {
	const { id } = useParams<{ id: string }>();
	return <ContratoRegistrosTab contratoId={Number(id)} />;
}
