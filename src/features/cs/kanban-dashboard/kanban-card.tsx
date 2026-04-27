import { format } from "date-fns";
import { useNavigate } from "react-router";
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "#/components/ui/tooltip";
import { cn } from "#/lib/utils";
import { buildRoute } from "#/routes/route-paths";
import type { KanbanDashboardCard } from "./kanban-dashboard-types";
import {
	getCardBadgeInfo,
	getCardDisplayName,
	getCardResponsible,
} from "./kanban-dashboard-types";

interface KanbanCardProps {
	card: KanbanDashboardCard;
}

export function KanbanCard({ card }: KanbanCardProps) {
	const navigate = useNavigate();

	const badgeInfo = getCardBadgeInfo(card);
	const displayName = getCardDisplayName(card);
	const responsible = getCardResponsible(card);

	const routeConfig = {
		tt: { route: "cs_troca_de_titularidade_id" as const },
		te: { route: "cs_troca_de_endereco_id" as const },
		sc: { route: "cs_suspensao_de_contrato_id" as const },
		neg: { route: "cs_negociacoes_id" as const },
	};

	const { route } = routeConfig[card.sourceCollection];

	const handleClick = () => {
		navigate(buildRoute(route, { id: card.id }));
	};

	const handleKeyDown = (e: React.KeyboardEvent) => {
		if (e.key === "Enter" || e.key === " ") {
			e.preventDefault();
			navigate(buildRoute(route, { id: card.id }));
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
						badgeInfo.bgClass,
					)}
				>
					{badgeInfo.label}
				</span>
				<Tooltip>
					<TooltipTrigger asChild>
						<h4 className="flex-1 truncate text-sm font-medium text-foreground">
							{displayName}
						</h4>
					</TooltipTrigger>
					<TooltipContent>
						<p>{displayName}</p>
					</TooltipContent>
				</Tooltip>
			</div>
			<div className="space-y-1.5">
				<div className="flex items-center justify-between text-xs">
					<span className="text-muted-foreground">Data:</span>
					<span className="font-medium">
						{format(new Date(card.createdAt), "dd/MM/yy")}
					</span>
				</div>
				<div className="flex items-center justify-between gap-2 text-xs">
					<span className="text-muted-foreground shrink-0">Responsável:</span>
					<span className="truncate font-medium">{responsible ?? "—"}</span>
				</div>
			</div>
		</div>
	);
}
