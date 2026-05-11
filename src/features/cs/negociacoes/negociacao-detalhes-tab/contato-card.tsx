import { DetailField } from "#/features/cs/components/detail-field";
import { DetailSection } from "#/features/cs/components/detail-section";
import type { NegociacaoWithRelations } from "#/features/cs/negociacoes/negociacoes-types";

interface ContatoCardProps {
	negociacao: NegociacaoWithRelations;
}

export function ContatoCard({ negociacao }: ContatoCardProps) {
	return (
		<DetailSection title="Contato">
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
				<DetailField label="Telefone 1">
					{negociacao.f_telefone ?? "—"}
				</DetailField>
				<DetailField label="Telefone 2">
					{negociacao.f_telefone_2 ?? "—"}
				</DetailField>
				<DetailField label="E-mail Cobrança">
					{negociacao.f_email_cobranca ?? "—"}
				</DetailField>
			</div>
		</DetailSection>
	);
}
