import { useEffect, useState } from "react";
import { FilterActions } from "#/components/filters/filter-actions";
import { Input } from "#/components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "#/components/ui/select";
import {
	CONTRATO_STATUS_LABELS,
	type ContratoFilters,
} from "#/features/cs/contratos-types";

interface ContratosFiltersProps {
	onFilter: (filters: ContratoFilters) => void;
	currentFilters: ContratoFilters;
}

export function ContratosFilters({
	onFilter,
	currentFilters,
}: ContratosFiltersProps) {
	const [cpfCnpj, setCpfCnpj] = useState(currentFilters.cpfCnpj ?? "");
	const [nome, setNome] = useState(currentFilters.nome ?? "");
	const [status, setStatus] = useState(currentFilters.status ?? "");
	const [contratoId, setContratoId] = useState(
		currentFilters.contratoId?.toString() ?? "",
	);

	useEffect(() => {
		setCpfCnpj(currentFilters.cpfCnpj ?? "");
		setNome(currentFilters.nome ?? "");
		setStatus(currentFilters.status ?? "");
		setContratoId(currentFilters.contratoId?.toString() ?? "");
	}, [currentFilters]);

	const allFieldsEmpty = !cpfCnpj && !nome && !status && !contratoId;

	function handleFilter() {
		onFilter({
			cpfCnpj: cpfCnpj || undefined,
			nome: nome || undefined,
			status: (status || undefined) as ContratoFilters["status"],
			contratoId: contratoId ? Number(contratoId) : undefined,
		});
	}

	function handleClear() {
		setCpfCnpj("");
		setNome("");
		setStatus("");
		setContratoId("");
		onFilter({});
	}

	return (
		<div className="rounded-lg border bg-card p-4">
			<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
				<Input
					placeholder="000.000.000-00"
					value={cpfCnpj}
					onChange={(e) => setCpfCnpj(e.target.value)}
				/>
				<Input
					placeholder="Buscar por nome..."
					value={nome}
					onChange={(e) => setNome(e.target.value)}
				/>
				<Select value={status} onValueChange={setStatus}>
					<SelectTrigger className="w-full">
						<SelectValue placeholder="Status do Contrato" />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="all">Todos</SelectItem>
						{Object.entries(CONTRATO_STATUS_LABELS).map(([value, label]) => (
							<SelectItem key={value} value={value}>
								{label}
							</SelectItem>
						))}
					</SelectContent>
				</Select>
				<Input
					type="number"
					placeholder="ID do contrato"
					value={contratoId}
					onChange={(e) => setContratoId(e.target.value)}
				/>
			</div>
			<FilterActions
				className="mt-4"
				onApply={handleFilter}
				onClear={handleClear}
				canClear={!allFieldsEmpty}
			/>
		</div>
	);
}
