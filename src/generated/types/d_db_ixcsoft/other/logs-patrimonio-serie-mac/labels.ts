/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const LOGSPATRIMONIOSERIEMAC_STATUS_LABELS = {
	success: "success",
	error: "error",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const logs_patrimonio_serie_macStatusSchema = z.enum(
	["success", "error"],
	{
		error: () => ({ message: "status: valores válidos são [success, error]" }),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type LogsPatrimonioSerieMacStatus = z.infer<
	typeof logs_patrimonio_serie_macStatusSchema
>;
