/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const RADUSUARIOS_REDES_ADICIONAIS_TABLE_NAME =
	"radusuarios_redes_adicionais";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const radusuarios_redes_adicionaisBaseSchema = z.object({
	id: z.number(),
	distance: z.number(),
	id_cliente: z.number(),
	next_hop: z.string(),
	rede: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const radusuarios_redes_adicionaisSchema =
	radusuarios_redes_adicionaisBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const radusuarios_redes_adicionaisCreateSchema =
	radusuarios_redes_adicionaisSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const radusuarios_redes_adicionaisUpdateSchema =
	radusuarios_redes_adicionaisCreateSchema.partial();
