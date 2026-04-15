import { useState } from "react";
import { ContratosFilters } from "#/features/cs/components/contratos-filters";
import { ContratosTable } from "#/features/cs/components/contratos-table";
import { useContratos } from "#/features/cs/contratos-hooks";
import type { ContratoFilters } from "#/features/cs/contratos-types";

export function ContratosPage() {
	const [page, setPage] = useState(1);
	const [pageSize, setPageSize] = useState(20);
	const [filters, setFilters] = useState<ContratoFilters>({});
	const [sort, setSort] = useState<string[]>([]);

	const { data, isLoading, error } = useContratos({
		page,
		pageSize,
		filters,
		sort,
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

	function handleFilter(newFilters: ContratoFilters) {
		setFilters(newFilters);
		setPage(1);
	}

	function handlePageSizeChange(size: number) {
		setPageSize(size);
		setPage(1);
	}

	return (
		<div className="flex-1 overflow-auto bg-background">
			<div className="mx-auto max-w-400 space-y-6 p-4">
				<div>
					<h1 className="text-2xl font-bold tracking-tight">Contratos</h1>
					<p className="text-muted-foreground">Contratos encontrados no IXC</p>
				</div>
				<ContratosFilters onFilter={handleFilter} currentFilters={filters} />
				{error ? (
					<div className="rounded-lg border border-destructive/50 bg-destructive/10 p-4 text-sm text-destructive">
						Erro ao carregar contratos: {(error as Error).message}
					</div>
				) : (
					<ContratosTable
						contratos={data?.data ?? []}
						sort={sort}
						onSort={handleSort}
						isLoading={isLoading}
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
