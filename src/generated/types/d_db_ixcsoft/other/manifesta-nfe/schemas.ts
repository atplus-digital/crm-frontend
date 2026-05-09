/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const MANIFESTA_NFE_TABLE_NAME = "manifesta_nfe";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const manifesta_nfeBaseSchema = z.object({
	id: z.number(),
	codigo_manifestacao: z.string(),
	descricao_manifestacao: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const manifesta_nfeSchema = manifesta_nfeBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const manifesta_nfeCreateSchema = manifesta_nfeSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const manifesta_nfeUpdateSchema = manifesta_nfeCreateSchema.partial();
