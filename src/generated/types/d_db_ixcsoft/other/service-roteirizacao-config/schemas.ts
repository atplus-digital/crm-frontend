/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	service_roteirizacao_configApiRoteirizacaoSchema,
	service_roteirizacao_configConsiderarTempoDeslocamentoSchema,
	service_roteirizacao_configConsiderarTransitoSchema,
	service_roteirizacao_configInicioRotaSchema,
	service_roteirizacao_configRetornarAlmocoSchema,
	service_roteirizacao_configRoteirizarPorSchema,
} from "./labels";

export const SERVICE_ROTEIRIZACAO_CONFIG_TABLE_NAME =
	"service_roteirizacao_config";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const service_roteirizacao_configBaseSchema = z.object({
	id: z.number(),
	api_roteirizacao: service_roteirizacao_configApiRoteirizacaoSchema,
	cep: z.string(),
	considerar_tempo_deslocamento:
		service_roteirizacao_configConsiderarTempoDeslocamentoSchema,
	considerar_transito: service_roteirizacao_configConsiderarTransitoSchema,
	inicio_rota: service_roteirizacao_configInicioRotaSchema,
	retornar_almoco: service_roteirizacao_configRetornarAlmocoSchema,
	roteirizar_por: service_roteirizacao_configRoteirizarPorSchema,
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const service_roteirizacao_configSchema =
	service_roteirizacao_configBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const service_roteirizacao_configCreateSchema =
	service_roteirizacao_configSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const service_roteirizacao_configUpdateSchema =
	service_roteirizacao_configCreateSchema.partial();
