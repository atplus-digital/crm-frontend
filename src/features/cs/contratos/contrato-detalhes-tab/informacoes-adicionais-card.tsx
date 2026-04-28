import { Card, CardContent, CardHeader, CardTitle } from "#/components/ui/card";
import { Skeleton } from "#/components/ui/skeleton";
import { DetailField } from "#/features/cs/components/detail-field";
import type { DadosAdicionaisContrato } from "#/features/cs/contratos/contratos-types";
import {
	DADOSADICIONAISCLIENTECONTRATO_FORMADEPAGAMENTO_LABELS,
	DADOSADICIONAISCLIENTECONTRATO_PERFILDEUSO_LABELS,
} from "#/features/cs/contratos/contratos-types";

type PerfilDeUsoValue =
	(keyof typeof DADOSADICIONAISCLIENTECONTRATO_PERFILDEUSO_LABELS)[];

interface InformacoesAdicionaisCardProps {
	data: DadosAdicionaisContrato | null | undefined;
	isLoading: boolean;
}

function formatPerfilDeUso(
	perfilDeUso: DadosAdicionaisContrato["f_perfil_de_uso"],
): string {
	const values = (
		Array.isArray(perfilDeUso) ? perfilDeUso : [perfilDeUso]
	) as PerfilDeUsoValue;
	return values
		.filter(Boolean)
		.map(
			(p) => DADOSADICIONAISCLIENTECONTRATO_PERFILDEUSO_LABELS[p] ?? String(p),
		)
		.join(", ");
}

function formatFormaPagamento(
	forma: DadosAdicionaisContrato["f_forma_de_pagamento"],
): string {
	return (
		DADOSADICIONAISCLIENTECONTRATO_FORMADEPAGAMENTO_LABELS[forma] ??
		String(forma)
	);
}

export function InformacoesAdicionaisCard({
	data,
	isLoading,
}: InformacoesAdicionaisCardProps) {
	if (isLoading) {
		return (
			<Card>
				<CardHeader>
					<CardTitle>Informações Adicionais</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
						{["origem", "perfil", "pagamento", "pessoas"].map((key) => (
							<Skeleton key={key} className="h-12" />
						))}
					</div>
				</CardContent>
			</Card>
		);
	}

	if (!data) {
		return (
			<Card>
				<CardHeader>
					<CardTitle>Informações Adicionais</CardTitle>
				</CardHeader>
				<CardContent>
					<p className="text-sm text-muted-foreground">
						Nenhum dado adicional disponível.
					</p>
				</CardContent>
			</Card>
		);
	}

	return (
		<Card>
			<CardHeader>
				<CardTitle>Informações Adicionais</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
					<DetailField label="Origem do Cliente">
						{data.f_origem_cliente || "—"}
					</DetailField>
					<DetailField label="Perfil de Uso">
						{formatPerfilDeUso(data.f_perfil_de_uso)}
					</DetailField>
					<DetailField label="Forma de Pagamento">
						{formatFormaPagamento(data.f_forma_de_pagamento)}
					</DetailField>
					<DetailField label="Pessoas na Residência">
						{data.f_pessoas_na_residencia ?? "—"}
					</DetailField>
				</div>
			</CardContent>
		</Card>
	);
}
