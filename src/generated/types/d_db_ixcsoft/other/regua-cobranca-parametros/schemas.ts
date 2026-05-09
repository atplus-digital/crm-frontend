/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	regua_cobranca_parametrosAbrirOsAposFinalizacaoUltimaSchema,
	regua_cobranca_parametrosClienteTipoPessoaSchema,
	regua_cobranca_parametrosComunicadoVencimentoSchema,
	regua_cobranca_parametrosEnviarFinaisSemanaFeriadoSchema,
	regua_cobranca_parametrosFilialAberturaSchema,
} from "./labels";

export const REGUA_COBRANCA_PARAMETROS_TABLE_NAME = "regua_cobranca_parametros";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const regua_cobranca_parametrosBaseSchema = z.object({
	id: z.number(),
	abrir_os_apos_finalizacao_ultima:
		regua_cobranca_parametrosAbrirOsAposFinalizacaoUltimaSchema,
	cliente_tipo_id: z.number(),
	cliente_tipo_pessoa: regua_cobranca_parametrosClienteTipoPessoaSchema,
	comunicado_vencimento: regua_cobranca_parametrosComunicadoVencimentoSchema,
	data_ultima_alteracao: z.string(),
	email_responsaveis: z.string(),
	enviar_finais_semana_feriado:
		regua_cobranca_parametrosEnviarFinaisSemanaFeriadoSchema,
	filial_abertura: regua_cobranca_parametrosFilialAberturaSchema,
	filial_id: z.number(),
	fn_carteira_cobranca_id: z.number(),
	smtp_id: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const regua_cobranca_parametrosSchema =
	regua_cobranca_parametrosBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const regua_cobranca_parametrosCreateSchema =
	regua_cobranca_parametrosSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const regua_cobranca_parametrosUpdateSchema =
	regua_cobranca_parametrosCreateSchema.partial();
