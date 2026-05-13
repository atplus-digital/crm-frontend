import { DetailField } from "#/components/detail-field";
import { DetailSection } from "#/components/detail-section";
import type { TrocaEnderecoWithRelations } from "#/features/cs/troca-de-endereco/troca-endereco-hooks";

interface ObservacoesCardProps {
	trocaEndereco: TrocaEnderecoWithRelations;
}

export function ObservacoesCard({ trocaEndereco }: ObservacoesCardProps) {
	return (
		<DetailSection title="Observações">
			<div className="grid grid-cols-1 gap-4">
				<DetailField label="Observação">
					{trocaEndereco.f_obs || "—"}
				</DetailField>
			</div>
		</DetailSection>
	);
}
