/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const LOGSALTERACAOVENCIMENTOMASSA_STATUS_LABELS = {
	A: "A",
	NA: "NA",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const logs_alteracao_vencimento_massaStatusSchema = z.enum(["A", "NA"], {
	error: () => ({ message: "status: valores válidos são [A, NA]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type LogsAlteracaoVencimentoMassaStatus = z.infer<
	typeof logs_alteracao_vencimento_massaStatusSchema
>;
