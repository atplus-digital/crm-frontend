import type { ColumnDef } from "@tanstack/react-table";
import {
	detailDateCell,
	detailMoneyCell,
	detailShortTextCell,
} from "#/components/table/detail-table-presets";
import type { TrocaTitularidade } from "#/features/cs/contratos/contratos-types";
import type { NegociacaoWithRelations } from "#/features/cs/negociacoes/negociacoes-types";
import { formatCurrency, formatDatePtBR } from "#/lib/utils";

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
	TrocaTitularidade,
	unknown
>[] = [
	{
		accessorKey: "cedente",
		header: "Cedente",
		cell: ({ row }) => detailShortTextCell(row.original.cedente),
	},
	{
		accessorKey: "documento_cedente",
		header: "Documento Cedente",
		cell: ({ row }) => detailShortTextCell(row.original.documento_cedente),
	},
	{
		accessorKey: "cessionario",
		header: "Cessionário",
		cell: ({ row }) => detailShortTextCell(row.original.cessionario),
	},
	{
		accessorKey: "documento_cessionario",
		header: "Documento Cessionário",
		cell: ({ row }) => detailShortTextCell(row.original.documento_cessionario),
	},
	{
		accessorKey: "status",
		header: "Status",
		cell: ({ row }) => detailShortTextCell(row.original.status),
	},
	{
		accessorKey: "id_contrato",
		header: "Contrato",
		cell: ({ row }) => detailShortTextCell(row.original.id_contrato),
	},
];

// ---------------------------------------------------------------------------
// Renovações
// ---------------------------------------------------------------------------

export const RENOVACOES_COLUMNS = [
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
		cell: ({ row }) => detailShortTextCell(row.original.f_status),
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
