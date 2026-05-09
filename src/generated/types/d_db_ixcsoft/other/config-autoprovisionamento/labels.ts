/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const CONFIGAUTOPROVISIONAMENTO_CONDICAOSTATUS_LABELS = {
	S: "S",
	N: "N",
} as const;

export const CONFIGAUTOPROVISIONAMENTO_NOTIFICACAOPUSH_LABELS = {
	S: "S",
	N: "N",
} as const;

export const CONFIGAUTOPROVISIONAMENTO_TIPOFILTRO_LABELS = {
	caixa: "caixa",
	olt: "olt",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const config_autoprovisionamentoCondicaoStatusSchema = z.enum(
	["S", "N"],
	{
		error: () => ({ message: "condicao_status: valores válidos são [S, N]" }),
	},
);

export const config_autoprovisionamentoNotificacaoPushSchema = z.enum(
	["S", "N"],
	{
		error: () => ({ message: "notificacao_push: valores válidos são [S, N]" }),
	},
);

export const config_autoprovisionamentoTipoFiltroSchema = z.enum(
	["caixa", "olt"],
	{
		error: () => ({ message: "tipo_filtro: valores válidos são [caixa, olt]" }),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type ConfigAutoprovisionamentoCondicaoStatus = z.infer<
	typeof config_autoprovisionamentoCondicaoStatusSchema
>;

export type ConfigAutoprovisionamentoNotificacaoPush = z.infer<
	typeof config_autoprovisionamentoNotificacaoPushSchema
>;

export type ConfigAutoprovisionamentoTipoFiltro = z.infer<
	typeof config_autoprovisionamentoTipoFiltroSchema
>;
