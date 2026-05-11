import { useId } from "react";
import {
	FilterBarContainer,
	FilterDateField,
	FilterInputField,
	FilterSelectField,
} from "#/components/filters";
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
} from "#/generated/types/nocobase/crm-troca-titularidade";

interface TrocaTitularidadeFilterBarProps {
	filters: TrocaTitularidadeFilters;
	onFilter: (f: TrocaTitularidadeFilters) => void;
}

export function TrocaTitularidadeFilterBar({
	filters,
	onFilter,
}: TrocaTitularidadeFilterBarProps) {
	const statusId = useId();
	const substatusId = useId();
	const estadoId = useId();
	const cidadeId = useId();
	const contratoId = useId();
	const cedenteId = useId();
	const cessionarioId = useId();
	const criadoEmInicioId = useId();

	return (
		<FilterBarContainer
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
		>
			<FilterSelectField<CrmTrocaTitularidadeStatus>
				id={statusId}
				label="Status"
				value={filters.status || "all"}
				placeholder="Selecione o status"
				options={TROCA_STATUS_FILTER_OPTIONS}
				onChange={(v) => onFilter({ ...filters, status: v })}
			/>
			<FilterSelectField<CrmTrocaTitularidadeSubstatus>
				id={substatusId}
				label="Substatus"
				value={filters.substatus || "all"}
				placeholder="Selecione o substatus"
				options={TROCA_SUBSTATUS_FILTER_OPTIONS}
				onChange={(v) => onFilter({ ...filters, substatus: v })}
			/>
			<FilterSelectField<CrmTrocaTitularidadeEstado>
				id={estadoId}
				label="Estado"
				value={filters.estado || "all"}
				placeholder="Selecione o estado"
				options={TROCA_ESTADO_FILTER_OPTIONS}
				onChange={(v) => onFilter({ ...filters, estado: v })}
			/>
			<FilterInputField
				id={cidadeId}
				label="Cidade"
				placeholder="Buscar por cidade"
				value={filters.cidade || ""}
				onChange={(v) => onFilter({ ...filters, cidade: v })}
			/>
			<FilterInputField
				id={contratoId}
				label="Nº Contrato"
				placeholder="Buscar por nº do contrato"
				value={filters.contratoId || ""}
				onChange={(v) => onFilter({ ...filters, contratoId: v })}
			/>
			<FilterInputField
				id={cedenteId}
				label="Cedente"
				placeholder="Buscar por cedente"
				value={filters.cedente || ""}
				onChange={(v) => onFilter({ ...filters, cedente: v })}
			/>
			<FilterInputField
				id={cessionarioId}
				label="Cessionário"
				placeholder="Buscar por cessionário"
				value={filters.cessionario || ""}
				onChange={(v) => onFilter({ ...filters, cessionario: v })}
			/>
			<FilterDateField
				id={criadoEmInicioId}
				label="Criado depois de"
				value={filters.criadoEmInicio || ""}
				onChange={(v) => onFilter({ ...filters, criadoEmInicio: v })}
			/>
		</FilterBarContainer>
	);
}
