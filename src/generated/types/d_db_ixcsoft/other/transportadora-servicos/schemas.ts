/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const TRANSPORTADORA_SERVICOS_TABLE_NAME = "transportadora_servicos";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const transportadora_servicosBaseSchema = z.object({
	id: z.number(),
	codigo: z.string(),
	id_config: z.number(),
	id_transportadora: z.number(),
	modalidade: z.string(),
	nome: z.string(),
	valor: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const transportadora_servicosSchema = transportadora_servicosBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const transportadora_servicosCreateSchema =
	transportadora_servicosSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const transportadora_servicosUpdateSchema =
	transportadora_servicosCreateSchema.partial();
