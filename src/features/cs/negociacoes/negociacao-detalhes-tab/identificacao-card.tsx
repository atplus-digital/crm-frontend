import { Card, CardContent, CardHeader, CardTitle } from "#/components/ui/card";
import { DetailField } from "#/features/cs/components/detail-field";
import { StatusBadge } from "#/features/cs/negociacoes/negociacao-badges";
import type { NegociacaoWithRelations } from "#/features/cs/negociacoes/negociacoes-types";
import { MOTIVO_LABELS } from "#/features/cs/negociacoes/negociacoes-types";

interface IdentificacaoCardProps {
	negociacao: NegociacaoWithRelations;
}

export function IdentificacaoCard({ negociacao }: IdentificacaoCardProps) {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Identificação</CardTitle>
			</CardHeader>
			<CardContent>
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
					<DetailField label="Ordenação">
						{negociacao.f_ordenacao ?? "—"}
					</DetailField>
				</div>
			</CardContent>
		</Card>
	);
}
