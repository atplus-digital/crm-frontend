/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const CLIENTE_VALIDA_CELULAR_TABLE_NAME = "cliente_valida_celular";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const cliente_valida_celularBaseSchema = z.object({
	id: z.number(),
	celular: z.number(),
	codigo_verificador: z.number(),
	id_cliente: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const cliente_valida_celularSchema = cliente_valida_celularBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const cliente_valida_celularCreateSchema =
	cliente_valida_celularSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const cliente_valida_celularUpdateSchema =
	cliente_valida_celularCreateSchema.partial();
