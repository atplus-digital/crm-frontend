import { FileText } from "lucide-react";
import { DetailField } from "#/features/cs/components/detail-field";
import { DetailSection } from "#/features/cs/components/detail-section";
import type { ContratoWithCliente } from "#/features/cs/contratos/contratos-types";
import {
	CLIENTECONTRATO_TIPO_LABELS,
	CLIENTECONTRATO_TIPOCOBRANCA_LABELS,
} from "#/generated/types/d_db_ixcsoft/cliente-contrato";
import { formatDatePtBR } from "#/lib/utils";

function formatTipo(tipo: ContratoWithCliente["tipo"]): string {
	if (!tipo) return "—";
	return CLIENTECONTRATO_TIPO_LABELS[tipo] ?? String(tipo);
}

function formatTipoCobranca(
	tipoCobranca: ContratoWithCliente["tipo_cobranca"],
): string {
	if (!tipoCobranca) return "—";
	return (
		CLIENTECONTRATO_TIPOCOBRANCA_LABELS[tipoCobranca] ?? String(tipoCobranca)
	);
}

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
				<DetailField label="Tipo">{formatTipo(contrato.tipo)}</DetailField>
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
					{formatTipoCobranca(contrato.tipo_cobranca)}
				</DetailField>
				<DetailField label="Parcelas em Atraso">
					{contrato.num_parcelas_atraso ?? "—"}
				</DetailField>
			</div>
		</DetailSection>
	);
}
