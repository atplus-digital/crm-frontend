import type { ColumnDef, SortingState } from "@tanstack/react-table";
import { ArrowRight } from "lucide-react";
import { useMemo } from "react";
import { Link } from "react-router";
import { DataTableColumnHeader } from "#/components/table/data-table-column-header";
import { DataTableWithPagination } from "#/components/table/data-table-with-pagination";
import { Badge } from "#/components/ui/badge";
import { Button } from "#/components/ui/button";
import { CRMTROCATITULARIDADE_STATUS_LABELS } from "#/generated/nocobase/crm-troca-titularidade";
import { formatDatePtBR } from "#/lib/utils";
import type { CrmTrocaTitularidadeWithRelations } from "#/repositories/troca-titularidade-repository";

interface PaginationInfo {
	page: number;
	pageSize: number;
	total: number;
	totalPages: number;
}

interface TrocaTitularidadeListProps {
	trocasTitularidade: CrmTrocaTitularidadeWithRelations[];
	sort: string[];
	onSort: (field: string) => void;
	pagination: PaginationInfo;
	onPageChange: (page: number) => void;
	onPageSizeChange: (pageSize: number) => void;
}

function getStatusBadge(status: string) {
	const statusLabels: Record<string, string> =
		CRMTROCATITULARIDADE_STATUS_LABELS;

	let variant: "default" | "secondary" | "destructive" | "outline" | "success" =
		"default";

	switch (status) {
		case "0": // Novo
			variant = "secondary";
			break;
		case "1": // Aguardando assinatura
			variant = "default";
			break;
		case "2": // Aguardando auditoria
			variant = "outline";
			break;
		case "3": // Concluído
			variant = "default";
			break;
		case "9": // Cancelado
			variant = "destructive";
			break;
		default:
			variant = "default";
	}

	return <Badge variant={variant}>{statusLabels[status] || status}</Badge>;
}

function getColumns(): ColumnDef<CrmTrocaTitularidadeWithRelations, unknown>[] {
	return [
		{
			id: "acoes",
			header: "Ações",
			cell: ({ row }) => (
				<Button variant="ghost" size="sm" asChild>
					<Link
						to={`/cs/troca-de-titularidade/${row.original.id}`}
						onClick={(e) => e.stopPropagation()}
					>
						<ArrowRight className="size-4" />
						Ver detalhes
					</Link>
				</Button>
			),
		},
		{
			id: "status",
			header: ({ column }) => (
				<DataTableColumnHeader column={column} title="Status" />
			),
			cell: ({ row }) => getStatusBadge(row.original.f_status),
		},
		{
			id: "cedente",
			header: "Cedente",
			cell: ({ row }) => {
				const pessoa = row.original.f_pessoa_pf;
				const empresa = row.original.f_pessoa_pj;

				if (empresa) {
					return `${empresa.f_razao_social} (${row.original.f_cedente_documento})`;
				} else if (pessoa) {
					return `${pessoa.f_nome} (${row.original.f_cedente_documento})`;
				}
				return `${row.original.f_cedente} (${row.original.f_cedente_documento})`;
			},
		},
		{
			id: "cessionario",
			header: "Cessionário",
			cell: ({ row }) => {
				const pessoa = row.original.f_pessoa_pf;
				const empresa = row.original.f_pessoa_pj;

				if (empresa) {
					return `${empresa.f_razao_social} (${row.original.f_cessionario_documento})`;
				} else if (pessoa) {
					return `${pessoa.f_nome} (${row.original.f_cessionario_documento})`;
				}
				return `${row.original.f_cessionario} (${row.original.f_cessionario_documento})`;
			},
		},
		{
			accessorKey: "f_id_contrato",
			header: ({ column }) => (
				<DataTableColumnHeader column={column} title="Contrato" />
			),
		},
		{
			id: "cidade_uf",
			header: "Cidade/UF",
			cell: ({ row }) => `${row.original.f_cidade}/${row.original.f_estado}`,
		},
		{
			id: "vendedor",
			header: "Vendedor",
			cell: ({ row }) => row.original.f_vendedor?.nickname ?? "—",
		},
		{
			accessorKey: "updatedAt",
			header: ({ column }) => (
				<DataTableColumnHeader column={column} title="Data Atualização" />
			),
			cell: ({ row }) => formatDatePtBR(row.original.updatedAt),
		},
	];
}

export function TrocaTitularidadeList({
	trocasTitularidade,
	sort,
	onSort,
	pagination,
	onPageChange,
	onPageSizeChange,
}: TrocaTitularidadeListProps) {
	const sorting = useMemo<SortingState>(() => {
		const field = sort[0];
		if (!field) return [];
		const isDesc = field.startsWith("-");
		const id = isDesc ? field.slice(1) : field;
		return [{ id, desc: isDesc }];
	}, [sort]);

	const onSortingChange = (
		updater: SortingState | ((old: SortingState) => SortingState),
	) => {
		const next = typeof updater === "function" ? updater(sorting) : updater;
		const first = next[0];
		if (!first) {
			onSort("");
			return;
		}
		onSort(first.desc ? `-${first.id}` : first.id);
	};

	const columns = useMemo(() => getColumns(), []);

	return (
		<DataTableWithPagination
			columns={columns}
			data={trocasTitularidade}
			total={pagination.total}
			totalPages={pagination.totalPages}
			emptyMessage="Nenhuma transferência de titularidade encontrada"
			onPageChange={onPageChange}
			onPageSizeChange={onPageSizeChange}
			sorting={sorting.length > 0 ? sorting : undefined}
			onSortingChange={onSortingChange}
		/>
	);
}
