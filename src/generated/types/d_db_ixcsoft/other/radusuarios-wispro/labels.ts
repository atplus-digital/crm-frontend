/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const RADUSUARIOSWISPRO_MODO_LABELS = {
	E: "E",
	P: "P",
	D: "D",
} as const;

export const RADUSUARIOSWISPRO_STATUS_LABELS = {
	HA: "HA",
	DE: "DE",
	AL: "AL",
	DG: "DG",
} as const;

export const RADUSUARIOSWISPRO_TIPO_LABELS = {
	R: "R",
	B: "B",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const radusuarios_wisproModoSchema = z.enum(["E", "P", "D"], {
	error: () => ({ message: "modo: valores válidos são [E, P, D]" }),
});

export const radusuarios_wisproStatusSchema = z.enum(["HA", "DE", "AL", "DG"], {
	error: () => ({ message: "status: valores válidos são [HA, DE, AL, DG]" }),
});

export const radusuarios_wisproTipoSchema = z.enum(["R", "B"], {
	error: () => ({ message: "tipo: valores válidos são [R, B]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type RadusuariosWisproModo = z.infer<
	typeof radusuarios_wisproModoSchema
>;

export type RadusuariosWisproStatus = z.infer<
	typeof radusuarios_wisproStatusSchema
>;

export type RadusuariosWisproTipo = z.infer<
	typeof radusuarios_wisproTipoSchema
>;
