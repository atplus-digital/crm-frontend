/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	cliente_contrato_assinatura_termoAssinadoSchema,
	cliente_contrato_assinatura_termoAtivarContratoSchema,
} from "./labels";

export const CLIENTE_CONTRATO_ASSINATURA_TERMO_TABLE_NAME =
	"cliente_contrato_assinatura_termo";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const cliente_contrato_assinatura_termoBaseSchema = z.object({
	id: z.number(),
	assinado: cliente_contrato_assinatura_termoAssinadoSchema,
	ativar_contrato: cliente_contrato_assinatura_termoAtivarContratoSchema,
	id_cliente_contrato_modelo: z.number(),
	id_contrato: z.number(),
	id_termo: z.number(),
	token_assinatura_digital: z.string(),
	url_assinatura_digital: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const cliente_contrato_assinatura_termoSchema =
	cliente_contrato_assinatura_termoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const cliente_contrato_assinatura_termoCreateSchema =
	cliente_contrato_assinatura_termoSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const cliente_contrato_assinatura_termoUpdateSchema =
	cliente_contrato_assinatura_termoCreateSchema.partial();
