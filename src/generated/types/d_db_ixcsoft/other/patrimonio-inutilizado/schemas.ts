/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { patrimonio_inutilizadoStatusSchema } from "./labels";

export const PATRIMONIO_INUTILIZADO_TABLE_NAME = "patrimonio_inutilizado";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const patrimonio_inutilizadoBaseSchema = z.object({
	id: z.number(),
	data_inutilizado: z.string(),
	id_motivo: z.number(),
	id_operador: z.number(),
	quantidade: z.string(),
	status: patrimonio_inutilizadoStatusSchema,
	valor: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const patrimonio_inutilizadoSchema = patrimonio_inutilizadoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const patrimonio_inutilizadoCreateSchema =
	patrimonio_inutilizadoSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const patrimonio_inutilizadoUpdateSchema =
	patrimonio_inutilizadoCreateSchema.partial();
