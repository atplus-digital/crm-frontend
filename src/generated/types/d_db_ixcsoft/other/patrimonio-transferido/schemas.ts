/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const PATRIMONIO_TRANSFERIDO_TABLE_NAME = "patrimonio_transferido";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const patrimonio_transferidoBaseSchema = z.object({
	id: z.number(),
	id_item_transf: z.number(),
	id_patrimonio: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const patrimonio_transferidoSchema = patrimonio_transferidoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const patrimonio_transferidoCreateSchema =
	patrimonio_transferidoSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const patrimonio_transferidoUpdateSchema =
	patrimonio_transferidoCreateSchema.partial();
