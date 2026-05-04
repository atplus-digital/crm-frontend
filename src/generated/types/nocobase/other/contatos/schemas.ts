/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const F_CONTATOS_TABLE_NAME = "f_contatos";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const f_contatosBaseSchema = z.object({
	id: z.number(),
	f_contato: z.string(),
	f_nome: z.string(),
	updatedAt: z.string(),
	createdAt: z.string(),
});

// ============================================================
// RELATION SCHEMA (campos de relação)
// ============================================================
export const f_contatosRelationSchema = z.object({
	createdBy: z.number().nullable(),
	updatedBy: z.number().nullable(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const f_contatosSchema = f_contatosBaseSchema.merge(
	f_contatosRelationSchema,
);

// ============================================================
// CREATE SCHEMA
// ============================================================
export const f_contatosCreateSchema = f_contatosSchema.omit({
	createdAt: true,
	createdBy: true,
	id: true,
	updatedAt: true,
	updatedBy: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const f_contatosUpdateSchema = f_contatosCreateSchema.partial();
