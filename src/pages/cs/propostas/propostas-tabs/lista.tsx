import { toast } from "sonner";
import { InlineErrorAlert } from "#/components/feedback/inline-error-alert";
import { useNegociacoes } from "#/features/cs/negociacoes/negociacoes-hooks";
import { NegociacoesList } from "#/features/cs/negociacoes/negociacoes-list";
import { exportNegociacoesToCsv } from "#/features/cs/negociacoes/negociacoes-service";
import {
	type NegociacaoFilters,
	normalizeNegociacaoFilters,
} from "#/features/cs/negociacoes/negociacoes-types";
import { VendasFilters } from "#/features/cs/vendas/vendas-filters/vendas-filters";
import { useVendedores } from "#/features/cs/vendas/vendas-hooks";
import { useListPage } from "#/hooks/use-list-page";
import { getErrorMessage } from "#/lib/api-errors";

const DEFAULT_FILTERS: NegociacaoFilters = {
	motivo: "P",
};

export function PropostasListaTabPage() {
	const { filters, handleFilterChange } = useListPage<NegociacaoFilters>({
		defaultFilters: DEFAULT_FILTERS,
		defaultPageSize: 20,
		defaultSort: ["-createdAt"],
		syncSortToUrl: false,
	});
	const { data: vendedores } = useVendedores();
	const apiFilters = normalizeNegociacaoFilters(filters);

	const { data, error, refetch } = useNegociacoes({
		page: 1,
		pageSize: 20,
		filters: apiFilters,
	});

	const negociacoes = data?.data ?? [];

	const handleExport = () => {
		const csv = exportNegociacoesToCsv(negociacoes);
		const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
		const url = URL.createObjectURL(blob);
		const link = document.createElement("a");
		link.href = url;
		link.download = `propostas-${new Date().toISOString().split("T")[0]}.csv`;
		link.click();
		URL.revokeObjectURL(url);
		toast.success(`CSV exportado: ${negociacoes.length} propostas`);
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
					Erro ao carregar propostas: {getErrorMessage(error)}
				</InlineErrorAlert>
			) : (
				<NegociacoesList
					negociacoes={negociacoes}
					totalCount={data?.meta?.total ?? 0}
					pageSize={data?.meta?.pageSize ?? 20}
					onRefresh={() => refetch()}
					onExport={handleExport}
				/>
			)}
		</div>
	);
}
