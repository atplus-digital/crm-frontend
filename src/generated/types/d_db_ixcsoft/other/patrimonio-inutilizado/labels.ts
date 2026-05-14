/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const PATRIMONIOINUTILIZADO_FIELD_LABELS = {
	data_inutilizado: "data_inutilizado",
	id: "id",
	id_motivo: "id_motivo",
	id_operador: "id_operador",
	quantidade: "quantidade",
	status: "status",
	valor: "valor",
} as const;

export const PATRIMONIOINUTILIZADO_STATUS_LABELS = {
	A: "A",
	F: "F",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const patrimonio_inutilizadoStatusSchema = z.enum(["A", "F"], {
	error: () => ({ message: "status: valores válidos são [A, F]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type PatrimonioInutilizadoStatus = z.infer<
	typeof patrimonio_inutilizadoStatusSchema
>;
