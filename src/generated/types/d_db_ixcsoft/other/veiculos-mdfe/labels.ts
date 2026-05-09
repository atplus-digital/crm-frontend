/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const VEICULOSMDFE_MODAL_LABELS = {
	1: "1",
	2: "2",
	3: "3",
	4: "4",
} as const;

export const VEICULOSMDFE_STATUS_LABELS = {
	A: "A",
	F: "F",
	C: "C",
	E: "E",
} as const;

export const VEICULOSMDFE_TPEMIT_LABELS = {
	1: "1",
	2: "2",
} as const;

export const VEICULOSMDFE_TPTRANSP_LABELS = {
	1: "1",
	2: "2",
	3: "3",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const veiculos_mdfeModalSchema = z.enum(["1", "2", "3", "4"], {
	error: () => ({ message: "modal: valores válidos são [1, 2, 3, 4]" }),
});

export const veiculos_mdfeStatusSchema = z.enum(["A", "F", "C", "E"], {
	error: () => ({ message: "status: valores válidos são [A, F, C, E]" }),
});

export const veiculos_mdfeTpemitSchema = z.enum(["1", "2"], {
	error: () => ({ message: "tpemit: valores válidos são [1, 2]" }),
});

export const veiculos_mdfeTptranspSchema = z.enum(["1", "2", "3"], {
	error: () => ({ message: "tptransp: valores válidos são [1, 2, 3]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type VeiculosMdfeModal = z.infer<typeof veiculos_mdfeModalSchema>;

export type VeiculosMdfeStatus = z.infer<typeof veiculos_mdfeStatusSchema>;

export type VeiculosMdfeTpemit = z.infer<typeof veiculos_mdfeTpemitSchema>;

export type VeiculosMdfeTptransp = z.infer<typeof veiculos_mdfeTptranspSchema>;
