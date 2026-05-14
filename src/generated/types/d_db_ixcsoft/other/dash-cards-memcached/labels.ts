/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const DASHCARDSMEMCACHED_FIELD_LABELS = {
	card: "card",
	data_fim: "data_fim",
	data_inicio: "data_inicio",
	dt_manager_router: "dt_manager_router",
	id: "id",
	nome_card_memcached: "nome_card_memcached",
	status: "status",
	tempo_execucao_consulta: "tempo_execucao_consulta",
	ultimo_registro_memcached: "ultimo_registro_memcached",
} as const;

export const DASHCARDSMEMCACHED_STATUS_LABELS = {
	S: "S",
	N: "N",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const dash_cards_memcachedStatusSchema = z.enum(["S", "N"], {
	error: () => ({ message: "status: valores válidos são [S, N]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type DashCardsMemcachedStatus = z.infer<
	typeof dash_cards_memcachedStatusSchema
>;
