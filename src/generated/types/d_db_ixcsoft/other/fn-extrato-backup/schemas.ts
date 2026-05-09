/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { fn_extrato_backupConciliadoSchema } from "./labels";

export const FN_EXTRATO_BACKUP_TABLE_NAME = "fn_extrato_backup";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const fn_extrato_backupBaseSchema = z.object({
	id: z.number(),
	conciliado: fn_extrato_backupConciliadoSchema,
	conciliado_extrato: z.string(),
	conciliado_financeiro: z.string(),
	credito: z.number(),
	data: z.string(),
	debito: z.number(),
	documento: z.string(),
	fn_extrato_id: z.number(),
	id_conciliacao_lote: z.number(),
	id_conta: z.number(),
	id_extrato: z.string(),
	ids_financeiro: z.string(),
	rotina_origem: z.string(),
	ultima_atualizacao: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const fn_extrato_backupSchema = fn_extrato_backupBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const fn_extrato_backupCreateSchema = fn_extrato_backupSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const fn_extrato_backupUpdateSchema =
	fn_extrato_backupCreateSchema.partial();
