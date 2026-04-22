import { useState } from "react";
import { useSearchParams } from "react-router";
import { InlineErrorAlert } from "#/components/feedback/inline-error-alert";
import { TrocaEnderecoList } from "#/features/cs/troca-de-endereco";
import { TrocaEnderecoFilterBar } from "#/features/cs/troca-de-endereco/troca-endereco-filters";
import { useTrocaEndereco } from "#/features/cs/troca-de-endereco/troca-endereco-hooks";
import type { TrocaEnderecoFilters as FilterValues } from "#/features/cs/troca-de-endereco/troca-endereco-types";

export function TrocaDeEnderecoPage() {
	const [searchParams, setSearchParams] = useSearchParams();
	const [sort, setSort] = useState<string[]>([]);
	const [filters, setFilters] = useState<FilterValues>({});

	const page = Number(searchParams.get("page")) || 1;
	const pageSize = Number(searchParams.get("pageSize")) || 20;

	const setPage = (newPage: number) => {
		setSearchParams(
			(prev) => {
				prev.set("page", String(newPage));
				return prev;
			},
			{ replace: true },
		);
	};

	const handlePageSizeChange = (size: number) => {
		setSearchParams(
			(prev) => {
				prev.set("pageSize", String(size));
				prev.set("page", "1");
				return prev;
			},
			{ replace: true },
		);
	};

	const { data, error } = useTrocaEndereco({
		page,
		pageSize,
		sort,
		filters,
	});

	function handleSort(field: string) {
		setSort((prev) => {
			const currentField = prev[0]?.replace("-", "") ?? "";
			const isDesc = prev[0]?.startsWith("-") ?? false;
			if (currentField === field && !isDesc) return [`-${field}`];
			return [field];
		});
		setPage(1);
	}

	function handleFilterChange(newFilters: FilterValues) {
		setFilters(newFilters);
		setPage(1);
	}

	return (
		<div className="flex-1 overflow-auto bg-background">
			<div className="mx-auto max-w-400 space-y-6 p-4">
				<div>
					<h1 className="text-2xl font-bold tracking-tight">
						Troca de Endereço
					</h1>
					<p className="text-muted-foreground">Atendimentos</p>
				</div>

				<TrocaEnderecoFilterBar
					filters={filters}
					onFilter={handleFilterChange}
				/>

				{error ? (
					<InlineErrorAlert>
						Erro ao carregar trocas de endereço: {(error as Error).message}
					</InlineErrorAlert>
				) : (
					<TrocaEnderecoList
						trocasEndereco={data?.data ?? []}
						sort={sort}
						onSort={handleSort}
						pagination={{
							page,
							pageSize,
							total: data?.meta.total ?? 0,
							totalPages: data?.meta.totalPage ?? 1,
						}}
						onPageChange={setPage}
						onPageSizeChange={handlePageSizeChange}
					/>
				)}
			</div>
		</div>
	);
}
