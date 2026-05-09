/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const FOLHA_TURNO_TABLE_NAME = "folha_turno";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const folha_turnoBaseSchema = z.object({
	id: z.number(),
	data_hora_entrada: z.string(),
	data_hora_saida: z.string(),
	duracao_jornada: z.number(),
	fim_intervalo: z.string(),
	inicio_intervalo: z.string(),
	permitir_flexibilidade: z.number(),
	tipo_intervalo: z.number(),
	tipo_turno: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const folha_turnoSchema = folha_turnoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const folha_turnoCreateSchema = folha_turnoSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const folha_turnoUpdateSchema = folha_turnoCreateSchema.partial();
