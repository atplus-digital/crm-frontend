import { InlineErrorAlert } from "#/components/feedback/inline-error-alert";
import { ContratosFilters } from "#/features/cs/contratos/contratos-filters";
import { useContratos } from "#/features/cs/contratos/contratos-hooks";
import { ContratosTable } from "#/features/cs/contratos/contratos-table";
import { useListPage } from "#/hooks/use-list-page";

export function ContratosPage() {
	const {
		page,
		pageSize,
		sort,
		filters,
		setPage,
		setPageSize,
		handleSort,
		handleFilterChange,
	} = useListPage();

	const { data, error } = useContratos({
		page,
		pageSize,
		filters,
		sort,
	});

	return (
		<div className="flex-1 overflow-auto bg-background">
			<div className="mx-auto max-w-400 space-y-6 p-4">
				<div>
					<h1 className="text-2xl font-bold tracking-tight">Contratos</h1>
					<p className="text-muted-foreground">Contratos encontrados no IXC</p>
				</div>
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
						onPageSizeChange={setPageSize}
						onFilterChange={handleFilterChange}
					>
						<ContratosFilters />
					</ContratosTable>
				)}
			</div>
		</div>
	);
}
