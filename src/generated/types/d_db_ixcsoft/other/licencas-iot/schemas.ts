/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { licencas_iotStatusSchema } from "./labels";

export const LICENCAS_IOT_TABLE_NAME = "licencas_iot";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const licencas_iotBaseSchema = z.object({
	id: z.number(),
	codigo_licenca_integracao: z.string(),
	descricao: z.string(),
	id_assinatura_integracao: z.string(),
	id_cliente_integracao: z.string(),
	id_contrato: z.number(),
	id_integracao: z.number(),
	id_licenca_integracao: z.string(),
	status: licencas_iotStatusSchema,
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const licencas_iotSchema = licencas_iotBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const licencas_iotCreateSchema = licencas_iotSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const licencas_iotUpdateSchema = licencas_iotCreateSchema.partial();
