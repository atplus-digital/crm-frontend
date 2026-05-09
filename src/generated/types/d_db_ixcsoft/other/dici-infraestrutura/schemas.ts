/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	dici_infraestruturaAberturaSchema,
	dici_infraestruturaEnlacesPropriosTerrestresSwapSchema,
	dici_infraestruturaEnlacesTipoMeioSchema,
	dici_infraestruturaTipoSchema,
} from "./labels";

export const DICI_INFRAESTRUTURA_TABLE_NAME = "dici_infraestrutura";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const dici_infraestruturaBaseSchema = z.object({
	id: z.number(),
	abertura: dici_infraestruturaAberturaSchema,
	ano: z.string(),
	cnpj: z.string(),
	cod_ibge: z.string(),
	endereco: z.string(),
	enlaces_contratados_id: z.string(),
	enlaces_contratados_prestadora: z.string(),
	enlaces_proprios_terrestres_c_nominal: z.string(),
	enlaces_proprios_terrestres_id: z.string(),
	enlaces_proprios_terrestres_swap:
		dici_infraestruturaEnlacesPropriosTerrestresSwapSchema,
	enlaces_satelites_cap_uso_canal_downlink_mbps: z.string(),
	enlaces_satelites_cap_uso_canal_downlink_mhz: z.string(),
	enlaces_satelites_cap_uso_canal_uplink_mbps: z.string(),
	enlaces_satelites_cap_uso_canal_uplink_mhz: z.string(),
	enlaces_satelites_cod_satelite: z.string(),
	enlaces_satelites_freq_central_canal_downlink_mhz: z.string(),
	enlaces_satelites_freq_central_canal_uplink_mhz: z.string(),
	enlaces_satelites_id: z.number(),
	enlaces_tipo_meio: dici_infraestruturaEnlacesTipoMeioSchema,
	estacao_a_id: z.number(),
	estacao_b_id: z.number(),
	geometria_wkt: z.string(),
	id_estacao: z.number(),
	id_filial: z.number(),
	latitude: z.string(),
	longitude: z.string(),
	numestacao: z.string(),
	srid: z.string(),
	tipo: dici_infraestruturaTipoSchema,
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const dici_infraestruturaSchema = dici_infraestruturaBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const dici_infraestruturaCreateSchema = dici_infraestruturaSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const dici_infraestruturaUpdateSchema =
	dici_infraestruturaCreateSchema.partial();
