/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const UF_TABLE_NAME = "uf";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const ufBaseSchema = z.object({
	id: z.number(),
	api_id: z.number(),
	cod_ibge: z.number(),
	cod_uf: z.string(),
	id_pais: z.number(),
	latitude: z.string(),
	longitude: z.string(),
	nome: z.string(),
	regiao: z.string(),
	sigla: z.string(),
});

// ============================================================
// RELATION SCHEMA (campos de relação)
// ============================================================
export const ufRelationSchema = z.object({
	f_pais: z.number().nullable(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const ufSchema = ufBaseSchema.extend(ufRelationSchema.shape);

// ============================================================
// CREATE SCHEMA
// ============================================================
export const ufCreateSchema = ufSchema.omit({
	f_pais: true,
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const ufUpdateSchema = ufCreateSchema.partial();
