import {
	FilterActions,
	FilterInputField,
	FilterLayout,
} from "#/components/filters";
import { useFilterContext } from "#/components/filters/filter-context";
import {
	DEFAULT_PESSOA_JURIDICA_TABLE_FILTERS,
	type PessoaJuridicaTableFilters,
} from "#/features/cs/pessoas/pessoas-types";

interface PessoasJuridicasFiltersProps {
	filters: PessoaJuridicaTableFilters;
}

export function PessoasJuridicasFilters({
	filters,
}: PessoasJuridicasFiltersProps) {
	const { onFilter } = useFilterContext();

	return (
		<FilterLayout
			fieldsClassName="lg:grid-cols-2"
			actions={
				<FilterActions
					onApply={() => onFilter(filters)}
					onClear={() => onFilter(DEFAULT_PESSOA_JURIDICA_TABLE_FILTERS)}
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
					onChange={(v) => {
						onFilter({ ...filters, f_razao_social: v });
					}}
				/>
			</div>
			<div>
				<FilterInputField
					id="filter-pj-cnpj"
					label="CNPJ"
					placeholder="Filtrar por CNPJ..."
					value={filters.f_cnpj}
					onChange={(v) => {
						onFilter({ ...filters, f_cnpj: v });
					}}
				/>
			</div>
		</FilterLayout>
	);
}
