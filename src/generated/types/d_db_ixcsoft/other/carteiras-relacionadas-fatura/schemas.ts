/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const CARTEIRAS_RELACIONADAS_FATURA_TABLE_NAME =
	"carteiras_relacionadas_fatura";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const carteiras_relacionadas_faturaBaseSchema = z.object({
	id: z.number(),
	id_carteira_relacionada: z.number(),
	id_carteira_tipo_fatura: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const carteiras_relacionadas_faturaSchema =
	carteiras_relacionadas_faturaBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const carteiras_relacionadas_faturaCreateSchema =
	carteiras_relacionadas_faturaSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const carteiras_relacionadas_faturaUpdateSchema =
	carteiras_relacionadas_faturaCreateSchema.partial();
