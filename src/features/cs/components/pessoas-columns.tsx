import type { ColumnDef } from "@tanstack/react-table";
import { StatusBadge } from "#/components/badges/status-badge";
import type {
	PessoaFisicaListItem,
	PessoaJuridicaListItem,
} from "#/features/cs/pessoas/pessoas-types";

const CREDITO_LABELS: Record<string, string> = {
	Aprovado: "Aprovado",
	"Aprovado com Atenção": "Aprovado com Atenção",
	Negado: "Negado",
};

const CREDITO_COLOR_CLASSES: Record<string, string> = {
	Aprovado: "bg-green-500/10 text-green-600 hover:bg-green-500/20",
	"Aprovado com Atenção":
		"bg-yellow-500/10 text-yellow-600 hover:bg-yellow-500/20",
};

const CREDITO_VARIANTS: Record<
	string,
	"default" | "destructive" | "secondary"
> = {
	Aprovado: "default",
	Negado: "destructive",
};

const ANALISE_IXC_LABELS: Record<string, string> = {
	"Sem Pendências": "Sem Pendências",
};

const ANALISE_IXC_COLOR_CLASSES: Record<string, string> = {
	"Sem Pendências": "bg-green-500/10 text-green-600 hover:bg-green-500/20",
};

const ANALISE_IXC_VARIANTS: Record<
	string,
	"default" | "destructive" | "secondary"
> = {
	"Sem Pendências": "default",
};

export const pfColumns: ColumnDef<PessoaFisicaListItem, unknown>[] = [
	{ accessorKey: "id", header: "ID" },
	{
		accessorKey: "createdAt",
		header: "Criado em",
		cell: ({ row }) =>
			row.original.createdAt
				? new Date(row.original.createdAt).toLocaleDateString("pt-BR")
				: "-",
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
						defaultClass="bg-gray-100 text-gray-600"
					/>
				);
			}
			return (
				<StatusBadge
					value={value}
					labels={CREDITO_LABELS}
					variants={CREDITO_VARIANTS}
					colorClasses={CREDITO_COLOR_CLASSES}
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
					labels={ANALISE_IXC_LABELS}
					variants={ANALISE_IXC_VARIANTS}
					colorClasses={ANALISE_IXC_COLOR_CLASSES}
					defaultVariant="destructive"
				/>
			);
		},
	},
	{ accessorKey: "f_sexo", header: "Sexo" },
	{
		id: "createdBy.nickname",
		header: "Criado por",
		cell: ({ row }) => row.original.createdBy?.nickname || "-",
	},
];

export const pjColumns: ColumnDef<PessoaJuridicaListItem, unknown>[] = [
	{ accessorKey: "id", header: "ID" },
	{ accessorKey: "f_razao_social", header: "Razão Social" },
	{ accessorKey: "f_nome_fantasia", header: "Nome Fantasia" },
	{ accessorKey: "f_cnpj", header: "CNPJ" },
	{ accessorKey: "f_ie", header: "IE" },
	{ accessorKey: "f_responsavel", header: "Responsável" },
	{ accessorKey: "f_email_responsavel", header: "Email" },
];
