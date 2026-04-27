import { Card, CardContent, CardHeader, CardTitle } from "#/components/ui/card";
import { DetailField } from "#/features/cs/components/detail-field";
import type { NegociacaoWithRelations } from "#/features/cs/negociacoes/negociacoes-types";

interface CupomVendedorCardProps {
	negociacao: NegociacaoWithRelations;
}

export function CupomVendedorCard({ negociacao }: CupomVendedorCardProps) {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Cupom e Vendedor</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
					<DetailField label="Cupom de Desconto">
						{negociacao.f_cupom_desconto?.f_nome ?? "—"}
					</DetailField>
					<DetailField label="Vendedor">
						{negociacao.f_vendedor?.nickname ?? "—"}
					</DetailField>
				</div>
			</CardContent>
		</Card>
	);
}
