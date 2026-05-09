/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { radpopAberturaSchema, radpopTipoSchema } from "./labels";

export const RADPOP_TABLE_NAME = "radpop";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const radpopBaseSchema = z.object({
	id: z.number(),
	abertura: radpopAberturaSchema,
	altura: z.number(),
	bairro: z.string(),
	cep: z.string(),
	endereco: z.string(),
	id_cidade: z.number(),
	id_diretorio: z.number(),
	id_fornecedor: z.number(),
	id_projeto: z.number(),
	latitude: z.string(),
	longitude: z.string(),
	numero: z.string(),
	numestacao_anatel: z.number(),
	observacoes: z.string(),
	pop: z.string(),
	tipo: radpopTipoSchema,
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const radpopSchema = radpopBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const radpopCreateSchema = radpopSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const radpopUpdateSchema = radpopCreateSchema.partial();
