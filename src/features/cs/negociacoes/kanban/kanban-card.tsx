import { useNavigate } from "react-router";
import { cn, formatCurrency } from "#/lib/utils";
import { buildRoute } from "#/routes/route-paths";
import type { KanbanCard } from "./kanban-utils";
import { getCardTitle } from "./kanban-utils";

interface KanbanCardProps {
	card: KanbanCard;
}

export function KanbanCardComponent({ card }: KanbanCardProps) {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate(buildRoute("cs_negociacoes_id", { id: card.id }));
	};

	const handleKeyDown = (e: React.KeyboardEvent) => {
		if (e.key === "Enter" || e.key === " ") {
			e.preventDefault();
			navigate(buildRoute("cs_negociacoes_id", { id: card.id }));
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
			<h4 className="mb-2 text-sm font-medium text-foreground">
				{getCardTitle(card)}
			</h4>
			<div className="space-y-1.5">
				<div className="flex items-center justify-between text-xs">
					<span className="text-muted-foreground">Valor:</span>
					<span className="font-medium">
						{formatCurrency(card.f_valor_mensal)}
					</span>
				</div>
				<div className="flex items-center justify-between text-xs">
					<span className="text-muted-foreground">Vendedor:</span>
					<span className="font-medium">
						{card.f_vendedor?.nickname || "-"}
					</span>
				</div>
				{card.f_substatus && (
					<div className="mt-2">
						<span className="inline-block max-w-full truncate rounded bg-muted px-1.5 py-0.5 text-xs text-muted-foreground">
							{card.f_substatus}
						</span>
					</div>
				)}
			</div>
		</div>
	);
}
