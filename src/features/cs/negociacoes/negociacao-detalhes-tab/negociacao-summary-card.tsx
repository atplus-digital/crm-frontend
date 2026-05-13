import { Calendar, DollarSign, Hash, Package } from "lucide-react";
import { Card, CardContent, CardHeader } from "#/components/ui/card";
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
	const initial = negociacao.f_nome_razao?.charAt(0)?.toUpperCase() ?? "?";
	const hasValorMensal =
		negociacao.f_valor_mensal !== null &&
		negociacao.f_valor_mensal !== undefined;

	return (
		<Card className="border-border/50 bg-muted/30 pb-0">
			<CardHeader>
				<div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
					<div className="flex items-center gap-4">
						<div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
							{initial}
						</div>
						<div>
							<h1 className="text-xl font-bold tracking-tight">
								{negociacao.f_titulo ?? "—"}
							</h1>
							<p className="text-sm font-bold text-muted-foreground">
								ID: #{negociacao.id}
							</p>
						</div>
					</div>
					<div className="flex flex-wrap items-center gap-2">
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
					</div>
				</div>
			</CardHeader>
			<CardContent className="border-t bg-background/70 py-4">
				<div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-5">
					<div className="flex items-center gap-2.5">
						<div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
							<Package className="size-4 text-primary" />
						</div>
						<div className="min-w-0 flex-1">
							<p className="text-xs font-medium text-muted-foreground">
								Pacote
							</p>
							<p className="truncate text-sm font-semibold">
								{negociacao.f_pacote?.f_nome_pacote ?? "—"}
							</p>
						</div>
					</div>
					<div className="flex items-center gap-2.5">
						<div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
							<Hash className="size-4 text-primary" />
						</div>
						<div className="min-w-0 flex-1">
							<p className="text-xs font-medium text-muted-foreground">
								CPF/CNPJ
							</p>
							<p className="truncate text-sm font-semibold">
								{negociacao.f_cpf_cnpj ?? "—"}
							</p>
						</div>
					</div>
					<div className="flex items-center gap-2.5">
						<div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
							<Hash className="size-4 text-primary" />
						</div>
						<div className="min-w-0 flex-1">
							<p className="text-xs font-medium text-muted-foreground">
								Contrato IXC
							</p>
							<p className="truncate text-sm font-semibold">
								{negociacao.f_contrato_ixc ?? "—"}
							</p>
						</div>
					</div>
					<div className="flex items-center gap-2.5">
						<div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
							<Calendar className="size-4 text-primary" />
						</div>
						<div className="min-w-0 flex-1">
							<p className="text-xs font-medium text-muted-foreground">
								Criado em
							</p>
							<p className="text-sm font-semibold">
								{formatDatePtBR(negociacao.createdAt) || "—"}
							</p>
						</div>
					</div>
					{hasValorMensal && (
						<div className="flex items-center gap-2.5">
							<div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-100 dark:bg-emerald-900/30">
								<DollarSign className="size-4 text-emerald-600 dark:text-emerald-400" />
							</div>
							<div className="min-w-0 flex-1">
								<p className="text-xs font-medium text-muted-foreground">
									Valor Mensal
								</p>
								<p className="truncate text-sm font-bold text-emerald-600 dark:text-emerald-400">
									{formatCurrency(negociacao.f_valor_mensal)}
								</p>
							</div>
						</div>
					)}
				</div>
			</CardContent>
		</Card>
	);
}
