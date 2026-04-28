import type { ColumnDef } from "@tanstack/react-table";
import { DataTable, useDataTable } from "#/components/table/data-table";
import {
	detailMoneyCell,
	detailShortTextCell,
} from "#/components/table/detail-table-presets";
import { ContractTabWrapper } from "#/features/cs/components/contract-tab-wrapper";
import type { ProdutoContrato } from "#/features/cs/contratos/contratos-types";
import { formatCurrency } from "#/lib/utils";

interface ProdutosTableProps {
	produtos: ProdutoContrato[];
	isLoading: boolean;
	error: Error | null;
}

const PRODUTO_COLUMNS: ColumnDef<ProdutoContrato, unknown>[] = [
	{
		accessorKey: "descricao",
		header: "Descrição",
		cell: ({ row }) => detailShortTextCell(row.original.descricao),
	},
	{
		accessorKey: "valor_unit",
		header: "Valor",
		cell: ({ row }) => detailMoneyCell(row.original.valor_unit, formatCurrency),
	},
	{
		accessorKey: "qtde",
		header: "Quantidade",
		cell: ({ row }) => detailShortTextCell(row.original.qtde),
	},
];

export function ProdutosTable({
	produtos,
	isLoading,
	error,
}: ProdutosTableProps) {
	const table = useDataTable({
		columns: PRODUTO_COLUMNS,
		data: produtos,
	});

	return (
		<ContractTabWrapper
			title="Produtos"
			description="Produtos vinculados ao contrato"
			isLoading={isLoading}
			error={error}
			errorMessage="Erro ao carregar produtos"
			isEmpty={produtos.length === 0}
			emptyMessage="Nenhum produto encontrado"
			emptyColumns={["Descrição", "Valor", "Quantidade"]}
		>
			<DataTable table={table} />
		</ContractTabWrapper>
	);
}
