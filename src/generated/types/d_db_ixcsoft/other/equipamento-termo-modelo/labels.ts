/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const EQUIPAMENTOTERMOMODELO_PADRAO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const EQUIPAMENTOTERMOMODELO_PADRAOSISTEMA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const EQUIPAMENTOTERMOMODELO_STATUS_LABELS = {
	S: "S",
	N: "N",
} as const;

export const EQUIPAMENTOTERMOMODELO_TERMODE_LABELS = {
	E: "E",
	D: "D",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const equipamento_termo_modeloPadraoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "padrao: valores válidos são [S, N]" }),
});

export const equipamento_termo_modeloPadraoSistemaSchema = z.enum(["S", "N"], {
	error: () => ({ message: "padrao_sistema: valores válidos são [S, N]" }),
});

export const equipamento_termo_modeloStatusSchema = z.enum(["S", "N"], {
	error: () => ({ message: "status: valores válidos são [S, N]" }),
});

export const equipamento_termo_modeloTermoDeSchema = z.enum(["E", "D"], {
	error: () => ({ message: "termo_de: valores válidos são [E, D]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type EquipamentoTermoModeloPadrao = z.infer<
	typeof equipamento_termo_modeloPadraoSchema
>;

export type EquipamentoTermoModeloPadraoSistema = z.infer<
	typeof equipamento_termo_modeloPadraoSistemaSchema
>;

export type EquipamentoTermoModeloStatus = z.infer<
	typeof equipamento_termo_modeloStatusSchema
>;

export type EquipamentoTermoModeloTermoDe = z.infer<
	typeof equipamento_termo_modeloTermoDeSchema
>;
