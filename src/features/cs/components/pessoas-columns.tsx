import type { ColumnDef } from "@tanstack/react-table";
import { Badge } from "#/components/ui/badge";
import type {
	PessoaFisicaListItem,
	PessoaJuridicaListItem,
} from "#/features/cs/pessoas/pessoas-types";
import { cn } from "#/lib/utils";

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
					<Badge variant="secondary" className="bg-gray-100 text-gray-600">
						Não analisado
					</Badge>
				);
			}
			const variants: Record<
				string,
				{
					variant: "default" | "secondary" | "destructive" | "outline";
					className: string;
					label: string;
				}
			> = {
				Aprovado: {
					variant: "default",
					className: "bg-green-500/10 text-green-600 hover:bg-green-500/20",
					label: "Aprovado",
				},
				"Aprovado com Atenção": {
					variant: "default",
					className: "bg-yellow-500/10 text-yellow-600 hover:bg-yellow-500/20",
					label: "Aprovado com Atenção",
				},
				Negado: { variant: "destructive", className: "", label: "Negado" },
			};
			const config = variants[value] || {
				variant: "secondary",
				className: "",
				label: value,
			};
			return (
				<Badge variant={config.variant} className={config.className}>
					{config.label}
				</Badge>
			);
		},
	},
	{
		accessorKey: "f_analise_ixc",
		header: "Análise no IXC",
		cell: ({ row }) => {
			const value = row.original.f_analise_ixc;
			if (!value) {
				return <Badge variant="secondary">Não analisado</Badge>;
			}
			const isSemPendencias = value === "Sem Pendências";
			return (
				<Badge
					variant={isSemPendencias ? "default" : "destructive"}
					className={cn(
						isSemPendencias &&
							"bg-green-500/10 text-green-600 hover:bg-green-500/20",
					)}
				>
					{value}
				</Badge>
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
