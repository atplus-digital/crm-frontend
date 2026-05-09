/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const VOIP_LIGACOES_TABLE_NAME = "voip_ligacoes";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const voip_ligacoesBaseSchema = z.object({
	id: z.number(),
	ani: z.string(),
	ctrlnumber: z.number(),
	custo: z.number(),
	data_local: z.string(),
	data_utc: z.string(),
	dest_descricao: z.string(),
	dest_numero: z.string(),
	dest_pais: z.string(),
	dnis: z.string(),
	id_ligacao: z.number(),
	lucro: z.number(),
	profit: z.number(),
	tempo_distribuidor: z.string(),
	tempo_real: z.string(),
	tempo_user: z.string(),
	tempo_user_segundos: z.number(),
	valor_user: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const voip_ligacoesSchema = voip_ligacoesBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const voip_ligacoesCreateSchema = voip_ligacoesSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const voip_ligacoesUpdateSchema = voip_ligacoesCreateSchema.partial();
