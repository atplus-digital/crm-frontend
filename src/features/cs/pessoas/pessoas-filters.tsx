import { FilterActions } from "#/components/filters/filter-actions";
import { useDataTableContext } from "#/components/table/data-table-context";
import { Input } from "#/components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "#/components/ui/select";
import {
	DEFAULT_PESSOA_FISICA_TABLE_FILTERS,
	type PessoaFisicaTableFilters,
	type PessoaJuridicaTableFilters,
} from "#/features/cs/pessoas/pessoas-types";

export function PessoasFisicasFilters() {
	const { filters, setFilter, applyFilters, clearFilters } =
		useDataTableContext<unknown, PessoaFisicaTableFilters>();

	return (
		<div className="flex flex-wrap items-end gap-3">
			<div className="flex-1 min-w-50">
				<Input
					placeholder="Filtrar por nome..."
					value={filters.f_nome}
					onChange={(e) => setFilter("f_nome", e.target.value)}
				/>
			</div>
			<div className="w-50">
				<Input
					placeholder="Filtrar por CPF..."
					value={filters.f_cpf}
					onChange={(e) => setFilter("f_cpf", e.target.value)}
				/>
			</div>
			<div className="w-50">
				<Select
					value={filters.f_analise_ixc}
					onValueChange={(value) => {
						const analise = (
							value === "all" ? "all" : value
						) as PessoaFisicaTableFilters["f_analise_ixc"];
						setFilter("f_analise_ixc", analise);
					}}
				>
					<SelectTrigger>
						<SelectValue placeholder="Análise IXC" />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="all">Todos</SelectItem>
						<SelectItem value="1">Sem Pendências</SelectItem>
						<SelectItem value="0">Com Pendências</SelectItem>
					</SelectContent>
				</Select>
			</div>
			<FilterActions
				onApply={applyFilters}
				onClear={clearFilters}
				canClear={
					Boolean(filters.f_nome) ||
					Boolean(filters.f_cpf) ||
					filters.f_analise_ixc !==
						DEFAULT_PESSOA_FISICA_TABLE_FILTERS.f_analise_ixc
				}
				applyVariant="outline"
				clearVariant="ghost"
			/>
		</div>
	);
}

export function PessoasJuridicasFilters() {
	const { filters, setFilter, applyFilters, clearFilters } =
		useDataTableContext<unknown, PessoaJuridicaTableFilters>();

	return (
		<div className="flex flex-wrap items-end gap-3">
			<div className="flex-1 min-w-50">
				<Input
					placeholder="Filtrar por razão social..."
					value={filters.f_razao_social}
					onChange={(e) => setFilter("f_razao_social", e.target.value)}
				/>
			</div>
			<div className="w-50">
				<Input
					placeholder="Filtrar por CNPJ..."
					value={filters.f_cnpj}
					onChange={(e) => setFilter("f_cnpj", e.target.value)}
				/>
			</div>
			<FilterActions
				onApply={applyFilters}
				onClear={clearFilters}
				canClear={Boolean(filters.f_razao_social || filters.f_cnpj)}
				applyVariant="outline"
				clearVariant="ghost"
			/>
		</div>
	);
}
