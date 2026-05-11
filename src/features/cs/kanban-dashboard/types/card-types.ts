import type {
	CrmTrocaTitularidade,
	CrmTrocaTitularidadeRelations,
	CrmTrocaTitularidadeStatus,
} from "#/generated/types/nocobase/crm-troca-titularidade";
import type {
	Negociacoes,
	NegociacoesRelations,
	NegociacoesStatus,
} from "#/generated/types/nocobase/negociacoes";
import type {
	SuspensaoContrato,
	SuspensaoContratoRelations,
	SuspensaoContratoStatus,
} from "#/generated/types/nocobase/suspensao-contrato";
import type {
	TrocaEndereco,
	TrocaEnderecoRelations,
	TrocaEnderecoStatus,
} from "#/generated/types/nocobase/troca-endereco";
import {
	NEGOCIACAO_MOTIVO_BADGE,
	SOURCE_COLLECTION_BADGE,
} from "./source-collections";
import type { UnifiedStatusKey } from "./status-columns";

// ─────────────────────────────────────────────────────────────────────────────
// Unified card discriminated union
// ─────────────────────────────────────────────────────────────────────────────

export type KanbanDashboardCard =
	| {
			sourceCollection: "tt";
			id: number;
			displayName: string;
			createdAt: string;
			status: CrmTrocaTitularidadeStatus;
			unifiedStatus: UnifiedStatusKey;
			responsibleName: string | null;
			responsibleId: number | null;
			source: CrmTrocaTitularidade & CrmTrocaTitularidadeRelations;
	  }
	| {
			sourceCollection: "te";
			id: number;
			displayName: string;
			createdAt: string;
			status: TrocaEnderecoStatus;
			unifiedStatus: UnifiedStatusKey;
			responsibleName: string | null;
			responsibleId: number | null;
			source: TrocaEndereco & TrocaEnderecoRelations;
	  }
	| {
			sourceCollection: "sc";
			id: number;
			displayName: string;
			createdAt: string;
			status: SuspensaoContratoStatus;
			unifiedStatus: UnifiedStatusKey;
			responsibleName: string | null;
			responsibleId: number | null;
			source: SuspensaoContrato & SuspensaoContratoRelations;
	  }
	| {
			sourceCollection: "neg";
			id: number;
			displayName: string;
			createdAt: string;
			status: NegociacoesStatus;
			unifiedStatus: UnifiedStatusKey;
			responsibleName: string | null;
			responsibleId: number | null;
			source: Negociacoes & NegociacoesRelations;
	  };

// ─────────────────────────────────────────────────────────────────────────────
// Helper functions — extract display data from unified card
// ─────────────────────────────────────────────────────────────────────────────

export function getCardDisplayName(card: KanbanDashboardCard): string {
	switch (card.sourceCollection) {
		case "tt":
			return card.source.f_cedente;
		case "te":
			return card.source.f_cliente;
		case "sc":
			return card.source.f_titulo;
		case "neg":
			return card.source.f_titulo;
	}
}

export function getCardResponsible(card: KanbanDashboardCard): string | null {
	switch (card.sourceCollection) {
		case "tt":
			return card.source.f_vendedor?.nickname ?? null;
		case "te":
			return card.source.createdBy?.nickname ?? null;
		case "sc": {
			const scSource = card.source;
			const responsible = scSource.f_responsavel ?? scSource.createdBy ?? null;
			return responsible?.nickname ?? null;
		}
		case "neg":
			return card.source.f_vendedor?.nickname ?? null;
	}
}

export function getCardBadgeInfo(card: KanbanDashboardCard) {
	if (card.sourceCollection === "neg") {
		// For negotiations, show badge based on motivo (tipo de negociação)
		const motivo = card.source.f_motivo;
		return NEGOCIACAO_MOTIVO_BADGE[motivo] ?? SOURCE_COLLECTION_BADGE.neg;
	}
	return SOURCE_COLLECTION_BADGE[card.sourceCollection];
}
