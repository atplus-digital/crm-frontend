import type { ColumnDef, SortingState } from "@tanstack/react-table";
import { ExternalLink } from "lucide-react";
import { useMemo } from "react";

import {
	ContratoStatusBadge,
	InternetStatusBadge,
} from "#/components/cs/contrato-status-badge";
import { Button } from "#/components/ui/button";
import { DataTableColumnHeader } from "#/components/ui/data-table-column-header";
import { DataTableWithPagination } from "#/components/ui/data-table-with-pagination";
import { formatDatePtBR } from "#/lib/utils";
import type { ContratoWithCliente } from "#/modules/cs/contratos-types";

interface PaginationInfo {
	page: number;
	pageSize: number;
	total: number;
	totalPages: number;
}

interface ContratosTableProps {
	contratos: ContratoWithCliente[];
	sort: string[];
	onSort: (field: string) => void;
	isLoading: boolean;
	pagination: PaginationInfo;
	onPageChange: (page: number) => void;
	onPageSizeChange: (pageSize: number) => void;
}

function getColumns(): ColumnDef<ContratoWithCliente, unknown>[] {
	return [
		{
			id: "acoes",
			header: "Ações",
			cell: ({ row }) => (
				<Button variant="ghost" size="sm" asChild>
					<a
						href={`/cs/contratos/${row.original.id}`}
						target="_blank"
						rel="noreferrer"
						onClick={(e) => e.stopPropagation()}
					>
						<ExternalLink className="size-4" />
						Ver
					</a>
				</Button>
			),
		},
		{
			accessorKey: "id_cliente",
			header: ({ column }) => (
				<DataTableColumnHeader column={column} title="ID Cliente" />
			),
		},
		{
			accessorKey: "id",
			header: ({ column }) => (
				<DataTableColumnHeader column={column} title="ID Contrato" />
			),
		},
		{
			accessorKey: "ultima_atualizacao",
			header: ({ column }) => (
				<DataTableColumnHeader column={column} title="Ultima Atualização" />
			),
			cell: ({ row }) => formatDatePtBR(row.original.ultima_atualizacao),
		},
		{
			accessorKey: "status",
			header: ({ column }) => (
				<DataTableColumnHeader column={column} title="Status Contrato" />
			),
			cell: ({ row }) => <ContratoStatusBadge status={row.original.status} />,
		},
		{
			accessorKey: "status_internet",
			header: ({ column }) => (
				<DataTableColumnHeader column={column} title="Status Serviço" />
			),
			cell: ({ row }) => (
				<InternetStatusBadge status={row.original.status_internet} />
			),
		},
		{
			id: "cliente",
			header: "Cliente",
			cell: ({ row }) => row.original.f_nc_cliente?.razao ?? "—",
		},
		{
			id: "cpf_cnpj",
			header: "CPF/CNPJ",
			cell: ({ row }) => row.original.f_nc_cliente?.cnpj_cpf ?? "—",
		},
		{
			accessorKey: "contrato",
			header: ({ column }) => (
				<DataTableColumnHeader column={column} title="Descrição" />
			),
		},
	];
}

export function ContratosTable({
	contratos,
	sort,
	onSort,
	isLoading,
	pagination,
	onPageChange,
	onPageSizeChange,
}: ContratosTableProps) {
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
			data={contratos}
			isLoading={isLoading}
			total={pagination.total}
			totalPages={pagination.totalPages}
			emptyMessage="Nenhum contrato encontrado"
			onPageChange={onPageChange}
			onPageSizeChange={onPageSizeChange}
			sorting={sorting.length > 0 ? sorting : undefined}
			onSortingChange={onSortingChange}
		/>
	);
}
