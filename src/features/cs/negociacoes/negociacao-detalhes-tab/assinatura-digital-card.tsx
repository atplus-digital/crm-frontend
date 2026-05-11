import { Badge } from "#/components/ui/badge";
import { DetailField } from "#/features/cs/components/detail-field";
import { DetailSection } from "#/features/cs/components/detail-section";
import type { NegociacaoWithRelations } from "#/features/cs/negociacoes/negociacoes-types";

interface AssinaturaDigitalCardProps {
	negociacao: NegociacaoWithRelations;
}

export function AssinaturaDigitalCard({
	negociacao,
}: AssinaturaDigitalCardProps) {
	return (
		<DetailSection title="Assinatura Digital">
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
				<DetailField label="ZapSign">
					{negociacao.f_zapsign ? (
						<Badge variant="default">Ativo</Badge>
					) : (
						<Badge variant="outline">Inativo</Badge>
					)}
				</DetailField>
				<DetailField label="Assinatura Gov">
					{negociacao.f_assinatura_gov ? (
						<Badge variant="default">Ativo</Badge>
					) : (
						<Badge variant="outline">Inativo</Badge>
					)}
				</DetailField>
				<DetailField label="Link de Assinatura">
					{negociacao.f_link_assinatura ? (
						<a
							href={negociacao.f_link_assinatura}
							target="_blank"
							rel="noopener noreferrer"
							className="text-primary hover:underline text-sm"
						>
							Abrir link
						</a>
					) : (
						"—"
					)}
				</DetailField>
				<DetailField label="Responsável">
					{negociacao.f_responsavel_assinatura ?? "—"}
				</DetailField>
				<DetailField label="CPF Responsável">
					{negociacao.f_cpf_responsavel_assinatura ?? "—"}
				</DetailField>
			</div>
		</DetailSection>
	);
}
