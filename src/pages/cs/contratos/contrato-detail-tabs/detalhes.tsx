import { useOutletContext } from "react-router";
import { ContratoDetalhesTab } from "#/features/cs/contratos/contrato-detalhes/contrato-detalhes-tab/contrato-detalhes-tab";
import {
	useContratoFaturas,
	useContratoProdutos,
	useDadosAdicionaisContrato,
} from "#/features/cs/contratos/contratos-hooks";
import type { ContratoDetailOutletContext } from "../contrato-detail";

export function ContratoDetalhesTabPage() {
	const context = useOutletContext<ContratoDetailOutletContext>();

	const contratoId = context.contrato?.id ?? 0;
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
	const { data: dadosAdicionais, isLoading: isLoadingDadosAdicionais } =
		useDadosAdicionaisContrato(context.contrato ? contratoId : null);

	const produtos = produtosData?.data ?? [];
	const faturas = faturasData?.data ?? [];

	if (!context.contrato) {
		return null;
	}

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
			dadosAdicionais={dadosAdicionais ?? null}
			isLoadingDadosAdicionais={isLoadingDadosAdicionais}
		/>
	);
}
