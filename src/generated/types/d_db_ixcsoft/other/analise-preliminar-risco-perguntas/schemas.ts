/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { analise_preliminar_risco_perguntasStatusPerguntaSchema } from "./labels";

export const ANALISE_PRELIMINAR_RISCO_PERGUNTAS_TABLE_NAME =
	"analise_preliminar_risco_perguntas";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const analise_preliminar_risco_perguntasBaseSchema = z.object({
	id: z.number(),
	descricao: z.string(),
	id_questionario: z.number(),
	obrigatorio: z.string(),
	options: z.string(),
	ordenacao: z.number(),
	qty_option: z.number(),
	status_pergunta: analise_preliminar_risco_perguntasStatusPerguntaSchema,
	tipo: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const analise_preliminar_risco_perguntasSchema =
	analise_preliminar_risco_perguntasBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const analise_preliminar_risco_perguntasCreateSchema =
	analise_preliminar_risco_perguntasSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const analise_preliminar_risco_perguntasUpdateSchema =
	analise_preliminar_risco_perguntasCreateSchema.partial();
