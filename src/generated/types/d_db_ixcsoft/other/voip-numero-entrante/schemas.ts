/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const VOIP_NUMERO_ENTRANTE_TABLE_NAME = "voip_numero_entrante";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const voip_numero_entranteBaseSchema = z.object({
	id: z.number(),
	descricao: z.string(),
	id_ramal: z.number(),
	numero_entrante: z.string(),
	ramal: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const voip_numero_entranteSchema = voip_numero_entranteBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const voip_numero_entranteCreateSchema = voip_numero_entranteSchema.omit(
	{
		id: true,
	},
);

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const voip_numero_entranteUpdateSchema =
	voip_numero_entranteCreateSchema.partial();
