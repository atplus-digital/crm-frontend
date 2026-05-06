import { InlineErrorAlert } from "#/components/feedback/inline-error-alert";
import { ListaFilters } from "#/features/cs/negociacoes/negociacoes-filters";
import { useNegociacoes } from "#/features/cs/negociacoes/negociacoes-hooks";
import { NegociacoesList } from "#/features/cs/negociacoes/negociacoes-list";
import { exportNegociacoesToCsv } from "#/features/cs/negociacoes/negociacoes-service";
import {
	type NegociacaoFilters,
	normalizeNegociacaoFilters,
} from "#/features/cs/negociacoes/negociacoes-types";
import { useListPage } from "#/hooks/use-list-page";
import { getErrorMessage } from "#/lib/api-errors";

const DEFAULT_FILTERS: NegociacaoFilters = {};

export function NegociacoesListaTabPage() {
	const { filters, handleFilterChange } = useListPage<NegociacaoFilters>({
		defaultFilters: DEFAULT_FILTERS,
		defaultPageSize: 100,
		defaultSort: ["-createdAt"],
		syncSortToUrl: false,
	});

	const apiFilters = normalizeNegociacaoFilters(filters);

	const { data, error, refetch, isLoading, isFetching } = useNegociacoes({
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
		link.download = `negociacoes-${new Date().toISOString().split("T")[0]}.csv`;
		link.click();
		URL.revokeObjectURL(url);
	};

	return (
		<div className="space-y-4">
			<ListaFilters filters={filters} onFilter={handleFilterChange} />
			{error ? (
				<InlineErrorAlert>
					Erro ao carregar negociações: {getErrorMessage(error)}
				</InlineErrorAlert>
			) : (
				<NegociacoesList
					negociacoes={negociacoes}
					isLoading={isLoading || isFetching}
					hasInitialQueryData={data !== undefined}
					totalCount={data?.meta?.total ?? 0}
					pageSize={data?.meta?.pageSize ?? 15}
					onRefresh={() => refetch()}
					onExport={handleExport}
				/>
			)}
		</div>
	);
}
