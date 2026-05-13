import { Calendar, Clock, Hash, User } from "lucide-react";
import { StatusBadge as SharedStatusBadge } from "#/components/badges/status-badge";
import { MetricItem } from "#/components/metric-item";
import { SummaryCard } from "#/components/summary-card";
import type { SuspensaoContratoWithRelations } from "#/features/cs/suspensao-de-contrato/suspensao-de-contrato-types";
import { SUSPENSAOCONTRATO_STATUS_LABELS } from "#/features/cs/suspensao-de-contrato/suspensao-de-contrato-types";
import { formatDatePtBR } from "#/lib/utils";

interface SuspensaoContratoSummaryCardProps {
	suspensaoContrato: SuspensaoContratoWithRelations;
}

export function SuspensaoContratoSummaryCard({
	suspensaoContrato,
}: SuspensaoContratoSummaryCardProps) {
	return (
		<SummaryCard
			title={suspensaoContrato.f_titulo || "—"}
			subtitle={`SUSPENSÃO DE CONTRATO (ID ${suspensaoContrato.f_id_contrato}) — ${suspensaoContrato.f_titulo || "—"}`}
			avatarName={suspensaoContrato.f_titulo || ""}
			headerActions={
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
			}
		>
			<div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
				<MetricItem
					icon={<Hash className="size-4 text-primary" />}
					label="ID Contrato"
					value={suspensaoContrato.f_id_contrato}
				/>
				<MetricItem
					icon={<User className="size-4 text-primary" />}
					label="CPF"
					value={suspensaoContrato.f_cpf}
				/>
				<MetricItem
					icon={<Clock className="size-4 text-primary" />}
					label="Dias Suspenso"
					value={suspensaoContrato.f_dias_suspensao}
				/>
				<MetricItem
					icon={<Calendar className="size-4 text-primary" />}
					label="Criado em"
					value={formatDatePtBR(suspensaoContrato.createdAt)}
				/>
			</div>
		</SummaryCard>
	);
}
