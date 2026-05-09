/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { tabela_precosAtivoSchema } from "./labels";

export const TABELA_PRECOS_TABLE_NAME = "tabela_precos";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const tabela_precosBaseSchema = z.object({
	id: z.number(),
	ativo: tabela_precosAtivoSchema,
	id_ultimo_operador: z.number(),
	tabela: z.string(),
	ultima_alteracao: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const tabela_precosSchema = tabela_precosBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const tabela_precosCreateSchema = tabela_precosSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const tabela_precosUpdateSchema = tabela_precosCreateSchema.partial();
