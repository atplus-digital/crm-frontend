/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const CRON_RELATORIOS_TABLE_NAME = "cron_relatorios";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const cron_relatoriosBaseSchema = z.object({
	id: z.number(),
	emails: z.string(),
	id_relatorio: z.number(),
	relatorio: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const cron_relatoriosSchema = cron_relatoriosBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const cron_relatoriosCreateSchema = cron_relatoriosSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const cron_relatoriosUpdateSchema =
	cron_relatoriosCreateSchema.partial();
