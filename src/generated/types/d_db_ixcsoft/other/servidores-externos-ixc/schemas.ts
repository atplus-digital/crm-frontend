/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const SERVIDORES_EXTERNOS_IXC_TABLE_NAME = "servidores_externos_ixc";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const servidores_externos_ixcBaseSchema = z.object({
	id: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const servidores_externos_ixcSchema = servidores_externos_ixcBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const servidores_externos_ixcCreateSchema =
	servidores_externos_ixcSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const servidores_externos_ixcUpdateSchema =
	servidores_externos_ixcCreateSchema.partial();
