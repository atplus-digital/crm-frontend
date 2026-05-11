import { DetailField } from "#/features/cs/components/detail-field";
import { DetailSection } from "#/features/cs/components/detail-section";
import type { NegociacaoWithRelations } from "#/features/cs/negociacoes/negociacoes-types";
import { formatCurrency } from "#/lib/utils";

interface ValoresFinanceirosCardProps {
	negociacao: NegociacaoWithRelations;
}

export function ValoresFinanceirosCard({
	negociacao,
}: ValoresFinanceirosCardProps) {
	return (
		<DetailSection title="Valores Financeiros">
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
				<DetailField label="Valor Mensal">
					{formatCurrency(negociacao.f_valor_mensal)}
				</DetailField>
				<DetailField label="Valor Mensal Antigo">
					{formatCurrency(negociacao.f_valor_mensal_antigo)}
				</DetailField>
				<DetailField label="Valor Mensal s/ Desconto">
					{formatCurrency(negociacao.f_valor_mensal_sem_desconto)}
				</DetailField>
				<DetailField label="Valor Instalação">
					{formatCurrency(Number(negociacao.f_valor_instalacao))}
				</DetailField>
				<DetailField label="Valor Devedor">
					{formatCurrency(negociacao.f_valor_devedor)}
				</DetailField>
				<DetailField label="Multa/Juros">
					{formatCurrency(negociacao.f_multa_juros)}
				</DetailField>
				<DetailField label="Entrada/Saldo Devedor">
					{formatCurrency(negociacao.f_entrada_saldo_devedor)}
				</DetailField>
				<DetailField label="Valor Devedor Total (auto)">
					<span className="text-muted-foreground italic">
						{negociacao.f_valor_devedor_total ?? "—"}
					</span>
				</DetailField>
				<DetailField label="Valor da Parcela (auto)">
					<span className="text-muted-foreground italic">
						{negociacao.f_valor_da_parcela ?? "—"}
					</span>
				</DetailField>
				<DetailField label="Parcelas Mensais">
					{negociacao.f_parcelas_mensais ?? "—"}
				</DetailField>
				<DetailField label="Valor Benefícios">
					{formatCurrency(negociacao.f_valor_beneficios)}
				</DetailField>
				<DetailField label="Incremento (auto)">
					<span className="text-muted-foreground italic">
						{negociacao.f_Incremento ?? "—"}
					</span>
				</DetailField>
				<DetailField label="Multa Mês Faltante">
					{formatCurrency(negociacao.f_valor_multa_mes_faltante)}
				</DetailField>
			</div>
		</DetailSection>
	);
}
