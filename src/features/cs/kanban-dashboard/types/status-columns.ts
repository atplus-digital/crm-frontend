// ─────────────────────────────────────────────────────────────────────────────
// Unified Kanban status columns (shared across all source collections)
// ─────────────────────────────────────────────────────────────────────────────

export const UNIFIED_STATUS_COLUMNS = [
	{
		key: "Novo",
		label: "Novo",
		colorClass: "bg-blue-500 dark:bg-blue-600",
		bgClass: "bg-blue-100/70 dark:bg-blue-950/40 dark:text-blue-300",
	},
	{
		key: "Em Andamento",
		label: "Em Andamento",
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
		key: "Concluido",
		label: "Concluído",
		colorClass: "bg-green-500 dark:bg-green-600",
		bgClass: "bg-green-100/70 dark:bg-green-950/40 dark:text-green-300",
	},
	{
		key: "Cancelado",
		label: "Cancelado",
		colorClass: "bg-red-500 dark:bg-red-600",
		bgClass: "bg-red-100/70 dark:bg-red-950/40 dark:text-red-300",
	},
	{
		key: "Aguardando assinatura teste",
		label: "Aguardando assinatura teste",
		colorClass: "bg-yellow-500 dark:bg-yellow-600",
		bgClass: "bg-yellow-100/70 dark:bg-yellow-950/40 dark:text-yellow-300",
	},
] as const;

export type UnifiedStatusKey = (typeof UNIFIED_STATUS_COLUMNS)[number]["key"];
