/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	patrimonio_arquivoClassificacaoArquivoSchema,
	patrimonio_arquivoTipoSchema,
} from "./labels";

export const PATRIMONIO_ARQUIVO_TABLE_NAME = "patrimonio_arquivo";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const patrimonio_arquivoBaseSchema = z.object({
	id: z.number(),
	classificacao_arquivo: patrimonio_arquivoClassificacaoArquivoSchema,
	data_envio: z.string(),
	descricao: z.string(),
	id_patrimonio: z.number(),
	local_arquivo: z.string(),
	nome_arquivo: z.string(),
	tipo: patrimonio_arquivoTipoSchema,
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const patrimonio_arquivoSchema = patrimonio_arquivoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const patrimonio_arquivoCreateSchema = patrimonio_arquivoSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const patrimonio_arquivoUpdateSchema =
	patrimonio_arquivoCreateSchema.partial();
