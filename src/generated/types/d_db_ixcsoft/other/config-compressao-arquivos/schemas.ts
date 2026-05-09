/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	config_compressao_arquivosReduzirQualidadeImagemSchema,
	config_compressao_arquivosStatusSchema,
} from "./labels";

export const CONFIG_COMPRESSAO_ARQUIVOS_TABLE_NAME =
	"config_compressao_arquivos";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const config_compressao_arquivosBaseSchema = z.object({
	id: z.number(),
	escala_reducao: z.number(),
	reducao_imagem: z.number(),
	reduzir_qualidade_imagem:
		config_compressao_arquivosReduzirQualidadeImagemSchema,
	status: config_compressao_arquivosStatusSchema,
	tamanho_min_arquivo_kb: z.number(),
	tamanho_min_arquivo_pdf_kb: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const config_compressao_arquivosSchema =
	config_compressao_arquivosBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const config_compressao_arquivosCreateSchema =
	config_compressao_arquivosSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const config_compressao_arquivosUpdateSchema =
	config_compressao_arquivosCreateSchema.partial();
