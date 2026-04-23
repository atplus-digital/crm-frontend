import {
	FilterActions,
	FilterInputField,
	FilterLayout,
	FilterSelectField,
} from "#/components/filters";
import { useDataTableContext } from "#/components/table/data-table-context";
import {
	DEFAULT_PESSOA_FISICA_TABLE_FILTERS,
	type PessoaFisicaTableFilters,
	type PessoaJuridicaTableFilters,
} from "#/features/cs/pessoas/pessoas-types";

export function PessoasFisicasFilters() {
	const { filters, setFilter, applyFilters, clearFilters } =
		useDataTableContext<unknown, PessoaFisicaTableFilters>();

	return (
		<FilterLayout
			fieldsClassName="lg:grid-cols-4"
			actions={
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
			}
		>
			<div className="lg:col-span-2">
				<FilterInputField
					id="filter-pf-nome"
					label="Nome"
					placeholder="Filtrar por nome..."
					value={filters.f_nome}
					onChange={(v) => setFilter("f_nome", v)}
				/>
			</div>
			<div>
				<FilterInputField
					id="filter-pf-cpf"
					label="CPF"
					placeholder="Filtrar por CPF..."
					value={filters.f_cpf}
					onChange={(v) => setFilter("f_cpf", v)}
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
					onChange={(v) =>
						setFilter(
							"f_analise_ixc",
							(v === undefined
								? "all"
								: v) as PessoaFisicaTableFilters["f_analise_ixc"],
						)
					}
				/>
			</div>
		</FilterLayout>
	);
}

export function PessoasJuridicasFilters() {
	const { filters, setFilter, applyFilters, clearFilters } =
		useDataTableContext<unknown, PessoaJuridicaTableFilters>();

	return (
		<FilterLayout
			fieldsClassName="lg:grid-cols-2"
			actions={
				<FilterActions
					onApply={applyFilters}
					onClear={clearFilters}
					canClear={Boolean(filters.f_razao_social || filters.f_cnpj)}
					applyVariant="outline"
					clearVariant="ghost"
				/>
			}
		>
			<div>
				<FilterInputField
					id="filter-pj-razao-social"
					label="Razão Social"
					placeholder="Filtrar por razão social..."
					value={filters.f_razao_social}
					onChange={(v) => setFilter("f_razao_social", v)}
				/>
			</div>
			<div>
				<FilterInputField
					id="filter-pj-cnpj"
					label="CNPJ"
					placeholder="Filtrar por CNPJ..."
					value={filters.f_cnpj}
					onChange={(v) => setFilter("f_cnpj", v)}
				/>
			</div>
		</FilterLayout>
	);
}
