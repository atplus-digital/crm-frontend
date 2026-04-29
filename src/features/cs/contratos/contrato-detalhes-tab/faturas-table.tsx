import type { ColumnDef } from "@tanstack/react-table";
import { DataTable, useDataTable } from "#/components/table/data-table";
import {
	detailDateCell,
	detailMoneyCell,
	detailShortTextCell,
} from "#/components/table/detail-table-presets";
import { ContractTabWrapper } from "#/features/cs/components/contract-tab-wrapper";
import type { Fatura } from "#/features/cs/contratos/contratos-types";
import { FNARECEBER_STATUS_LABELS } from "#/generated/types/ixc/fn-areceber";
import { formatCurrency, formatDatePtBR } from "#/lib/utils";

function formatFaturaStatus(status: Fatura["status"]): string {
	return FNARECEBER_STATUS_LABELS[status] ?? String(status);
}

interface FaturasTableProps {
	faturas: Fatura[];
	isLoading: boolean;
	error: Error | null;
}

const FATURA_COLUMNS: ColumnDef<Fatura, unknown>[] = [
	{
		accessorKey: "status",
		header: "Status",
		cell: ({ row }) =>
			detailShortTextCell(formatFaturaStatus(row.original.status)),
	},
	{
		accessorKey: "valor",
		header: "Valor",
		cell: ({ row }) => detailMoneyCell(row.original.valor, formatCurrency),
	},
	{
		accessorKey: "data_vencimento",
		header: "Data de Vencimento",
		cell: ({ row }) =>
			detailDateCell(row.original.data_vencimento, formatDatePtBR),
	},
	{
		accessorKey: "data_pagamento",
		header: "Data de Pagamento",
		cell: ({ row }) =>
			detailDateCell(row.original.data_pagamento, formatDatePtBR),
	},
];

const FATURA_EMPTY_COLUMNS = [
	"Status",
	"Valor",
	"Data de Vencimento",
	"Data de Pagamento",
];

export function FaturasTable({ faturas, isLoading, error }: FaturasTableProps) {
	const table = useDataTable({
		columns: FATURA_COLUMNS,
		data: faturas,
	});

	return (
		<ContractTabWrapper
			title="Últimas Faturas"
			description="Últimas faturas geradas para este contrato"
			isLoading={isLoading}
			error={error}
			errorMessage="Erro ao carregar faturas"
			isEmpty={faturas.length === 0}
			emptyMessage="Nenhuma fatura encontrada"
			emptyColumns={FATURA_EMPTY_COLUMNS}
		>
			<DataTable table={table} />
		</ContractTabWrapper>
	);
}
