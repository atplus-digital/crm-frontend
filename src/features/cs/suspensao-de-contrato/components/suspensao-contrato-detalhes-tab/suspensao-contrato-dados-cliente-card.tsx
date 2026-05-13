import { FileText } from "lucide-react";
import { DetailField } from "#/features/cs/components/detail-field";
import { DetailSection } from "#/features/cs/components/detail-section";
import type { SuspensaoContratoWithRelations } from "#/features/cs/suspensao-de-contrato/suspensao-de-contrato-types";

interface DadosClienteCardProps {
	suspensaoContrato: SuspensaoContratoWithRelations;
}

export function DadosClienteCard({ suspensaoContrato }: DadosClienteCardProps) {
	return (
		<DetailSection
			title="Dados do Cliente"
			description="Informações do cliente"
			icon={<FileText className="size-4" />}
		>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
				<DetailField label="Título">{suspensaoContrato.f_titulo}</DetailField>
				<DetailField label="CPF">{suspensaoContrato.f_cpf}</DetailField>
				<DetailField label="ID Contrato">
					{suspensaoContrato.f_id_contrato}
				</DetailField>
			</div>
		</DetailSection>
	);
}
