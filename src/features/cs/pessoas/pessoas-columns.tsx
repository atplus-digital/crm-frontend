import type { ColumnDef } from "@tanstack/react-table";
import { StatusBadge } from "#/components/badges/status-badge";
import type { BadgeColor } from "#/components/ui/badge";
import type { Pessoas } from "#/generated/types/nocobase/pessoas";
import {
	PESSOAS_ANALISEIXC_LABELS,
	PESSOAS_CREDITO_LABELS,
} from "#/generated/types/nocobase/pessoas";
import { formatDatePtBR } from "#/lib/utils";

const CREDITO_COLOR_MAP: Record<
	keyof typeof PESSOAS_CREDITO_LABELS,
	BadgeColor
> = {
	1: "green",
	2: "yellow",
	9: "red",
};

const CREDITO_VARIANTS: Record<
	keyof typeof PESSOAS_CREDITO_LABELS,
	"default" | "destructive" | "secondary"
> = {
	1: "default",
	2: "default",
	9: "destructive",
};

const ANALISE_IXC_COLOR_MAP: Record<
	keyof typeof PESSOAS_ANALISEIXC_LABELS,
	BadgeColor
> = {
	0: "red",
	1: "green",
};

const ANALISE_IXC_VARIANTS: Record<
	keyof typeof PESSOAS_ANALISEIXC_LABELS,
	"default" | "destructive" | "secondary"
> = {
	0: "destructive",
	1: "default",
};

export const pfColumns: ColumnDef<Pessoas, unknown>[] = [
	{ accessorKey: "id", header: "ID" },
	{
		accessorKey: "createdAt",
		header: "Criado em",
		cell: ({ row }) =>
			row.original.createdAt ? formatDatePtBR(row.original.createdAt) : "-",
	},
	{ accessorKey: "f_nome", header: "Nome Completo" },
	{ accessorKey: "f_cpf", header: "CPF" },
	{ accessorKey: "f_data_nascimento", header: "Data de Nascimento" },
	{
		accessorKey: "f_credito",
		header: "Análise de Crédito",
		cell: ({ row }) => {
			const value = row.original.f_credito;
			if (!value) {
				return (
					<StatusBadge
						value="nao_analisado"
						labels={{ nao_analisado: "Não analisado" }}
						defaultVariant="secondary"
						defaultColor="gray"
					/>
				);
			}
			return (
				<StatusBadge
					value={value}
					labels={PESSOAS_CREDITO_LABELS}
					variants={CREDITO_VARIANTS}
					colorMap={CREDITO_COLOR_MAP}
					defaultVariant="secondary"
				/>
			);
		},
	},
	{
		accessorKey: "f_analise_ixc",
		header: "Análise no IXC",
		cell: ({ row }) => {
			const value = row.original.f_analise_ixc;
			if (!value) {
				return (
					<StatusBadge
						value="nao_analisado"
						labels={{ nao_analisado: "Não analisado" }}
						defaultVariant="secondary"
					/>
				);
			}
			return (
				<StatusBadge
					value={value}
					labels={PESSOAS_ANALISEIXC_LABELS}
					variants={ANALISE_IXC_VARIANTS}
					colorMap={ANALISE_IXC_COLOR_MAP}
					defaultVariant="destructive"
				/>
			);
		},
	},
	{ accessorKey: "f_sexo", header: "Sexo" },
	{
		id: "createdBy.nickname",
		header: "Criado por",
		cell: ({ row }) =>
			(row.original as Pessoas & { createdBy?: { nickname: string } | null })
				.createdBy?.nickname || "-",
	},
];

import type { Empresas } from "#/generated/types/nocobase/empresas";

export const pjColumns: ColumnDef<Empresas, unknown>[] = [
	{ accessorKey: "id", header: "ID" },
	{ accessorKey: "f_razao_social", header: "Razão Social" },
	{ accessorKey: "f_nome_fantasia", header: "Nome Fantasia" },
	{ accessorKey: "f_cnpj", header: "CNPJ" },
	{ accessorKey: "f_ie", header: "IE" },
	{ accessorKey: "f_responsavel", header: "Responsável" },
	{ accessorKey: "f_email_responsavel", header: "Email" },
];
