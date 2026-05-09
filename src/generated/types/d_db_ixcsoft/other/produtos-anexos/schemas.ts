/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const PRODUTOS_ANEXOS_TABLE_NAME = "produtos_anexos";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const produtos_anexosBaseSchema = z.object({
	id: z.number(),
	arquivo: z.string(),
	data: z.string(),
	nome: z.string(),
	produto_id: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const produtos_anexosSchema = produtos_anexosBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const produtos_anexosCreateSchema = produtos_anexosSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const produtos_anexosUpdateSchema =
	produtos_anexosCreateSchema.partial();
