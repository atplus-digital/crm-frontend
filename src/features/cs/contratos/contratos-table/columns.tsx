import type { ColumnDef } from "@tanstack/react-table";
import { ViewActionButton } from "#/components/table/columns/view-action-button";
import { DataTableColumnHeader } from "#/components/table/data-table-column-header";
import {
	ContratoStatusBadge,
	InternetStatusBadge,
} from "#/features/cs/contratos/contrato-status-badge";
import type { ContratoWithCliente } from "#/features/cs/contratos/contratos-types";
import { CLIENTECONTRATO_FIELD_LABELS } from "#/generated/types/d_db_ixcsoft/cliente-contrato/labels";
import { formatDatePtBR } from "#/lib/utils";
import type { NestedKeyOf } from "#/types/global";

type ContratoNestedKey = NestedKeyOf<ContratoWithCliente>;
type ContratoVirtualColumnKey = "cliente" | "cpf_cnpj";
type ContratoColumnKey = ContratoNestedKey | ContratoVirtualColumnKey;

export const CONTRATO_COLUMN_LABELS: Partial<
	Record<ContratoColumnKey, string>
> = {
	...CLIENTECONTRATO_FIELD_LABELS,
	cliente: "Cliente",
	cpf_cnpj: "CPF/CNPJ",
	id: "ID Contrato",
	id_cliente: "ID Cliente",
	ultima_atualizacao: "Ultima Atualização",
	status: "Status Contrato",
	status_internet: "Status Serviço",
	contrato: "Descrição",
	data_cadastro_sistema: "Criado em",
};

function getContratoColumnLabel(field: ContratoColumnKey): string {
	return CONTRATO_COLUMN_LABELS[field] ?? String(field);
}

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
				<DataTableColumnHeader
					column={column}
					title={getContratoColumnLabel("id_cliente")}
				/>
			),
		},
		{
			accessorKey: "id",
			header: ({ column }) => (
				<DataTableColumnHeader
					column={column}
					title={getContratoColumnLabel("id")}
				/>
			),
		},
		{
			accessorKey: "ultima_atualizacao",
			header: ({ column }) => (
				<DataTableColumnHeader
					column={column}
					title={getContratoColumnLabel("ultima_atualizacao")}
				/>
			),
			cell: ({ row }) => formatDatePtBR(row.original.ultima_atualizacao),
		},
		{
			accessorKey: "status",
			header: ({ column }) => (
				<DataTableColumnHeader
					column={column}
					title={getContratoColumnLabel("status")}
				/>
			),
			cell: ({ row }) => <ContratoStatusBadge status={row.original.status} />,
		},
		{
			accessorKey: "status_internet",
			header: ({ column }) => (
				<DataTableColumnHeader
					column={column}
					title={getContratoColumnLabel("status_internet")}
				/>
			),
			cell: ({ row }) => (
				<InternetStatusBadge status={row.original.status_internet} />
			),
		},

		{
			id: "cliente",
			maxSize: 320,
			header: ({ column }) => (
				<DataTableColumnHeader
					column={column}
					title={getContratoColumnLabel("f_nc_cliente")}
				/>
			),
			cell: ({ row }) => <span>{row.original.f_nc_cliente?.razao ?? "—"}</span>,
		},
		{
			id: "cpf_cnpj",
			maxSize: 190,
			header: ({ column }) => (
				<DataTableColumnHeader
					column={column}
					title={getContratoColumnLabel("cpf_cnpj")}
				/>
			),
			cell: ({ row }) => row.original.f_nc_cliente?.cnpj_cpf ?? "—",
		},
		{
			accessorKey: "contrato",
			maxSize: 420,
			header: ({ column }) => (
				<DataTableColumnHeader
					column={column}
					title={getContratoColumnLabel("contrato")}
				/>
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
				<DataTableColumnHeader
					column={column}
					title={getContratoColumnLabel("data_cadastro_sistema")}
				/>
			),
			cell: ({ row }) => formatDatePtBR(row.original.data),
		},
	];
}
