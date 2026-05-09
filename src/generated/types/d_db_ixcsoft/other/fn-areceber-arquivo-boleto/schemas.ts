/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const FN_ARECEBER_ARQUIVO_BOLETO_TABLE_NAME =
	"fn_areceber_arquivo_boleto";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const fn_areceber_arquivo_boletoBaseSchema = z.object({
	id: z.number(),
	filename: z.string(),
	id_carteira_cobranca: z.number(),
	id_cliente: z.number(),
	id_conta: z.number(),
	id_contrato: z.string(),
	id_filial: z.number(),
	id_receber: z.number(),
	layout: z.string(),
	printed_detailed_invoice: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const fn_areceber_arquivo_boletoSchema =
	fn_areceber_arquivo_boletoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const fn_areceber_arquivo_boletoCreateSchema =
	fn_areceber_arquivo_boletoSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const fn_areceber_arquivo_boletoUpdateSchema =
	fn_areceber_arquivo_boletoCreateSchema.partial();
