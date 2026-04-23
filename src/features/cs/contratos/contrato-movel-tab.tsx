import type { ColumnDef } from "@tanstack/react-table";
import { DataTable, useDataTable } from "#/components/table/data-table";
import {
	detailIdCell,
	detailShortTextCell,
} from "#/components/table/detail-table-presets";
import { ContractTabWrapper } from "#/features/cs/components/contract-tab-wrapper";
import { useContratoMovel } from "#/features/cs/contratos/contratos-hooks";
import type { LinhaMovel } from "#/features/cs/contratos/contratos-types";

const MOVEL_COLUMNS = [
	"DDD",
	"Número",
	"ID Contrato",
	"Dia Recorrência",
	"Portabilidade",
	"SIMCARD",
];

const movelTableColumns: ColumnDef<LinhaMovel, unknown>[] = [
	{
		accessorKey: "ddd_telefone",
		header: "DDD",
		cell: ({ row }) => detailShortTextCell(row.original.ddd_telefone),
	},
	{
		accessorKey: "numero_telefone",
		header: "Número",
		cell: ({ row }) => detailIdCell(row.original.numero_telefone),
	},
	{
		accessorKey: "id_contrato",
		header: "ID Contrato",
		cell: ({ row }) => detailIdCell(row.original.id_contrato),
	},
	{
		accessorKey: "dia_recorrencia",
		header: "Dia Recorrência",
		cell: ({ row }) => detailShortTextCell(row.original.dia_recorrencia),
	},
	{
		accessorKey: "portabilidade",
		header: "Portabilidade",
		cell: ({ row }) => detailShortTextCell(row.original.portabilidade),
	},
	{
		accessorKey: "simcard",
		header: "SIMCARD",
		cell: ({ row }) => detailShortTextCell(row.original.simcard),
	},
];

interface ContratoMovelTabProps {
	contratoId: number;
}

export function ContratoMovelTab({ contratoId }: ContratoMovelTabProps) {
	const { data, isLoading, error } = useContratoMovel(contratoId);
	const linhas = data?.data ?? [];
	const table = useDataTable({
		columns: movelTableColumns,
		data: linhas,
	});

	return (
		<ContractTabWrapper
			title="Móvel"
			isLoading={isLoading}
			error={error}
			errorMessage="Erro ao carregar linhas móveis"
			isEmpty={linhas.length === 0}
			emptyMessage="Nenhuma linha móvel encontrada"
			emptyColumns={MOVEL_COLUMNS}
		>
			<DataTable table={table} />
		</ContractTabWrapper>
	);
}
