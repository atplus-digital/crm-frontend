import {
	FilterActions,
	FilterInputField,
	FilterLayout,
	FilterSelectField,
} from "#/components/filters";
import { useFilterContext } from "#/components/filters/filter-context";
import type { PessoaFisicaTableFilters } from "#/features/cs/pessoas/pessoas-types";

interface PessoasFisicasFiltersProps {
	filters: PessoaFisicaTableFilters;
}

export function PessoasFisicasFilters({ filters }: PessoasFisicasFiltersProps) {
	const { onFilter, hasActiveFilters, getCleanFilters } = useFilterContext();

	return (
		<FilterLayout
			fieldsClassName="lg:grid-cols-4"
			actions={
				<FilterActions
					onApply={() => onFilter(filters)}
					onClear={() => onFilter(getCleanFilters())}
					canClear={hasActiveFilters(filters)}
					applyVariant="outline"
					clearVariant="ghost"
				/>
			}
		>
			<div className="lg:col-span-2">
				<FilterInputField
					id="filter-pf-nome"
					label="Nome"
					placeholder="Filtrar por nome..."
					value={filters.f_nome}
					onChange={(v) => {
						onFilter({ ...filters, f_nome: v });
					}}
				/>
			</div>
			<div>
				<FilterInputField
					id="filter-pf-cpf"
					label="CPF"
					placeholder="Filtrar por CPF..."
					value={filters.f_cpf}
					onChange={(v) => {
						onFilter({ ...filters, f_cpf: v });
					}}
				/>
			</div>
			<div>
				<FilterSelectField<string>
					id="filter-pf-analise"
					label="Análise IXC"
					value={filters.f_analise_ixc}
					placeholder="Análise IXC"
					options={[
						{ value: "1", label: "Sem Pendências" },
						{ value: "0", label: "Com Pendências" },
					]}
					onChange={(v) => {
						const newValue = (
							v === undefined ? "all" : v
						) as PessoaFisicaTableFilters["f_analise_ixc"];
						onFilter({ ...filters, f_analise_ixc: newValue });
					}}
				/>
			</div>
		</FilterLayout>
	);
}
