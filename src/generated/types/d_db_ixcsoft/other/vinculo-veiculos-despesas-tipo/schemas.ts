/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const VINCULO_VEICULOS_DESPESAS_TIPO_TABLE_NAME =
	"vinculo_veiculos_despesas_tipo";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const vinculo_veiculos_despesas_tipoBaseSchema = z.object({
	id: z.number(),
	despesa_id: z.number(),
	despesa_tipo_id: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const vinculo_veiculos_despesas_tipoSchema =
	vinculo_veiculos_despesas_tipoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const vinculo_veiculos_despesas_tipoCreateSchema =
	vinculo_veiculos_despesas_tipoSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const vinculo_veiculos_despesas_tipoUpdateSchema =
	vinculo_veiculos_despesas_tipoCreateSchema.partial();
