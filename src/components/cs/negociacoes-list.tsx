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

const statusBadgeStyles: Record<string, string> = {
	Novo: "bg-blue-500/10 text-blue-600 border-blue-500/20 hover:bg-blue-500/20",
	Negociando:
		"bg-amber-500/10 text-amber-600 border-amber-500/20 hover:bg-amber-500/20",
	Assinatura:
		"bg-purple-500/10 text-purple-600 border-purple-500/20 hover:bg-purple-500/20",
	Auditoria:
		"bg-orange-500/10 text-orange-600 border-orange-500/20 hover:bg-orange-500/20",
	Concluído:
		"bg-green-500/10 text-green-600 border-green-500/20 hover:bg-green-500/20",
	Arquivado:
		"bg-gray-500/10 text-gray-600 border-gray-500/20 hover:bg-gray-500/20",
};

// Mock data types
interface NegociacaoItem {
	id: number;
	createdAt: string;
	updatedAt: string;
	f_titulo?: string;
	f_valor_mensal?: number;
	f_status: string;
	f_substatus?: string;
	f_vendedor?: {
		nickname: string;
	};
	f_pessoa?: {
		f_nome: string;
	};
	f_negociacao_pessoa_juridica?: {
		f_razao_social: string;
	};
}

// Placeholder data
const mockData: NegociacaoItem[] = [
	{
		id: 1,
		createdAt: "2024-01-15T10:30:00Z",
		updatedAt: "2024-01-15T14:20:00Z",
		f_titulo: "Negociação João Silva",
		f_valor_mensal: 2500.0,
		f_status: "Novo",
		f_substatus: "Aguardando contato",
		f_vendedor: { nickname: "vendedor1" },
		f_pessoa: { f_nome: "João Silva" },
	},
	{
		id: 2,
		createdAt: "2024-01-14T09:00:00Z",
		updatedAt: "2024-01-15T11:00:00Z",
		f_titulo: "Negociação Empresa ABC",
		f_valor_mensal: 15000.5,
		f_status: "Negociando",
		f_substatus: "Em análise de documentação",
		f_vendedor: { nickname: "vendedor2" },
		f_negociacao_pessoa_juridica: { f_razao_social: "ABC Ltda" },
	},
	{
		id: 3,
		createdAt: "2024-01-13T14:30:00Z",
		updatedAt: "2024-01-14T16:45:00Z",
		f_titulo: "Negociação Maria Santos",
		f_valor_mensal: 3200.0,
		f_status: "Assinatura",
		f_substatus: "Aguardando assinatura digital",
		f_vendedor: { nickname: "vendedor1" },
		f_pessoa: { f_nome: "Maria Santos" },
	},
	{
		id: 4,
		createdAt: "2024-01-12T08:00:00Z",
		updatedAt: "2024-01-13T10:30:00Z",
		f_titulo: "Negociação XYZ Corp",
		f_valor_mensal: 50000.0,
		f_status: "Auditoria",
		f_substatus: "Verificação cadastral em andamento",
		f_vendedor: { nickname: "vendedor3" },
		f_negociacao_pessoa_juridica: { f_razao_social: "XYZ Corporation" },
	},
	{
		id: 5,
		createdAt: "2024-01-10T11:00:00Z",
		updatedAt: "2024-01-12T09:00:00Z",
		f_titulo: "Negociação Pedro Costa",
		f_valor_mensal: 1800.75,
		f_status: "Concluído",
		f_substatus: "Contrato assinado",
		f_vendedor: { nickname: "vendedor1" },
		f_pessoa: { f_nome: "Pedro Costa" },
	},
];

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

function formatCurrency(value: number | undefined): string {
	if (value === undefined) return "-";
	return value.toLocaleString("pt-BR", {
		style: "currency",
		currency: "BRL",
	});
}

function StatusBadge({ status }: { status: string }) {
	const style = statusBadgeStyles[status] || statusBadgeStyles.Arquivado;
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

export function NegociacoesList() {
	const [pagination, setPagination] = useState({
		pageIndex: 0,
		pageSize: 20,
	});

	const data = mockData;
	const totalCount = mockData.length;

	const handleRefresh = () => {
		// Refresh action stub
	};

	const handleExport = () => {
		// Export action stub
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
