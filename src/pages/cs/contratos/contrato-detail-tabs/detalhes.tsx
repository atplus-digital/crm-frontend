import { useOutletContext } from "react-router";
import { ContratoDetalhesTab } from "#/features/cs/contratos/contrato-detalhes-tab/contrato-detalhes-tab";
import {
	useContratoFaturas,
	useContratoProdutos,
} from "#/features/cs/contratos/contratos-hooks";
import type { ContratoDetailOutletContext } from "../contrato-detail";

export function ContratoDetalhesTabPage() {
	const context = useOutletContext<ContratoDetailOutletContext>();
	// contratoId from context is guaranteed — parent only renders Outlet after loading contrato
	const contratoId = context.contrato!.id;
	const {
		data: produtosData,
		isLoading: isLoadingProdutos,
		error: produtosError,
	} = useContratoProdutos(contratoId);
	const {
		data: faturasData,
		isLoading: isLoadingFaturas,
		error: faturasError,
	} = useContratoFaturas(contratoId);

	const produtos = produtosData?.data ?? [];
	const faturas = faturasData?.data ?? [];

	return (
		<ContratoDetalhesTab
			contrato={context.contrato}
			isLoading={context.isLoading}
			produtos={produtos}
			isLoadingProdutos={isLoadingProdutos}
			produtosError={produtosError}
			faturas={faturas}
			isLoadingFaturas={isLoadingFaturas}
			faturasError={faturasError}
		/>
	);
}
