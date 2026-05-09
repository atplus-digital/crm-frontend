/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const CLIENTE_TRIAL_CHAVE_TABLE_NAME = "cliente_trial_chave";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const cliente_trial_chaveBaseSchema = z.object({
	id: z.number(),
	chave: z.string(),
	data_atualizacao: z.string(),
	data_insert: z.string(),
	id_cliente: z.number(),
	id_serial: z.string(),
	serial: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const cliente_trial_chaveSchema = cliente_trial_chaveBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const cliente_trial_chaveCreateSchema = cliente_trial_chaveSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const cliente_trial_chaveUpdateSchema =
	cliente_trial_chaveCreateSchema.partial();
