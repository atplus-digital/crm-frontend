/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const CHAVE_ASSINATURA_DIGITAL_TABLE_NAME = "chave_assinatura_digital";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const chave_assinatura_digitalBaseSchema = z.object({
	id: z.number(),
	data_atualizacao: z.string(),
	id_chave: z.number(),
	id_integracao: z.number(),
	plataforma_integracao: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const chave_assinatura_digitalSchema =
	chave_assinatura_digitalBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const chave_assinatura_digitalCreateSchema =
	chave_assinatura_digitalSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const chave_assinatura_digitalUpdateSchema =
	chave_assinatura_digitalCreateSchema.partial();
