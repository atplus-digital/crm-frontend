/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const RAD_CAIXA_FTTH_TECNOLOGIA_TABLE_NAME = "rad_caixa_ftth_tecnologia";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const rad_caixa_ftth_tecnologiaBaseSchema = z.object({
	id: z.number(),
	cor_mapa: z.string(),
	tecnologia: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const rad_caixa_ftth_tecnologiaSchema =
	rad_caixa_ftth_tecnologiaBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const rad_caixa_ftth_tecnologiaCreateSchema =
	rad_caixa_ftth_tecnologiaSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const rad_caixa_ftth_tecnologiaUpdateSchema =
	rad_caixa_ftth_tecnologiaCreateSchema.partial();
