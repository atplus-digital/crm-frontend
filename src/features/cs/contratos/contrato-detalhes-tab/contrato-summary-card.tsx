import {
	ArrowRightLeft,
	Calendar,
	DollarSign,
	FileWarning,
	Hash,
	MapPin,
	Package,
	Pause,
	Plus,
	RefreshCw,
} from "lucide-react";
import type { ActionItem } from "#/components/actions-menu";
import { ActionsMenu } from "#/components/actions-menu";
import { Card, CardContent, CardHeader } from "#/components/ui/card";
import {
	ContratoStatusBadge,
	InternetStatusBadge,
} from "#/features/cs/contratos/contrato-status-badge";
import type { ContratoWithCliente } from "#/features/cs/contratos/contratos-types";
import { formatCurrency, formatDatePtBR } from "#/lib/utils";

const CONTRATO_ACTIONS: readonly ActionItem[] = [
	{ icon: Plus, label: "Nova Contratação" },
	{ icon: ArrowRightLeft, label: "Transferir" },
	{ icon: RefreshCw, label: "Renegociar" },
	{ icon: MapPin, label: "Trocar Endereço" },
	{ icon: Pause, label: "Suspender" },
	{ icon: FileWarning, label: "Reter" },
];

interface ContratoSummaryCardProps {
	contrato: ContratoWithCliente;
}

export function ContratoSummaryCard({ contrato }: ContratoSummaryCardProps) {
	const clientInitial =
		contrato.f_nc_cliente?.razao?.charAt(0)?.toUpperCase() ?? "?";
	const hasValorUnitario =
		contrato.valor_unitario !== null &&
		contrato.valor_unitario !== undefined &&
		contrato.valor_unitario !== "" &&
		Number(contrato.valor_unitario) > 0;

	return (
		<Card className=" border-border/50 bg-muted/30 pb-0">
			<CardHeader>
				<div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
					<div className="flex items-center gap-4">
						<div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
							{clientInitial}
						</div>
						<div>
							<h1 className="text-xl font-bold tracking-tight">
								{contrato.f_nc_cliente?.razao ?? "—"}
							</h1>
							<p className="text-sm font-bold text-muted-foreground">
								#{contrato.id}
							</p>
						</div>
					</div>
					<div className="flex flex-wrap items-center gap-2">
						<div className="flex items-center gap-2 rounded-lg bg-background/80 px-3 py-1.5">
							<span className="text-xs font-medium text-muted-foreground">
								Status Contrato
							</span>
							<ContratoStatusBadge status={contrato.status} />
						</div>
						<div className="flex items-center gap-2 rounded-lg bg-background/80 px-3 py-1.5">
							<span className="text-xs font-medium text-muted-foreground">
								Status Serviço
							</span>
							<InternetStatusBadge status={contrato.status_internet} />
						</div>
						<ActionsMenu actions={CONTRATO_ACTIONS} />
					</div>
				</div>
			</CardHeader>
			<CardContent className="border-t bg-background/70 py-4">
				<div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-5">
					<div className="flex items-center gap-2.5">
						<div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
							<Package className="size-4 text-primary" />
						</div>
						<div className="min-w-0 flex-1">
							<p className="text-xs font-medium text-muted-foreground">
								Pacote
							</p>
							<p className="truncate text-sm font-semibold">
								{contrato.contrato}
							</p>
						</div>
					</div>
					<div className="flex items-center gap-2.5">
						<div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
							<Hash className="size-4 text-primary" />
						</div>
						<div className="min-w-0 flex-1">
							<p className="text-xs font-medium text-muted-foreground">
								CPF/CNPJ
							</p>
							<p className="truncate text-sm font-semibold">
								{contrato.f_nc_cliente?.cnpj_cpf ?? "—"}
							</p>
						</div>
					</div>
					<div className="flex items-center gap-2.5">
						<div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
							<Calendar className="size-4 text-primary" />
						</div>
						<div className="min-w-0 flex-1">
							<p className="text-xs font-medium text-muted-foreground">
								Ativação
							</p>
							<p className="text-sm font-semibold">
								{formatDatePtBR(contrato.data_ativacao ?? "") || "—"}
							</p>
						</div>
					</div>
					<div className="flex items-center gap-2.5">
						<div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
							<Calendar className="size-4 text-primary" />
						</div>
						<div className="min-w-0 flex-1">
							<p className="text-xs font-medium text-muted-foreground">
								Validade
							</p>
							<p className="text-sm font-semibold">
								{formatDatePtBR(contrato.data_validade ?? "") || "—"}
							</p>
						</div>
					</div>
					{hasValorUnitario && (
						<div className="flex items-center gap-2.5">
							<div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-100 dark:bg-emerald-900/30">
								<DollarSign className="size-4 text-emerald-600 dark:text-emerald-400" />
							</div>
							<div className="min-w-0 flex-1">
								<p className="text-xs font-medium text-muted-foreground">
									Valor Mensal
								</p>
								<p className="truncate text-sm font-bold text-emerald-600 dark:text-emerald-400">
									{formatCurrency(Number(contrato.valor_unitario))}
								</p>
							</div>
						</div>
					)}
				</div>
			</CardContent>
		</Card>
	);
}
