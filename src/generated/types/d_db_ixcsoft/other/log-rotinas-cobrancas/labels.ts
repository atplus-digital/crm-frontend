/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const LOGROTINASCOBRANCAS_FIELD_LABELS = {
	data_hora: "data_hora",
	descricao: "descricao",
	id: "id",
	id_cliente: "id_cliente",
	id_receber: "id_receber",
	status: "status",
} as const;

export const LOGROTINASCOBRANCAS_STATUS_LABELS = {
	S: "S",
	F: "F",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const log_rotinas_cobrancasStatusSchema = z.enum(["S", "F"], {
	error: () => ({ message: "status: valores válidos são [S, F]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type LogRotinasCobrancasStatus = z.infer<
	typeof log_rotinas_cobrancasStatusSchema
>;
