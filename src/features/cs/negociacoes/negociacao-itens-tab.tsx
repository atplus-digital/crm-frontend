import type { ColumnDef } from "@tanstack/react-table";
import { DataTable, useDataTable } from "#/components/table/data-table";
import {
	detailHeader,
	detailLongTextCell,
	detailMoneyCell,
} from "#/components/table/detail-table-presets";
import { ContractTabWrapper } from "#/features/cs/contract-tab-wrapper";
import { useNegociacaoItens } from "#/features/cs/negociacoes/negociacoes-hooks";
import type { NegociacoesItens } from "#/generated/nocobase/index";
import { formatCurrency } from "#/lib/utils";
import { RelacaoBadge, TipoProdutoBadge } from "./negociacao-badges";

const ITENS_COLUMNS = [
	"Produto",
	"Tipo",
	"Mensalidade c/ Desconto",
	"Mensalidade s/ Desconto",
	"Relação",
	"Observações",
];

const itensTableColumns: ColumnDef<NegociacoesItens, unknown>[] = [
	{
		accessorKey: "f_nome_produto",
		header: "Produto",
		cell: ({ row }) => detailLongTextCell(row.original.f_nome_produto),
	},
	{
		id: "f_tipo_produto",
		header: "Tipo",
		cell: ({ row }) => <TipoProdutoBadge tipo={row.original.f_tipo_produto} />,
	},
	{
		accessorKey: "f_mensalidade_com_desconto",
		header: () => detailHeader("Mensalidade c/ Desconto", "right"),
		cell: ({ row }) =>
			detailMoneyCell(row.original.f_mensalidade_com_desconto, formatCurrency),
	},
	{
		accessorKey: "f_mensalidade_sem_desconto",
		header: () => detailHeader("Mensalidade s/ Desconto", "right"),
		cell: ({ row }) =>
			detailMoneyCell(row.original.f_mensalidade_sem_desconto, formatCurrency),
	},
	{
		id: "f_relacao",
		header: "Relação",
		cell: ({ row }) => <RelacaoBadge relacao={row.original.f_relacao} />,
	},
	{
		accessorKey: "f_observacoes",
		header: "Observações",
		cell: ({ row }) => detailLongTextCell(row.original.f_observacoes),
	},
];

export function NegociacaoItensTab({ negociacaoId }: { negociacaoId: number }) {
	const { data: response, isLoading, error } = useNegociacaoItens(negociacaoId);
	const itens = response?.data ?? [];
	const table = useDataTable({
		columns: itensTableColumns,
		data: itens,
	});

	return (
		<ContractTabWrapper
			title="Itens da Negociação"
			isLoading={isLoading}
			error={error}
			errorMessage="Erro ao carregar itens"
			isEmpty={itens.length === 0}
			emptyMessage="Nenhum item encontrado"
			emptyColumns={ITENS_COLUMNS}
		>
			<DataTable table={table} />
		</ContractTabWrapper>
	);
}
