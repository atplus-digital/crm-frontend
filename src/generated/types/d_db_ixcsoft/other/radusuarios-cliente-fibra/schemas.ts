/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const RADUSUARIOS_CLIENTE_FIBRA_TABLE_NAME = "radusuarios_cliente_fibra";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const radusuarios_cliente_fibraBaseSchema = z.object({
	id: z.number(),
	id_cliente_fibra: z.number(),
	id_radusuarios: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const radusuarios_cliente_fibraSchema =
	radusuarios_cliente_fibraBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const radusuarios_cliente_fibraCreateSchema =
	radusuarios_cliente_fibraSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const radusuarios_cliente_fibraUpdateSchema =
	radusuarios_cliente_fibraCreateSchema.partial();
