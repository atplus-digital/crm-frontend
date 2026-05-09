/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const TVEQUIPAMENTOS_DHCP_LABELS = {
	Y: "Y",
	N: "N",
} as const;

export const TVEQUIPAMENTOS_HD_LABELS = {
	Y: "Y",
	N: "N",
} as const;

export const TVEQUIPAMENTOS_PLT_LABELS = {
	Y: "Y",
	N: "N",
} as const;

export const TVEQUIPAMENTOS_PVR_LABELS = {
	Y: "Y",
	N: "N",
} as const;

export const TVEQUIPAMENTOS_STATUS_LABELS = {
	online: "online",
	offline: "offline",
} as const;

export const TVEQUIPAMENTOS_STATUSINICIAL_LABELS = {
	1: "1",
	3: "3",
	5: "5",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const tv_equipamentosDhcpSchema = z.enum(["Y", "N"], {
	error: () => ({ message: "DHCP: valores válidos são [Y, N]" }),
});

export const tv_equipamentosHdSchema = z.enum(["Y", "N"], {
	error: () => ({ message: "HD: valores válidos são [Y, N]" }),
});

export const tv_equipamentosPltSchema = z.enum(["Y", "N"], {
	error: () => ({ message: "PLT: valores válidos são [Y, N]" }),
});

export const tv_equipamentosPvrSchema = z.enum(["Y", "N"], {
	error: () => ({ message: "PVR: valores válidos são [Y, N]" }),
});

export const tv_equipamentosStatusSchema = z.enum(["online", "offline"], {
	error: () => ({ message: "status: valores válidos são [online, offline]" }),
});

export const tv_equipamentosStatusInicialSchema = z.enum(["1", "3", "5"], {
	error: () => ({ message: "status_inicial: valores válidos são [1, 3, 5]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type TvEquipamentosDhcp = z.infer<typeof tv_equipamentosDhcpSchema>;

export type TvEquipamentosHd = z.infer<typeof tv_equipamentosHdSchema>;

export type TvEquipamentosPlt = z.infer<typeof tv_equipamentosPltSchema>;

export type TvEquipamentosPvr = z.infer<typeof tv_equipamentosPvrSchema>;

export type TvEquipamentosStatus = z.infer<typeof tv_equipamentosStatusSchema>;

export type TvEquipamentosStatusInicial = z.infer<
	typeof tv_equipamentosStatusInicialSchema
>;
