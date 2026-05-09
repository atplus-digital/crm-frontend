/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { df_elementoAtivoSchema } from "./labels";

export const DF_ELEMENTO_TABLE_NAME = "df_elemento";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const df_elementoBaseSchema = z.object({
	id: z.number(),
	ativo: df_elementoAtivoSchema,
	codigo_estilo_caixa: z.string(),
	codigo_identificador: z.string(),
	comprimento: z.number(),
	descricao: z.string(),
	id_diretorio: z.number(),
	id_elemento_pai: z.number(),
	id_mini_projeto: z.number(),
	id_projeto: z.number(),
	id_tipo_elemento: z.number(),
	observacao: z.string(),
	preco_unidade: z.number(),
	tipo: z.string(),
	ultima_atualizacao: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const df_elementoSchema = df_elementoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const df_elementoCreateSchema = df_elementoSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const df_elementoUpdateSchema = df_elementoCreateSchema.partial();
