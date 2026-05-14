/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const PREDIO_FIELD_LABELS = {
	cor: "cor",
	descricao: "descricao",
	id: "id",
	id_condominio: "id_condominio",
	id_projeto: "id_projeto",
	latitude: "latitude",
	longitude: "longitude",
	observacao: "observacao",
	status: "status",
} as const;

export const PREDIO_STATUS_LABELS = {
	A: "A",
	I: "I",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const predioStatusSchema = z.enum(["A", "I"], {
	error: () => ({ message: "status: valores válidos são [A, I]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type PredioStatus = z.infer<typeof predioStatusSchema>;
