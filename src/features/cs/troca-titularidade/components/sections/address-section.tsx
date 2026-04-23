import { MapPin } from "lucide-react";
import { DetailField } from "#/features/cs/components/detail-field";
import { DetailSection } from "#/features/cs/components/detail-section";
import type { CrmTrocaTitularidadeWithRelations } from "../../troca-titularidade-hooks";

interface AddressSectionProps {
	trocaTitularidade: CrmTrocaTitularidadeWithRelations;
}

export function AddressSection({
	trocaTitularidade: data,
}: AddressSectionProps) {
	return (
		<DetailSection
			title="Endereço"
			description="Localização associada à transferência"
			icon={<MapPin className="size-4" />}
		>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
				<DetailField label="Logradouro">{data.f_endereco}</DetailField>
				<DetailField label="Número">{data.f_numero}</DetailField>
				<DetailField label="Complemento">{data.f_complemento}</DetailField>
				<DetailField label="Bairro">{data.f_bairro}</DetailField>
				<DetailField label="Cidade">
					{data.f_cidade}-{data.f_estado}
				</DetailField>
				<DetailField label="CEP">{data.f_cep}</DetailField>
			</div>
		</DetailSection>
	);
}
