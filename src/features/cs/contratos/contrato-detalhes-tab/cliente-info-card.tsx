import { Card, CardContent, CardHeader, CardTitle } from "#/components/ui/card";
import { DetailField } from "#/features/cs/components/detail-field";
import {
	ContratoStatusBadge,
	InternetStatusBadge,
} from "#/features/cs/contratos/contrato-status-badge";
import type { ContratoWithCliente } from "#/features/cs/contratos/contratos-types";

interface ClienteInfoCardProps {
	contrato: ContratoWithCliente;
}

export function ClienteInfoCard({ contrato }: ClienteInfoCardProps) {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Dados do Cliente</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
					<DetailField label="Nome/Razão Social">
						{contrato.f_nc_cliente?.razao ?? "—"}
					</DetailField>
					<DetailField label="CPF/CNPJ">
						{contrato.f_nc_cliente?.cnpj_cpf ?? "—"}
					</DetailField>
					<DetailField label="Status Contrato">
						<ContratoStatusBadge status={contrato.status} />
					</DetailField>
					<DetailField label="Status Serviço">
						<InternetStatusBadge status={contrato.status_internet} />
					</DetailField>
				</div>
			</CardContent>
		</Card>
	);
}
