/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const RADUSUARIOS_CIRCUITO_TABLE_NAME = "radusuarios_circuito";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const radusuarios_circuitoBaseSchema = z.object({
	id: z.number(),
	descricao: z.string(),
	id_cliente: z.number(),
	id_contrato: z.number(),
	id_login: z.number(),
	id_vd_produto_contrato: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const radusuarios_circuitoSchema = radusuarios_circuitoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const radusuarios_circuitoCreateSchema = radusuarios_circuitoSchema.omit(
	{
		id: true,
	},
);

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const radusuarios_circuitoUpdateSchema =
	radusuarios_circuitoCreateSchema.partial();
