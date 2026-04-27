import { Card, CardContent, CardHeader, CardTitle } from "#/components/ui/card";
import { DetailField } from "#/features/cs/components/detail-field";
import type { NegociacaoWithRelations } from "#/features/cs/negociacoes/negociacoes-types";
import { ENDERECO_COMPLEMENTO_LABELS } from "#/features/cs/negociacoes/negociacoes-types";

interface EnderecoInstalacaoCardProps {
	negociacao: NegociacaoWithRelations;
}

export function EnderecoInstalacaoCard({
	negociacao,
}: EnderecoInstalacaoCardProps) {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Endereço de Instalação</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
					<DetailField label="CEP">{negociacao.f_cep ?? "—"}</DetailField>
					<DetailField label="Endereço">
						{negociacao.f_endereco ?? "—"}
					</DetailField>
					<DetailField label="Número">
						{negociacao.f_endereco_numero ?? "—"}
					</DetailField>
					<DetailField label="Complemento">
						{negociacao.f_endereco_complemento
							? (ENDERECO_COMPLEMENTO_LABELS[
									negociacao.f_endereco_complemento
								] ?? negociacao.f_endereco_complemento)
							: "—"}
					</DetailField>
					<DetailField label="Bairro">{negociacao.f_bairro ?? "—"}</DetailField>
					<DetailField label="Cidade">
						{negociacao.f_endereco_cidade ?? "—"}
					</DetailField>
					<DetailField label="Estado">
						{negociacao.f_endereco_estado ?? "—"}
					</DetailField>
					<DetailField label="Referência">
						{negociacao.f_endereco_referencia ?? "—"}
					</DetailField>
					<DetailField label="Edifício">
						{negociacao.f_nome_edificio ?? "—"}
					</DetailField>
					<DetailField label="Apartamento">
						{negociacao.f_apartamento ?? "—"}
					</DetailField>
					<DetailField label="Bloco/Quadra">
						{negociacao.f_bloco_quadra ?? "—"}
					</DetailField>
				</div>
			</CardContent>
		</Card>
	);
}
