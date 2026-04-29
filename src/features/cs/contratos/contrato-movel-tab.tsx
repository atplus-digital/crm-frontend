import type { ColumnDef } from "@tanstack/react-table";
import { DataTable, useDataTable } from "#/components/table/data-table";
import {
	detailIdCell,
	detailShortTextCell,
} from "#/components/table/detail-table-presets";
import { ContractTabWrapper } from "#/features/cs/components/contract-tab-wrapper";
import { useContratoMovel } from "#/features/cs/contratos/contratos-hooks";
import type { LinhaMovel } from "#/features/cs/contratos/contratos-types";
import { LINHAMVNO_PORTABILIDADE_LABELS } from "#/generated/ixc/linha-mvno";
import { cn } from "#/lib/utils";

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

function StatCard({
	label,
	value,
	className,
}: {
	label: string;
	value: string | number;
	className?: string;
}) {
	return (
		<div className={cn("rounded-lg border bg-card p-3", className)}>
			<p className="text-xs text-muted-foreground">{label}</p>
			<p className="text-lg font-semibold">{value}</p>
		</div>
	);
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
					<StatCard label="Total de Linhas" value={linhas.length} />
					<StatCard label="Com Portabilidade" value={linhasComPortabilidade} />
					<StatCard
						label="Sem Portabilidade"
						value={linhas.length - linhasComPortabilidade}
					/>
				</div>
			)}
			<ContractTabWrapper
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
			</ContractTabWrapper>
		</div>
	);
}
