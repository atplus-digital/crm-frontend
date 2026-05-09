/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { fn_areceber_remessasEnviadoSchema } from "./labels";

export const FN_ARECEBER_REMESSAS_TABLE_NAME = "fn_areceber_remessas";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const fn_areceber_remessasBaseSchema = z.object({
	id: z.number(),
	enviado: fn_areceber_remessasEnviadoSchema,
	id_carteira: z.number(),
	id_receber: z.number(),
	id_remessa: z.number(),
	tipo_remessa: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const fn_areceber_remessasSchema = fn_areceber_remessasBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const fn_areceber_remessasCreateSchema = fn_areceber_remessasSchema.omit(
	{
		id: true,
	},
);

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const fn_areceber_remessasUpdateSchema =
	fn_areceber_remessasCreateSchema.partial();
