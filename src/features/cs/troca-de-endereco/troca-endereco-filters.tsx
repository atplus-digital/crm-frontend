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
	TROCA_STATUS_FILTER_OPTIONS,
	type TrocaEnderecoFilters,
} from "#/features/cs/troca-de-endereco/troca-endereco-types";
import type { TrocaEnderecoStatus } from "#/generated/nocobase/troca-endereco";

interface TrocaEnderecoFilterBarProps {
	filters: TrocaEnderecoFilters;
	onFilter: (filters: TrocaEnderecoFilters) => void;
}

export function TrocaEnderecoFilterBar({
	filters,
	onFilter,
}: TrocaEnderecoFilterBarProps) {
	const hasFilters =
		filters.status ||
		filters.cliente ||
		filters.idContrato ||
		filters.idAtendimento ||
		filters.criadoEmInicio;

	const clearFilters = () => onFilter({});

	const statusId = useId();
	const clienteId = useId();
	const contratoId = useId();
	const atendimentoId = useId();
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
									value === "all" ? undefined : (value as TrocaEnderecoStatus),
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
						htmlFor={clienteId}
						className="text-xs font-medium text-muted-foreground"
					>
						Cliente
					</label>
					<Input
						id={clienteId}
						placeholder="Buscar por cliente"
						value={filters.cliente || ""}
						onChange={(e) => onFilter({ ...filters, cliente: e.target.value })}
						className="h-8"
					/>
				</div>

				<div className="space-y-2">
					<label
						htmlFor={contratoId}
						className="text-xs font-medium text-muted-foreground"
					>
						ID Contrato
					</label>
					<Input
						id={contratoId}
						placeholder="Buscar por ID do contrato"
						value={filters.idContrato || ""}
						onChange={(e) =>
							onFilter({ ...filters, idContrato: e.target.value })
						}
						className="h-8"
					/>
				</div>

				<div className="space-y-2">
					<label
						htmlFor={atendimentoId}
						className="text-xs font-medium text-muted-foreground"
					>
						ID Atendimento
					</label>
					<Input
						id={atendimentoId}
						placeholder="Buscar por ID do atendimento"
						value={filters.idAtendimento || ""}
						onChange={(e) =>
							onFilter({ ...filters, idAtendimento: e.target.value })
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
