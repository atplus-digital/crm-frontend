/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const AUTENTICACAO_SUPORTE_OPA_TABLE_NAME = "autenticacao_suporte_opa";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const autenticacao_suporte_opaBaseSchema = z.object({
	id: z.number(),
	password: z.string(),
	url: z.string(),
	user: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const autenticacao_suporte_opaSchema =
	autenticacao_suporte_opaBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const autenticacao_suporte_opaCreateSchema =
	autenticacao_suporte_opaSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const autenticacao_suporte_opaUpdateSchema =
	autenticacao_suporte_opaCreateSchema.partial();
