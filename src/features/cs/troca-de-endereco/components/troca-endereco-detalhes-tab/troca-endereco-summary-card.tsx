import { Calendar, Hash, ScrollText } from "lucide-react";
import { StatusBadge as SharedStatusBadge } from "#/components/badges/status-badge";
import { MetricItem } from "#/components/metric-item";
import { SummaryCard } from "#/components/summary-card";
import type { TrocaEnderecoWithRelations } from "#/features/cs/troca-de-endereco/troca-endereco-hooks";
import {
	TROCAENDERECO_STATUS_LABELS,
	TROCAENDERECO_TAXAINSTALACAO_LABELS,
} from "#/generated/types/nocobase/troca-endereco";
import { formatDatePtBR } from "#/lib/utils";

interface TrocaEnderecoSummaryCardProps {
	trocaEndereco: TrocaEnderecoWithRelations;
}

export function TrocaEnderecoSummaryCard({
	trocaEndereco,
}: TrocaEnderecoSummaryCardProps) {
	return (
		<SummaryCard
			title={trocaEndereco.f_cliente}
			subtitle={`Troca de Endereço #${trocaEndereco.id}`}
			avatarName={trocaEndereco.f_cliente}
			headerActions={
				<div className="flex items-center gap-2 rounded-lg bg-background/80 px-3 py-1.5">
					<span className="text-xs font-medium text-muted-foreground">
						Status
					</span>
					<SharedStatusBadge
						value={trocaEndereco.f_status}
						labels={TROCAENDERECO_STATUS_LABELS}
						variant="inline"
						defaultVariant="secondary"
					/>
				</div>
			}
		>
			<div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
				<MetricItem
					icon={<Hash className="size-4 text-primary" />}
					label="Contrato"
					value={trocaEndereco.f_id_contrato}
				/>
				<MetricItem
					icon={<Hash className="size-4 text-primary" />}
					label="Atendimento"
					value={trocaEndereco.f_id_atendimento}
				/>
				<MetricItem
					icon={<Calendar className="size-4 text-primary" />}
					label="Criado em"
					value={formatDatePtBR(trocaEndereco.createdAt)}
				/>
				<MetricItem
					icon={<ScrollText className="size-4 text-primary" />}
					label="Taxa Instalação"
					value={
						trocaEndereco.f_taxa_instalacao
							? TROCAENDERECO_TAXAINSTALACAO_LABELS[
									trocaEndereco.f_taxa_instalacao
								]
							: null
					}
				/>
			</div>
		</SummaryCard>
	);
}
