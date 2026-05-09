/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const CONTADOR_TABLE_NAME = "contador";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const contadorBaseSchema = z.object({
	id: z.number(),
	bairro: z.string(),
	cep: z.string(),
	cidade: z.number(),
	cnpj: z.string(),
	complemento: z.string(),
	cpf: z.string(),
	crc: z.string(),
	email: z.string(),
	endereco: z.string(),
	fax: z.string(),
	id_empresa: z.number(),
	nome: z.string(),
	numero: z.string(),
	telefone: z.string(),
	uf_crc: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const contadorSchema = contadorBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const contadorCreateSchema = contadorSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const contadorUpdateSchema = contadorCreateSchema.partial();
