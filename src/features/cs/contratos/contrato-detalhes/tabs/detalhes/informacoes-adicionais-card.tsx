import { ClipboardList } from "lucide-react";
import { DetailField } from "#/components/detail-field";
import { DetailSection } from "#/components/detail-section";
import {
	DADOSADICIONAISCLIENTECONTRATO_FORMADEPAGAMENTO_LABELS,
	DADOSADICIONAISCLIENTECONTRATO_PERFILDEUSO_LABELS,
} from "#/features/cs/contratos/contratos-types";
import type { DadosAdicionaisClienteContrato } from "#/generated/types/nocobase/other/dados-adicionais-cliente-contrato";

type PerfilDeUsoValue =
	(keyof typeof DADOSADICIONAISCLIENTECONTRATO_PERFILDEUSO_LABELS)[];

interface InformacoesAdicionaisCardProps {
	data: DadosAdicionaisClienteContrato | null | undefined;
	isLoading: boolean;
}

function formatPerfilDeUso(
	perfilDeUso: DadosAdicionaisClienteContrato["f_perfil_de_uso"],
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
	forma: DadosAdicionaisClienteContrato["f_forma_de_pagamento"],
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
	return (
		<DetailSection
			title="Informações Adicionais"
			icon={<ClipboardList className="size-4 text-primary" />}
			description="Dados complementares do cliente"
		>
			{isLoading ? (
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
					{["origem", "perfil", "pagamento", "pessoas"].map((key) => (
						<div key={key} className="flex flex-col gap-1">
							<div className="bg-muted h-3 w-24 animate-pulse rounded" />
							<div className="bg-muted h-4 w-32 animate-pulse rounded" />
						</div>
					))}
				</div>
			) : !data ? (
				<p className="text-sm text-muted-foreground">
					Nenhum dado adicional disponível.
				</p>
			) : (
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
			)}
		</DetailSection>
	);
}
