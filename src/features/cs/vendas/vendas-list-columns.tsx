import type { ColumnDef } from "@tanstack/react-table";
import { ExternalLink } from "lucide-react";
import { Link } from "react-router";
import { StatusBadge } from "#/components/badges/status-badge";
import { Button } from "#/components/ui/button";
import { MotivoBadge } from "#/features/cs/negociacoes/negociacao-badges/motivo-badge";
import type { NegociacaoWithRelations } from "#/features/cs/negociacoes/negociacoes-types";
import { NEGOCIACAO_STATUS_LABELS } from "#/features/cs/negociacoes/negociacoes-types";
import { formatCurrency, formatDatePtBR } from "#/lib/utils";
import { buildRoute } from "#/routes/route-paths";

const vendasStatusColorClasses: Record<string, string> = {
	"1": "bg-blue-500/10 text-blue-600 border-blue-500/20 hover:bg-blue-500/20",
	"2": "bg-amber-500/10 text-amber-600 border-amber-500/20 hover:bg-amber-500/20",
	"3": "bg-purple-500/10 text-purple-600 border-purple-500/20 hover:bg-purple-500/20",
	"4": "bg-orange-500/10 text-orange-600 border-orange-500/20 hover:bg-orange-500/20",
	"5": "bg-green-500/10 text-green-600 border-green-500/20 hover:bg-green-500/20",
	"6": "bg-gray-500/10 text-gray-600 border-gray-500/20 hover:bg-gray-500/20",
};

export type VendasItem = NegociacaoWithRelations;

export const columns: ColumnDef<VendasItem>[] = [
	{
		id: "acessar",
		header: "Ações",
		cell: ({ row }) => (
			<Button variant="ghost" size="icon-xs" className="size-6" asChild>
				<Link
					to={buildRoute("cs_vendas_id", { id: row.original.id })}
					title="Acessar venda"
				>
					<ExternalLink className="size-4" />
				</Link>
			</Button>
		),
	},
	{
		accessorKey: "createdAt",
		header: "Criado em",
		cell: ({ row }) => formatDatePtBR(row.original.createdAt),
	},
	{
		accessorKey: "updatedAt",
		header: "Última atualização em",
		cell: ({ row }) => formatDatePtBR(row.original.updatedAt),
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
		header: "Pessoa",
		cell: ({ row }) => row.original.f_pessoa?.f_nome || "-",
	},
	{
		id: "f_negociacao_pessoa_juridica",
		header: "Pessoa Jurídica",
		cell: ({ row }) =>
			row.original.f_negociacao_pessoa_juridica?.f_razao_social || "-",
	},
	{
		accessorKey: "f_valor_mensal",
		header: "Valor Mensal",
		cell: ({ row }) => formatCurrency(row.original.f_valor_mensal),
	},
	{
		accessorKey: "f_motivo",
		header: "Motivo",
		cell: ({ row }) => <MotivoBadge value={row.original.f_motivo || "N"} />,
	},
	{
		accessorKey: "f_status",
		header: "Status",
		cell: ({ row }) => (
			<StatusBadge
				value={row.original.f_status}
				labels={NEGOCIACAO_STATUS_LABELS}
				colorClasses={vendasStatusColorClasses}
				defaultVariant="outline"
				defaultClass={vendasStatusColorClasses["6"]}
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
		id: "f_vendedor",
		header: "Vendedor",
		cell: ({ row }) => row.original.f_vendedor?.nickname || "-",
	},
];
