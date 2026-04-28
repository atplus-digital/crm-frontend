import { InlineErrorAlert } from "#/components/feedback/inline-error-alert";
import { KanbanFilters } from "#/features/cs/negociacoes/negociacoes-filters";
import { useNegociacoes } from "#/features/cs/negociacoes/negociacoes-hooks";
import { NegociacoesKanban } from "#/features/cs/negociacoes/negociacoes-kanban";
import {
	type NegociacaoFilters,
	normalizeNegociacaoFilters,
} from "#/features/cs/negociacoes/negociacoes-types";
import { useListPage } from "#/hooks/use-list-page";

const DEFAULT_FILTERS: NegociacaoFilters = {};

export function NegociacoesKanbanTabPage() {
	const { filters, handleFilterChange } = useListPage<NegociacaoFilters>({
		defaultFilters: DEFAULT_FILTERS,
		defaultPageSize: 100,
		defaultSort: ["-createdAt"],
		syncSortToUrl: false,
	});

	const apiFilters = normalizeNegociacaoFilters(filters);

	const { data, isLoading, error } = useNegociacoes({
		page: 1,
		pageSize: 100,
		filters: apiFilters,
	});

	return (
		<div className="space-y-4">
			<KanbanFilters filters={filters} onFilter={handleFilterChange} />
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
