import { InlineErrorAlert } from "#/components/feedback/inline-error-alert";
import { TrocaEnderecoList } from "#/features/cs/troca-de-endereco";
import { TrocaEnderecoFilterBar } from "#/features/cs/troca-de-endereco/troca-endereco-filters";
import { useTrocaEndereco } from "#/features/cs/troca-de-endereco/troca-endereco-hooks";
import { useListPage } from "#/hooks/use-list-page";

export function TrocaDeEnderecoPage() {
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

	const { data, error } = useTrocaEndereco({
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
						onPageSizeChange={setPageSize}
					/>
				)}
			</div>
		</div>
	);
}
