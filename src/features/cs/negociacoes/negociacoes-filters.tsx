import { Calendar } from "lucide-react";
import { useId, useState } from "react";
import { FilterActions } from "#/components/filters/filter-actions";
import { Button } from "#/components/ui/button";
import { Input } from "#/components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "#/components/ui/select";
import type {
	NegociacaoFilters,
	NegociacaoStatus,
} from "#/features/cs/negociacoes/negociacoes-types";
import {
	NEGOCIACAO_STATUS_FILTER_OPTIONS,
	NEGOCIACAO_SUBSTATUS_FILTER_OPTIONS,
} from "#/features/cs/negociacoes/negociacoes-types";

interface KanbanFiltersProps {
	filters: NegociacaoFilters;
	onFilter: (filters: NegociacaoFilters) => void;
}

export function KanbanFilters({ filters, onFilter }: KanbanFiltersProps) {
	const [selectedStatuses, setSelectedStatuses] = useState<string[]>(
		filters.status ? [filters.status] : [],
	);
	const [substatus, setSubstatus] = useState<string>(
		filters.substatus || "all",
	);

	const toggleStatus = (status: string) => {
		const newStatuses = selectedStatuses.includes(status)
			? selectedStatuses.filter((s) => s !== status)
			: [status];
		setSelectedStatuses(newStatuses);
		onFilter({ ...filters, status: newStatuses[0] as NegociacaoStatus });
	};

	const clearFilters = () => {
		setSelectedStatuses([]);
		setSubstatus("all");
		onFilter({});
	};

	const hasFilters =
		selectedStatuses.length > 0 ||
		substatus !== "all" ||
		filters.criadoEmInicio;
	const substatusId = useId();

	return (
		<div className="space-y-4">
			<div className="flex flex-col gap-4 sm:flex-row sm:items-start">
				<div className="flex-1 space-y-2">
					<div className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
						<Calendar className="size-3.5" aria-hidden="true" />
						<span>Criado depois de</span>
					</div>
					<Input
						type="date"
						className="h-8 w-full sm:w-40"
						value={filters.criadoEmInicio || ""}
						onChange={(e) =>
							onFilter({ ...filters, criadoEmInicio: e.target.value })
						}
					/>
				</div>

				<div className="flex-1 space-y-2">
					<span className="text-xs font-medium text-muted-foreground">
						Status
					</span>
					<div className="flex flex-wrap gap-1.5">
						{NEGOCIACAO_STATUS_FILTER_OPTIONS.map((status) => (
							<Button
								key={status.value}
								variant={
									selectedStatuses.includes(status.value)
										? "default"
										: "outline"
								}
								size="xs"
								onClick={() => toggleStatus(status.value)}
								className="text-xs"
							>
								{status.label}
							</Button>
						))}
					</div>
				</div>

				<div className="space-y-2 sm:w-48">
					<label
						htmlFor={substatusId}
						className="text-xs font-medium text-muted-foreground"
					>
						Substatus
					</label>
					<Select
						value={substatus}
						onValueChange={(value) => {
							setSubstatus(value);
							onFilter({
								...filters,
								substatus: value === "all" ? undefined : value,
							});
						}}
					>
						<SelectTrigger id={substatusId} className="h-8">
							<SelectValue placeholder="Selecione o substatus" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="all">Todos</SelectItem>
							{NEGOCIACAO_SUBSTATUS_FILTER_OPTIONS.map((opt) => (
								<SelectItem key={opt.value} value={opt.value}>
									{opt.label}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
				</div>
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

interface ListaFiltersProps {
	filters: NegociacaoFilters;
	onFilter: (filters: NegociacaoFilters) => void;
}

export function ListaFilters({ filters, onFilter }: ListaFiltersProps) {
	const hasFilters =
		filters.status ||
		filters.substatus ||
		filters.titulo ||
		filters.cpfCnpj ||
		filters.criadoEmInicio ||
		filters.criadoEmFim;

	const clearFilters = () => {
		onFilter({});
	};

	const statusId = useId();
	const substatusId = useId();
	const tituloId = useId();
	const cpfCnpjId = useId();
	const criadoEmInicioId = useId();
	const criadoEmFimId = useId();

	return (
		<div className="space-y-4">
			<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
				<div className="space-y-2">
					<label
						htmlFor={statusId}
						className="text-xs font-medium text-muted-foreground"
					>
						Status
					</label>
					<Select
						value={filters.status || "all"}
						onValueChange={(value) => {
							onFilter({
								...filters,
								status:
									value === "all" ? undefined : (value as NegociacaoStatus),
							});
						}}
					>
						<SelectTrigger id={statusId} className="h-8">
							<SelectValue placeholder="Selecione o status" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="all">Todos</SelectItem>
							{NEGOCIACAO_STATUS_FILTER_OPTIONS.map((opt) => (
								<SelectItem key={opt.value} value={opt.value}>
									{opt.label}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
				</div>

				<div className="space-y-2">
					<label
						htmlFor={substatusId}
						className="text-xs font-medium text-muted-foreground"
					>
						Substatus
					</label>
					<Select
						value={filters.substatus || "all"}
						onValueChange={(value) => {
							onFilter({
								...filters,
								substatus: value === "all" ? undefined : value,
							});
						}}
					>
						<SelectTrigger id={substatusId} className="h-8">
							<SelectValue placeholder="Selecione o substatus" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="all">Todos</SelectItem>
							{NEGOCIACAO_SUBSTATUS_FILTER_OPTIONS.map((opt) => (
								<SelectItem key={opt.value} value={opt.value}>
									{opt.label}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
				</div>

				<div className="space-y-2">
					<label
						htmlFor={tituloId}
						className="text-xs font-medium text-muted-foreground"
					>
						Título
					</label>
					<Input
						id={tituloId}
						placeholder="Buscar por título"
						value={filters.titulo || ""}
						onChange={(e) => onFilter({ ...filters, titulo: e.target.value })}
						className="h-8"
					/>
				</div>

				<div className="space-y-2">
					<label
						htmlFor={cpfCnpjId}
						className="text-xs font-medium text-muted-foreground"
					>
						CPF/CNPJ
					</label>
					<Input
						id={cpfCnpjId}
						placeholder="000.000.000-00 ou 00.000.000/0000-00"
						value={filters.cpfCnpj || ""}
						onChange={(e) => onFilter({ ...filters, cpfCnpj: e.target.value })}
						className="h-8"
					/>
				</div>

				<div className="space-y-2">
					<label
						htmlFor={criadoEmInicioId}
						className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground"
					>
						<Calendar className="size-3.5" aria-hidden="true" />
						<span>Criado em início</span>
					</label>
					<Input
						id={criadoEmInicioId}
						type="date"
						value={filters.criadoEmInicio || ""}
						onChange={(e) =>
							onFilter({ ...filters, criadoEmInicio: e.target.value })
						}
						className="h-8"
					/>
				</div>

				<div className="space-y-2">
					<label
						htmlFor={criadoEmFimId}
						className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground"
					>
						<Calendar className="size-3.5" aria-hidden="true" />
						<span>Criado em fim</span>
					</label>
					<Input
						id={criadoEmFimId}
						type="date"
						value={filters.criadoEmFim || ""}
						onChange={(e) =>
							onFilter({ ...filters, criadoEmFim: e.target.value })
						}
						className="h-8"
					/>
				</div>
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
