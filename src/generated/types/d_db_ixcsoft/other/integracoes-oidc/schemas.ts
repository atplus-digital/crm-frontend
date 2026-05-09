/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const INTEGRACOES_OIDC_TABLE_NAME = "integracoes_oidc";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const integracoes_oidcBaseSchema = z.object({
	id: z.number(),
	active: z.number(),
	client_id: z.string(),
	client_secret: z.string(),
	description: z.string(),
	provider_url: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const integracoes_oidcSchema = integracoes_oidcBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const integracoes_oidcCreateSchema = integracoes_oidcSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const integracoes_oidcUpdateSchema =
	integracoes_oidcCreateSchema.partial();
