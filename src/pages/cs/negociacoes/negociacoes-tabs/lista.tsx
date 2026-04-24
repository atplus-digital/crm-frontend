import { useState } from "react";
import { InlineErrorAlert } from "#/components/feedback/inline-error-alert";
import { ListaFilters } from "#/features/cs/negociacoes/negociacoes-filters";
import { useNegociacoes } from "#/features/cs/negociacoes/negociacoes-hooks";
import { NegociacoesList } from "#/features/cs/negociacoes/negociacoes-list";
import { exportNegociacoesToCsv } from "#/features/cs/negociacoes/negociacoes-service";
import type { NegociacaoFilters } from "#/features/cs/negociacoes/negociacoes-types";

export function NegociacoesListaTabPage() {
	const [filters, setFilters] = useState<NegociacaoFilters>({});

	const { data, error, refetch } = useNegociacoes({
		page: 1,
		pageSize: 100,
		filters,
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
			<ListaFilters filters={filters} onFilter={setFilters} />
			{error ? (
				<InlineErrorAlert>
					Erro ao carregar negociações: {(error as Error).message}
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
