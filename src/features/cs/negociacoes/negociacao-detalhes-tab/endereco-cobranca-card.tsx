import { Badge } from "#/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "#/components/ui/card";
import { DetailField } from "#/features/cs/components/detail-field";
import type { NegociacaoWithRelations } from "#/features/cs/negociacoes/negociacoes-types";

interface EnderecoCobrancaCardProps {
	negociacao: NegociacaoWithRelations;
}

export function EnderecoCobrancaCard({
	negociacao,
}: EnderecoCobrancaCardProps) {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Endereço de Cobrança</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
					<DetailField label="Endereço Diferente">
						{negociacao.f_endereco_cobranca === "1" ? (
							<Badge variant="secondary">Sim</Badge>
						) : (
							<Badge variant="outline">Não</Badge>
						)}
					</DetailField>
					<DetailField label="Endereço">
						{negociacao.f_endereco_de_cobranca ?? "—"}
					</DetailField>
					<DetailField label="CEP">
						{negociacao.f_cep_cobranca ?? "—"}
					</DetailField>
					<DetailField label="Número">
						{negociacao.f_numero_cobranca ?? "—"}
					</DetailField>
					<DetailField label="Complemento">
						{negociacao.f_complemento_cobranca ?? "—"}
					</DetailField>
					<DetailField label="Bairro">
						{negociacao.f_bairro_cobranca ?? "—"}
					</DetailField>
					<DetailField label="Cidade">
						{negociacao.f_cidade_cobranca ?? "—"}
					</DetailField>
					<DetailField label="Estado">
						{negociacao.f_estado_cobranca ?? "—"}
					</DetailField>
				</div>
			</CardContent>
		</Card>
	);
}
