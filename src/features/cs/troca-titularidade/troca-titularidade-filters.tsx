import { Calendar } from "lucide-react";
import { useId } from "react";
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

interface TrocaTitularidadeFilterBarProps {
	filters: TrocaTitularidadeFilters;
	onFilter: (filters: TrocaTitularidadeFilters) => void;
}

export function TrocaTitularidadeFilterBar({
	filters,
	onFilter,
}: TrocaTitularidadeFilterBarProps) {
	const hasFilters =
		filters.status ||
		filters.substatus ||
		filters.estado ||
		filters.cidade ||
		filters.contratoId ||
		filters.cedente ||
		filters.cessionario ||
		filters.criadoEmInicio;

	const clearFilters = () => onFilter({});

	const statusId = useId();
	const substatusId = useId();
	const estadoId = useId();
	const cidadeId = useId();
	const contratoId = useId();
	const cedenteId = useId();
	const cessionarioId = useId();
	const criadoEmInicioId = useId();

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
						onValueChange={(value) =>
							onFilter({
								...filters,
								status:
									value === "all"
										? undefined
										: (value as CrmTrocaTitularidadeStatus),
							})
						}
					>
						<SelectTrigger id={statusId} className="h-8">
							<SelectValue placeholder="Selecione o status" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="all">Todos</SelectItem>
							{TROCA_STATUS_FILTER_OPTIONS.map((opt) => (
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
						onValueChange={(value) =>
							onFilter({
								...filters,
								substatus:
									value === "all"
										? undefined
										: (value as CrmTrocaTitularidadeSubstatus),
							})
						}
					>
						<SelectTrigger id={substatusId} className="h-8">
							<SelectValue placeholder="Selecione o substatus" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="all">Todos</SelectItem>
							{TROCA_SUBSTATUS_FILTER_OPTIONS.map((opt) => (
								<SelectItem key={opt.value} value={opt.value}>
									{opt.label}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
				</div>

				<div className="space-y-2">
					<label
						htmlFor={estadoId}
						className="text-xs font-medium text-muted-foreground"
					>
						Estado
					</label>
					<Select
						value={filters.estado || "all"}
						onValueChange={(value) =>
							onFilter({
								...filters,
								estado:
									value === "all"
										? undefined
										: (value as CrmTrocaTitularidadeEstado),
							})
						}
					>
						<SelectTrigger id={estadoId} className="h-8">
							<SelectValue placeholder="Selecione o estado" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="all">Todos</SelectItem>
							{TROCA_ESTADO_FILTER_OPTIONS.map((opt) => (
								<SelectItem key={opt.value} value={opt.value}>
									{opt.label}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
				</div>

				<div className="space-y-2">
					<label
						htmlFor={cidadeId}
						className="text-xs font-medium text-muted-foreground"
					>
						Cidade
					</label>
					<Input
						id={cidadeId}
						placeholder="Buscar por cidade"
						value={filters.cidade || ""}
						onChange={(e) => onFilter({ ...filters, cidade: e.target.value })}
						className="h-8"
					/>
				</div>

				<div className="space-y-2">
					<label
						htmlFor={contratoId}
						className="text-xs font-medium text-muted-foreground"
					>
						Nº Contrato
					</label>
					<Input
						id={contratoId}
						placeholder="Buscar por nº do contrato"
						value={filters.contratoId || ""}
						onChange={(e) =>
							onFilter({ ...filters, contratoId: e.target.value })
						}
						className="h-8"
					/>
				</div>

				<div className="space-y-2">
					<label
						htmlFor={cedenteId}
						className="text-xs font-medium text-muted-foreground"
					>
						Cedente
					</label>
					<Input
						id={cedenteId}
						placeholder="Buscar por cedente"
						value={filters.cedente || ""}
						onChange={(e) => onFilter({ ...filters, cedente: e.target.value })}
						className="h-8"
					/>
				</div>

				<div className="space-y-2">
					<label
						htmlFor={cessionarioId}
						className="text-xs font-medium text-muted-foreground"
					>
						Cessionário
					</label>
					<Input
						id={cessionarioId}
						placeholder="Buscar por cessionário"
						value={filters.cessionario || ""}
						onChange={(e) =>
							onFilter({ ...filters, cessionario: e.target.value })
						}
						className="h-8"
					/>
				</div>

				<div className="space-y-2">
					<label
						htmlFor={criadoEmInicioId}
						className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground"
					>
						<Calendar className="size-3.5" aria-hidden="true" />
						<span>Criado depois de</span>
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
