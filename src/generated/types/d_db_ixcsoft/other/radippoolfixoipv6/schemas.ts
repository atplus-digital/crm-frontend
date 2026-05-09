/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const RADIPPOOLFIXOIPV6_TABLE_NAME = "radippoolfixoipv6";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const radippoolfixoipv6BaseSchema = z.object({
	id: z.number(),
	descricao: z.string(),
	prefixo: z.string(),
	rede: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const radippoolfixoipv6Schema = radippoolfixoipv6BaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const radippoolfixoipv6CreateSchema = radippoolfixoipv6Schema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const radippoolfixoipv6UpdateSchema =
	radippoolfixoipv6CreateSchema.partial();
