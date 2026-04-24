import { InlineErrorAlert } from "#/components/feedback/inline-error-alert";
import { useNegociacoes } from "#/features/cs/negociacoes/negociacoes-hooks";
import { NegociacoesList } from "#/features/cs/negociacoes/negociacoes-list";
import { exportNegociacoesToCsv } from "#/features/cs/negociacoes/negociacoes-service";
import {
	type NegociacaoFilters,
	normalizeNegociacaoFilters,
} from "#/features/cs/negociacoes/negociacoes-types";
import { VendasFilters } from "#/features/cs/vendas/vendas-filters";
import { useVendedores } from "#/features/cs/vendas/vendas-hooks";
import { useListPage } from "#/hooks/use-list-page";

const DEFAULT_FILTERS: NegociacaoFilters = {};

export function VendasListaTabPage() {
	const { filters, handleFilterChange } = useListPage<NegociacaoFilters>({
		defaultFilters: DEFAULT_FILTERS,
		defaultPageSize: 100,
		syncSortToUrl: false,
	});
	const { data: vendedores } = useVendedores();
	const apiFilters = normalizeNegociacaoFilters(filters);

	const { data, error, refetch } = useNegociacoes({
		page: 1,
		pageSize: 100,
		filters: apiFilters,
	});

	const negociacoes = data?.data ?? [];

	const handleExport = () => {
		const csv = exportNegociacoesToCsv(negociacoes);
		const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
		const url = URL.createObjectURL(blob);
		const link = document.createElement("a");
		link.href = url;
		link.download = `vendas-${new Date().toISOString().split("T")[0]}.csv`;
		link.click();
		URL.revokeObjectURL(url);
	};

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
				<NegociacoesList
					negociacoes={negociacoes}
					totalCount={data?.meta?.total ?? 0}
					pageSize={data?.meta?.pageSize ?? 15}
					onRefresh={() => refetch()}
					onExport={handleExport}
				/>
			)}
		</div>
	);
}
