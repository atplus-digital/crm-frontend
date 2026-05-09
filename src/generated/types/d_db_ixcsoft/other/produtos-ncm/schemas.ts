/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const PRODUTOS_NCM_TABLE_NAME = "produtos_ncm";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const produtos_ncmBaseSchema = z.object({
	id: z.number(),
	alic_est: z.number(),
	alic_imp: z.number(),
	alic_mun: z.number(),
	alic_nac: z.number(),
	aliq: z.string(),
	cod_benef: z.string(),
	codigo: z.string(),
	descricao: z.string(),
	excecao: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const produtos_ncmSchema = produtos_ncmBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const produtos_ncmCreateSchema = produtos_ncmSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const produtos_ncmUpdateSchema = produtos_ncmCreateSchema.partial();
