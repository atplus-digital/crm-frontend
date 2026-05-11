import type { ColumnDef } from "@tanstack/react-table";
import { useMemo } from "react";
import { StatusBadge } from "#/components/badges/status-badge";
import { ViewActionButton } from "#/components/table/columns/view-action-button";
import { DataTableColumnHeader } from "#/components/table/data-table-column-header";
import { DataTableContainer } from "#/components/table/data-table-container";
import type { TrocaEnderecoWithRelations } from "#/features/cs/troca-de-endereco/troca-endereco-hooks";
import { TROCAENDERECO_STATUS_LABELS } from "#/generated/types/nocobase/troca-endereco";
import { useListSorting } from "#/hooks/use-list-sorting";
import { formatDatePtBR } from "#/lib/utils";

interface PaginationInfo {
	page: number;
	pageSize: number;
	total: number;
	totalPages: number;
}

interface TrocaEnderecoListProps {
	trocasEndereco: TrocaEnderecoWithRelations[];
	isLoading?: boolean;
	hasInitialQueryData?: boolean;
	sort: string[];
	onSort: (field: string) => void;
	pagination: PaginationInfo;
	onPageChange: (page: number) => void;
	onPageSizeChange: (pageSize: number) => void;
}

function getColumns(): ColumnDef<TrocaEnderecoWithRelations, unknown>[] {
	return [
		{
			id: "acoes",
			header: "Ações",
			cell: ({ row }) => (
				<ViewActionButton
					routeKey="cs_troca_de_endereco_id"
					params={{ id: row.original.id }}
				/>
			),
		},
		{
			accessorKey: "id",
			header: ({ column }) => (
				<DataTableColumnHeader column={column} title="ID" />
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
			accessorKey: "f_cliente",
			header: ({ column }) => (
				<DataTableColumnHeader column={column} title="Cliente" />
			),
		},
		{
			accessorKey: "f_id_contrato",
			header: ({ column }) => (
				<DataTableColumnHeader column={column} title="ID Contrato" />
			),
		},
		{
			accessorKey: "f_id_atendimento",
			header: ({ column }) => (
				<DataTableColumnHeader column={column} title="ID Atendimento" />
			),
		},
		{
			id: "status",
			header: ({ column }) => (
				<DataTableColumnHeader column={column} title="Status" />
			),
			cell: ({ row }) => {
				const displayLabel =
					TROCAENDERECO_STATUS_LABELS[row.original.f_status] ||
					row.original.f_status;
				return (
					<StatusBadge
						value={displayLabel}
						labels={TROCAENDERECO_STATUS_LABELS}
						colorClasses={{
							[displayLabel]:
								"bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400",
						}}
						defaultClass="bg-gray-100 text-gray-800 dark:bg-gray-800/30 dark:text-gray-400"
						variant="inline"
						defaultVariant="secondary"
					/>
				);
			},
		},
		{
			id: "criado_por",
			header: "Criado por",
			cell: ({ row }) => row.original.createdBy?.nickname ?? "—",
		},
	];
}

export function TrocaEnderecoList({
	trocasEndereco,
	isLoading,
	hasInitialQueryData,
	sort,
	onSort,
	pagination,
	onPageChange,
	onPageSizeChange,
}: TrocaEnderecoListProps) {
	const { sorting, onSortingChange } = useListSorting({ sort, onSort });

	const columns = useMemo(() => getColumns(), []);

	return (
		<DataTableContainer
			columns={columns}
			data={trocasEndereco}
			isLoading={isLoading}
			hasInitialQueryData={hasInitialQueryData}
			total={pagination.total}
			totalPages={pagination.totalPages}
			emptyMessage="Nenhuma troca de endereço encontrada"
			onPageChange={onPageChange}
			onPageSizeChange={onPageSizeChange}
			initialPage={pagination.page}
			initialPageSize={pagination.pageSize}
			sorting={sorting.length > 0 ? sorting : undefined}
			onSortingChange={onSortingChange}
		/>
	);
}
