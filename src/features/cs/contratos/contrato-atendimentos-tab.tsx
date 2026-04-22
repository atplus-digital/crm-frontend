import type { ColumnDef } from "@tanstack/react-table";
import { Eye } from "lucide-react";
import { DataTable, useDataTable } from "#/components/table/data-table";
import {
	detailActionCell,
	detailDateCell,
	detailIdCell,
	detailLongTextCell,
	detailShortTextCell,
} from "#/components/table/detail-table-presets";
import { Button } from "#/components/ui/button";
import { ContractTabWrapper } from "#/features/cs/contract-tab-wrapper";
import { useContratoAtendimentos } from "#/features/cs/contratos/contratos-hooks";
import type { AtendimentoIXC } from "#/features/cs/contratos/contratos-types";
import { formatDatePtBR } from "#/lib/utils";

const ATENDIMENTO_COLUMNS = [
	"ID",
	"Ações",
	"Status",
	"Assunto",
	"Descrição",
	"Criado em",
	"Última Alteração",
];

const atendimentosTableColumns: ColumnDef<AtendimentoIXC, unknown>[] = [
	{
		accessorKey: "id",
		header: "ID",
		cell: ({ row }) => detailIdCell(row.original.id),
	},
	{
		id: "acoes",
		header: "Ações",
		cell: () =>
			detailActionCell(
				<Button
					variant="ghost"
					size="sm"
					className="min-h-10 min-w-10 px-2 py-1"
				>
					<Eye className="mr-1 size-4" />
					Visualizar O.S.
				</Button>,
			),
	},
	{
		accessorKey: "status",
		header: "Status",
		cell: ({ row }) => detailShortTextCell(row.original.status),
	},
	{
		accessorKey: "assunto",
		header: "Assunto",
		cell: ({ row }) => detailLongTextCell(row.original.assunto),
	},
	{
		accessorKey: "descricao",
		header: "Descrição",
		cell: ({ row }) => detailLongTextCell(row.original.descricao),
	},
	{
		accessorKey: "data_criacao",
		header: "Criado em",
		cell: ({ row }) =>
			detailDateCell(row.original.data_criacao, formatDatePtBR),
	},
	{
		accessorKey: "data_ultima_alteracao",
		header: "Última Alteração",
		cell: ({ row }) =>
			detailDateCell(row.original.data_ultima_alteracao, formatDatePtBR),
	},
];

interface ContratoAtendimentosTabProps {
	contratoId: number;
}

export function ContratoAtendimentosTab({
	contratoId,
}: ContratoAtendimentosTabProps) {
	const { data, isLoading, error } = useContratoAtendimentos(contratoId);
	const atendimentos = data?.data ?? [];
	const table = useDataTable({
		columns: atendimentosTableColumns,
		data: atendimentos,
	});

	return (
		<ContractTabWrapper
			title="Atendimentos"
			isLoading={isLoading}
			error={error}
			errorMessage="Erro ao carregar atendimentos"
			isEmpty={atendimentos.length === 0}
			emptyMessage="Nenhum atendimento encontrado"
			emptyColumns={ATENDIMENTO_COLUMNS}
		>
			<DataTable table={table} />
		</ContractTabWrapper>
	);
}
