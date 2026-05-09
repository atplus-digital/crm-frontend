/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const INTEGRACOES_REDES_TABLE_NAME = "integracoes_redes";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const integracoes_redesBaseSchema = z.object({
	id: z.number(),
	ip: z.string(),
	login: z.string(),
	porta: z.string(),
	protocolo: z.string(),
	senha: z.string(),
	tipo: z.string(),
	token: z.string(),
	url_base: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const integracoes_redesSchema = integracoes_redesBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const integracoes_redesCreateSchema = integracoes_redesSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const integracoes_redesUpdateSchema =
	integracoes_redesCreateSchema.partial();
