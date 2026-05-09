/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const PRODUTOS_COD_SERVICOS_TABLE_NAME = "produtos_cod_servicos";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const produtos_cod_servicosBaseSchema = z.object({
	id: z.number(),
	cod_tributacao_municipio: z.string(),
	codigo: z.string(),
	descricao: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const produtos_cod_servicosSchema = produtos_cod_servicosBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const produtos_cod_servicosCreateSchema =
	produtos_cod_servicosSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const produtos_cod_servicosUpdateSchema =
	produtos_cod_servicosCreateSchema.partial();
