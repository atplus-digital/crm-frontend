import { Badge } from "#/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "#/components/ui/card";
import { DetailField } from "#/features/cs/components/detail-field";
import { PontosAtencaoBadge } from "#/features/cs/negociacoes/negociacao-badges";
import type { NegociacaoWithRelations } from "#/features/cs/negociacoes/negociacoes-types";
import {
	CONFISAO_DIVIDA_LABELS,
	MOTIVO_PONTOS_LABELS,
} from "#/features/cs/negociacoes/negociacoes-types";

interface PontosAtencaoCardProps {
	negociacao: NegociacaoWithRelations;
}

export function PontosAtencaoCard({ negociacao }: PontosAtencaoCardProps) {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Pontos de Atenção</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
					<DetailField label="Pontos de Atenção">
						<PontosAtencaoBadge value={negociacao.f_pontos_atencao} />
					</DetailField>
					<DetailField label="Confissão de Dívida">
						{negociacao.f_confissao_divida
							? CONFISAO_DIVIDA_LABELS[negociacao.f_confissao_divida]
							: "—"}
					</DetailField>
					<DetailField label="Motivos">
						{negociacao.f_motivo_pontos &&
						Array.isArray(negociacao.f_motivo_pontos) ? (
							<div className="flex flex-wrap gap-1">
								{negociacao.f_motivo_pontos.map((motivo: string) => (
									<Badge key={motivo} variant="outline">
										{MOTIVO_PONTOS_LABELS[
											motivo as keyof typeof MOTIVO_PONTOS_LABELS
										] ?? motivo}
									</Badge>
								))}
							</div>
						) : (
							"—"
						)}
					</DetailField>
				</div>
			</CardContent>
		</Card>
	);
}
