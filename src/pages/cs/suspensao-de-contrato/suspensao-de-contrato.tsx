import { useState } from "react";
import { useSearchParams } from "react-router";
import { InlineErrorAlert } from "#/components/feedback/inline-error-alert";
import { SuspensaoContratoList } from "#/features/cs/suspensao-de-contrato";
import { SuspensaoContratoFilterBar as FilterBar } from "#/features/cs/suspensao-de-contrato/suspensao-de-contrato-filters";
import { useSuspensaoContrato } from "#/features/cs/suspensao-de-contrato/suspensao-de-contrato-hooks";
import type { SuspensaoContratoFilters as FilterValues } from "#/features/cs/suspensao-de-contrato/suspensao-de-contrato-types";

export function SuspensaoContratoPage() {
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

	const { data, error } = useSuspensaoContrato({
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

	return (
		<div className="flex-1 overflow-auto bg-background">
			<div className="mx-auto max-w-400 space-y-6 p-4">
				<div>
					<h1 className="text-2xl font-bold tracking-tight">
						Suspensão de Contrato
					</h1>
					<p className="text-muted-foreground">
						Todas as Suspensões de Contrato
					</p>
				</div>

				<FilterBar filters={filters} onFilter={setFilters} />

				{error ? (
					<InlineErrorAlert>
						Erro ao carregar suspensões de contrato: {(error as Error).message}
					</InlineErrorAlert>
				) : (
					<SuspensaoContratoList
						suspensaoContratos={data?.data ?? []}
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
