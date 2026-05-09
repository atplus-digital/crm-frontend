/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { pesquisa_satisfacaoFormaEnvioSchema } from "./labels";

export const PESQUISA_SATISFACAO_TABLE_NAME = "pesquisa_satisfacao";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const pesquisa_satisfacaoBaseSchema = z.object({
	id: z.number(),
	cor_cabecalho: z.string(),
	descricao: z.string(),
	forma_envio: pesquisa_satisfacaoFormaEnvioSchema,
	link: z.string(),
	logotipo: z.string(),
	mensagem_email: z.number(),
	mensagem_omnichannel: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const pesquisa_satisfacaoSchema = pesquisa_satisfacaoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const pesquisa_satisfacaoCreateSchema = pesquisa_satisfacaoSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const pesquisa_satisfacaoUpdateSchema =
	pesquisa_satisfacaoCreateSchema.partial();
