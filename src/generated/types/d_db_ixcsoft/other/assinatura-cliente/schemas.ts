/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	assinatura_clienteStatusAssinaturaSchema,
	assinatura_clienteStatusFinanceiroSchema,
	assinatura_clienteStatusValidadeSchema,
	assinatura_clienteTipoPlanoSchema,
} from "./labels";

export const ASSINATURA_CLIENTE_TABLE_NAME = "assinatura_cliente";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const assinatura_clienteBaseSchema = z.object({
	id: z.number(),
	comissao: z.number(),
	create_time: z.string(),
	data_ativacao: z.string(),
	data_emissao: z.string(),
	data_ultimo_pagamento: z.string(),
	data_validade: z.string(),
	descricao: z.string(),
	id_assinatura_notificacao_grupo: z.number(),
	id_carteira_cobranca: z.number(),
	id_cliente: z.number(),
	id_filial: z.number(),
	id_tipo_cobranca: z.number(),
	id_tipo_documento: z.number(),
	id_vendedor: z.number(),
	obs: z.string(),
	status_assinatura: assinatura_clienteStatusAssinaturaSchema,
	status_financeiro: assinatura_clienteStatusFinanceiroSchema,
	status_validade: assinatura_clienteStatusValidadeSchema,
	tipo_plano: assinatura_clienteTipoPlanoSchema,
	update_time: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const assinatura_clienteSchema = assinatura_clienteBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const assinatura_clienteCreateSchema = assinatura_clienteSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const assinatura_clienteUpdateSchema =
	assinatura_clienteCreateSchema.partial();
