import type { ColumnDef } from "@tanstack/react-table";
import { BasicTableCard } from "#/components/basic-table-card";
import { TabContentCard } from "#/components/layouts/tab-content-card";
import { DataTable, useDataTable } from "#/components/table/data-table";
import {
	detailIdCell,
	detailShortTextCell,
} from "#/components/table/detail-table-presets";
import { useContratoMovel } from "#/features/cs/contratos/contratos-hooks";
import type { LinhaMovel } from "#/features/cs/contratos/contratos-types";
import { LINHAMVNO_PORTABILIDADE_LABELS } from "#/generated/types/d_db_ixcsoft/linha-mvno";

function formatPortabilidade(value: LinhaMovel["portabilidade"]): string {
	return LINHAMVNO_PORTABILIDADE_LABELS[value] ?? String(value);
}

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
		cell: ({ row }) =>
			detailShortTextCell(formatPortabilidade(row.original.portabilidade)),
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
	const linhasComPortabilidade = linhas.filter(
		(l) => l.portabilidade === "S",
	).length;
	const table = useDataTable({
		columns: movelTableColumns,
		data: linhas,
	});

	return (
		<div className="flex flex-col gap-4">
			{!isLoading && !error && linhas.length > 0 && (
				<div className="flex flex-wrap gap-4">
					<BasicTableCard label="Total de Linhas" value={linhas.length} />
					<BasicTableCard
						label="Com Portabilidade"
						value={linhasComPortabilidade}
					/>
					<BasicTableCard
						label="Sem Portabilidade"
						value={linhas.length - linhasComPortabilidade}
					/>
				</div>
			)}
			<TabContentCard
				title="Móvel"
				count={linhas.length}
				isLoading={isLoading}
				error={error}
				errorMessage="Erro ao carregar linhas móveis"
				isEmpty={linhas.length === 0}
				emptyMessage="Nenhuma linha móvel encontrada"
				emptyColumns={MOVEL_COLUMNS}
			>
				<DataTable table={table} />
			</TabContentCard>
		</div>
	);
}
