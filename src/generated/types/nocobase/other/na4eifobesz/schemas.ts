/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const T_NA4EIFOBESZ_TABLE_NAME = "t_na4eifobesz";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const na4eifobeszBaseSchema = z.object({
	f_fk_pacote_adicional_negociacao: z.number(),
	f_fk_pacote_adicional_pacote: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const na4eifobeszSchema = na4eifobeszBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const na4eifobeszCreateSchema = na4eifobeszSchema;

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const na4eifobeszUpdateSchema = na4eifobeszCreateSchema.partial();
