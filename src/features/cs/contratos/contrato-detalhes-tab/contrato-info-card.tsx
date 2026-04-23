import { Card, CardContent, CardHeader, CardTitle } from "#/components/ui/card";
import type { ContratoWithCliente } from "#/features/cs/contratos/contratos-types";
import { DetailField } from "#/features/cs/detail-field";
import { formatCurrency, formatDatePtBR } from "#/lib/utils";

interface ContratoInfoCardProps {
	contrato: ContratoWithCliente;
}

export function ContratoInfoCard({ contrato }: ContratoInfoCardProps) {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Dados do Contrato</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
					<DetailField label="ID Contrato IXC">{contrato.id}</DetailField>
					<DetailField label="Data de Ativação">
						{formatDatePtBR(contrato.data_ativacao ?? "")}
					</DetailField>
					<DetailField label="Descrição Contrato IXC">
						{contrato.contrato}
					</DetailField>
					<DetailField label="Fidelidade">
						{contrato.fidelidade ? `${contrato.fidelidade} meses` : "—"}
					</DetailField>
					<DetailField label="Data Expiração">
						{formatDatePtBR(contrato.data_validade ?? "")}
					</DetailField>
					<DetailField label="Valor Unitário">
						{contrato.valor_unitario
							? formatCurrency(Number(contrato.valor_unitario))
							: "—"}
					</DetailField>
				</div>
			</CardContent>
		</Card>
	);
}
