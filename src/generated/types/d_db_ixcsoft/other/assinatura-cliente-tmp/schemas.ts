/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	assinatura_cliente_tmpStatusAssinaturaSchema,
	assinatura_cliente_tmpStatusFinanceiroSchema,
	assinatura_cliente_tmpStatusValidadeSchema,
	assinatura_cliente_tmpTipoPlanoSchema,
} from "./labels";

export const ASSINATURA_CLIENTE_TMP_TABLE_NAME = "assinatura_cliente_tmp";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const assinatura_cliente_tmpBaseSchema = z.object({
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
	status_assinatura: assinatura_cliente_tmpStatusAssinaturaSchema,
	status_financeiro: assinatura_cliente_tmpStatusFinanceiroSchema,
	status_validade: assinatura_cliente_tmpStatusValidadeSchema,
	tipo_plano: assinatura_cliente_tmpTipoPlanoSchema,
	update_time: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const assinatura_cliente_tmpSchema = assinatura_cliente_tmpBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const assinatura_cliente_tmpCreateSchema =
	assinatura_cliente_tmpSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const assinatura_cliente_tmpUpdateSchema =
	assinatura_cliente_tmpCreateSchema.partial();
