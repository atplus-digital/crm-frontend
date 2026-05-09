/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	alt_versao_chavesStatusSchema,
	alt_versao_chavesVersaoNovaSchema,
} from "./labels";

export const ALT_VERSAO_CHAVES_TABLE_NAME = "alt_versao_chaves";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const alt_versao_chavesBaseSchema = z.object({
	id: z.number(),
	codigo_clientes: z.string(),
	data_alteracao: z.string(),
	descricao: z.string(),
	id_produto: z.number(),
	qtd_chaves: z.number(),
	qtd_clientes: z.number(),
	responsavel: z.number(),
	status: alt_versao_chavesStatusSchema,
	tipo_chave: z.string(),
	versao_antiga: z.string(),
	versao_nova: alt_versao_chavesVersaoNovaSchema,
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const alt_versao_chavesSchema = alt_versao_chavesBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const alt_versao_chavesCreateSchema = alt_versao_chavesSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const alt_versao_chavesUpdateSchema =
	alt_versao_chavesCreateSchema.partial();
