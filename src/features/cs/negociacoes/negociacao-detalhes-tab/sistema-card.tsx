import { Calendar } from "lucide-react";
import { DetailField } from "#/components/detail-field";
import { DetailSection } from "#/components/detail-section";
import type { NegociacaoWithRelations } from "#/features/cs/negociacoes/negociacoes-types";
import { formatDatePtBR } from "#/lib/utils";

interface SistemaCardProps {
	negociacao: NegociacaoWithRelations;
}

export function SistemaCard({ negociacao }: SistemaCardProps) {
	return (
		<DetailSection title="Sistema" icon={<Calendar className="size-4" />}>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
				<DetailField label="Criado em">
					{formatDatePtBR(negociacao.createdAt)}
				</DetailField>
				<DetailField label="Atualizado em">
					{formatDatePtBR(negociacao.updatedAt)}
				</DetailField>
				<DetailField label="Criado por">
					{negociacao.createdBy?.nickname ?? "—"}
				</DetailField>
				<DetailField label="Atualizado por">
					{negociacao.updatedBy?.nickname ?? "—"}
				</DetailField>
			</div>
		</DetailSection>
	);
}
