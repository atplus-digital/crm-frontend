/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const PLANEJAMENTOFINAN_FIELD_LABELS = {
	cod_planejamento: "cod_planejamento",
	contador: "contador",
	id: "id",
	nivel_superior: "nivel_superior",
	planejamento: "planejamento",
	tipo: "tipo",
} as const;

export const PLANEJAMENTOFINAN_TIPO_LABELS = {
	A: "A",
	P: "P",
	R: "R",
	D: "D",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const planejamento_finanTipoSchema = z.enum(["A", "P", "R", "D"], {
	error: () => ({ message: "tipo: valores válidos são [A, P, R, D]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type PlanejamentoFinanTipo = z.infer<
	typeof planejamento_finanTipoSchema
>;
