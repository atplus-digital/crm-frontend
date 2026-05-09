/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	logs_exclusaoBancoSchema,
	logs_exclusaoStatusSchema,
	logs_exclusaoTabelaSchema,
} from "./labels";

export const LOGS_EXCLUSAO_TABLE_NAME = "logs_exclusao";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const logs_exclusaoBaseSchema = z.object({
	id: z.number(),
	banco: logs_exclusaoBancoSchema,
	deletados: z.number(),
	fim: z.string(),
	inicio: z.string(),
	logs_config: z.number(),
	status: logs_exclusaoStatusSchema,
	tabela: logs_exclusaoTabelaSchema,
	ultimo_backup: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const logs_exclusaoSchema = logs_exclusaoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const logs_exclusaoCreateSchema = logs_exclusaoSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const logs_exclusaoUpdateSchema = logs_exclusaoCreateSchema.partial();
