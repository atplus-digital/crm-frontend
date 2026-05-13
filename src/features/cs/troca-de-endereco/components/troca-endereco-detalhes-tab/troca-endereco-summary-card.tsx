import { Calendar, Hash, ScrollText } from "lucide-react";
import { StatusBadge as SharedStatusBadge } from "#/components/badges/status-badge";
import { Card, CardContent, CardHeader } from "#/components/ui/card";
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
	const initial = trocaEndereco.f_cliente?.charAt(0)?.toUpperCase() ?? "?";

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
								{trocaEndereco.f_cliente}
							</h1>
							<p className="text-sm font-bold text-muted-foreground">
								Troca de Endereço #{trocaEndereco.id}
							</p>
						</div>
					</div>
					<div className="flex flex-wrap items-center gap-2">
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
					</div>
				</div>
			</CardHeader>
			<CardContent className="border-t bg-background/70 py-4">
				<div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
					<div className="flex items-center gap-2.5">
						<div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
							<Hash className="size-4 text-primary" />
						</div>
						<div className="min-w-0 flex-1">
							<p className="text-xs font-medium text-muted-foreground">
								Contrato
							</p>
							<p className="truncate text-sm font-semibold">
								{trocaEndereco.f_id_contrato || "—"}
							</p>
						</div>
					</div>
					<div className="flex items-center gap-2.5">
						<div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
							<Hash className="size-4 text-primary" />
						</div>
						<div className="min-w-0 flex-1">
							<p className="text-xs font-medium text-muted-foreground">
								Atendimento
							</p>
							<p className="truncate text-sm font-semibold">
								{trocaEndereco.f_id_atendimento || "—"}
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
								{formatDatePtBR(trocaEndereco.createdAt) || "—"}
							</p>
						</div>
					</div>
					<div className="flex items-center gap-2.5">
						<div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
							<ScrollText className="size-4 text-primary" />
						</div>
						<div className="min-w-0 flex-1">
							<p className="text-xs font-medium text-muted-foreground">
								Taxa Instalação
							</p>
							<p className="truncate text-sm font-semibold">
								{trocaEndereco.f_taxa_instalacao
									? TROCAENDERECO_TAXAINSTALACAO_LABELS[
											trocaEndereco.f_taxa_instalacao
										]
									: "—"}
							</p>
						</div>
					</div>
				</div>
			</CardContent>
		</Card>
	);
}
