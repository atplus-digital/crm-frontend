import { Calendar, DollarSign, Hash, Package } from "lucide-react";
import { MetricItem } from "#/components/metric-item";
import { SummaryCard } from "#/components/summary-card";
import { MotivoBadge } from "#/features/cs/negociacoes/negociacao-badges/motivo-badge";
import { StatusBadge } from "#/features/cs/negociacoes/negociacao-badges/status-badge";
import type { NegociacaoWithRelations } from "#/features/cs/negociacoes/negociacoes-types";
import { formatCurrency, formatDatePtBR } from "#/lib/utils";

interface NegociacaoSummaryCardProps {
	negociacao: NegociacaoWithRelations;
}

export function NegociacaoSummaryCard({
	negociacao,
}: NegociacaoSummaryCardProps) {
	const hasValorMensal =
		negociacao.f_valor_mensal !== null &&
		negociacao.f_valor_mensal !== undefined;

	return (
		<SummaryCard
			title={negociacao.f_titulo ?? "—"}
			subtitle={`ID: #${negociacao.id}`}
			avatarName={negociacao.f_nome_razao ?? ""}
			headerActions={
				<>
					<div className="flex items-center gap-2 rounded-lg bg-background/80 px-3 py-1.5">
						<span className="text-xs font-medium text-muted-foreground">
							Status
						</span>
						<StatusBadge
							status={negociacao.f_status}
							substatus={negociacao.f_substatus}
						/>
					</div>
					<div className="flex items-center gap-2 rounded-lg bg-background/80 px-3 py-1.5">
						<span className="text-xs font-medium text-muted-foreground">
							Motivo
						</span>
						<MotivoBadge value={negociacao.f_motivo} />
					</div>
				</>
			}
		>
			<div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-5">
				<MetricItem
					icon={<Package className="size-4 text-primary" />}
					label="Pacote"
					value={negociacao.f_pacote?.f_nome_pacote}
				/>
				<MetricItem
					icon={<Hash className="size-4 text-primary" />}
					label="CPF/CNPJ"
					value={negociacao.f_cpf_cnpj}
				/>
				<MetricItem
					icon={<Hash className="size-4 text-primary" />}
					label="Contrato IXC"
					value={negociacao.f_contrato_ixc}
				/>
				<MetricItem
					icon={<Calendar className="size-4 text-primary" />}
					label="Criado em"
					value={formatDatePtBR(negociacao.createdAt)}
				/>
				{hasValorMensal && (
					<MetricItem
						icon={
							<DollarSign className="size-4 text-emerald-600 dark:text-emerald-400" />
						}
						label="Valor Mensal"
						value={formatCurrency(negociacao.f_valor_mensal)}
						iconClassName="bg-emerald-100 dark:bg-emerald-900/30"
						valueClassName="font-bold text-emerald-600 dark:text-emerald-400"
					/>
				)}
			</div>
		</SummaryCard>
	);
}
