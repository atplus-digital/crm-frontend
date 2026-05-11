import type { ColumnDef } from "@tanstack/react-table";
import { useMemo } from "react";
import { StatusBadge } from "#/components/badges/status-badge";
import { ViewActionButton } from "#/components/table/columns/view-action-button";
import { DataTableColumnHeader } from "#/components/table/data-table-column-header";
import { DataTableContainer } from "#/components/table/data-table-container";
import type { CrmTrocaTitularidadeWithRelations } from "#/features/cs/troca-titularidade/troca-titularidade-hooks";
import { TROCA_STATUS_VARIANTS } from "#/features/cs/troca-titularidade/troca-titularidade-types";
import { CRMTROCATITULARIDADE_STATUS_LABELS } from "#/generated/types/nocobase/crm-troca-titularidade";
import { useListSorting } from "#/hooks/use-list-sorting";
import { formatDatePtBR } from "#/lib/utils";

interface PaginationInfo {
	page: number;
	pageSize: number;
	total: number;
	totalPages: number;
}

interface TrocaTitularidadeListProps {
	trocasTitularidade: CrmTrocaTitularidadeWithRelations[];
	isLoading?: boolean;
	hasInitialQueryData?: boolean;
	sort: string[];
	onSort: (field: string) => void;
	pagination: PaginationInfo;
	onPageChange: (page: number) => void;
	onPageSizeChange: (pageSize: number) => void;
}

function getColumns(): ColumnDef<CrmTrocaTitularidadeWithRelations, unknown>[] {
	return [
		{
			id: "acoes",
			header: "Ações",
			cell: ({ row }) => (
				<ViewActionButton
					routeKey="cs_troca_de_titularidade_id"
					params={{ id: row.original.id }}
				/>
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
					labels={CRMTROCATITULARIDADE_STATUS_LABELS}
					variants={TROCA_STATUS_VARIANTS}
					defaultVariant="secondary"
				/>
			),
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
	isLoading,
	hasInitialQueryData,
	sort,
	onSort,
	pagination,
	onPageChange,
	onPageSizeChange,
}: TrocaTitularidadeListProps) {
	const { sorting, onSortingChange } = useListSorting({ sort, onSort });

	const columns = useMemo(() => getColumns(), []);

	return (
		<DataTableContainer
			columns={columns}
			data={trocasTitularidade}
			isLoading={isLoading}
			hasInitialQueryData={hasInitialQueryData}
			total={pagination.total}
			totalPages={pagination.totalPages}
			emptyMessage="Nenhuma transferência de titularidade encontrada"
			onPageChange={onPageChange}
			onPageSizeChange={onPageSizeChange}
			initialPage={pagination.page}
			initialPageSize={pagination.pageSize}
			sorting={sorting.length > 0 ? sorting : undefined}
			onSortingChange={onSortingChange}
		/>
	);
}
