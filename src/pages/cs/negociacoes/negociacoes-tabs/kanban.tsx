import { useState } from "react";
import { InlineErrorAlert } from "#/components/feedback/inline-error-alert";
import { KanbanFilters } from "#/features/cs/negociacoes/negociacoes-filters";
import { useNegociacoes } from "#/features/cs/negociacoes/negociacoes-hooks";
import { NegociacoesKanban } from "#/features/cs/negociacoes/negociacoes-kanban";
import type { NegociacaoFilters } from "#/features/cs/negociacoes/negociacoes-types";

export function NegociacoesKanbanTabPage() {
	const [filters, setFilters] = useState<NegociacaoFilters>({});

	const { data, isLoading, error } = useNegociacoes({
		page: 1,
		pageSize: 100,
		filters,
	});

	return (
		<div className="space-y-4">
			<KanbanFilters filters={filters} onFilter={setFilters} />
			{error ? (
				<InlineErrorAlert>
					Erro ao carregar negociações: {(error as Error).message}
				</InlineErrorAlert>
			) : (
				<NegociacoesKanban
					negociacoes={data?.data ?? []}
					isLoading={isLoading}
				/>
			)}
		</div>
	);
}
