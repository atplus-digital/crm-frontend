import type { ColumnDef } from "@tanstack/react-table";
import { Download, ExternalLink, RefreshCw } from "lucide-react";
import { Link } from "react-router";
import { StatusBadge } from "#/components/badges/status-badge";
import { DataTableWithPagination } from "#/components/table/data-table-with-pagination";
import { Button } from "#/components/ui/button";
import type { NegociacaoWithRelations } from "#/features/cs/negociacoes/negociacoes-types";
import { NEGOCIACAO_STATUS_LABELS } from "#/features/cs/negociacoes/negociacoes-types";
import { formatCurrency, formatDatePtBR } from "#/lib/utils";
import { buildRoute } from "#/routes/route-paths";

const negociacaoStatusColorClasses: Record<string, string> = {
	"1": "bg-blue-500/10 text-blue-600 border-blue-500/20 hover:bg-blue-500/20",
	"2": "bg-amber-500/10 text-amber-600 border-amber-500/20 hover:bg-amber-500/20",
	"3": "bg-purple-500/10 text-purple-600 border-purple-500/20 hover:bg-purple-500/20",
	"4": "bg-orange-500/10 text-orange-600 border-orange-500/20 hover:bg-orange-500/20",
	"5": "bg-green-500/10 text-green-600 border-green-500/20 hover:bg-green-500/20",
	"6": "bg-gray-500/10 text-gray-600 border-gray-500/20 hover:bg-gray-500/20",
};

const negociacaoMotivoColorClasses: Record<string, string> = {
	M: "bg-amber-500/10 text-amber-600 border-amber-500/20",
	D: "bg-red-500/10 text-red-600 border-red-500/20",
	U: "bg-blue-500/10 text-blue-600 border-blue-500/20",
	N: "bg-yellow-500/10 text-yellow-600 border-yellow-500/20",
	R: "bg-cyan-500/10 text-cyan-600 border-cyan-500/20",
	T: "bg-lime-500/10 text-lime-600 border-lime-500/20",
	L: "bg-lime-500/10 text-lime-600 border-lime-500/20",
};

const negociacaoMotivoLabels: Record<string, string> = {
	M: "Mud.Endereço",
	D: "Downgrade",
	U: "Upgrade",
	N: "Renegociação",
	R: "Reativação",
	T: "Mud.Tecnologia",
	L: "Mud.Titularidade",
	I: "Venda Nova",
	S: "Segunda Contratação",
	P: "Proposta",
};

type NegociacaoItem = NegociacaoWithRelations;

const columns: ColumnDef<NegociacaoItem>[] = [
	{
		id: "acessar",
		header: "Acessar",
		cell: ({ row }) => (
			<Button variant="ghost" size="icon-xs" className="size-6" asChild>
				<Link
					to={buildRoute("cs_negociacoes_id", { id: row.original.id })}
					title="Acessar negociação"
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
		cell: ({ row }) => (
			<StatusBadge
				value={row.original.f_motivo || "N"}
				labels={negociacaoMotivoLabels}
				colorClasses={negociacaoMotivoColorClasses}
				defaultVariant="outline"
				defaultClass={negociacaoMotivoColorClasses.N}
			/>
		),
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
				colorClasses={negociacaoStatusColorClasses}
				defaultVariant="outline"
				defaultClass={negociacaoStatusColorClasses["6"]}
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

interface NegociacoesListProps {
	negociacoes?: NegociacaoItem[];
	totalCount?: number;
	onRefresh?: () => void;
	onExport?: () => void;
}

export function NegociacoesList({
	negociacoes = [],
	totalCount = 0,
	onRefresh,
	onExport,
}: NegociacoesListProps) {
	return (
		<DataTableWithPagination
			columns={columns}
			data={negociacoes}
			total={totalCount}
			emptyMessage="Nenhuma negociação encontrada"
		>
			<div className="flex items-center justify-between">
				<div className="flex items-center gap-2">
					<Button
						variant="outline"
						size="sm"
						onClick={onRefresh}
						title="Atualizar"
					>
						<RefreshCw className="size-4" />
						<span className="hidden sm:inline">Atualizar</span>
					</Button>
					<Button
						variant="outline"
						size="sm"
						onClick={onExport}
						title="Exportar"
					>
						<Download className="size-4" />
						<span className="hidden sm:inline">Exportar</span>
					</Button>
				</div>
				<span className="text-sm text-muted-foreground">
					Total de {totalCount} itens
				</span>
			</div>
		</DataTableWithPagination>
	);
}
