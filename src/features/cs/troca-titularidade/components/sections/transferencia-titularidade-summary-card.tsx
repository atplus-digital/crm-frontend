import { Calendar, FileText, MapPin, User } from "lucide-react";
import { StatusBadge as SharedStatusBadge } from "#/components/badges/status-badge";
import { MetricItem } from "#/components/metric-item";
import { SummaryCard } from "#/components/summary-card";
import type { CrmTrocaTitularidadeWithRelations } from "#/features/cs/troca-titularidade/troca-titularidade-hooks";
import {
	CRMTROCATITULARIDADE_STATUS_LABELS,
	CRMTROCATITULARIDADE_SUBSTATUS_LABELS,
} from "#/generated/types/nocobase/crm-troca-titularidade";
import { formatDatePtBR } from "#/lib/utils";

interface TransferenciaTitularidadeSummaryCardProps {
	transferencia: CrmTrocaTitularidadeWithRelations;
}

export function TransferenciaTitularidadeSummaryCard({
	transferencia: data,
}: TransferenciaTitularidadeSummaryCardProps) {
	return (
		<SummaryCard
			title={data.f_cessionario || "—"}
			subtitle={`Transferência #${data.id}`}
			avatarName={data.f_cessionario || ""}
			headerActions={
				<>
					<div className="flex items-center gap-2 rounded-lg bg-background/80 px-3 py-1.5">
						<span className="text-xs font-medium text-muted-foreground">
							Status
						</span>
						<SharedStatusBadge
							value={data.f_status}
							labels={CRMTROCATITULARIDADE_STATUS_LABELS}
							variant="inline"
							defaultVariant="secondary"
						/>
					</div>
					<div className="flex items-center gap-2 rounded-lg bg-background/80 px-3 py-1.5">
						<span className="text-xs font-medium text-muted-foreground">
							Substatus
						</span>
						<SharedStatusBadge
							value={data.f_substatus}
							labels={CRMTROCATITULARIDADE_SUBSTATUS_LABELS}
							variant="inline"
							defaultVariant="secondary"
						/>
					</div>
				</>
			}
		>
			<div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-5">
				<MetricItem
					icon={<FileText className="size-4 text-primary" />}
					label="Nº Contrato"
					value={data.f_id_contrato}
				/>
				<MetricItem
					icon={<User className="size-4 text-primary" />}
					label="Cedente"
					value={data.f_cedente}
				/>
				<MetricItem
					icon={<User className="size-4 text-primary" />}
					label="Cessionário"
					value={data.f_cessionario}
				/>
				<MetricItem
					icon={<MapPin className="size-4 text-primary" />}
					label="Localidade"
					value={
						data.f_cidade && data.f_estado
							? `${data.f_cidade}/${data.f_estado}`
							: null
					}
				/>
				<MetricItem
					icon={<Calendar className="size-4 text-primary" />}
					label="Criação"
					value={formatDatePtBR(data.createdAt)}
				/>
			</div>
		</SummaryCard>
	);
}
