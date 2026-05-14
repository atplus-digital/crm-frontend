import type { ColumnDef } from "@tanstack/react-table";
import { StatusBadge } from "#/components/badges/status-badge";
import { ViewActionButton } from "#/components/table/columns/view-action-button";
import type { BadgeColor } from "#/components/ui/badge";
import { MotivoBadge } from "#/features/cs/negociacoes/negociacao-badges/motivo-badge";
import type { NegociacaoWithRelations } from "#/features/cs/negociacoes/negociacoes-types";
import { NEGOCIACAO_STATUS_LABELS } from "#/features/cs/negociacoes/negociacoes-types";
import { formatCurrency, formatDatePtBR } from "#/lib/utils";

const negociacaoStatusColorMap: Record<
	keyof typeof NEGOCIACAO_STATUS_LABELS,
	BadgeColor
> = {
	"1": "blue",
	"2": "amber",
	"3": "purple",
	"4": "orange",
	"5": "green",
	"6": "gray",
};

export type NegociacaoItem = NegociacaoWithRelations;

export const columns: ColumnDef<NegociacaoItem>[] = [
	{
		id: "acessar",
		header: "Acessar",
		cell: ({ row }) => (
			<ViewActionButton
				routeKey="cs_negociacoes_id"
				params={{ id: row.original.id }}
			/>
		),
	},
	{
		accessorKey: "createdAt",
		header: "Criado em",
		cell: ({ row }) => formatDatePtBR(row.original.createdAt),
	},
	{
		accessorKey: "f_titulo",
		header: "Título",
		cell: ({ row }) => (
			<span className="max-w-40 truncate block">
				{row.original.f_titulo || "-"}
			</span>
		),
	},
	{
		id: "f_pessoa",
		header: "Pessoa Física",
		cell: ({ row }) => row.original.f_pessoa?.f_nome || "-",
	},
	{
		id: "f_negociacao_pessoa_juridica",
		header: "Pessoa Jurídica",
		cell: ({ row }) =>
			row.original.f_negociacao_pessoa_juridica?.f_razao_social || "-",
	},
	{
		accessorKey: "f_telefone",
		header: "Telefone",
		cell: ({ row }) => row.original.f_telefone || "-",
	},
	{
		accessorKey: "f_motivo",
		header: "Motivo",
		cell: ({ row }) => <MotivoBadge value={row.original.f_motivo || "N"} />,
	},
	{
		accessorKey: "f_valor_mensal",
		header: "Valor Mensal",
		cell: ({ row }) => formatCurrency(row.original.f_valor_mensal),
	},
	{
		accessorKey: "f_valor_devedor",
		header: "Valor Devedor",
		cell: ({ row }) => formatCurrency(row.original.f_valor_devedor || 0),
	},
	{
		accessorKey: "f_valor_devedor_total",
		header: "Total Devedor",
		cell: ({ row }) =>
			formatCurrency(Number(row.original.f_valor_devedor_total) || 0),
	},
	{
		accessorKey: "f_status",
		header: "Status",
		cell: ({ row }) => (
			<StatusBadge
				value={row.original.f_status}
				labels={NEGOCIACAO_STATUS_LABELS}
				colorMap={negociacaoStatusColorMap}
				defaultVariant="soft"
				defaultColor="gray"
			/>
		),
	},
	{
		accessorKey: "f_substatus",
		header: "Substatus",
		cell: ({ row }) => (
			<span className="max-w-64 truncate block">
				{row.original.f_substatus || "-"}
			</span>
		),
	},
	{
		accessorKey: "updatedAt",
		header: "Atualizado em",
		cell: ({ row }) => formatDatePtBR(row.original.updatedAt),
	},
	{
		id: "f_vendedor",
		header: "Vendedor",
		cell: ({ row }) => row.original.f_vendedor?.nickname || "-",
	},
];
