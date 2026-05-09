/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const LOGRADPORTAFTTH_TIPOALTERACAO_LABELS = {
	A: "A",
	R: "R",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const log_rad_porta_ftthTipoAlteracaoSchema = z.enum(["A", "R"], {
	error: () => ({ message: "tipo_alteracao: valores válidos são [A, R]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type LogRadPortaFtthTipoAlteracao = z.infer<
	typeof log_rad_porta_ftthTipoAlteracaoSchema
>;
