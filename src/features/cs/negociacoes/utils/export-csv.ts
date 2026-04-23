import {
	NEGOCIACOES_MOTIVO_LABELS,
	NEGOCIACOES_STATUS_LABELS,
} from "#/generated/nocobase/negociacoes";
import { formatCurrency, formatDatePtBR } from "#/lib/utils";
import type { NegociacaoWithRelations } from "../negociacoes-types";

interface CsvColumn {
	key: string;
	header: string;
	format?: (value: unknown) => string;
}

const CSV_COLUMNS: CsvColumn[] = [
	{ key: "id", header: "ID" },
	{ key: "f_titulo", header: "Título" },
	{
		key: "f_motivo",
		header: "Motivo",
		format: (v: unknown) =>
			NEGOCIACOES_MOTIVO_LABELS[
				v as string as keyof typeof NEGOCIACOES_MOTIVO_LABELS
			] ?? String(v ?? ""),
	},
	{
		key: "f_status",
		header: "Status",
		format: (v: unknown) =>
			NEGOCIACOES_STATUS_LABELS[
				v as string as keyof typeof NEGOCIACOES_STATUS_LABELS
			] ?? String(v ?? ""),
	},
	{ key: "f_substatus", header: "Substatus" },
	{ key: "f_nome_razao", header: "Nome/Razão Social" },
	{ key: "f_cpf_cnpj", header: "CPF/CNPJ" },
	{ key: "f_telefone", header: "Telefone" },
	{ key: "f_email_cobranca", header: "Email" },
	{
		key: "f_valor_mensal",
		header: "Valor Mensal",
		format: (v: unknown) => formatCurrency((v as number) ?? 0),
	},
	{
		key: "f_valor_devedor",
		header: "Valor Devedor",
		format: (v: unknown) => formatCurrency((v as number) ?? 0),
	},
	{
		key: "f_valor_devedor_total",
		header: "Valor Devedor Total",
		format: (v: unknown) => formatCurrency(Number(v) || 0),
	},
	{
		key: "f_pacote",
		header: "Pacote",
		format: (v: unknown) => {
			const pkg = v as { f_nome_pacote?: string } | null;
			return pkg?.f_nome_pacote ?? "-";
		},
	},
	{ key: "f_contrato_ixc", header: "Contrato IXC" },
	{
		key: "f_vendedor",
		header: "Vendedor",
		format: (v: unknown) => {
			const vendor = v as { nickname?: string } | null;
			return vendor?.nickname ?? "-";
		},
	},
	{
		key: "f_pessoa",
		header: "Pessoa",
		format: (v: unknown) => {
			const pessoa = v as { f_nome?: string } | null;
			return pessoa?.f_nome ?? "-";
		},
	},
	{
		key: "createdAt",
		header: "Criado em",
		format: (v: unknown) => formatDatePtBR(v as string),
	},
	{
		key: "updatedAt",
		header: "Última Atualização",
		format: (v: unknown) => formatDatePtBR(v as string),
	},
];

function escapeCsvValue(value: string): string {
	if (value.includes(",") || value.includes('"') || value.includes("\n")) {
		return `"${value.replace(/"/g, '""')}"`;
	}
	return value;
}

export function exportNegociacoesToCsv(
	negociacoes: NegociacaoWithRelations[],
): string {
	const headers = CSV_COLUMNS.map((col) => col.header);

	const rows = negociacoes.map((n) =>
		CSV_COLUMNS.map((col) => {
			const value = (n as unknown as Record<string, unknown>)[col.key];
			return col.format ? col.format(value) : String(value ?? "");
		}),
	);

	const csv = [
		headers.join(","),
		...rows.map((row) => row.map((v) => escapeCsvValue(String(v))).join(",")),
	].join("\n");

	return csv;
}
