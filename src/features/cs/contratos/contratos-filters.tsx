import { useState } from "react";
import {
	FilterActions,
	FilterInputField,
	FilterLayout,
	FilterSelectField,
} from "#/components/filters";
import { useFilterContext } from "#/components/filters/filter-context";
import {
	CONTRATO_STATUS_LABELS,
	type ContratosTableFilters,
	DEFAULT_CONTRATOS_TABLE_FILTERS,
} from "#/features/cs/contratos/contratos-types";

export function ContratosFilters() {
	const { onFilter } = useFilterContext();

	const [cpfCnpj, setCpfCnpj] = useState(
		DEFAULT_CONTRATOS_TABLE_FILTERS.cpfCnpj,
	);
	const [nome, setNome] = useState(DEFAULT_CONTRATOS_TABLE_FILTERS.nome);
	const [status, setStatus] = useState<ContratosTableFilters["status"]>(
		DEFAULT_CONTRATOS_TABLE_FILTERS.status,
	);
	const [contratoId, setContratoId] = useState(
		DEFAULT_CONTRATOS_TABLE_FILTERS.contratoId,
	);

	const filters: ContratosTableFilters = {
		cpfCnpj,
		nome,
		status,
		contratoId,
	};

	const canClear =
		Boolean(cpfCnpj) ||
		Boolean(nome) ||
		Boolean(contratoId) ||
		status !== "all";

	return (
		<FilterLayout
			fieldsClassName="lg:grid-cols-4"
			actions={
				<FilterActions
					onApply={() => onFilter(filters)}
					onClear={() => onFilter(DEFAULT_CONTRATOS_TABLE_FILTERS)}
					canClear={canClear}
					clearVariant="ghost"
				/>
			}
		>
			<FilterInputField
				id="filter-contratos-cpfCnpj"
				label="CPF/CNPJ"
				placeholder="000.000.000-00"
				value={cpfCnpj}
				onChange={(v) => {
					setCpfCnpj(v);
					onFilter({ ...filters, cpfCnpj: v });
				}}
			/>
			<FilterInputField
				id="filter-contratos-nome"
				label="Nome"
				placeholder="Buscar por nome..."
				value={nome}
				onChange={(v) => {
					setNome(v);
					onFilter({ ...filters, nome: v });
				}}
			/>
			<FilterSelectField<string>
				id="filter-contratos-status"
				label="Status"
				value={status}
				placeholder="Status do Contrato"
				options={Object.entries(CONTRATO_STATUS_LABELS).map(
					([value, label]) => ({
						value,
						label,
					}),
				)}
				onChange={(v) => {
					const newStatus = (v ?? "all") as ContratosTableFilters["status"];
					setStatus(newStatus);
					onFilter({ ...filters, status: newStatus });
				}}
			/>
			<FilterInputField
				id="filter-contratos-id"
				label="ID Contrato"
				placeholder="ID do contrato"
				value={contratoId}
				onChange={(v) => {
					setContratoId(v);
					onFilter({ ...filters, contratoId: v });
				}}
			/>
		</FilterLayout>
	);
}
