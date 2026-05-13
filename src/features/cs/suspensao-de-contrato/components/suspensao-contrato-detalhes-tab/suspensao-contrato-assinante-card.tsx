import { User } from "lucide-react";
import { DetailField } from "#/components/detail-field";
import { DetailSection } from "#/components/detail-section";
import type { SuspensaoContratoWithRelations } from "#/features/cs/suspensao-de-contrato/suspensao-de-contrato-types";

interface AssinanteCardProps {
	suspensaoContrato: SuspensaoContratoWithRelations;
}

export function AssinanteCard({ suspensaoContrato }: AssinanteCardProps) {
	return (
		<DetailSection
			title="Dados do Assinante"
			description="Informações do assinante"
			icon={<User className="size-4" />}
		>
			<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
				<DetailField label="Título">{suspensaoContrato.f_titulo}</DetailField>
				<DetailField label="CPF">{suspensaoContrato.f_cpf}</DetailField>
			</div>
		</DetailSection>
	);
}
