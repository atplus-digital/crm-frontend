import { StatusBadge } from "#/components/badges/status-badge";
import { Button } from "#/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "#/components/ui/card";
import type { NegociacaoWithRelations } from "#/features/cs/negociacoes/negociacoes-types";
import {
	MOTIVO_LABELS,
	NEGOCIACAO_STATUS_LABELS,
	NEGOCIACAO_SUBSTATUS_LABELS,
} from "#/features/cs/negociacoes/negociacoes-types";
import { formatDatePtBR } from "#/lib/utils";

interface NegociacaoSituacaoSidebarProps {
	negociacao: NegociacaoWithRelations;
}

export function NegociacaoSituacaoSidebar({
	negociacao,
}: NegociacaoSituacaoSidebarProps) {
	const status = Number(negociacao.f_status);

	return (
		<div className="space-y-4">
			<Card>
				<CardHeader>
					<CardTitle className="text-sm">Situação</CardTitle>
				</CardHeader>
				<CardContent className="space-y-3">
					<div>
						<span className="text-xs text-muted-foreground">Motivo</span>
						<p className="text-sm font-medium">
							{MOTIVO_LABELS[
								negociacao.f_motivo as keyof typeof MOTIVO_LABELS
							] ?? negociacao.f_motivo}
						</p>
					</div>
					<div>
						<span className="text-xs text-muted-foreground">Criado em</span>
						<p className="text-sm">{formatDatePtBR(negociacao.createdAt)}</p>
					</div>
					<div>
						<span className="text-xs text-muted-foreground">Status</span>
						<StatusBadge
							value={negociacao.f_status}
							labels={NEGOCIACAO_STATUS_LABELS}
							variant="inline"
						/>
					</div>
					<div>
						<span className="text-xs text-muted-foreground">Substatus</span>
						<p className="text-sm">
							{(NEGOCIACAO_SUBSTATUS_LABELS as Record<string, string>)[
								String(negociacao.f_substatus)
							] ??
								negociacao.f_substatus ??
								"—"}
						</p>
					</div>
				</CardContent>
			</Card>

			<Card>
				<CardHeader>
					<CardTitle className="text-sm">Ações</CardTitle>
				</CardHeader>
				<CardContent className="space-y-2">
					<Button
						variant="outline"
						size="sm"
						className="w-full justify-start"
						disabled={status === 6}
					>
						Arquivar Negociação
					</Button>
					<Button
						variant="outline"
						size="sm"
						className="w-full justify-start"
						disabled={status === 4}
					>
						Enviar para Auditoria
					</Button>
				</CardContent>
			</Card>
		</div>
	);
}
