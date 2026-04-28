import { User } from "lucide-react";
import { DetailField } from "#/features/cs/components/detail-field";
import { DetailSection } from "#/features/cs/components/detail-section";
import type { ContratoWithCliente } from "#/features/cs/contratos/contratos-types";

interface DadosClienteCardProps {
	contrato: ContratoWithCliente;
}

export function DadosClienteCard({ contrato }: DadosClienteCardProps) {
	const cliente = contrato.f_nc_cliente;

	return (
		<DetailSection
			title="Dados do Cliente"
			icon={<User className="size-4 text-primary" />}
			description="Informações do cliente vinculado ao contrato"
		>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
				<DetailField label="Nome/Razão Social">
					{cliente?.razao ?? "—"}
				</DetailField>
				<DetailField label="CPF/CNPJ">{cliente?.cnpj_cpf ?? "—"}</DetailField>
				<DetailField label="Fantasia">{cliente?.fantasia ?? "—"}</DetailField>
				<DetailField label="E-mail">{cliente?.email ?? "—"}</DetailField>
				<DetailField label="Telefone Celular">
					{cliente?.telefone_celular ?? "—"}
				</DetailField>
				<DetailField label="Tipo de Pessoa">
					{cliente?.tipo_pessoa ?? "—"}
				</DetailField>
			</div>
		</DetailSection>
	);
}
