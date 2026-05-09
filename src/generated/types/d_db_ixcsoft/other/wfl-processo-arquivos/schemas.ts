/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { wfl_processo_arquivosTipoDocumentacaoSchema } from "./labels";

export const WFL_PROCESSO_ARQUIVOS_TABLE_NAME = "wfl_processo_arquivos";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const wfl_processo_arquivosBaseSchema = z.object({
	id: z.number(),
	data_envio: z.string(),
	descricao: z.string(),
	id_processo: z.number(),
	link_documentacao: z.string(),
	nome_arquivo: z.string(),
	operador: z.number(),
	tipo_documentacao: wfl_processo_arquivosTipoDocumentacaoSchema,
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const wfl_processo_arquivosSchema = wfl_processo_arquivosBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const wfl_processo_arquivosCreateSchema =
	wfl_processo_arquivosSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const wfl_processo_arquivosUpdateSchema =
	wfl_processo_arquivosCreateSchema.partial();
