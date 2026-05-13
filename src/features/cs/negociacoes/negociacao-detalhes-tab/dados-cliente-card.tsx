import { DetailField } from "#/components/detail-field";
import { DetailSection } from "#/components/detail-section";
import type { NegociacaoWithRelations } from "#/features/cs/negociacoes/negociacoes-types";
import { TIPO_PESSOA_LABELS } from "#/features/cs/negociacoes/negociacoes-types";

interface DadosClienteCardProps {
	negociacao: NegociacaoWithRelations;
}

export function DadosClienteCard({ negociacao }: DadosClienteCardProps) {
	return (
		<DetailSection title="Dados do Cliente">
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
				<DetailField label="Tipo de Pessoa">
					{negociacao.f_tipo_pessoa
						? TIPO_PESSOA_LABELS[negociacao.f_tipo_pessoa]
						: "—"}
				</DetailField>
				<DetailField label="Nome/Razão Social">
					{negociacao.f_nome_razao ?? "—"}
				</DetailField>
				<DetailField label="Nome Fantasia">
					{negociacao.f_nome_fantasia ?? "—"}
				</DetailField>
				<DetailField label="CPF/CNPJ">
					{negociacao.f_cpf_cnpj ?? "—"}
				</DetailField>
				<DetailField label="RG/IE">{negociacao.f_rg_ie ?? "—"}</DetailField>
				<DetailField label="Pessoa Física">
					{negociacao.f_pessoa?.f_nome ?? "—"}
				</DetailField>
				<DetailField label="Pessoa Jurídica">
					{negociacao.f_negociacao_pessoa_juridica?.f_nome_fantasia ?? "—"}
				</DetailField>
			</div>
		</DetailSection>
	);
}
