import type { ColumnDef, SortingState } from "@tanstack/react-table";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { useMemo } from "react";
import { Link } from "react-router";
import { DataTableColumnHeader } from "#/components/table/data-table-column-header";
import { DataTableContainer } from "#/components/table/data-table-container";
import { Button } from "#/components/ui/button";
import {
	ContratoStatusBadge,
	InternetStatusBadge,
} from "#/features/cs/contratos/contrato-status-badge";
import {
	type ContratosTableFilters,
	DEFAULT_CONTRATOS_TABLE_FILTERS,
	toContratoFilters,
} from "#/features/cs/contratos/contratos-filters";
import type {
	ContratoFilters,
	ContratoWithCliente,
} from "#/features/cs/contratos/contratos-types";
import { formatDatePtBR } from "#/lib/utils";
import { buildRoute } from "#/routes/route-paths";

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
	pagination: PaginationInfo;
	onPageChange: (page: number) => void;
	onPageSizeChange: (pageSize: number) => void;
	onFilterChange: (filters: ContratoFilters) => void;
	children?: ReactNode;
}

function getColumns(): ColumnDef<ContratoWithCliente, unknown>[] {
	return [
		{
			id: "acoes",
			header: "Ações",
			cell: ({ row }) => (
				<Button variant="ghost" size="sm" asChild>
					<Link
						to={buildRoute("cs_contratos_id", { id: row.original.id })}
						onClick={(e) => e.stopPropagation()}
					>
						<ArrowRight className="size-4" />
						Ver
					</Link>
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
	pagination,
	onPageChange,
	onPageSizeChange,
	onFilterChange,
	children,
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
		<DataTableContainer
			columns={columns}
			data={contratos}
			total={pagination.total}
			totalPages={pagination.totalPages}
			emptyMessage="Nenhum contrato encontrado"
			onPageChange={onPageChange}
			onPageSizeChange={onPageSizeChange}
			initialPage={pagination.page}
			initialPageSize={pagination.pageSize}
			initialFilters={DEFAULT_CONTRATOS_TABLE_FILTERS}
			onFiltersApply={(filters: ContratosTableFilters) => {
				onFilterChange(toContratoFilters(filters));
			}}
			onFiltersClear={() => {
				onFilterChange({});
			}}
			sorting={sorting.length > 0 ? sorting : undefined}
			onSortingChange={onSortingChange}
		>
			{children}
		</DataTableContainer>
	);
}
