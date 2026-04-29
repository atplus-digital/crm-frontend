import type { ColumnDef } from "@tanstack/react-table";
import { StatusBadge } from "#/components/badges/status-badge";
import { BasicTableCard } from "#/components/basic-table-card";
import { DataTable, useDataTable } from "#/components/table/data-table";
import {
	detailDateCell,
	detailLongTextCell,
	detailShortTextCell,
} from "#/components/table/detail-table-presets";
import { ContractTabWrapper } from "#/features/cs/components/contract-tab-wrapper";
import { useContratoRegistros } from "#/features/cs/contratos/contratos-hooks";
import type { RegistroContato } from "#/features/cs/contratos/contratos-types";
import {
	REGISTROSDECONTATO_CATEGORIA_LABELS,
	REGISTROSDECONTATO_NOTATECNICO_LABELS,
	REGISTROSDECONTATO_NOTAVENDAS_LABELS,
} from "#/generated/nocobase/registros-de-contato";
import { formatDatePtBR } from "#/lib/utils";

function formatCategoria(categoria: RegistroContato["categoria"]): string {
	return REGISTROSDECONTATO_CATEGORIA_LABELS[categoria] ?? String(categoria);
}

function formatNota(nota: RegistroContato["nota_vendas"]): string {
	return REGISTROSDECONTATO_NOTAVENDAS_LABELS[nota] ?? String(nota);
}

function formatNotaTecnico(nota: RegistroContato["nota_tecnico"]): string {
	return REGISTROSDECONTATO_NOTATECNICO_LABELS[nota] ?? String(nota);
}

const REGISTROS_COLUMNS = [
	"Categoria",
	"Motivo do Contato",
	"Nota Vendas",
	"Nota Técnico",
	"Há Pendência?",
	"Criado em",
	"Criado por",
];

const registrosTableColumns: ColumnDef<RegistroContato, unknown>[] = [
	{
		accessorKey: "categoria",
		header: "Categoria",
		cell: ({ row }) =>
			detailShortTextCell(formatCategoria(row.original.categoria)),
	},
	{
		accessorKey: "motivo_contato",
		header: "Motivo do Contato",
		cell: ({ row }) => detailLongTextCell(row.original.motivo_contato),
	},
	{
		accessorKey: "nota_vendas",
		header: "Nota Vendas",
		cell: ({ row }) =>
			detailShortTextCell(formatNota(row.original.nota_vendas)),
	},
	{
		accessorKey: "nota_tecnico",
		header: "Nota Técnico",
		cell: ({ row }) =>
			detailShortTextCell(formatNotaTecnico(row.original.nota_tecnico)),
	},
	{
		id: "pendencia",
		header: "Há Pendência?",
		cell: ({ row }) => (
			<StatusBadge
				value={String(row.original.pendencia)}
				labels={{ true: "Sim", false: "Não" }}
				variants={{ true: "outline", false: "default" }}
			/>
		),
	},
	{
		accessorKey: "data_criacao",
		header: "Criado em",
		cell: ({ row }) =>
			detailDateCell(row.original.data_criacao, formatDatePtBR),
	},
	{
		accessorKey: "criado_por",
		header: "Criado por",
		cell: ({ row }) => detailShortTextCell(row.original.criado_por),
	},
];

interface ContratoRegistrosTabProps {
	contratoId: number;
}

export function ContratoRegistrosTab({
	contratoId,
}: ContratoRegistrosTabProps) {
	const { data, isLoading, error } = useContratoRegistros(contratoId);
	const registros = data?.data ?? [];

	const categoryCounts = registros.reduce<Record<string, number>>((acc, r) => {
		const cat = formatCategoria(r.categoria);
		acc[cat] = (acc[cat] ?? 0) + 1;
		return acc;
	}, {});

	const table = useDataTable({
		columns: registrosTableColumns,
		data: registros,
	});

	return (
		<div className="flex flex-col gap-4">
			{!isLoading && !error && registros.length > 0 && (
				<div className="flex flex-wrap gap-4">
					{Object.entries(categoryCounts).map(([cat, count]) => (
						<BasicTableCard key={cat} label={cat} value={count} />
					))}
				</div>
			)}
			<ContractTabWrapper
				title="Registros de Contato"
				count={registros.length}
				isLoading={isLoading}
				error={error}
				errorMessage="Erro ao carregar registros de contato"
				isEmpty={registros.length === 0}
				emptyMessage="Nenhum registro encontrado"
				emptyColumns={REGISTROS_COLUMNS}
			>
				<DataTable table={table} />
			</ContractTabWrapper>
		</div>
	);
}
