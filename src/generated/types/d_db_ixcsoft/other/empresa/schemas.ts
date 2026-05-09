/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const EMPRESA_TABLE_NAME = "empresa";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const empresaBaseSchema = z.object({
	id: z.number(),
	logo_autenticacao_tv: z.string(),
	logo_docs: z.string(),
	logo_recibo: z.string(),
	logomarca: z.string(),
	razao: z.string(),
	sped_indicador_natureza_pessoa_juridica: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const empresaSchema = empresaBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const empresaCreateSchema = empresaSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const empresaUpdateSchema = empresaCreateSchema.partial();
