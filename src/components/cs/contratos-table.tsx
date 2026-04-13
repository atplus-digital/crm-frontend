import type {
	ColumnDef,
	OnChangeFn,
	PaginationState,
	SortingState,
} from "@tanstack/react-table";
import { ExternalLink } from "lucide-react";
import { useCallback, useMemo } from "react";

import {
	ContratoStatusBadge,
	InternetStatusBadge,
} from "#/components/cs/contrato-status-badge";
import { Button } from "#/components/ui/button";
import { DataTable, useDataTable } from "#/components/ui/data-table";
import { DataTableColumnHeader } from "#/components/ui/data-table-column-header";
import { DataTablePagination } from "#/components/ui/data-table-pagination";
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

function formatDatePtBR(dateStr: string): string {
	if (!dateStr || dateStr.startsWith("0000")) return "—";
	return new Intl.DateTimeFormat("pt-BR", {
		day: "2-digit",
		month: "2-digit",
		year: "numeric",
		hour: "2-digit",
		minute: "2-digit",
	}).format(new Date(dateStr));
}

function getContractDetailUrl(id: number): string {
	return `/cs/contratos/${id}`;
}

function getColumns(): ColumnDef<ContratoWithCliente, unknown>[] {
	return [
		{
			id: "acoes",
			header: "Ações",
			cell: ({ row }) => (
				<Button variant="ghost" size="sm" asChild>
					<a
						href={getContractDetailUrl(row.original.id)}
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

	const onSortingChange = useCallback(
		(updater: SortingState | ((old: SortingState) => SortingState)) => {
			const next = typeof updater === "function" ? updater(sorting) : updater;
			const first = next[0];
			if (!first) {
				onSort("");
				return;
			}
			onSort(first.desc ? `-${first.id}` : first.id);
		},
		[sorting, onSort],
	);

	const paginationState: PaginationState = {
		pageIndex: pagination.page - 1,
		pageSize: pagination.pageSize,
	};

	const handlePaginationChange: OnChangeFn<PaginationState> = (updater) => {
		const newPagination =
			typeof updater === "function" ? updater(paginationState) : updater;
		onPageChange(newPagination.pageIndex + 1);
		onPageSizeChange(newPagination.pageSize);
	};

	const columns = useMemo(() => getColumns(), []);

	const table = useDataTable({
		columns,
		data: contratos,
		pageCount: pagination.totalPages,
		pagination: paginationState,
		onPaginationChange: handlePaginationChange,
		sorting,
		onSortingChange,
	});

	return (
		<div className="flex flex-col gap-4">
			<DataTable
				table={table}
				isLoading={isLoading}
				emptyMessage="Nenhum contrato encontrado"
			/>
			<DataTablePagination table={table} total={pagination.total} />
		</div>
	);
}
