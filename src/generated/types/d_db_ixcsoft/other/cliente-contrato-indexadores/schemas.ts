/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const CLIENTE_CONTRATO_INDEXADORES_TABLE_NAME =
	"cliente_contrato_indexadores";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const cliente_contrato_indexadoresBaseSchema = z.object({
	id: z.number(),
	modelo_email: z.number(),
	nome: z.string(),
	porcentagem: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const cliente_contrato_indexadoresSchema =
	cliente_contrato_indexadoresBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const cliente_contrato_indexadoresCreateSchema =
	cliente_contrato_indexadoresSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const cliente_contrato_indexadoresUpdateSchema =
	cliente_contrato_indexadoresCreateSchema.partial();
