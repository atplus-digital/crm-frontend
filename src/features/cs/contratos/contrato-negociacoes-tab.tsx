import { DataTable, useDataTable } from "#/components/table/data-table";
import { ContractTabWrapper } from "#/features/cs/components/contract-tab-wrapper";
import {
	TROCAS_TITULARIDADE_COLUMNS,
	trocasTitularidadeTableColumns,
} from "#/features/cs/contratos/contrato-negociacoes-columns";
import { useContratoTrocasTitularidade } from "#/features/cs/contratos/contratos-hooks";
import { useNegociacoes } from "#/features/cs/negociacoes/negociacoes-hooks";
import {
	RENOVACOES_COLUMNS,
	renovacoesTableColumns,
} from "./contrato-negociacoes-columns";

interface ContratoNegociacoesTabProps {
	contratoId: number;
}

export function ContratoNegociacoesTab({
	contratoId,
}: ContratoNegociacoesTabProps) {
	const {
		data: trocasData,
		isLoading: isLoadingTrocas,
		error: errorTrocas,
	} = useContratoTrocasTitularidade(contratoId);
	const {
		data: negociacoesData,
		isLoading: isLoadingNegociacoes,
		error: errorNegociacoes,
	} = useNegociacoes({
		page: 1,
		pageSize: 50,
		filters: { contratoId },
	});

	const trocas = trocasData?.data ?? [];
	const negociacoes = negociacoesData?.data ?? [];

	const trocasTable = useDataTable({
		columns: trocasTitularidadeTableColumns,
		data: trocas,
	});

	const negociacoesTable = useDataTable({
		columns: renovacoesTableColumns,
		data: negociacoes,
	});

	return (
		<div className="flex flex-col gap-6">
			<ContractTabWrapper
				title="Troca de Titularidade"
				description="Trocas de titularidade para este contrato"
				isLoading={isLoadingTrocas}
				error={errorTrocas}
				errorMessage="Erro ao carregar trocas de titularidade"
				isEmpty={trocas.length === 0}
				emptyMessage="Nenhuma troca de titularidade encontrada"
				emptyColumns={TROCAS_TITULARIDADE_COLUMNS}
			>
				<DataTable table={trocasTable} />
			</ContractTabWrapper>

			<ContractTabWrapper
				title="Renovações"
				description="Renovações para este contrato"
				isLoading={isLoadingNegociacoes}
				error={errorNegociacoes}
				errorMessage="Erro ao carregar renovações"
				isEmpty={negociacoes.length === 0}
				emptyMessage="Nenhuma renovação encontrada"
				emptyColumns={RENOVACOES_COLUMNS}
			>
				<DataTable table={negociacoesTable} />
			</ContractTabWrapper>
		</div>
	);
}
