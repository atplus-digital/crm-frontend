import { useNavigate } from "react-router";
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "#/components/ui/tooltip";
import { cn, formatDatePtBR } from "#/lib/utils";
import { buildRoute } from "#/routes/route-paths";
import type {
	KanbanDashboardCard,
	SourceCollection,
} from "./kanban-dashboard-types";
import {
	getCardDisplayName,
	getCardResponsible,
} from "./kanban-dashboard-types";

const CARD_CONFIG: Record<
	SourceCollection,
	{
		label: string;
		route:
			| "cs_troca_de_titularidade_id"
			| "cs_troca_de_endereco_id"
			| "cs_suspensao_de_contrato_id";
		colorClass: string;
	}
> = {
	tt: {
		label: "Troca Tit.",
		route: "cs_troca_de_titularidade_id",
		colorClass:
			"bg-blue-100 text-blue-800 dark:bg-blue-900/60 dark:text-blue-200",
	},
	te: {
		label: "Troca End.",
		route: "cs_troca_de_endereco_id",
		colorClass:
			"bg-purple-100 text-purple-800 dark:bg-purple-900/60 dark:text-purple-200",
	},
	sc: {
		label: "Suspensão",
		route: "cs_suspensao_de_contrato_id",
		colorClass:
			"bg-orange-100 text-orange-800 dark:bg-orange-900/60 dark:text-orange-200",
	},
};

interface KanbanCardProps {
	card: KanbanDashboardCard;
}

export function KanbanCard({ card }: KanbanCardProps) {
	const navigate = useNavigate();

	const config = CARD_CONFIG[card.sourceCollection];

	const handleClick = () => {
		navigate(buildRoute(config.route, { id: card.id }));
	};

	const handleKeyDown = (e: React.KeyboardEvent) => {
		if (e.key === "Enter" || e.key === " ") {
			e.preventDefault();
			navigate(buildRoute(config.route, { id: card.id }));
		}
	};

	return (
		// biome-ignore lint/a11y/useSemanticElements: Card component needs to be a clickable container, not a button element
		<div
			className={cn(
				"cursor-pointer rounded-lg bg-card p-3 shadow-sm transition-shadow",
				"hover:shadow-md",
				"border border-border/50",
			)}
			onClick={handleClick}
			onKeyDown={handleKeyDown}
			role="button"
			tabIndex={0}
		>
			<div className="mb-2 flex items-center gap-2">
				<span
					className={cn(
						"inline-block rounded-full px-2 py-0.5 text-xs font-medium",
						config.colorClass,
					)}
				>
					{config.label}
				</span>
				<Tooltip>
					<TooltipTrigger asChild>
						<h4 className="flex-1 truncate text-sm font-medium text-foreground">
							{getCardDisplayName(card)}
						</h4>
					</TooltipTrigger>
					<TooltipContent>
						<p>{getCardDisplayName(card)}</p>
					</TooltipContent>
				</Tooltip>
			</div>
			<div className="space-y-1.5">
				<div className="flex items-center justify-between text-xs">
					<span className="text-muted-foreground">Data:</span>
					<span className="font-medium">{formatDatePtBR(card.createdAt)}</span>
				</div>
				<div className="flex items-center justify-between gap-2 text-xs">
					<span className="text-muted-foreground shrink-0">Responsável:</span>
					<span className="truncate font-medium">
						{getCardResponsible(card) ?? "—"}
					</span>
				</div>
			</div>
		</div>
	);
}
