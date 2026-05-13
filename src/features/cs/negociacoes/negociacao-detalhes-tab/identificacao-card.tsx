import { DetailField } from "#/components/detail-field";
import { DetailSection } from "#/components/detail-section";
import { StatusBadge } from "#/features/cs/negociacoes/negociacao-badges";
import type { NegociacaoWithRelations } from "#/features/cs/negociacoes/negociacoes-types";
import { MOTIVO_LABELS } from "#/features/cs/negociacoes/negociacoes-types";

interface IdentificacaoCardProps {
	negociacao: NegociacaoWithRelations;
}

export function IdentificacaoCard({ negociacao }: IdentificacaoCardProps) {
	return (
		<DetailSection title="Identificação">
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
				<DetailField label="Título">{negociacao.f_titulo ?? "—"}</DetailField>
				<DetailField label="Contrato IXC">
					{negociacao.f_contrato_ixc ?? "—"}
				</DetailField>
				<DetailField label="Motivo">
					{negociacao.f_motivo
						? (MOTIVO_LABELS[negociacao.f_motivo] ?? negociacao.f_motivo)
						: "—"}
				</DetailField>
				<DetailField label="Status">
					<StatusBadge
						status={negociacao.f_status}
						substatus={negociacao.f_substatus}
					/>
				</DetailField>
			</div>
		</DetailSection>
	);
}
