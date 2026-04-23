import { FilterActions } from "#/components/filters/filter-actions";
import {
	FilterDateField,
	FilterInputField,
	FilterSelectField,
} from "#/features/cs/troca-titularidade/components/troca-titularidade-filter-fields";
import {
	TROCA_ESTADO_FILTER_OPTIONS,
	TROCA_STATUS_FILTER_OPTIONS,
	TROCA_SUBSTATUS_FILTER_OPTIONS,
	type TrocaTitularidadeFilters,
} from "#/features/cs/troca-titularidade/troca-titularidade-types";
import type {
	CrmTrocaTitularidadeEstado,
	CrmTrocaTitularidadeStatus,
	CrmTrocaTitularidadeSubstatus,
} from "#/generated/nocobase/crm-troca-titularidade";

export function TrocaTitularidadeFilterBar({
	filters,
	onFilter,
}: {
	filters: TrocaTitularidadeFilters;
	onFilter: (f: TrocaTitularidadeFilters) => void;
}) {
	return (
		<div className="space-y-4">
			<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
				<FilterSelectField<CrmTrocaTitularidadeStatus>
					id="filter-status"
					label="Status"
					value={filters.status || "all"}
					placeholder="Selecione o status"
					options={TROCA_STATUS_FILTER_OPTIONS}
					onChange={(v) => onFilter({ ...filters, status: v })}
				/>
				<FilterSelectField<CrmTrocaTitularidadeSubstatus>
					id="filter-substatus"
					label="Substatus"
					value={filters.substatus || "all"}
					placeholder="Selecione o substatus"
					options={TROCA_SUBSTATUS_FILTER_OPTIONS}
					onChange={(v) => onFilter({ ...filters, substatus: v })}
				/>
				<FilterSelectField<CrmTrocaTitularidadeEstado>
					id="filter-estado"
					label="Estado"
					value={filters.estado || "all"}
					placeholder="Selecione o estado"
					options={TROCA_ESTADO_FILTER_OPTIONS}
					onChange={(v) => onFilter({ ...filters, estado: v })}
				/>
				<FilterInputField
					id="filter-cidade"
					label="Cidade"
					placeholder="Buscar por cidade"
					value={filters.cidade || ""}
					onChange={(v) => onFilter({ ...filters, cidade: v })}
				/>
				<FilterInputField
					id="filter-contrato"
					label="Nº Contrato"
					placeholder="Buscar por nº do contrato"
					value={filters.contratoId || ""}
					onChange={(v) => onFilter({ ...filters, contratoId: v })}
				/>
				<FilterInputField
					id="filter-cedente"
					label="Cedente"
					placeholder="Buscar por cedente"
					value={filters.cedente || ""}
					onChange={(v) => onFilter({ ...filters, cedente: v })}
				/>
				<FilterInputField
					id="filter-cessionario"
					label="Cessionário"
					placeholder="Buscar por cessionário"
					value={filters.cessionario || ""}
					onChange={(v) => onFilter({ ...filters, cessionario: v })}
				/>
				<FilterDateField
					id="filter-criado-depois"
					label="Criado depois de"
					value={filters.criadoEmInicio || ""}
					onChange={(v) => onFilter({ ...filters, criadoEmInicio: v })}
				/>
			</div>
			<FilterActions
				onApply={() => onFilter(filters)}
				onClear={() => onFilter({})}
				canClear={Boolean(
					filters.status ||
						filters.substatus ||
						filters.estado ||
						filters.cidade ||
						filters.contratoId ||
						filters.cedente ||
						filters.cessionario ||
						filters.criadoEmInicio,
				)}
				clearVariant="ghost"
			/>
		</div>
	);
}
