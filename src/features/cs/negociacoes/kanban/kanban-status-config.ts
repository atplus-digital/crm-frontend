import type { NegociacoesStatus } from "#/generated/nocobase/negociacoes";

export const STATUS_CONFIG = [
	{
		key: "Novo",
		label: "Novo",
		colorClass: "bg-blue-500 dark:bg-blue-600",
		bgClass: "bg-blue-100/70 dark:bg-blue-950/40 dark:text-blue-300",
	},
	{
		key: "Negociando",
		label: "Negociando",
		colorClass: "bg-amber-500 dark:bg-amber-600",
		bgClass: "bg-amber-100/70 dark:bg-amber-950/40 dark:text-amber-300",
	},
	{
		key: "Assinatura",
		label: "Assinatura",
		colorClass: "bg-purple-500 dark:bg-purple-600",
		bgClass: "bg-purple-100/70 dark:bg-purple-950/40 dark:text-purple-300",
	},
	{
		key: "Auditoria",
		label: "Auditoria",
		colorClass: "bg-orange-500 dark:bg-orange-600",
		bgClass: "bg-orange-100/70 dark:bg-orange-950/40 dark:text-orange-300",
	},
	{
		key: "Concluido",
		label: "Concluído",
		colorClass: "bg-green-500 dark:bg-green-600",
		bgClass: "bg-green-100/70 dark:bg-green-950/40 dark:text-green-300",
	},
	{
		key: "Arquivado",
		label: "Arquivado",
		colorClass: "bg-gray-500 dark:bg-gray-600",
		bgClass: "bg-gray-100/70 dark:bg-gray-800/40 dark:text-gray-300",
	},
] as const;

export type StatusKey = (typeof STATUS_CONFIG)[number]["key"];

export const STATUS_ENUM_TO_KEY: Record<NegociacoesStatus, StatusKey | null> = {
	"1": "Novo",
	"2": "Negociando",
	"3": "Assinatura",
	"4": "Auditoria",
	"5": "Concluido",
	"6": "Arquivado",
};
