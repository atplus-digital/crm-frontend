import type { ColumnDef } from "@tanstack/react-table";
import { Eye } from "lucide-react";
import { BasicTableCard } from "#/components/basic-table-card";
import { DataTable, useDataTable } from "#/components/table/data-table";
import {
	detailActionCell,
	detailDateCell,
	detailIdCell,
	detailLongTextCell,
} from "#/components/table/detail-table-presets";
import { Badge, type BadgeVariant } from "#/components/ui/badge";
import { Button } from "#/components/ui/button";
import { ContractTabWrapper } from "#/features/cs/components/contract-tab-wrapper";
import { useContratoAtendimentos } from "#/features/cs/contratos/contratos-hooks";
import type { AtendimentoIXC } from "#/features/cs/contratos/contratos-types";
import { SUTICKET_SUSTATUS_LABELS } from "#/generated/types/d_db_ixcsoft/su-ticket";
import { formatDatePtBR } from "#/lib/utils";

const ATENDIMENTO_STATUS_VARIANTS: Record<string, BadgeVariant> = {
	N: "secondary", // Novo
	P: "outline", // Pendente
	EP: "default", // Em progresso
	S: "default", // Solucionado
	C: "destructive", // Cancelado
};

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
		cell: ({ row }) => (
			<Badge
				variant={
					ATENDIMENTO_STATUS_VARIANTS[row.original.status] ?? "secondary"
				}
			>
				{SUTICKET_SUSTATUS_LABELS[
					row.original.status as keyof typeof SUTICKET_SUSTATUS_LABELS
				] ?? row.original.status}
			</Badge>
		),
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

	const statusCounts = atendimentos.reduce<
		Record<string, { count: number; variant: BadgeVariant }>
	>(
		(acc, a) => {
			const status = a.status;
			if (!acc[status]) {
				acc[status] = {
					count: 0,
					variant: ATENDIMENTO_STATUS_VARIANTS[status] ?? "secondary",
				};
			}
			acc[status].count++;
			return acc;
		},
		{} as Record<string, { count: number; variant: BadgeVariant }>,
	);

	const table = useDataTable({
		columns: atendimentosTableColumns,
		data: atendimentos,
	});

	return (
		<div className="flex flex-col gap-4">
			{!isLoading && !error && atendimentos.length > 0 && (
				<div className="flex flex-wrap gap-4">
					{Object.entries(statusCounts).map(([status, info]) => (
						<BasicTableCard
							key={status}
							label={
								SUTICKET_SUSTATUS_LABELS[
									status as keyof typeof SUTICKET_SUSTATUS_LABELS
								] ?? status
							}
							value={info.count}
						>
							<div className="flex items-center gap-2">
								<p className="text-lg font-semibold">{info.count}</p>
								<Badge
									variant={info.variant}
									className="size-2 rounded-full p-0"
								/>
							</div>
						</BasicTableCard>
					))}
				</div>
			)}
			<ContractTabWrapper
				title="Atendimentos"
				count={atendimentos.length}
				isLoading={isLoading}
				error={error}
				errorMessage="Erro ao carregar atendimentos"
				isEmpty={atendimentos.length === 0}
				emptyMessage="Nenhum atendimento encontrado"
				emptyColumns={ATENDIMENTO_COLUMNS}
			>
				<DataTable table={table} />
			</ContractTabWrapper>
		</div>
	);
}
