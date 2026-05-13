import { DetailField } from "#/components/detail-field";
import { DetailSection } from "#/components/detail-section";
import type { NegociacaoWithRelations } from "#/features/cs/negociacoes/negociacoes-types";
import {
	DATA_VENCIMENTO_LABELS,
	FIDELIDADE_LABELS,
} from "#/features/cs/negociacoes/negociacoes-types";

interface PacoteServicosCardProps {
	negociacao: NegociacaoWithRelations;
}

export function PacoteServicosCard({ negociacao }: PacoteServicosCardProps) {
	return (
		<DetailSection title="Pacote e Serviços">
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
				<DetailField label="Pacote">
					{negociacao.f_pacote?.f_nome_pacote ?? "—"}
				</DetailField>
				<DetailField label="SCM (Mbps)">{negociacao.f_scm ?? "—"}</DetailField>
				<DetailField label="SMP (Mbps)">{negociacao.f_smp ?? "—"}</DetailField>
				<DetailField label="STFC">{negociacao.f_stfc ?? "—"}</DetailField>
				<DetailField label="SVA">{negociacao.f_sva ?? "—"}</DetailField>
				<DetailField label="Fidelidade">
					{negociacao.f_fidelidade
						? FIDELIDADE_LABELS[negociacao.f_fidelidade]
						: "—"}
				</DetailField>
				<DetailField label="Vencimento">
					{negociacao.f_data_vencimento
						? DATA_VENCIMENTO_LABELS[negociacao.f_data_vencimento]
						: "—"}
				</DetailField>
				<DetailField label="Período Final">
					{negociacao.f_periodo_final ?? "—"}
				</DetailField>
			</div>
		</DetailSection>
	);
}
