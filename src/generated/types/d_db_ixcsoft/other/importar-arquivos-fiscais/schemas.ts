/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const IMPORTAR_ARQUIVOS_FISCAIS_TABLE_NAME = "importar_arquivos_fiscais";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const importar_arquivos_fiscaisBaseSchema = z.object({
	id: z.number(),
	arquivos: z.string(),
	geracao_lote_id: z.number(),
	tipo_importacao: z.string(),
	tipos_arquivos_suportados: z.string(),
	vd_saida_id: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const importar_arquivos_fiscaisSchema =
	importar_arquivos_fiscaisBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const importar_arquivos_fiscaisCreateSchema =
	importar_arquivos_fiscaisSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const importar_arquivos_fiscaisUpdateSchema =
	importar_arquivos_fiscaisCreateSchema.partial();
