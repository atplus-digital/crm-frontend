import { Mail } from "lucide-react";
import { DetailField } from "#/components/detail-field";
import { DetailSection } from "#/components/detail-section";
import type { SuspensaoContratoWithRelations } from "#/features/cs/suspensao-de-contrato/suspensao-de-contrato-types";
import { formatPhone } from "#/lib/utils";

interface EnvioCardProps {
	suspensaoContrato: SuspensaoContratoWithRelations;
}

export function EnvioCard({ suspensaoContrato }: EnvioCardProps) {
	return (
		<DetailSection
			title="Envio de Assinatura"
			description="Dados para envio da assinatura"
			icon={<Mail className="size-4" />}
		>
			<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
				<DetailField label="Email">{suspensaoContrato.f_email}</DetailField>
				<DetailField label="Telefone">
					{suspensaoContrato.f_telefone
						? formatPhone(suspensaoContrato.f_telefone)
						: "—"}
				</DetailField>
			</div>
		</DetailSection>
	);
}
