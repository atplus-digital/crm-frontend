import { Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "#/components/ui/card";
import { DetailField } from "#/features/cs/components/detail-field";
import type { NegociacaoWithRelations } from "#/features/cs/negociacoes/negociacoes-types";
import { formatDatePtBR } from "#/lib/utils";

interface SistemaCardProps {
	negociacao: NegociacaoWithRelations;
}

export function SistemaCard({ negociacao }: SistemaCardProps) {
	return (
		<Card>
			<CardHeader>
				<CardTitle className="flex items-center gap-2">
					<Calendar className="size-4" />
					Sistema
				</CardTitle>
			</CardHeader>
			<CardContent>
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
			</CardContent>
		</Card>
	);
}
