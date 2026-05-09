/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { cliente_trialTipoPessoaSchema } from "./labels";

export const CLIENTE_TRIAL_TABLE_NAME = "cliente_trial";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const cliente_trialBaseSchema = z.object({
	id: z.number(),
	bairro: z.string(),
	cep: z.string(),
	cidade: z.number(),
	cnpj_cpf: z.string(),
	complemento: z.string(),
	email: z.string(),
	endereco: z.string(),
	fantasia: z.string(),
	fone: z.string(),
	ie_identidade: z.string(),
	numero: z.string(),
	ramal: z.string(),
	razao: z.string(),
	referencia: z.string(),
	senha: z.string(),
	status: z.string(),
	telefone_celular: z.string(),
	telefone_comercial: z.string(),
	tipo_pessoa: cliente_trialTipoPessoaSchema,
	uf: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const cliente_trialSchema = cliente_trialBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const cliente_trialCreateSchema = cliente_trialSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const cliente_trialUpdateSchema = cliente_trialCreateSchema.partial();
