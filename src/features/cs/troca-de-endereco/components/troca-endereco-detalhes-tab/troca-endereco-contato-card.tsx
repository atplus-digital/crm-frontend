import { DetailField } from "#/components/detail-field";
import { DetailSection } from "#/components/detail-section";
import type { TrocaEnderecoWithRelations } from "#/features/cs/troca-de-endereco/troca-endereco-hooks";
import { formatPhone } from "#/lib/utils";

interface ContatoCardProps {
	trocaEndereco: TrocaEnderecoWithRelations;
}

export function ContatoCard({ trocaEndereco }: ContatoCardProps) {
	return (
		<DetailSection title="Contato">
			<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
				<DetailField label="Telefone de Contato">
					{trocaEndereco.f_telefone_contato
						? formatPhone(trocaEndereco.f_telefone_contato)
						: "—"}
				</DetailField>
				<DetailField label="Referência">
					{trocaEndereco.f_endereco_referencia || "—"}
				</DetailField>
			</div>
		</DetailSection>
	);
}
