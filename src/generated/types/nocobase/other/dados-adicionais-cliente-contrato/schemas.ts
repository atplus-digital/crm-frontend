/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	dados_adicionais_cliente_contratoFormaDePagamentoSchema,
	dados_adicionais_cliente_contratoPerfilDeUsoSchema,
} from "./labels";

export const T_DADOS_ADICIONAIS_CLIENTE_CONTRATO_TABLE_NAME =
	"t_dados_adicionais_cliente_contrato";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const dados_adicionais_cliente_contratoBaseSchema = z.object({
	id: z.number(),
	f_forma_de_pagamento: dados_adicionais_cliente_contratoFormaDePagamentoSchema,
	f_id_cliente_contrato: z.number(),
	f_origem_cliente: z.string(),
	f_perfil_de_uso: dados_adicionais_cliente_contratoPerfilDeUsoSchema,
	f_pessoas_na_residencia: z.number(),
	updatedAt: z.string(),
	createdAt: z.string(),
});

// ============================================================
// RELATION SCHEMA (campos de relação)
// ============================================================
export const dados_adicionais_cliente_contratoRelationSchema = z.object({
	createdBy: z.number().nullable(),
	updatedBy: z.number().nullable(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const dados_adicionais_cliente_contratoSchema =
	dados_adicionais_cliente_contratoBaseSchema.merge(
		dados_adicionais_cliente_contratoRelationSchema,
	);

// ============================================================
// CREATE SCHEMA
// ============================================================
export const dados_adicionais_cliente_contratoCreateSchema =
	dados_adicionais_cliente_contratoSchema.omit({
		createdAt: true,
		createdBy: true,
		id: true,
		updatedAt: true,
		updatedBy: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const dados_adicionais_cliente_contratoUpdateSchema =
	dados_adicionais_cliente_contratoCreateSchema.partial();
