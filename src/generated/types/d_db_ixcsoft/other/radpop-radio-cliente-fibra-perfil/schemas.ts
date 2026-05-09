/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const RADPOP_RADIO_CLIENTE_FIBRA_PERFIL_TABLE_NAME =
	"radpop_radio_cliente_fibra_perfil";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const radpop_radio_cliente_fibra_perfilBaseSchema = z.object({
	id: z.number(),
	comando: z.string(),
	fabricante_modelo: z.string(),
	nome: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const radpop_radio_cliente_fibra_perfilSchema =
	radpop_radio_cliente_fibra_perfilBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const radpop_radio_cliente_fibra_perfilCreateSchema =
	radpop_radio_cliente_fibra_perfilSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const radpop_radio_cliente_fibra_perfilUpdateSchema =
	radpop_radio_cliente_fibra_perfilCreateSchema.partial();
