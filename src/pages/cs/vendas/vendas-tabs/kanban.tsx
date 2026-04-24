import { InlineErrorAlert } from "#/components/feedback/inline-error-alert";
import { useNegociacoes } from "#/features/cs/negociacoes/negociacoes-hooks";
import { NegociacoesKanban } from "#/features/cs/negociacoes/negociacoes-kanban";
import {
	type NegociacaoFilters,
	normalizeNegociacaoFilters,
} from "#/features/cs/negociacoes/negociacoes-types";
import { VendasFilters } from "#/features/cs/vendas/vendas-filters";
import { useVendedores } from "#/features/cs/vendas/vendas-hooks";
import { useListPage } from "#/hooks/use-list-page";

const DEFAULT_FILTERS: NegociacaoFilters = {};

export function VendasKanbanTabPage() {
	const { filters, handleFilterChange } = useListPage<NegociacaoFilters>({
		defaultFilters: DEFAULT_FILTERS,
		defaultPageSize: 100,
		syncSortToUrl: false,
	});
	const { data: vendedores } = useVendedores();
	const apiFilters = normalizeNegociacaoFilters(filters);

	const { data, isLoading, error } = useNegociacoes({
		page: 1,
		pageSize: 100,
		filters: apiFilters,
	});

	return (
		<div className="space-y-4">
			<VendasFilters
				filters={filters}
				onFilter={handleFilterChange}
				vendedores={vendedores}
			/>
			{error ? (
				<InlineErrorAlert>
					Erro ao carregar vendas: {(error as Error).message}
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
