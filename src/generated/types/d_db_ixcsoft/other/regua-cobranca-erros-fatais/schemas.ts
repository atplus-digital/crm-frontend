/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	regua_cobranca_erros_fataisEstagioSchema,
	regua_cobranca_erros_fataisStatusSchema,
} from "./labels";

export const REGUA_COBRANCA_ERROS_FATAIS_TABLE_NAME =
	"regua_cobranca_erros_fatais";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const regua_cobranca_erros_fataisBaseSchema = z.object({
	id: z.number(),
	data_inclusao: z.string(),
	estagio: regua_cobranca_erros_fataisEstagioSchema,
	id_areceber: z.number(),
	id_cliente: z.number(),
	id_cobranca: z.number(),
	id_lote: z.number(),
	queue: z.string(),
	status: regua_cobranca_erros_fataisStatusSchema,
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const regua_cobranca_erros_fataisSchema =
	regua_cobranca_erros_fataisBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const regua_cobranca_erros_fataisCreateSchema =
	regua_cobranca_erros_fataisSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const regua_cobranca_erros_fataisUpdateSchema =
	regua_cobranca_erros_fataisCreateSchema.partial();
