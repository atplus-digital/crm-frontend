/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const CLIENTE_CONTRATO_TELEFONIA_TABLE_NAME =
	"cliente_contrato_telefonia";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const cliente_contrato_telefoniaBaseSchema = z.object({
	id: z.number(),
	ctrl_number: z.number(),
	id_contrato: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const cliente_contrato_telefoniaSchema =
	cliente_contrato_telefoniaBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const cliente_contrato_telefoniaCreateSchema =
	cliente_contrato_telefoniaSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const cliente_contrato_telefoniaUpdateSchema =
	cliente_contrato_telefoniaCreateSchema.partial();
