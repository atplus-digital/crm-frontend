/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	linha_mvno_tmpApiSchema,
	linha_mvno_tmpPortabilidadeSchema,
} from "./labels";

export const LINHA_MVNO_TMP_TABLE_NAME = "linha_mvno_tmp";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const linha_mvno_tmpBaseSchema = z.object({
	id: z.number(),
	api: linha_mvno_tmpApiSchema,
	data_agendamento: z.string(),
	ddd_telefone: z.number(),
	id_account_mvno: z.string(),
	id_assinatura_cliente: z.number(),
	id_assinatura_cliente_produto: z.number(),
	id_contrato: z.number(),
	id_contrato_integracao: z.number(),
	id_customer_mvno: z.string(),
	id_integracao: z.number(),
	id_linha_integracao: z.string(),
	id_prod_ixc_mvno: z.number(),
	msisdn: z.string(),
	numero_telefone: z.string(),
	portabilidade: linha_mvno_tmpPortabilidadeSchema,
	profile_mvno: z.string(),
	simcard: z.string(),
	tipo_numero: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const linha_mvno_tmpSchema = linha_mvno_tmpBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const linha_mvno_tmpCreateSchema = linha_mvno_tmpSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const linha_mvno_tmpUpdateSchema = linha_mvno_tmpCreateSchema.partial();
