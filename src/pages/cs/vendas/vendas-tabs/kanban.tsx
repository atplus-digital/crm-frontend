import { useState } from "react";
import { InlineErrorAlert } from "#/components/feedback/inline-error-alert";
import { useNegociacoes } from "#/features/cs/negociacoes/negociacoes-hooks";
import { NegociacoesKanban } from "#/features/cs/negociacoes/negociacoes-kanban";
import type { NegociacaoFilters } from "#/features/cs/negociacoes/negociacoes-types";
import { VendasFilters } from "#/features/cs/vendas/vendas-filters";
import { useVendedores } from "#/features/cs/vendas/vendas-hooks";

export function VendasKanbanTabPage() {
	const [filters, setFilters] = useState<NegociacaoFilters>({});
	const { data: vendedores } = useVendedores();

	const { data, isLoading, error } = useNegociacoes({
		page: 1,
		pageSize: 100,
		filters,
	});

	return (
		<div className="space-y-4">
			<VendasFilters
				filters={filters}
				onFilter={setFilters}
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
