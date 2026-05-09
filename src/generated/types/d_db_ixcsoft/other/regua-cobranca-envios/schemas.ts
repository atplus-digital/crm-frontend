/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	regua_cobranca_enviosEtapaCobrancaSchema,
	regua_cobranca_enviosGatewaySchema,
	regua_cobranca_enviosOsSchema,
	regua_cobranca_enviosReenviadaSchema,
	regua_cobranca_enviosStatusSchema,
	regua_cobranca_enviosTipoEnvioSchema,
	regua_cobranca_enviosTipoExecucaoSchema,
	regua_cobranca_enviosTituloAnexoSchema,
} from "./labels";

export const REGUA_COBRANCA_ENVIOS_TABLE_NAME = "regua_cobranca_envios";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const regua_cobranca_enviosBaseSchema = z.object({
	id: z.number(),
	crm_email_log_id: z.number(),
	data_hora: z.string(),
	etapa_cobranca: regua_cobranca_enviosEtapaCobrancaSchema,
	gateway: regua_cobranca_enviosGatewaySchema,
	id_lote: z.number(),
	motivo_falha: z.string(),
	os: regua_cobranca_enviosOsSchema,
	reenviada: regua_cobranca_enviosReenviadaSchema,
	regua_cobranca_cobranca_id: z.number(),
	regua_cobranca_parametros_dias: z.number(),
	status: regua_cobranca_enviosStatusSchema,
	tipo_envio: regua_cobranca_enviosTipoEnvioSchema,
	tipo_execucao: regua_cobranca_enviosTipoExecucaoSchema,
	titulo_anexo: regua_cobranca_enviosTituloAnexoSchema,
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const regua_cobranca_enviosSchema = regua_cobranca_enviosBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const regua_cobranca_enviosCreateSchema =
	regua_cobranca_enviosSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const regua_cobranca_enviosUpdateSchema =
	regua_cobranca_enviosCreateSchema.partial();
