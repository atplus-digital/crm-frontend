// Barrel export — re-exports everything from the original kanban-dashboard-types.ts

// Public API barrel export for kanban-dashboard types
export {
	getCardBadgeInfo,
	getCardDisplayName,
	getCardResponsible,
	type KanbanDashboardCard,
} from "./card-types";
export {
	KANBAN_SORT_OPTIONS,
	type KanbanDashboardFilters,
	type KanbanSortField,
} from "./filter-types";
export {
	EXTRA_NEGOCIACAO_MOTIVO_OPTIONS,
	NEGOCIACAO_MOTIVO_BADGE,
	type NegociacoesMotivo,
	PRIMARY_NEGOCIACAO_MOTIVO_OPTIONS,
	SOURCE_COLLECTION_OPTIONS,
	type SourceCollection,
} from "./source-collections";
export {
	UNIFIED_STATUS_COLUMNS,
	type UnifiedStatusKey,
} from "./status-columns";
export {
	mapNegociacaoStatus,
	mapSuspensaoContratoStatus,
	mapTrocaEnderecoStatus,
	mapTrocaTitularidadeStatus,
} from "./status-mappings";
