/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { clienteBaseSchema } from "../../cliente/schemas";

export const CRM_COBRANCA_TABLE_NAME = "crm_cobranca";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const crm_cobrancaBaseSchema = z.object({
	id: z.number(),
	data_hora_fim: z.string(),
	data_hora_inicio: z.string(),
	data_hora_proxima_acao: z.string(),
	data_hora_ultima_execucao_auto: z.string(),
	descricao: z.string(),
	id_cliente: z.number(),
	status: z.string(),
	ultima_atualizacao: z.string(),
});

// ============================================================
// RELATION SCHEMA (campos de relação)
// ============================================================
export const crm_cobrancaRelationSchema = z.object({
	f_cliente: z.lazy(() => clienteBaseSchema.nullable()),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const crm_cobrancaSchema = crm_cobrancaBaseSchema.extend(
	crm_cobrancaRelationSchema.shape,
);

// ============================================================
// CREATE SCHEMA
// ============================================================
export const crm_cobrancaCreateSchema = crm_cobrancaSchema.omit({
	f_cliente: true,
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const crm_cobrancaUpdateSchema = crm_cobrancaCreateSchema.partial();
