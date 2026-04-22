import type { ColumnDef, SortingState } from "@tanstack/react-table";
import { ArrowRight } from "lucide-react";
import { useMemo } from "react";
import { Link } from "react-router";
import { StatusBadge } from "#/components/badges/status-badge";
import { DataTableColumnHeader } from "#/components/table/data-table-column-header";
import { DataTableContainer } from "#/components/table/data-table-container";
import { Button } from "#/components/ui/button";
import type { TrocaEnderecoWithRelations } from "#/features/cs/troca-de-endereco/troca-endereco-hooks";
import { TROCAENDERECO_STATUS_LABELS } from "#/generated/nocobase/troca-endereco";
import { formatDatePtBR } from "#/lib/utils";
import { buildRoute } from "#/routes/route-paths";

interface PaginationInfo {
	page: number;
	pageSize: number;
	total: number;
	totalPages: number;
}

interface TrocaEnderecoListProps {
	trocasEndereco: TrocaEnderecoWithRelations[];
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
				<Button variant="ghost" size="sm" asChild>
					<Link
						to={buildRoute("cs_troca_de_endereco_id", {
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
	sort,
	onSort,
	pagination,
	onPageChange,
	onPageSizeChange,
}: TrocaEnderecoListProps) {
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
			data={trocasEndereco}
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
