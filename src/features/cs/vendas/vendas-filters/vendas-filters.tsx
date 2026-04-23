import { useId } from "react";
import {
	FilterActions,
	FilterDateField,
	FilterInputField,
	FilterSelectField,
} from "#/components/filters";
import type {
	NegociacaoFilters,
	NegociacaoStatus,
} from "#/features/cs/negociacoes/negociacoes-types";
import {
	NEGOCIACAO_STATUS_FILTER_OPTIONS,
	NEGOCIACAO_SUBSTATUS_FILTER_OPTIONS,
} from "#/features/cs/negociacoes/negociacoes-types";
import type { Users } from "#/generated/nocobase/users";

export interface VendasFiltersProps {
	filters: NegociacaoFilters;
	onFilter: (filters: NegociacaoFilters) => void;
	vendedores?: Users[];
}

export function VendasFilters({
	filters,
	onFilter,
	vendedores = [],
}: VendasFiltersProps) {
	const hasFilters =
		filters.status ||
		filters.substatus ||
		filters.titulo ||
		filters.cpfCnpj ||
		filters.vendedorId ||
		filters.pacote ||
		filters.criadoEmInicio ||
		filters.criadoEmFim;

	const clearFilters = () => {
		onFilter({});
	};

	const vendedorId = useId();
	const statusId = useId();
	const substatusId = useId();
	const tituloId = useId();
	const cpfId = useId();
	const cnpjId = useId();
	const criadoEmInicioId = useId();
	const criadoEmFimId = useId();

	return (
		<div className="space-y-4">
			<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
				<FilterSelectField<string>
					id={vendedorId}
					label="Vendedor"
					value={filters.vendedorId?.toString() || "all"}
					placeholder="Selecione o vendedor"
					options={vendedores.map((v) => ({
						value: v.id.toString(),
						label: v.nickname ?? "",
					}))}
					onChange={(v) =>
						onFilter({
							...filters,
							vendedorId: v === undefined ? undefined : Number(v),
						})
					}
				/>
				<FilterSelectField<NegociacaoStatus>
					id={statusId}
					label="Status"
					value={filters.status || "all"}
					placeholder="Selecione o status"
					options={NEGOCIACAO_STATUS_FILTER_OPTIONS}
					onChange={(v) => onFilter({ ...filters, status: v })}
				/>
				<FilterSelectField<string>
					id={substatusId}
					label="Substatus"
					value={filters.substatus || "all"}
					placeholder="Selecione o substatus"
					options={NEGOCIACAO_SUBSTATUS_FILTER_OPTIONS}
					onChange={(v) => onFilter({ ...filters, substatus: v })}
				/>
				<FilterInputField
					id={tituloId}
					label="Título"
					placeholder="Buscar por título"
					value={filters.titulo || ""}
					onChange={(v) => onFilter({ ...filters, titulo: v })}
				/>
				<FilterInputField
					id={cpfId}
					label="CPF"
					placeholder="000.000.000-00"
					value={filters.cpfCnpj || ""}
					onChange={(v) => onFilter({ ...filters, cpfCnpj: v })}
				/>
				<FilterInputField
					id={cnpjId}
					label="CNPJ"
					placeholder="00.000.000/0000-00"
					value={filters.cpfCnpj || ""}
					onChange={(v) => onFilter({ ...filters, cpfCnpj: v })}
				/>
				<FilterDateField
					id={criadoEmInicioId}
					label="Criado em início"
					value={filters.criadoEmInicio || ""}
					onChange={(v) => onFilter({ ...filters, criadoEmInicio: v })}
				/>
				<FilterDateField
					id={criadoEmFimId}
					label="Criado em fim"
					value={filters.criadoEmFim || ""}
					onChange={(v) => onFilter({ ...filters, criadoEmFim: v })}
				/>
			</div>

			<FilterActions
				onApply={() => onFilter(filters)}
				onClear={clearFilters}
				canClear={Boolean(hasFilters)}
				clearVariant="ghost"
			/>
		</div>
	);
}
