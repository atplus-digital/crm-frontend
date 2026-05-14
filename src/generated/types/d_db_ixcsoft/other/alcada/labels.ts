/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const ALCADA_FIELD_LABELS = {
	acao: "acao",
	alcada: "alcada",
	id: "id",
} as const;

export const ALCADA_ALCADA_LABELS = {
	P: "P",
	PA: "PA",
	PS: "PS",
	S: "S",
	ADM: "ADM",
	NP: "NP",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const alcadaAlcadaSchema = z.enum(["P", "PA", "PS", "S", "ADM", "NP"], {
	error: () => ({
		message: "alcada: valores válidos são [P, PA, PS, S, ADM, NP]",
	}),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type AlcadaAlcada = z.infer<typeof alcadaAlcadaSchema>;
