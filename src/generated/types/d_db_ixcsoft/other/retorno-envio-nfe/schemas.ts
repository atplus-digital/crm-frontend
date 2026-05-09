/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const RETORNO_ENVIO_NFE_TABLE_NAME = "retorno_envio_nfe";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const retorno_envio_nfeBaseSchema = z.object({
	id: z.number(),
	cstat: z.number(),
	data_recebimento: z.string(),
	id_saida: z.number(),
	numero_recibo: z.string(),
	xmotivo: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const retorno_envio_nfeSchema = retorno_envio_nfeBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const retorno_envio_nfeCreateSchema = retorno_envio_nfeSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const retorno_envio_nfeUpdateSchema =
	retorno_envio_nfeCreateSchema.partial();
