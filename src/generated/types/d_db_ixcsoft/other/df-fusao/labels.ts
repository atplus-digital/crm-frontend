/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const DFFUSAO_IOELEMENTODESTINO_LABELS = {
	IN: "IN",
	OUT: "OUT",
} as const;

export const DFFUSAO_IOELEMENTOORIGEM_LABELS = {
	IN: "IN",
	OUT: "OUT",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const df_fusaoIoElementoDestinoSchema = z.enum(["IN", "OUT"], {
	error: () => ({
		message: "io_elemento_destino: valores válidos são [IN, OUT]",
	}),
});

export const df_fusaoIoElementoOrigemSchema = z.enum(["IN", "OUT"], {
	error: () => ({
		message: "io_elemento_origem: valores válidos são [IN, OUT]",
	}),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type DfFusaoIoElementoDestino = z.infer<
	typeof df_fusaoIoElementoDestinoSchema
>;

export type DfFusaoIoElementoOrigem = z.infer<
	typeof df_fusaoIoElementoOrigemSchema
>;
