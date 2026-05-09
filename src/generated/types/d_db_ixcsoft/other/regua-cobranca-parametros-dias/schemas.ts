/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	regua_cobranca_parametros_diasAbrirOsSchema,
	regua_cobranca_parametros_diasAnexarTituloSchema,
	regua_cobranca_parametros_diasEnviaCartaSchema,
	regua_cobranca_parametros_diasEtapaCobrancaSchema,
	regua_cobranca_parametros_diasTipoEnvioSchema,
} from "./labels";

export const REGUA_COBRANCA_PARAMETROS_DIAS_TABLE_NAME =
	"regua_cobranca_parametros_dias";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const regua_cobranca_parametros_diasBaseSchema = z.object({
	id: z.number(),
	abrir_os: regua_cobranca_parametros_diasAbrirOsSchema,
	anexar_titulo: regua_cobranca_parametros_diasAnexarTituloSchema,
	dias_antes_vencimento: z.number(),
	dias_apos_vencimento: z.number(),
	email_responsaveis: z.string(),
	envia_carta: regua_cobranca_parametros_diasEnviaCartaSchema,
	etapa_cobranca: regua_cobranca_parametros_diasEtapaCobrancaSchema,
	id_modelo_carta: z.number(),
	id_os_parametro: z.number(),
	notificacoes_push_id: z.number(),
	regua_cobranca_parametros_id: z.number(),
	sms: z.number(),
	smtp: z.number(),
	smtp_envio_empresa: z.number(),
	tipo_envio: regua_cobranca_parametros_diasTipoEnvioSchema,
	whatsapp: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const regua_cobranca_parametros_diasSchema =
	regua_cobranca_parametros_diasBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const regua_cobranca_parametros_diasCreateSchema =
	regua_cobranca_parametros_diasSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const regua_cobranca_parametros_diasUpdateSchema =
	regua_cobranca_parametros_diasCreateSchema.partial();
