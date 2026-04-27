import { useState } from "react";
import {
	FilterActions,
	FilterInputField,
	FilterLayout,
	FilterSelectField,
} from "#/components/filters";
import { useFilterContext } from "#/components/filters/filter-context";
import {
	DEFAULT_PESSOA_FISICA_TABLE_FILTERS,
	type PessoaFisicaTableFilters,
} from "#/features/cs/pessoas/pessoas-types";

export function PessoasFisicasFilters() {
	const { onFilter } = useFilterContext();

	const [f_nome, setFNome] = useState(
		DEFAULT_PESSOA_FISICA_TABLE_FILTERS.f_nome,
	);
	const [f_cpf, setFCpf] = useState(DEFAULT_PESSOA_FISICA_TABLE_FILTERS.f_cpf);
	const [f_analise_ixc, setFAnaliseIxc] = useState<
		PessoaFisicaTableFilters["f_analise_ixc"]
	>(DEFAULT_PESSOA_FISICA_TABLE_FILTERS.f_analise_ixc);

	const filters: PessoaFisicaTableFilters = {
		f_nome,
		f_cpf,
		f_analise_ixc,
	};

	return (
		<FilterLayout
			fieldsClassName="lg:grid-cols-4"
			actions={
				<FilterActions
					onApply={() => onFilter(filters)}
					onClear={() => onFilter(DEFAULT_PESSOA_FISICA_TABLE_FILTERS)}
					canClear={
						Boolean(f_nome) ||
						Boolean(f_cpf) ||
						f_analise_ixc !== DEFAULT_PESSOA_FISICA_TABLE_FILTERS.f_analise_ixc
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
					value={f_nome}
					onChange={(v) => {
						setFNome(v);
						onFilter({ ...filters, f_nome: v });
					}}
				/>
			</div>
			<div>
				<FilterInputField
					id="filter-pf-cpf"
					label="CPF"
					placeholder="Filtrar por CPF..."
					value={f_cpf}
					onChange={(v) => {
						setFCpf(v);
						onFilter({ ...filters, f_cpf: v });
					}}
				/>
			</div>
			<div>
				<FilterSelectField<string>
					id="filter-pf-analise"
					label="Análise IXC"
					value={f_analise_ixc}
					placeholder="Análise IXC"
					options={[
						{ value: "1", label: "Sem Pendências" },
						{ value: "0", label: "Com Pendências" },
					]}
					onChange={(v) => {
						const newValue = (
							v === undefined ? "all" : v
						) as PessoaFisicaTableFilters["f_analise_ixc"];
						setFAnaliseIxc(newValue);
						onFilter({ ...filters, f_analise_ixc: newValue });
					}}
				/>
			</div>
		</FilterLayout>
	);
}
