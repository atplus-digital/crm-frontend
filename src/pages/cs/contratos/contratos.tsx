import { useState } from "react";
import { useSearchParams } from "react-router";
import { InlineErrorAlert } from "#/components/feedback/inline-error-alert";
import { ContratosFilters } from "#/features/cs/components/contratos-filters";
import { ContratosTable } from "#/features/cs/components/contratos-table";
import { useContratos } from "#/features/cs/contratos/contratos-hooks";
import type { ContratoFilters } from "#/features/cs/contratos/contratos-types";

export function ContratosPage() {
	const [searchParams, setSearchParams] = useSearchParams();
	const [filters, setFilters] = useState<ContratoFilters>({});
	const [sort, setSort] = useState<string[]>([]);

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

	const { data, error } = useContratos({
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

	return (
		<div className="flex-1 overflow-auto bg-background">
			<div className="mx-auto max-w-400 space-y-6 p-4">
				<div>
					<h1 className="text-2xl font-bold tracking-tight">Contratos</h1>
					<p className="text-muted-foreground">Contratos encontrados no IXC</p>
				</div>
				<ContratosFilters onFilter={handleFilter} currentFilters={filters} />
				{error ? (
					<InlineErrorAlert>
						Erro ao carregar contratos: {(error as Error).message}
					</InlineErrorAlert>
				) : (
					<ContratosTable
						contratos={data?.data ?? []}
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
