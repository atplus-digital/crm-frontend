/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const LICENCAS_PRODUTOS_IOT_TABLE_NAME = "licencas_produtos_iot";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const licencas_produtos_iotBaseSchema = z.object({
	id: z.number(),
	id_licenca_iot: z.number(),
	id_vd_contrato_produto: z.number(),
	quantidade: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const licencas_produtos_iotSchema = licencas_produtos_iotBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const licencas_produtos_iotCreateSchema =
	licencas_produtos_iotSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const licencas_produtos_iotUpdateSchema =
	licencas_produtos_iotCreateSchema.partial();
