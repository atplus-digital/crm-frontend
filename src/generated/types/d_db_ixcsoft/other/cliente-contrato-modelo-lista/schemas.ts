/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const CLIENTE_CONTRATO_MODELO_LISTA_TABLE_NAME =
	"cliente_contrato_modelo_lista";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const cliente_contrato_modelo_listaBaseSchema = z.object({
	id: z.number(),
	descricao: z.string(),
	id_modelo: z.number(),
	id_produto: z.number(),
	ordem: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const cliente_contrato_modelo_listaSchema =
	cliente_contrato_modelo_listaBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const cliente_contrato_modelo_listaCreateSchema =
	cliente_contrato_modelo_listaSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const cliente_contrato_modelo_listaUpdateSchema =
	cliente_contrato_modelo_listaCreateSchema.partial();
