import { useState } from "react";
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

export function PessoasJuridicasFilters() {
	const { onFilter } = useFilterContext();

	const [f_razao_social, setFRazaoSocial] = useState(
		DEFAULT_PESSOA_JURIDICA_TABLE_FILTERS.f_razao_social,
	);
	const [f_cnpj, setFCnpj] = useState(
		DEFAULT_PESSOA_JURIDICA_TABLE_FILTERS.f_cnpj,
	);

	const filters: PessoaJuridicaTableFilters = {
		f_razao_social,
		f_cnpj,
	};

	return (
		<FilterLayout
			fieldsClassName="lg:grid-cols-2"
			actions={
				<FilterActions
					onApply={() => onFilter(filters)}
					onClear={() => onFilter(DEFAULT_PESSOA_JURIDICA_TABLE_FILTERS)}
					canClear={Boolean(f_razao_social || f_cnpj)}
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
					value={f_razao_social}
					onChange={(v) => {
						setFRazaoSocial(v);
						onFilter({ ...filters, f_razao_social: v });
					}}
				/>
			</div>
			<div>
				<FilterInputField
					id="filter-pj-cnpj"
					label="CNPJ"
					placeholder="Filtrar por CNPJ..."
					value={f_cnpj}
					onChange={(v) => {
						setFCnpj(v);
						onFilter({ ...filters, f_cnpj: v });
					}}
				/>
			</div>
		</FilterLayout>
	);
}
