/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const HS_PRODUTOS_DADOS_TABLE_NAME = "hs_produtos_dados";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const hs_produtos_dadosBaseSchema = z.object({
	id: z.number(),
	id_produto: z.number(),
	nome: z.string(),
	ordem: z.number(),
	valor: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const hs_produtos_dadosSchema = hs_produtos_dadosBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const hs_produtos_dadosCreateSchema = hs_produtos_dadosSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const hs_produtos_dadosUpdateSchema =
	hs_produtos_dadosCreateSchema.partial();
