/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const IXCLOGS_FIELD_LABELS = {
	campos: "campos",
	data: "data",
	executou: "executou",
	id: "id",
	id_tabela: "id_tabela",
	operador: "operador",
	tabela: "tabela",
	tipo: "tipo",
	usuario_ip: "usuario_ip",
} as const;

export const IXCLOGS_EXECUTOU_LABELS = {
	S: "S",
	U: "U",
	A: "A",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const ixc_logsExecutouSchema = z.enum(["S", "U", "A"], {
	error: () => ({ message: "executou: valores válidos são [S, U, A]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type IxcLogsExecutou = z.infer<typeof ixc_logsExecutouSchema>;
