/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { usersBaseSchema } from "../users/schemas";
import {
	troca_enderecoStatusSchema,
	troca_enderecoTaxaInstalacaoSchema,
} from "./labels";

export const T_TROCA_ENDERECO_TABLE_NAME = "t_troca_endereco";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const troca_enderecoBaseSchema = z.object({
	id: z.number(),
	f_bairro: z.string(),
	f_cep: z.string(),
	f_cliente: z.string(),
	f_endereco: z.string(),
	f_endereco_cidade: z.string(),
	f_endereco_complemento: z.string(),
	f_endereco_estado: z.string(),
	f_endereco_numero: z.string(),
	f_endereco_referencia: z.string(),
	f_id_atendimento: z.string(),
	f_id_contrato: z.string(),
	f_obs: z.string(),
	f_status: troca_enderecoStatusSchema,
	f_taxa_instalacao: troca_enderecoTaxaInstalacaoSchema,
	f_telefone_contato: z.string(),
	updatedAt: z.string(),
	updatedById: z.string(),
	createdAt: z.string(),
	createdById: z.string(),
});

// ============================================================
// RELATION SCHEMA (campos de relação)
// ============================================================
export const troca_enderecoRelationSchema = z.object({
	createdBy: z.lazy(() => usersBaseSchema.nullable()),
	updatedBy: z.lazy(() => usersBaseSchema.nullable()),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const troca_enderecoSchema = troca_enderecoBaseSchema.extend(
	troca_enderecoRelationSchema.shape,
);

// ============================================================
// CREATE SCHEMA
// ============================================================
export const troca_enderecoCreateSchema = troca_enderecoSchema.omit({
	createdAt: true,
	createdBy: true,
	createdById: true,
	id: true,
	updatedAt: true,
	updatedBy: true,
	updatedById: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const troca_enderecoUpdateSchema = troca_enderecoCreateSchema.partial();
