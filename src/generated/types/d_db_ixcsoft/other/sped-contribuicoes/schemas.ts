/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { sped_contribuicoesStatusSchema } from "./labels";

export const SPED_CONTRIBUICOES_TABLE_NAME = "sped_contribuicoes";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const sped_contribuicoesBaseSchema = z.object({
	id: z.number(),
	cod_inc_trib: z.number(),
	cod_tipo_cont: z.number(),
	cod_ver: z.string(),
	id_empresa: z.number(),
	id_filial: z.number(),
	ind_apro_cred: z.number(),
	ind_escri: z.number(),
	ind_reg_cum: z.number(),
	momento_fim_geracao: z.string(),
	momento_ini_geracao: z.string(),
	nat_bc_cred: z.number(),
	numero_escrituracao_anterior: z.number(),
	periodo_final: z.string(),
	periodo_inicial: z.string(),
	situacao_especial: z.number(),
	status: sped_contribuicoesStatusSchema,
	tempo_total: z.number(),
	tipo_escrituracao: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const sped_contribuicoesSchema = sped_contribuicoesBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const sped_contribuicoesCreateSchema = sped_contribuicoesSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const sped_contribuicoesUpdateSchema =
	sped_contribuicoesCreateSchema.partial();
