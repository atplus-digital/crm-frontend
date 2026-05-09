/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { vendedorStatusSchema } from "./labels";

export const VENDEDOR_TABLE_NAME = "vendedor";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const vendedorBaseSchema = z.object({
	id: z.number(),
	bairro: z.string(),
	celular: z.string(),
	cnpj_cpf: z.string(),
	comissao: z.number(),
	comissao_perc_recebimento: z.number(),
	comissao_v: z.number(),
	cor_no_mapa: z.string(),
	email: z.string(),
	endereco: z.string(),
	id_cidade: z.number(),
	ie_rg: z.string(),
	nome: z.string(),
	pipe_id_usuario: z.number(),
	status: vendedorStatusSchema,
	telefone: z.string(),
	ultima_atualizacao: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const vendedorSchema = vendedorBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const vendedorCreateSchema = vendedorSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const vendedorUpdateSchema = vendedorCreateSchema.partial();
