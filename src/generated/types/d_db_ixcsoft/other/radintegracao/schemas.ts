/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const RADINTEGRACAO_TABLE_NAME = "radintegracao";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const radintegracaoBaseSchema = z.object({
	id: z.number(),
	active_apus: z.string(),
	certificado_ssl: z.string(),
	integracao: z.string(),
	nome: z.string(),
	senha_certificado_ssl: z.string(),
	url: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const radintegracaoSchema = radintegracaoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const radintegracaoCreateSchema = radintegracaoSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const radintegracaoUpdateSchema = radintegracaoCreateSchema.partial();
