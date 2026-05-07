import type { ColumnDef } from "@tanstack/react-table";
import { StatusBadge } from "#/components/badges/status-badge";
import { BasicTableCard } from "#/components/basic-table-card";
import { TabContentCard } from "#/components/layouts/tab-content-card";
import { DataTable, useDataTable } from "#/components/table/data-table";
import {
	detailDateCell,
	detailLongTextCell,
	detailShortTextCell,
} from "#/components/table/detail-table-presets";
import { useContratoRegistros } from "#/features/cs/contratos/contratos-hooks";
import type { RegistrosDeContato } from "#/generated/types/nocobase/registros-de-contato";
import {
	REGISTROSDECONTATO_CATEGORIA_LABELS,
	REGISTROSDECONTATO_NOTATECNICO_LABELS,
	REGISTROSDECONTATO_NOTAVENDAS_LABELS,
} from "#/generated/types/nocobase/registros-de-contato";
import { formatDatePtBR } from "#/lib/utils";

function formatCategoria(categoria: RegistrosDeContato["f_categoria"]): string {
	return REGISTROSDECONTATO_CATEGORIA_LABELS[categoria] ?? String(categoria);
}

function formatNota(nota: RegistrosDeContato["f_nota_vendas"]): string {
	return REGISTROSDECONTATO_NOTAVENDAS_LABELS[nota] ?? String(nota);
}

function formatNotaTecnico(nota: RegistrosDeContato["f_nota_tecnico"]): string {
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

const registrosTableColumns: ColumnDef<RegistrosDeContato, unknown>[] = [
	{
		accessorKey: "f_categoria",
		header: "Categoria",
		cell: ({ row }) =>
			detailShortTextCell(formatCategoria(row.original.f_categoria)),
	},
	{
		accessorKey: "f_resumo_contato",
		header: "Motivo do Contato",
		cell: ({ row }) => detailLongTextCell(row.original.f_resumo_contato),
	},
	{
		accessorKey: "f_nota_vendas",
		header: "Nota Vendas",
		cell: ({ row }) =>
			detailShortTextCell(formatNota(row.original.f_nota_vendas)),
	},
	{
		accessorKey: "f_nota_tecnico",
		header: "Nota Técnico",
		cell: ({ row }) =>
			detailShortTextCell(formatNotaTecnico(row.original.f_nota_tecnico)),
	},
	{
		id: "pendencia",
		header: "Há Pendência?",
		cell: ({ row }) => (
			<StatusBadge
				value={String(row.original.f_ha_pendencia)}
				labels={{ true: "Sim", false: "Não" }}
				variants={{ true: "outline", false: "default" }}
			/>
		),
	},
	{
		accessorKey: "createdAt",
		header: "Criado em",
		cell: ({ row }) => detailDateCell(row.original.createdAt, formatDatePtBR),
	},
	{
		accessorKey: "criado_por",
		header: "Criado por",
		cell: ({ row }) => {
			const original = row.original as unknown as {
				createdBy?: { nickname?: string } | null;
			};
			return detailShortTextCell(original.createdBy?.nickname ?? "—");
		},
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
		const cat = formatCategoria(r.f_categoria);
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
			<TabContentCard
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
			</TabContentCard>
		</div>
	);
}
