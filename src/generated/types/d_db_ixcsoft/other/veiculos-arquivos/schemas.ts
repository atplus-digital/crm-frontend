/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const VEICULOS_ARQUIVOS_TABLE_NAME = "veiculos_arquivos";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const veiculos_arquivosBaseSchema = z.object({
	id: z.number(),
	data_envio: z.string(),
	descricao: z.string(),
	id_veiculo: z.number(),
	local_arquivo: z.string(),
	nome_arquivo: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const veiculos_arquivosSchema = veiculos_arquivosBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const veiculos_arquivosCreateSchema = veiculos_arquivosSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const veiculos_arquivosUpdateSchema =
	veiculos_arquivosCreateSchema.partial();
