/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	regua_cobranca_cobrancas_osEtapaCobrancaSchema,
	regua_cobranca_cobrancas_osStatusSchema,
} from "./labels";

export const REGUA_COBRANCA_COBRANCAS_OS_TABLE_NAME =
	"regua_cobranca_cobrancas_os";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const regua_cobranca_cobrancas_osBaseSchema = z.object({
	id: z.number(),
	etapa_cobranca: regua_cobranca_cobrancas_osEtapaCobrancaSchema,
	motivo_falha: z.string(),
	parametro_dias_id: z.number(),
	regua_cobranca_cobrancas_id: z.number(),
	regua_cobranca_lote_id: z.number(),
	status: regua_cobranca_cobrancas_osStatusSchema,
	su_oss_chamado_id: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const regua_cobranca_cobrancas_osSchema =
	regua_cobranca_cobrancas_osBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const regua_cobranca_cobrancas_osCreateSchema =
	regua_cobranca_cobrancas_osSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const regua_cobranca_cobrancas_osUpdateSchema =
	regua_cobranca_cobrancas_osCreateSchema.partial();
