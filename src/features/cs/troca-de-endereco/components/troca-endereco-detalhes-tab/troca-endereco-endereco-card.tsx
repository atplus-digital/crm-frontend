import { DetailField } from "#/features/cs/components/detail-field";
import { DetailSection } from "#/features/cs/components/detail-section";
import type { TrocaEnderecoWithRelations } from "#/features/cs/troca-de-endereco/troca-endereco-hooks";

interface EnderecoCardProps {
	trocaEndereco: TrocaEnderecoWithRelations;
}

export function EnderecoCard({ trocaEndereco }: EnderecoCardProps) {
	return (
		<DetailSection title="Endereço">
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
				<DetailField label="Logradouro">
					{trocaEndereco.f_endereco || "—"}
				</DetailField>
				<DetailField label="Número">
					{trocaEndereco.f_endereco_numero || "—"}
				</DetailField>
				<DetailField label="Complemento">
					{trocaEndereco.f_endereco_complemento || "—"}
				</DetailField>
				<DetailField label="Bairro">
					{trocaEndereco.f_bairro || "—"}
				</DetailField>
				<DetailField label="Cidade">
					{trocaEndereco.f_endereco_cidade || "—"}
				</DetailField>
				<DetailField label="Estado">
					{trocaEndereco.f_endereco_estado || "—"}
				</DetailField>
				<DetailField label="CEP">{trocaEndereco.f_cep || "—"}</DetailField>
			</div>
		</DetailSection>
	);
}
