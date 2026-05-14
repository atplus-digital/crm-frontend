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
			maxSize: 320,
			header: "Cliente",
			cell: ({ row }) => (
				<span className="block max-w-80 truncate">
					{row.original.f_nc_cliente?.razao ?? "—"}
				</span>
			),
		},
		{
			id: "cpf_cnpj",
			maxSize: 190,
			header: "CPF/CNPJ",
			cell: ({ row }) => row.original.f_nc_cliente?.cnpj_cpf ?? "—",
		},
		{
			accessorKey: "contrato",
			maxSize: 420,
			header: ({ column }) => (
				<DataTableColumnHeader column={column} title="Descrição" />
			),
			cell: ({ row }) => (
				<span className="block max-w-96 truncate">
					{row.original.contrato ?? "—"}
				</span>
			),
		},
		{
			accessorKey: "data_cadastro_sistema",
			header: ({ column }) => (
				<DataTableColumnHeader column={column} title="Criado em" />
			),
			cell: ({ row }) => formatDatePtBR(row.original.data),
		},
	];
}
