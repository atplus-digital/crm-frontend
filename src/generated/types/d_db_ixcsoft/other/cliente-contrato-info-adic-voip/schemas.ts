/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	cliente_contrato_info_adic_voipAtivoSchema,
	cliente_contrato_info_adic_voipPortabilidadeSchema,
} from "./labels";

export const CLIENTE_CONTRATO_INFO_ADIC_VOIP_TABLE_NAME =
	"cliente_contrato_info_adic_voip";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const cliente_contrato_info_adic_voipBaseSchema = z.object({
	id: z.number(),
	ativo: cliente_contrato_info_adic_voipAtivoSchema,
	fim_vigencia: z.string(),
	id_contrato: z.number(),
	inicio_vigencia: z.string(),
	portabilidade: cliente_contrato_info_adic_voipPortabilidadeSchema,
	range_final: z.string(),
	range_inicial: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const cliente_contrato_info_adic_voipSchema =
	cliente_contrato_info_adic_voipBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const cliente_contrato_info_adic_voipCreateSchema =
	cliente_contrato_info_adic_voipSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const cliente_contrato_info_adic_voipUpdateSchema =
	cliente_contrato_info_adic_voipCreateSchema.partial();
