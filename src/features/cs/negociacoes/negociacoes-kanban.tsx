import type { NegociacaoWithRelations } from "#/features/cs/negociacoes/negociacoes-types";
import {
	groupNegociacoesByStatus,
	KanbanColumn,
	STATUS_CONFIG,
	useHorizontalScroll,
} from "./kanban";

interface NegociacoesKanbanProps {
	negociacoes?: NegociacaoWithRelations[];
	isLoading?: boolean;
}

export function NegociacoesKanban({
	negociacoes = [],
	isLoading = false,
}: NegociacoesKanbanProps) {
	const scrollContainerRef = useHorizontalScroll();
	const kanbanData = groupNegociacoesByStatus(negociacoes);

	if (isLoading) {
		return (
			<div className="flex items-center justify-center py-12">
				<div className="text-sm text-muted-foreground">Carregando...</div>
			</div>
		);
	}

	return (
		<div ref={scrollContainerRef} className="overflow-x-auto pb-2">
			<div className="flex gap-4">
				{STATUS_CONFIG.map((status) => (
					<KanbanColumn
						key={status.key}
						status={status}
						cards={kanbanData[status.key]}
					/>
				))}
			</div>
		</div>
	);
}
