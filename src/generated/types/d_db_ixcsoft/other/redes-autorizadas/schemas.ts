/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const REDES_AUTORIZADAS_TABLE_NAME = "redes_autorizadas";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const redes_autorizadasBaseSchema = z.object({
	id: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const redes_autorizadasSchema = redes_autorizadasBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const redes_autorizadasCreateSchema = redes_autorizadasSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const redes_autorizadasUpdateSchema =
	redes_autorizadasCreateSchema.partial();
