import { FileText } from "lucide-react";
import { StatusBadge as SharedStatusBadge } from "#/components/badges/status-badge";
import { DetailField } from "#/features/cs/detail-field";
import { DetailSection } from "#/features/cs/detail-section";
import {
	CRMTROCATITULARIDADE_STATUS_LABELS,
	CRMTROCATITULARIDADE_SUBSTATUS_LABELS,
	CRMTROCATITULARIDADE_TIPOPESSOA_LABELS,
} from "#/generated/nocobase/crm-troca-titularidade";
import { formatDatePtBR } from "#/lib/utils";
import type { CrmTrocaTitularidadeWithRelations } from "../../troca-titularidade-hooks";

interface IdentificationSectionProps {
	trocaTitularidade: CrmTrocaTitularidadeWithRelations;
}

export function IdentificationSection({
	trocaTitularidade: data,
}: IdentificationSectionProps) {
	return (
		<DetailSection
			title="Identificação"
			description="Informações básicas sobre a transferência"
			icon={<FileText className="size-4" />}
		>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
				<DetailField label="ID">{data.id}</DetailField>
				<DetailField label="Nº Contrato">{data.f_id_contrato}</DetailField>
				<DetailField label="Tipo de Pessoa">
					{CRMTROCATITULARIDADE_TIPOPESSOA_LABELS[data.f_tipo_pessoa] ??
						data.f_tipo_pessoa}
				</DetailField>
				<DetailField label="Status">
					<SharedStatusBadge
						value={data.f_status}
						labels={CRMTROCATITULARIDADE_STATUS_LABELS}
						variant="inline"
						defaultVariant="secondary"
					/>
				</DetailField>
				<DetailField label="Substatus">
					<SharedStatusBadge
						value={data.f_substatus}
						labels={CRMTROCATITULARIDADE_SUBSTATUS_LABELS}
						variant="inline"
						defaultVariant="secondary"
					/>
				</DetailField>
				<DetailField label="Data de Criação">
					{formatDatePtBR(data.createdAt)}
				</DetailField>
			</div>
		</DetailSection>
	);
}
