import { FileText } from "lucide-react";
import { DetailField } from "#/features/cs/components/detail-field";
import { DetailSection } from "#/features/cs/components/detail-section";
import type { ContratoWithCliente } from "#/features/cs/contratos/contratos-types";
import { formatDatePtBR } from "#/lib/utils";

interface ContratoInfoCardProps {
	contrato: ContratoWithCliente;
}

export function ContratoInfoCard({ contrato }: ContratoInfoCardProps) {
	return (
		<DetailSection
			title="Dados do Contrato"
			icon={<FileText className="size-4 text-primary" />}
			description="Informações do contrato no IXC"
		>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
				<DetailField label="ID Contrato IXC">{contrato.id}</DetailField>
				<DetailField label="Descrição Contrato">
					{contrato.contrato}
				</DetailField>
				<DetailField label="Tipo">{contrato.tipo ?? "—"}</DetailField>
				<DetailField label="Data de Ativação">
					{formatDatePtBR(contrato.data_ativacao ?? "")}
				</DetailField>
				<DetailField label="Data de Expiração">
					{formatDatePtBR(contrato.data_validade ?? "")}
				</DetailField>
				<DetailField label="Fidelidade">
					{contrato.fidelidade ? `${contrato.fidelidade} meses` : "—"}
				</DetailField>
				<DetailField label="E-mail de Cobrança">
					{contrato.email_cobranca ?? "—"}
				</DetailField>
				<DetailField label="Tipo de Cobrança">
					{contrato.tipo_cobranca ?? "—"}
				</DetailField>
				<DetailField label="Parcelas em Atraso">
					{contrato.num_parcelas_atraso ?? "—"}
				</DetailField>
			</div>
		</DetailSection>
	);
}
