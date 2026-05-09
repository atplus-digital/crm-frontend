/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	regua_cobranca_cobrancasOsGeradaSchema,
	regua_cobranca_cobrancasStatusSchema,
} from "./labels";

export const REGUA_COBRANCA_COBRANCAS_TABLE_NAME = "regua_cobranca_cobrancas";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const regua_cobranca_cobrancasBaseSchema = z.object({
	id: z.number(),
	cliente_id: z.number(),
	descricao: z.string(),
	fn_areceber_id: z.number(),
	os_gerada: regua_cobranca_cobrancasOsGeradaSchema,
	regua_cobranca_parametros_dias_id: z.number(),
	status: regua_cobranca_cobrancasStatusSchema,
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const regua_cobranca_cobrancasSchema =
	regua_cobranca_cobrancasBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const regua_cobranca_cobrancasCreateSchema =
	regua_cobranca_cobrancasSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const regua_cobranca_cobrancasUpdateSchema =
	regua_cobranca_cobrancasCreateSchema.partial();
