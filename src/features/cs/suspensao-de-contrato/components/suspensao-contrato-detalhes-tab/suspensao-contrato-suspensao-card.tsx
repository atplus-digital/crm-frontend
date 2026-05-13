import { Clock } from "lucide-react";
import { DetailField } from "#/features/cs/components/detail-field";
import { DetailSection } from "#/features/cs/components/detail-section";
import type { SuspensaoContratoWithRelations } from "#/features/cs/suspensao-de-contrato/suspensao-de-contrato-types";
import { formatDatePtBR } from "#/lib/utils";

interface SuspensaoCardProps {
	suspensaoContrato: SuspensaoContratoWithRelations;
}

export function SuspensaoCard({ suspensaoContrato }: SuspensaoCardProps) {
	return (
		<DetailSection
			title="Suspensão"
			description="Dados da suspensão"
			icon={<Clock className="size-4" />}
		>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
				<DetailField label="Dias Suspenso">
					{suspensaoContrato.f_dias_suspensao ?? "—"}
				</DetailField>
				<DetailField label="Início">
					{suspensaoContrato.f_inicio_suspensao
						? formatDatePtBR(suspensaoContrato.f_inicio_suspensao)
						: "—"}
				</DetailField>
				<DetailField label="Fim">
					{suspensaoContrato.f_final_suspensao
						? formatDatePtBR(suspensaoContrato.f_final_suspensao)
						: "—"}
				</DetailField>
			</div>
		</DetailSection>
	);
}
