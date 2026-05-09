/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const VINCULO_REGIAO_CLIENTE_NEUTRO_TABLE_NAME =
	"vinculo_regiao_cliente_neutro";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const vinculo_regiao_cliente_neutroBaseSchema = z.object({
	id: z.number(),
	id_cliente_neutro: z.number(),
	id_regiao_rede_neutra: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const vinculo_regiao_cliente_neutroSchema =
	vinculo_regiao_cliente_neutroBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const vinculo_regiao_cliente_neutroCreateSchema =
	vinculo_regiao_cliente_neutroSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const vinculo_regiao_cliente_neutroUpdateSchema =
	vinculo_regiao_cliente_neutroCreateSchema.partial();
