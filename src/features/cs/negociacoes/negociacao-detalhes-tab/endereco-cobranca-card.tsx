import { DetailField } from "#/components/detail-field";
import { DetailSection } from "#/components/detail-section";
import { Badge } from "#/components/ui/badge";
import type { NegociacaoWithRelations } from "#/features/cs/negociacoes/negociacoes-types";

interface EnderecoCobrancaCardProps {
	negociacao: NegociacaoWithRelations;
}

export function EnderecoCobrancaCard({
	negociacao,
}: EnderecoCobrancaCardProps) {
	return (
		<DetailSection title="Endereço de Cobrança">
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
		</DetailSection>
	);
}
