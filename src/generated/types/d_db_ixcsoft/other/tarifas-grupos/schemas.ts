/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { tarifas_gruposPadraoSchema } from "./labels";

export const TARIFAS_GRUPOS_TABLE_NAME = "tarifas_grupos";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const tarifas_gruposBaseSchema = z.object({
	id: z.number(),
	ddd: z.number(),
	ddi: z.number(),
	dt_fin_vigencia: z.string(),
	dt_ini_vigencia: z.string(),
	franquia_mascara: z.string(),
	franquia_tempo_segundos: z.number(),
	franquia_valor: z.number(),
	id_produto_franquia: z.number(),
	id_produto_ligacoes: z.number(),
	id_tarifa_franquia: z.number(),
	idx_zeus: z.number(),
	nome: z.string(),
	padrao: tarifas_gruposPadraoSchema,
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const tarifas_gruposSchema = tarifas_gruposBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const tarifas_gruposCreateSchema = tarifas_gruposSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const tarifas_gruposUpdateSchema = tarifas_gruposCreateSchema.partial();
