/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	os_rede_neutraModoOperacaoSchema,
	os_rede_neutraStatusSchema,
	os_rede_neutraTipoSchema,
} from "./labels";

export const OS_REDE_NEUTRA_TABLE_NAME = "os_rede_neutra";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const os_rede_neutraBaseSchema = z.object({
	id: z.number(),
	caixa_ftth: z.string(),
	complemento: z.string(),
	data_aceita: z.string(),
	data_solicitada: z.string(),
	endereco: z.string(),
	external_id: z.string(),
	id_cadastro_vinculado: z.number(),
	id_cliente_neutro: z.number(),
	id_operador_neutro: z.number(),
	mensagem: z.string(),
	modo_operacao: os_rede_neutraModoOperacaoSchema,
	plano: z.number(),
	porta_ftth: z.number(),
	resource_id: z.string(),
	status: os_rede_neutraStatusSchema,
	tabela_cadastro_vinculado: z.string(),
	tipo: os_rede_neutraTipoSchema,
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const os_rede_neutraSchema = os_rede_neutraBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const os_rede_neutraCreateSchema = os_rede_neutraSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const os_rede_neutraUpdateSchema = os_rede_neutraCreateSchema.partial();
