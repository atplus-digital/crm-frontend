/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const ARQUIVOS_CONVENIO_TABLE_NAME = "arquivos_convenio";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const arquivos_convenioBaseSchema = z.object({
	id: z.number(),
	data_ano: z.string(),
	data_fim_geracao: z.string(),
	data_final_geracao: z.string(),
	data_geracao: z.string(),
	data_mes: z.number(),
	nome_arquivo: z.string(),
	status_arquivo: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const arquivos_convenioSchema = arquivos_convenioBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const arquivos_convenioCreateSchema = arquivos_convenioSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const arquivos_convenioUpdateSchema =
	arquivos_convenioCreateSchema.partial();
