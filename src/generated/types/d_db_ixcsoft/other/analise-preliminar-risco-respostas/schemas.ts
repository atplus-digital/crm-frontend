/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const ANALISE_PRELIMINAR_RISCO_RESPOSTAS_TABLE_NAME =
	"analise_preliminar_risco_respostas";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const analise_preliminar_risco_respostasBaseSchema = z.object({
	id: z.number(),
	analise_preliminar_risco_respostas: z.number(),
	id_oss_chamado: z.number(),
	respostas: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const analise_preliminar_risco_respostasSchema =
	analise_preliminar_risco_respostasBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const analise_preliminar_risco_respostasCreateSchema =
	analise_preliminar_risco_respostasSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const analise_preliminar_risco_respostasUpdateSchema =
	analise_preliminar_risco_respostasCreateSchema.partial();
