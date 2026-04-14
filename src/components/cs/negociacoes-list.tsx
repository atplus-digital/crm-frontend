import type { ColumnDef } from "@tanstack/react-table";
import {
	getCoreRowModel,
	getPaginationRowModel,
	useReactTable,
} from "@tanstack/react-table";
import { Download, ExternalLink, RefreshCw } from "lucide-react";
import { useState } from "react";
import { Badge } from "#/components/ui/badge";
import { Button } from "#/components/ui/button";
import { DataTable } from "#/components/ui/data-table";
import { DataTablePagination } from "#/components/ui/data-table-pagination";
import { cn } from "#/lib/utils";
import type { NegociacaoWithRelations } from "#/modules/cs/negociacoes-types";

const statusBadgeStyles: Record<string, string> = {
	Novo: "bg-blue-500/10 text-blue-600 border-blue-500/20 hover:bg-blue-500/20",
	Negociando:
		"bg-amber-500/10 text-amber-600 border-amber-500/20 hover:bg-amber-500/20",
	Assinatura:
		"bg-purple-500/10 text-purple-600 border-purple-500/20 hover:bg-purple-500/20",
	Auditoria:
		"bg-orange-500/10 text-orange-600 border-orange-500/20 hover:bg-orange-500/20",
	Concluido:
		"bg-green-500/10 text-green-600 border-green-500/20 hover:bg-green-500/20",
	Arquivado:
		"bg-gray-500/10 text-gray-600 border-gray-500/20 hover:bg-gray-500/20",
};

type NegociacaoItem = NegociacaoWithRelations;

function formatDate(dateStr: string): string {
	const date = new Date(dateStr);
	return date.toLocaleDateString("pt-BR", {
		day: "2-digit",
		month: "2-digit",
		year: "numeric",
		hour: "2-digit",
		minute: "2-digit",
	});
}

function formatCurrency(value: number | null | undefined): string {
	if (!value) return "-";
	return value.toLocaleString("pt-BR", {
		style: "currency",
		currency: "BRL",
	});
}

function StatusBadge({ status }: { status: string }) {
	// Normalizar status para chave do objeto
	const normalizedStatus = status === "Concluído" ? "Concluido" : status;
	const style =
		statusBadgeStyles[normalizedStatus] || statusBadgeStyles.Arquivado;
	return (
		<Badge variant="outline" className={cn(style, "font-medium")}>
			{status}
		</Badge>
	);
}

const columns: ColumnDef<NegociacaoItem>[] = [
	{
		id: "acessar",
		header: "Acessar",
		cell: ({ row }) => (
			<Button
				variant="ghost"
				size="icon-xs"
				className="size-6"
				title="Acessar negociação"
				onClick={() => row.original.id}
			>
				<ExternalLink className="size-4" />
			</Button>
		),
	},
	{
		accessorKey: "createdAt",
		header: "Criado em",
		cell: ({ row }) => formatDate(row.original.createdAt),
	},
	{
		accessorKey: "updatedAt",
		header: "Última atualização",
		cell: ({ row }) => formatDate(row.original.updatedAt),
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
		accessorKey: "f_valor_mensal",
		header: "Valor Mensal",
		cell: ({ row }) => formatCurrency(row.original.f_valor_mensal),
	},
	{
		accessorKey: "f_status",
		header: "Status",
		cell: ({ row }) => <StatusBadge status={row.original.f_status} />,
	},
	{
		accessorKey: "f_substatus",
		header: "Substatus",
		cell: ({ row }) => (
			<span className="max-w-[250px] truncate block">
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

interface NegociacoesListProps {
	negociacoes?: NegociacaoItem[];
	totalCount?: number;
	isLoading?: boolean;
	onRefresh?: () => void;
	onExport?: () => void;
}

export function NegociacoesList({
	negociacoes = [],
	totalCount = 0,
	onRefresh,
	onExport,
}: NegociacoesListProps) {
	const [pagination, setPagination] = useState({
		pageIndex: 0,
		pageSize: 20,
	});

	const data = negociacoes;

	const handleRefresh = () => {
		onRefresh?.();
	};

	const handleExport = () => {
		onExport?.();
	};

	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		onPaginationChange: setPagination,
		state: { pagination },
	});

	return (
		<div className="space-y-4">
			{/* Actions bar */}
			<div className="flex items-center justify-between">
				<div className="flex items-center gap-2">
					<Button
						variant="outline"
						size="sm"
						onClick={handleRefresh}
						title="Atualizar"
					>
						<RefreshCw className="size-4" />
						<span className="hidden sm:inline">Atualizar</span>
					</Button>
					<Button
						variant="outline"
						size="sm"
						onClick={handleExport}
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

			{/* Table */}
			<DataTable table={table} emptyMessage="Nenhuma negociação encontrada" />

			{/* Pagination */}
			<DataTablePagination table={table} />
		</div>
	);
}
