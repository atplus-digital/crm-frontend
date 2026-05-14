/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const LOGSPATRIMONIOSERIEMAC_FIELD_LABELS = {
	id: "id",
	id_entrada: "id_entrada",
	id_patrimonio: "id_patrimonio",
	mac: "mac",
	nro_serie: "nro_serie",
	status: "status",
} as const;

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
