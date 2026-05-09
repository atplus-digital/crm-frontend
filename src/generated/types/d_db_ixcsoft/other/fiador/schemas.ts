/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { fiadorEstadoCivilSchema } from "./labels";

export const FIADOR_TABLE_NAME = "fiador";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const fiadorBaseSchema = z.object({
	id: z.number(),
	bairro: z.number(),
	cidade: z.number(),
	conjuge: z.string(),
	conjuge_cpf: z.string(),
	conjuge_orgao_emissor: z.string(),
	conjuge_rg: z.string(),
	cpf: z.string(),
	endereco: z.string(),
	endereco_numero: z.string(),
	estado_civil: fiadorEstadoCivilSchema,
	nome: z.string(),
	orgao_emissor: z.string(),
	rg: z.string(),
	telefone: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const fiadorSchema = fiadorBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const fiadorCreateSchema = fiadorSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const fiadorUpdateSchema = fiadorCreateSchema.partial();
