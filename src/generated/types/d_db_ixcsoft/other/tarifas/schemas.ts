/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { tarifasPadraoSchema, tarifasTipoChamadaSchema } from "./labels";

export const TARIFAS_TABLE_NAME = "tarifas";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const tarifasBaseSchema = z.object({
	id: z.number(),
	custo_duracao_min_segundos: z.number(),
	custo_fracao_segundos: z.number(),
	custo_por_minuto: z.number(),
	duracao_min_segundos: z.number(),
	franquia_segundos: z.number(),
	id_tarifa_grupo: z.number(),
	padrao: tarifasPadraoSchema,
	prefixo: z.string(),
	tarifar_fracao_segundos: z.number(),
	tipo_chamada: tarifasTipoChamadaSchema,
	valor: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const tarifasSchema = tarifasBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const tarifasCreateSchema = tarifasSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const tarifasUpdateSchema = tarifasCreateSchema.partial();
