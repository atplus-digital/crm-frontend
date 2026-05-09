/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { ixc_logsExecutouSchema } from "./labels";

export const IXC_LOGS_TABLE_NAME = "ixc_logs";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const ixc_logsBaseSchema = z.object({
	id: z.number(),
	campos: z.string(),
	data: z.string(),
	executou: ixc_logsExecutouSchema,
	id_tabela: z.number(),
	operador: z.number(),
	tabela: z.string(),
	tipo: z.string(),
	usuario_ip: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const ixc_logsSchema = ixc_logsBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const ixc_logsCreateSchema = ixc_logsSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const ixc_logsUpdateSchema = ixc_logsCreateSchema.partial();
