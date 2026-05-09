/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const NUMEROS_BINAGEM_DIDS_TABLE_NAME = "numeros_binagem_dids";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const numeros_binagem_didsBaseSchema = z.object({
	id: z.number(),
	ddd: z.number(),
	ddi: z.number(),
	id_pool: z.number(),
	numero: z.string(),
	usado: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const numeros_binagem_didsSchema = numeros_binagem_didsBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const numeros_binagem_didsCreateSchema = numeros_binagem_didsSchema.omit(
	{
		id: true,
	},
);

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const numeros_binagem_didsUpdateSchema =
	numeros_binagem_didsCreateSchema.partial();
