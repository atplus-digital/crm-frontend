/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const RADACCT_CGNAT_TABLE_NAME = "radacct_cgnat";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const radacct_cgnatBaseSchema = z.object({
	id: z.number(),
	conexao_final: z.string(),
	conexao_inicial: z.string(),
	id_login: z.number(),
	id_radacct: z.number(),
	ip_privado: z.string(),
	ip_publico: z.string(),
	porta_final: z.number(),
	porta_inicial: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const radacct_cgnatSchema = radacct_cgnatBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const radacct_cgnatCreateSchema = radacct_cgnatSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const radacct_cgnatUpdateSchema = radacct_cgnatCreateSchema.partial();
