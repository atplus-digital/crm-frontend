/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const RADAUTH_IPS_AUTORIZADOS_TABLE_NAME = "radauth_ips_autorizados";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const radauth_ips_autorizadosBaseSchema = z.object({
	id: z.number(),
	descricao: z.string(),
	ip: z.string(),
	ultima_atualizacao: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const radauth_ips_autorizadosSchema = radauth_ips_autorizadosBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const radauth_ips_autorizadosCreateSchema =
	radauth_ips_autorizadosSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const radauth_ips_autorizadosUpdateSchema =
	radauth_ips_autorizadosCreateSchema.partial();
