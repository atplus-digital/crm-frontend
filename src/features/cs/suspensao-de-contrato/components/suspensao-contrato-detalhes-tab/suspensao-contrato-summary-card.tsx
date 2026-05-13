import { Calendar, Clock, Hash, User } from "lucide-react";
import { StatusBadge as SharedStatusBadge } from "#/components/badges/status-badge";
import { Card, CardContent, CardHeader } from "#/components/ui/card";
import type { SuspensaoContratoWithRelations } from "#/features/cs/suspensao-de-contrato/suspensao-de-contrato-types";
import { SUSPENSAOCONTRATO_STATUS_LABELS } from "#/features/cs/suspensao-de-contrato/suspensao-de-contrato-types";
import { formatDatePtBR } from "#/lib/utils";
import { SuspensaoContratoActions } from "../sections/suspensao-contrato-actions";

interface SuspensaoContratoSummaryCardProps {
	suspensaoContrato: SuspensaoContratoWithRelations;
}

export function SuspensaoContratoSummaryCard({
	suspensaoContrato,
}: SuspensaoContratoSummaryCardProps) {
	const initial = suspensaoContrato.f_titulo?.charAt(0)?.toUpperCase() ?? "?";

	return (
		<Card className="border-border/50 bg-muted/30 pb-0">
			<CardHeader>
				<div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
					<div className="flex items-center gap-4">
						<div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
							{initial}
						</div>
						<div>
							<h1 className="text-xl font-bold tracking-tight">
								{suspensaoContrato.f_titulo || "—"}
							</h1>
							<p className="text-sm font-bold text-muted-foreground">
								Suspensão de Contrato — ID Contrato{" "}
								{suspensaoContrato.f_id_contrato}
							</p>
						</div>
					</div>
					<div className="flex flex-wrap items-center gap-2">
						<div className="flex items-center gap-2 rounded-lg bg-background/80 px-3 py-1.5">
							<span className="text-xs font-medium text-muted-foreground">
								Status
							</span>
							<SharedStatusBadge
								value={suspensaoContrato.f_status}
								labels={SUSPENSAOCONTRATO_STATUS_LABELS}
								variant="inline"
								defaultVariant="secondary"
							/>
						</div>
						<SuspensaoContratoActions />
					</div>
				</div>
			</CardHeader>
			<CardContent className="border-t bg-background/70 py-4">
				<div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
					<div className="flex items-center gap-2.5">
						<div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
							<Hash className="size-4 text-primary" />
						</div>
						<div className="min-w-0 flex-1">
							<p className="text-xs font-medium text-muted-foreground">
								ID Contrato
							</p>
							<p className="truncate text-sm font-semibold">
								{suspensaoContrato.f_id_contrato || "—"}
							</p>
						</div>
					</div>
					<div className="flex items-center gap-2.5">
						<div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
							<User className="size-4 text-primary" />
						</div>
						<div className="min-w-0 flex-1">
							<p className="text-xs font-medium text-muted-foreground">CPF</p>
							<p className="truncate text-sm font-semibold">
								{suspensaoContrato.f_cpf || "—"}
							</p>
						</div>
					</div>
					<div className="flex items-center gap-2.5">
						<div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
							<Clock className="size-4 text-primary" />
						</div>
						<div className="min-w-0 flex-1">
							<p className="text-xs font-medium text-muted-foreground">
								Dias Suspenso
							</p>
							<p className="truncate text-sm font-semibold">
								{suspensaoContrato.f_dias_suspensao ?? "—"}
							</p>
						</div>
					</div>
					<div className="flex items-center gap-2.5">
						<div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
							<Calendar className="size-4 text-primary" />
						</div>
						<div className="min-w-0 flex-1">
							<p className="text-xs font-medium text-muted-foreground">
								Criado em
							</p>
							<p className="text-sm font-semibold">
								{formatDatePtBR(suspensaoContrato.createdAt) || "—"}
							</p>
						</div>
					</div>
				</div>
			</CardContent>
		</Card>
	);
}
