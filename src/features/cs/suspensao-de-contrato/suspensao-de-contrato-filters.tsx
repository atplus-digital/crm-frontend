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
import type { SuspensaoContratoStatus } from "#/features/cs/suspensao-de-contrato/suspensao-de-contrato-types";
import {
	SUSPENSAO_CONTRATO_STATUS_FILTER_OPTIONS,
	type SuspensaoContratoFilters,
} from "#/features/cs/suspensao-de-contrato/suspensao-de-contrato-types";

interface SuspensaoContratoFilterBarProps {
	filters: SuspensaoContratoFilters;
	onFilter: (filters: SuspensaoContratoFilters) => void;
}

export function SuspensaoContratoFilterBar({
	filters,
	onFilter,
}: SuspensaoContratoFilterBarProps) {
	const hasFilters =
		filters.status ||
		filters.titulo ||
		filters.createdAt ||
		filters.updatedAt ||
		filters.criadoPor;

	const clearFilters = () => onFilter({});

	const statusId = useId();
	const tituloId = useId();
	const createdAtId = useId();
	const updatedAtId = useId();
	const criadoPorId = useId();

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
										: (value as SuspensaoContratoStatus),
							})
						}
					>
						<SelectTrigger id={statusId} className="h-8">
							<SelectValue placeholder="Selecione o status" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="all">Todos</SelectItem>
							{SUSPENSAO_CONTRATO_STATUS_FILTER_OPTIONS.map((opt) => (
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
						htmlFor={createdAtId}
						className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground"
					>
						<Calendar className="size-3.5" aria-hidden="true" />
						<span>Criado em</span>
					</label>
					<Input
						id={createdAtId}
						type="date"
						value={filters.createdAt || ""}
						onChange={(e) =>
							onFilter({ ...filters, createdAt: e.target.value })
						}
						className="h-8"
					/>
				</div>

				<div className="space-y-2">
					<label
						htmlFor={updatedAtId}
						className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground"
					>
						<Calendar className="size-3.5" aria-hidden="true" />
						<span>Atualizado em</span>
					</label>
					<Input
						id={updatedAtId}
						type="date"
						value={filters.updatedAt || ""}
						onChange={(e) =>
							onFilter({ ...filters, updatedAt: e.target.value })
						}
						className="h-8"
					/>
				</div>

				<div className="space-y-2">
					<label
						htmlFor={criadoPorId}
						className="text-xs font-medium text-muted-foreground"
					>
						Criado por
					</label>
					<Input
						id={criadoPorId}
						placeholder="Buscar por criador"
						value={filters.criadoPor || ""}
						onChange={(e) =>
							onFilter({
								...filters,
								criadoPor: Number(e.target.value) || undefined,
							})
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
