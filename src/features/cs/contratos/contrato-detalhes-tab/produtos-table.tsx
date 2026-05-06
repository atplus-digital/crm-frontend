import type { ColumnDef } from "@tanstack/react-table";
import { TabContentCard } from "#/components/layouts/tab-content-card";
import { DataTable, useDataTable } from "#/components/table/data-table";
import {
	detailMoneyCell,
	detailShortTextCell,
} from "#/components/table/detail-table-presets";
import type { VdContratosProdutos } from "#/generated/types/d_db_ixcsoft/vd-contratos-produtos";
import { formatCurrency } from "#/lib/utils";

interface ProdutosTableProps {
	produtos: VdContratosProdutos[];
	isLoading: boolean;
	error: Error | null;
}

const PRODUTO_COLUMNS: ColumnDef<VdContratosProdutos, unknown>[] = [
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
		<TabContentCard
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
		</TabContentCard>
	);
}
