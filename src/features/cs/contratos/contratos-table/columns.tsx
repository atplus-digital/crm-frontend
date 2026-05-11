import type { ColumnDef } from "@tanstack/react-table";
import { ViewActionButton } from "#/components/table/columns/view-action-button";
import { DataTableColumnHeader } from "#/components/table/data-table-column-header";
import {
	ContratoStatusBadge,
	InternetStatusBadge,
} from "#/features/cs/contratos/contrato-status-badge";
import type { ContratoWithCliente } from "#/features/cs/contratos/contratos-types";
import { formatDatePtBR } from "#/lib/utils";

export function getColumns(): ColumnDef<ContratoWithCliente, unknown>[] {
	return [
		{
			id: "acoes",
			header: "Ações",
			cell: ({ row }) => (
				<ViewActionButton
					routeKey="cs_contratos_id"
					params={{ id: row.original.id }}
				/>
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
		{
			accessorKey: "ultima_atualizacao",
			header: ({ column }) => (
				<DataTableColumnHeader column={column} title="Ultima Atualização" />
			),
			cell: ({ row }) => formatDatePtBR(row.original.ultima_atualizacao),
		},
	];
}
