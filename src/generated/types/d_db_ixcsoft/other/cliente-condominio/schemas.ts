/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { cliente_condominioBlocoUnicoSchema } from "./labels";

export const CLIENTE_CONDOMINIO_TABLE_NAME = "cliente_condominio";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const cliente_condominioBaseSchema = z.object({
	id: z.number(),
	bairro: z.string(),
	bloco_unico: cliente_condominioBlocoUnicoSchema,
	celular_sindico: z.string(),
	cep: z.string(),
	cnpj: z.string(),
	condominio: z.string(),
	data_cadastro: z.string(),
	endereco: z.string(),
	id_cidade: z.number(),
	numero: z.string(),
	obs: z.string(),
	quantidade_shafts: z.number(),
	sindico: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const cliente_condominioSchema = cliente_condominioBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const cliente_condominioCreateSchema = cliente_condominioSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const cliente_condominioUpdateSchema =
	cliente_condominioCreateSchema.partial();
