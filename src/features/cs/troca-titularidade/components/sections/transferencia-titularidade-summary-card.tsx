import { Calendar, FileText, MapPin, User } from "lucide-react";
import { StatusBadge as SharedStatusBadge } from "#/components/badges/status-badge";
import { Card, CardContent, CardHeader } from "#/components/ui/card";
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
	const clientInitial = (data.f_cessionario || "?").charAt(0).toUpperCase();

	return (
		<Card className="border-border/50 bg-muted/30 pb-0">
			<CardHeader>
				<div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
					<div className="flex items-center gap-4">
						<div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
							{clientInitial}
						</div>
						<div>
							<h1 className="text-xl font-bold tracking-tight">
								{data.f_cessionario || "—"}
							</h1>
							<p className="text-sm font-bold text-muted-foreground">
								Transferência #{data.id}
							</p>
						</div>
					</div>
					<div className="flex flex-wrap items-center gap-2">
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
					</div>
				</div>
			</CardHeader>
			<CardContent className="border-t bg-background/70 py-4">
				<div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-5">
					<div className="flex items-center gap-2.5">
						<div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
							<FileText className="size-4 text-primary" />
						</div>
						<div className="min-w-0 flex-1">
							<p className="text-xs font-medium text-muted-foreground">
								Nº Contrato
							</p>
							<p className="truncate text-sm font-semibold">
								{data.f_id_contrato || "—"}
							</p>
						</div>
					</div>
					<div className="flex items-center gap-2.5">
						<div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
							<User className="size-4 text-primary" />
						</div>
						<div className="min-w-0 flex-1">
							<p className="text-xs font-medium text-muted-foreground">
								Cedente
							</p>
							<p className="truncate text-sm font-semibold">
								{data.f_cedente || "—"}
							</p>
						</div>
					</div>
					<div className="flex items-center gap-2.5">
						<div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
							<User className="size-4 text-primary" />
						</div>
						<div className="min-w-0 flex-1">
							<p className="text-xs font-medium text-muted-foreground">
								Cessionário
							</p>
							<p className="truncate text-sm font-semibold">
								{data.f_cessionario || "—"}
							</p>
						</div>
					</div>
					<div className="flex items-center gap-2.5">
						<div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
							<MapPin className="size-4 text-primary" />
						</div>
						<div className="min-w-0 flex-1">
							<p className="text-xs font-medium text-muted-foreground">
								Localidade
							</p>
							<p className="truncate text-sm font-semibold">
								{data.f_cidade && data.f_estado
									? `${data.f_cidade}/${data.f_estado}`
									: "—"}
							</p>
						</div>
					</div>
					<div className="flex items-center gap-2.5">
						<div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
							<Calendar className="size-4 text-primary" />
						</div>
						<div className="min-w-0 flex-1">
							<p className="text-xs font-medium text-muted-foreground">
								Criação
							</p>
							<p className="truncate text-sm font-semibold">
								{formatDatePtBR(data.createdAt) || "—"}
							</p>
						</div>
					</div>
				</div>
			</CardContent>
		</Card>
	);
}
