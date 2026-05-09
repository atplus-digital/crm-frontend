/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	cliente_bancosTipoContaSchema,
	cliente_bancosTipoPessoaSchema,
} from "./labels";

export const CLIENTE_BANCOS_TABLE_NAME = "cliente_bancos";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const cliente_bancosBaseSchema = z.object({
	id: z.number(),
	agencia: z.string(),
	banco: z.string(),
	cnpj_cpf: z.string(),
	cod_banco: z.string(),
	conta_corrente: z.string(),
	id_cliente: z.number(),
	tempo_conta: z.string(),
	tipo_conta: cliente_bancosTipoContaSchema,
	tipo_pessoa: cliente_bancosTipoPessoaSchema,
	titular: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const cliente_bancosSchema = cliente_bancosBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const cliente_bancosCreateSchema = cliente_bancosSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const cliente_bancosUpdateSchema = cliente_bancosCreateSchema.partial();
