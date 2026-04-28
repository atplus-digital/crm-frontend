import { Card, CardContent, CardHeader, CardTitle } from "#/components/ui/card";
import { Separator } from "#/components/ui/separator";
import { DetailField } from "#/features/cs/components/detail-field";
import type { ContratoWithCliente } from "#/features/cs/contratos/contratos-types";

interface EnderecoCardProps {
	contrato: ContratoWithCliente;
}

export function EnderecoCard({ contrato }: EnderecoCardProps) {
	const cliente = contrato.f_nc_cliente;

	return (
		<Card>
			<CardHeader>
				<CardTitle>Dados do Endereço</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="flex flex-col gap-6">
					<div>
						<h4 className="text-sm font-semibold mb-3">Endereço do Contrato</h4>
						<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
							<DetailField label="Endereço">
								{contrato.endereco ?? "—"}
							</DetailField>
							<DetailField label="Número">{contrato.numero ?? "—"}</DetailField>
							<DetailField label="Bairro">{contrato.bairro ?? "—"}</DetailField>
							<DetailField label="Cidade">{contrato.cidade ?? "—"}</DetailField>
							<DetailField label="CEP">{contrato.cep ?? "—"}</DetailField>
						</div>
					</div>
					<Separator />
					{cliente ? (
						<div>
							<h4 className="text-sm font-semibold mb-3">
								Endereço do Cliente
							</h4>
							<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
								<DetailField label="Endereço">
									{cliente.endereco ?? "—"}
								</DetailField>
								<DetailField label="Número">
									{cliente.numero ?? "—"}
								</DetailField>
								<DetailField label="Bairro">
									{cliente.bairro ?? "—"}
								</DetailField>
								<DetailField label="Cidade">
									{cliente.cidade ?? "—"}
								</DetailField>
								<DetailField label="CEP">{cliente.cep ?? "—"}</DetailField>
							</div>
						</div>
					) : (
						<div>
							<h4 className="text-sm font-semibold mb-3">
								Endereço do Cliente
							</h4>
							<p className="text-sm text-muted-foreground">
								Endereço do cliente não disponível
							</p>
						</div>
					)}
				</div>
			</CardContent>
		</Card>
	);
}
