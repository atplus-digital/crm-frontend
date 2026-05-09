/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const RADAUTH_RADCHECK_TABLE_NAME = "radauth_radcheck";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const radauth_radcheckBaseSchema = z.object({
	id: z.number(),
	attribute: z.string(),
	id_auth_ips: z.number(),
	id_auth_usuario: z.number(),
	op: z.string(),
	ultima_atualizacao: z.string(),
	username: z.string(),
	value: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const radauth_radcheckSchema = radauth_radcheckBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const radauth_radcheckCreateSchema = radauth_radcheckSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const radauth_radcheckUpdateSchema =
	radauth_radcheckCreateSchema.partial();
