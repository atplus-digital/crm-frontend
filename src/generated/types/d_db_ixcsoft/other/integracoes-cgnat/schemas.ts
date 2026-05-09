/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const INTEGRACOES_CGNAT_TABLE_NAME = "integracoes_cgnat";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const integracoes_cgnatBaseSchema = z.object({
	id: z.number(),
	descricao: z.string(),
	interface_wan: z.string(),
	ip: z.string(),
	login: z.string(),
	porta: z.number(),
	senha: z.string(),
	tipo: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const integracoes_cgnatSchema = integracoes_cgnatBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const integracoes_cgnatCreateSchema = integracoes_cgnatSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const integracoes_cgnatUpdateSchema =
	integracoes_cgnatCreateSchema.partial();
