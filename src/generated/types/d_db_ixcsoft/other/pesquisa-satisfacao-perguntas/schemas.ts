/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	pesquisa_satisfacao_perguntasObrigatoriaSchema,
	pesquisa_satisfacao_perguntasTipoRespostaSchema,
} from "./labels";

export const PESQUISA_SATISFACAO_PERGUNTAS_TABLE_NAME =
	"pesquisa_satisfacao_perguntas";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const pesquisa_satisfacao_perguntasBaseSchema = z.object({
	id: z.number(),
	descricao: z.string(),
	obrigatoria: pesquisa_satisfacao_perguntasObrigatoriaSchema,
	ordenacao: z.number(),
	pesquisa_satisfacao_id: z.number(),
	tipo_resposta: pesquisa_satisfacao_perguntasTipoRespostaSchema,
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const pesquisa_satisfacao_perguntasSchema =
	pesquisa_satisfacao_perguntasBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const pesquisa_satisfacao_perguntasCreateSchema =
	pesquisa_satisfacao_perguntasSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const pesquisa_satisfacao_perguntasUpdateSchema =
	pesquisa_satisfacao_perguntasCreateSchema.partial();
