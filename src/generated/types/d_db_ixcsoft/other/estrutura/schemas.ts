/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { estruturaAtivoSchema } from "./labels";

export const ESTRUTURA_TABLE_NAME = "estrutura";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const estruturaBaseSchema = z.object({
	id: z.number(),
	ativo: estruturaAtivoSchema,
	bairro: z.string(),
	cep: z.string(),
	complemento: z.string(),
	descricao: z.string(),
	endereco: z.string(),
	id_cidade: z.number(),
	id_filial: z.number(),
	id_planejamento_analitico: z.number(),
	latitude: z.string(),
	longitude: z.string(),
	numero: z.string(),
	observacao: z.string(),
	referencia: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const estruturaSchema = estruturaBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const estruturaCreateSchema = estruturaSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const estruturaUpdateSchema = estruturaCreateSchema.partial();
