import type { ColumnDef, SortingState } from "@tanstack/react-table";
import { ArrowRight } from "lucide-react";
import { useMemo } from "react";
import { Link } from "react-router";
import { StatusBadge } from "#/components/badges/status-badge";
import { DataTableColumnHeader } from "#/components/table/data-table-column-header";
import { DataTableContainer } from "#/components/table/data-table-container";
import { Button } from "#/components/ui/button";
import type { SuspensaoContratoWithRelations } from "#/features/cs/suspensao-de-contrato/suspensao-de-contrato-types";
import {
	SUSPENSAO_CONTRATO_STATUS_LABELS,
	SUSPENSAO_CONTRATO_STATUS_VARIANTS,
} from "#/features/cs/suspensao-de-contrato/suspensao-de-contrato-types";
import { formatDatePtBR } from "#/lib/utils";
import { buildRoute } from "#/routes/route-paths";

interface PaginationInfo {
	page: number;
	pageSize: number;
	total: number;
	totalPages: number;
}

interface SuspensaoContratoListProps {
	suspensaoContratos: SuspensaoContratoWithRelations[];
	sort: string[];
	onSort: (field: string) => void;
	pagination: PaginationInfo;
	onPageChange: (page: number) => void;
	onPageSizeChange: (pageSize: number) => void;
}

function getColumns(): ColumnDef<SuspensaoContratoWithRelations, unknown>[] {
	return [
		{
			id: "acoes",
			header: "Ações",
			cell: ({ row }) => (
				<Button variant="ghost" size="sm" asChild>
					<Link
						to={buildRoute("cs_suspensao_de_contrato_id", {
							id: row.original.id,
						})}
						onClick={(e) => e.stopPropagation()}
					>
						<ArrowRight className="size-4" />
						Ver detalhes
					</Link>
				</Button>
			),
		},
		{
			accessorKey: "createdAt",
			header: ({ column }) => (
				<DataTableColumnHeader column={column} title="Criado em" />
			),
			cell: ({ row }) => formatDatePtBR(row.original.createdAt),
		},
		{
			accessorKey: "updatedAt",
			header: ({ column }) => (
				<DataTableColumnHeader column={column} title="Última atualização" />
			),
			cell: ({ row }) => formatDatePtBR(row.original.updatedAt),
		},
		{
			accessorKey: "f_id_contrato",
			header: ({ column }) => (
				<DataTableColumnHeader column={column} title="ID Contrato" />
			),
		},
		{
			accessorKey: "f_titulo",
			header: ({ column }) => (
				<DataTableColumnHeader column={column} title="Título" />
			),
		},
		{
			accessorKey: "f_dias_suspensao",
			header: ({ column }) => (
				<DataTableColumnHeader column={column} title="Dias Suspenso" />
			),
		},
		{
			id: "status",
			header: ({ column }) => (
				<DataTableColumnHeader column={column} title="Status" />
			),
			cell: ({ row }) => (
				<StatusBadge
					value={row.original.f_status}
					labels={SUSPENSAO_CONTRATO_STATUS_LABELS}
					variants={SUSPENSAO_CONTRATO_STATUS_VARIANTS}
					defaultVariant="secondary"
				/>
			),
		},
		{
			id: "criadoPor",
			header: "Criado por",
			cell: ({ row }) => row.original.createdBy?.nickname ?? "—",
		},
	];
}

export function SuspensaoContratoList({
	suspensaoContratos,
	sort,
	onSort,
	pagination,
	onPageChange,
	onPageSizeChange,
}: SuspensaoContratoListProps) {
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
		<DataTableContainer
			columns={columns}
			data={suspensaoContratos}
			total={pagination.total}
			totalPages={pagination.totalPages}
			emptyMessage="Nenhuma suspensão de contrato encontrada"
			onPageChange={onPageChange}
			onPageSizeChange={onPageSizeChange}
			initialPage={pagination.page}
			initialPageSize={pagination.pageSize}
			sorting={sorting.length > 0 ? sorting : undefined}
			onSortingChange={onSortingChange}
		/>
	);
}
