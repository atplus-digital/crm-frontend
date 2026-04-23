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
import type {
	NegociacaoFilters,
	NegociacaoStatus,
} from "#/features/cs/negociacoes/negociacoes-types";
import {
	NEGOCIACAO_STATUS_FILTER_OPTIONS,
	NEGOCIACAO_SUBSTATUS_FILTER_OPTIONS,
} from "#/features/cs/negociacoes/negociacoes-types";

export interface ListaFiltersProps {
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
