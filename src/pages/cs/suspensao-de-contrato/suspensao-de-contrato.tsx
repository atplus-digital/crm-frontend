import { InlineErrorAlert } from "#/components/feedback/inline-error-alert";
import { SuspensaoContratoList } from "#/features/cs/suspensao-de-contrato";
import { SuspensaoContratoFilterBar as FilterBar } from "#/features/cs/suspensao-de-contrato/suspensao-de-contrato-filters";
import { useSuspensaoContrato } from "#/features/cs/suspensao-de-contrato/suspensao-de-contrato-hooks";
import { useListPage } from "#/hooks/use-list-page";

export function SuspensaoContratoPage() {
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

	const { data, error } = useSuspensaoContrato({
		page,
		pageSize,
		sort,
		filters,
	});

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

				<FilterBar filters={filters} onFilter={handleFilterChange} />

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
						onPageSizeChange={setPageSize}
					/>
				)}
			</div>
		</div>
	);
}
