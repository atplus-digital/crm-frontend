/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const CENTROCUSTOCATEGORIA_FIELD_LABELS = {
	codigo: "codigo",
	descricao: "descricao",
	id: "id",
	status: "status",
} as const;

export const CENTROCUSTOCATEGORIA_STATUS_LABELS = {
	A: "A",
	I: "I",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const centro_custo_categoriaStatusSchema = z.enum(["A", "I"], {
	error: () => ({ message: "status: valores válidos são [A, I]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type CentroCustoCategoriaStatus = z.infer<
	typeof centro_custo_categoriaStatusSchema
>;
