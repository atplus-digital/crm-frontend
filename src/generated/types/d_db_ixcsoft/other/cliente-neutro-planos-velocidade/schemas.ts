/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const CLIENTE_NEUTRO_PLANOS_VELOCIDADE_TABLE_NAME =
	"cliente_neutro_planos_velocidade";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const cliente_neutro_planos_velocidadeBaseSchema = z.object({
	id: z.number(),
	download: z.string(),
	id_cliente_neutro: z.number(),
	id_plano_velocidade_neutro: z.number(),
	upload: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const cliente_neutro_planos_velocidadeSchema =
	cliente_neutro_planos_velocidadeBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const cliente_neutro_planos_velocidadeCreateSchema =
	cliente_neutro_planos_velocidadeSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const cliente_neutro_planos_velocidadeUpdateSchema =
	cliente_neutro_planos_velocidadeCreateSchema.partial();
