/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const PRODUTOS_CONTRATO_MVNO_TABLE_NAME = "produtos_contrato_mvno";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const produtos_contrato_mvnoBaseSchema = z.object({
	id: z.number(),
	id_linha_mvno: z.number(),
	id_produto_contrato: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const produtos_contrato_mvnoSchema = produtos_contrato_mvnoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const produtos_contrato_mvnoCreateSchema =
	produtos_contrato_mvnoSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const produtos_contrato_mvnoUpdateSchema =
	produtos_contrato_mvnoCreateSchema.partial();
