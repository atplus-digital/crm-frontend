import type { NegociacaoWithRelations } from "#/features/cs/negociacoes/negociacoes-types";
import type { StatusKey } from "./kanban-status-config";
import { STATUS_ENUM_TO_KEY } from "./kanban-status-config";

export type KanbanCard = NegociacaoWithRelations;
export type KanbanData = Record<StatusKey, KanbanCard[]>;

export function getCardTitle(card: KanbanCard): string {
	if (card.f_titulo) return card.f_titulo;
	if (card.f_pessoa?.f_nome) return card.f_pessoa.f_nome;
	if (card.f_negociacao_pessoa_juridica?.f_razao_social)
		return card.f_negociacao_pessoa_juridica.f_razao_social;
	return "Sem título";
}

export function groupNegociacoesByStatus(
	negociacoes: KanbanCard[],
): KanbanData {
	return negociacoes.reduce(
		(acc, negociacao) => {
			const statusKey = STATUS_ENUM_TO_KEY[negociacao.f_status];
			if (statusKey && acc[statusKey]) {
				acc[statusKey].push(negociacao);
			}
			return acc;
		},
		{
			Novo: [],
			Negociando: [],
			Assinatura: [],
			Auditoria: [],
			Concluido: [],
			Arquivado: [],
		} as KanbanData,
	);
}
