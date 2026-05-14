import type { ColumnDef } from "@tanstack/react-table";
import { Eye } from "lucide-react";
import { useState } from "react";
import { FilterActions } from "#/components/filters/filter-actions";
import { FilterInputField } from "#/components/filters/filter-input-field";
import { FilterSelectField } from "#/components/filters/filter-select-field";
import { TabContentCard } from "#/components/layouts/tab-content-card";
import { StatusSummaryCards } from "#/components/status-summary-cards";
import { DataTable, useDataTable } from "#/components/table/data-table";
import {
	detailActionCell,
	detailDateCell,
	detailIdCell,
	detailLongTextCell,
} from "#/components/table/detail-table-presets";
import { Badge, type BadgeVariant } from "#/components/ui/badge";
import { Button } from "#/components/ui/button";
import { useContratoAtendimentos } from "#/features/cs/contratos/contratos-hooks";
import type { SuTicket } from "#/generated/types/d_db_ixcsoft/su-ticket";
import { SUTICKET_SUSTATUS_LABELS } from "#/generated/types/d_db_ixcsoft/su-ticket";
import { formatDatePtBR } from "#/lib/utils";

const ATENDIMENTO_STATUS_VARIANTS: Record<string, BadgeVariant> = {
	N: "secondary",
	P: "outline",
	EP: "default",
	S: "default",
	C: "destructive",
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

const atendimentosTableColumns: ColumnDef<SuTicket, unknown>[] = [
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
		accessorKey: "titulo",
		header: "Assunto",
		cell: ({ row }) => detailLongTextCell(row.original.titulo),
	},
	{
		accessorKey: "menssagem",
		header: "Descrição",
		cell: ({ row }) => detailLongTextCell(row.original.menssagem),
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
	const [assunto, setAssunto] = useState("");
	const [status, setStatus] = useState<string | undefined>("");
	const [appliedAssunto, setAppliedAssunto] = useState("");
	const [appliedStatus, setAppliedStatus] = useState("");

	const filters =
		appliedAssunto || appliedStatus
			? {
					assunto: appliedAssunto || undefined,
					status: appliedStatus || undefined,
				}
			: undefined;

	const { data, isLoading, error } = useContratoAtendimentos(
		contratoId,
		filters,
	);
	const atendimentos = data?.data ?? [];

	const table = useDataTable({
		columns: atendimentosTableColumns,
		data: atendimentos,
	});

	return (
		<div className="flex flex-col gap-4">
			<div className="flex flex-wrap items-end gap-4">
				<FilterInputField
					id="atendimento-assunto"
					label="Assunto"
					value={assunto}
					onChange={setAssunto}
					placeholder="Buscar por assunto..."
				/>
				<FilterSelectField
					id="atendimento-status"
					label="Status"
					value={status ?? "all"}
					onChange={(v) => setStatus(v ?? "all")}
					options={Object.entries(SUTICKET_SUSTATUS_LABELS).map(([v, l]) => ({
						value: v,
						label: l,
					}))}
					placeholder="Todos"
				/>
				<FilterActions
					onApply={() => {
						setAppliedAssunto(assunto);
						setAppliedStatus(status ?? "");
					}}
					onClear={() => {
						setAssunto("");
						setStatus("all");
						setAppliedAssunto("");
						setAppliedStatus("");
					}}
				/>
			</div>
			{!isLoading && !error && atendimentos.length > 0 && (
				<StatusSummaryCards
					items={atendimentos}
					getKey={(a) => a.status}
					getLabel={(key) =>
						SUTICKET_SUSTATUS_LABELS[
							key as keyof typeof SUTICKET_SUSTATUS_LABELS
						] ?? key
					}
					getVariant={(key) => ATENDIMENTO_STATUS_VARIANTS[key] ?? "secondary"}
				/>
			)}
			<TabContentCard
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
			</TabContentCard>
		</div>
	);
}
