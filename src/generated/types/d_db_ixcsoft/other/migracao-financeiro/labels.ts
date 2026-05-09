/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const MIGRACAOFINANCEIRO_STATUS_LABELS = {
	N: "N",
	A: "A",
	C: "C",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const migracao_financeiroStatusSchema = z.enum(["N", "A", "C"], {
	error: () => ({ message: "status: valores válidos são [N, A, C]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type MigracaoFinanceiroStatus = z.infer<
	typeof migracao_financeiroStatusSchema
>;
