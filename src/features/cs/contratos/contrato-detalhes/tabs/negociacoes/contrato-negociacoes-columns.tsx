import type { ColumnDef } from "@tanstack/react-table";
import { ViewActionButton } from "#/components/table/columns/view-action-button";
import {
	detailDateCell,
	detailMoneyCell,
	detailShortTextCell,
} from "#/components/table/detail-table-presets";
import type { NegociacaoWithRelations } from "#/features/cs/negociacoes/negociacoes-types";
import type { CrmTrocaTitularidade } from "#/generated/types/nocobase/crm-troca-titularidade";
import { CRMTROCATITULARIDADE_STATUS_LABELS } from "#/generated/types/nocobase/crm-troca-titularidade";
import { NEGOCIACOES_STATUS_LABELS } from "#/generated/types/nocobase/negociacoes";
import { formatCurrency, formatDatePtBR } from "#/lib/utils";

function formatTrocaStatus(status: CrmTrocaTitularidade["f_status"]): string {
	return CRMTROCATITULARIDADE_STATUS_LABELS[status] ?? String(status);
}

function formatNegociacaoStatus(
	status: NegociacaoWithRelations["f_status"],
): string {
	return NEGOCIACOES_STATUS_LABELS[status] ?? String(status);
}

// ---------------------------------------------------------------------------
// Troca de Titularidade
// ---------------------------------------------------------------------------

export const TROCAS_TITULARIDADE_COLUMNS = [
	"Cedente",
	"Documento Cedente",
	"Cessionário",
	"Documento Cessionário",
	"Status",
	"Contrato",
];

export const trocasTitularidadeTableColumns: ColumnDef<
	CrmTrocaTitularidade,
	unknown
>[] = [
	{
		accessorKey: "f_cedente",
		header: "Cedente",
		cell: ({ row }) => detailShortTextCell(row.original.f_cedente),
	},
	{
		accessorKey: "f_cedente_documento",
		header: "Documento Cedente",
		cell: ({ row }) => detailShortTextCell(row.original.f_cedente_documento),
	},
	{
		accessorKey: "f_cessionario",
		header: "Cessionário",
		cell: ({ row }) => detailShortTextCell(row.original.f_cessionario),
	},
	{
		accessorKey: "f_cessionario_documento",
		header: "Documento Cessionário",
		cell: ({ row }) =>
			detailShortTextCell(row.original.f_cessionario_documento),
	},
	{
		accessorKey: "f_status",
		header: "Status",
		cell: ({ row }) =>
			detailShortTextCell(formatTrocaStatus(row.original.f_status)),
	},
	{
		accessorKey: "f_id_contrato",
		header: "Contrato",
		cell: ({ row }) => detailShortTextCell(row.original.f_id_contrato),
	},
];

// ---------------------------------------------------------------------------
// Renovações
// ---------------------------------------------------------------------------

export const RENOVACOES_COLUMNS = [
	"Acessar",
	"Título",
	"Valor Mensal",
	"Criado em",
	"Vendedor",
	"Status",
	"Contrato",
	"Itens Negociação",
];

export const renovacoesTableColumns: ColumnDef<
	NegociacaoWithRelations,
	unknown
>[] = [
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
		accessorKey: "f_titulo",
		header: "Título",
		cell: ({ row }) => detailShortTextCell(row.original.f_titulo),
	},
	{
		accessorKey: "f_valor_mensal",
		header: "Valor Mensal",
		cell: ({ row }) =>
			detailMoneyCell(row.original.f_valor_mensal, formatCurrency),
	},
	{
		accessorKey: "createdAt",
		header: "Criado em",
		cell: ({ row }) => detailDateCell(row.original.createdAt, formatDatePtBR),
	},
	{
		accessorKey: "f_vendedor",
		header: "Vendedor",
		cell: ({ row }) => detailShortTextCell(row.original.f_vendedor?.nickname),
	},
	{
		accessorKey: "f_status",
		header: "Status",
		cell: ({ row }) =>
			detailShortTextCell(formatNegociacaoStatus(row.original.f_status)),
	},
	{
		accessorKey: "f_contrato_ixc",
		header: "Contrato",
		cell: ({ row }) => detailShortTextCell(row.original.f_contrato_ixc),
	},
	{
		id: "itens_negociacao",
		header: "Itens Negociação",
		cell: () => detailShortTextCell("—"),
	},
];
