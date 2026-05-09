/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const CHAVE_CARTEIRA_TITULOS_TABLE_NAME = "chave_carteira_titulos";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const chave_carteira_titulosBaseSchema = z.object({
	id: z.number(),
	ano: z.string(),
	id_chave_carteira: z.number(),
	mes: z.string(),
	qtd_titulos_recebidos: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const chave_carteira_titulosSchema = chave_carteira_titulosBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const chave_carteira_titulosCreateSchema =
	chave_carteira_titulosSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const chave_carteira_titulosUpdateSchema =
	chave_carteira_titulosCreateSchema.partial();
