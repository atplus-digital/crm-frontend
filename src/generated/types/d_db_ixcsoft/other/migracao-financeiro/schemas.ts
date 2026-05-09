/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { migracao_financeiroStatusSchema } from "./labels";

export const MIGRACAO_FINANCEIRO_TABLE_NAME = "migracao_financeiro";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const migracao_financeiroBaseSchema = z.object({
	id: z.number(),
	status: migracao_financeiroStatusSchema,
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const migracao_financeiroSchema = migracao_financeiroBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const migracao_financeiroCreateSchema = migracao_financeiroSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const migracao_financeiroUpdateSchema =
	migracao_financeiroCreateSchema.partial();
