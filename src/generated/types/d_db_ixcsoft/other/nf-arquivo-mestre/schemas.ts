/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { nf_arquivo_mestreFinalidadeSchema } from "./labels";

export const NF_ARQUIVO_MESTRE_TABLE_NAME = "nf_arquivo_mestre";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const nf_arquivo_mestreBaseSchema = z.object({
	id: z.number(),
	ano: z.string(),
	chave_autenticacao: z.string(),
	cnpj: z.string(),
	data: z.string(),
	finalidade: nf_arquivo_mestreFinalidadeSchema,
	id_filial: z.number(),
	id_operador: z.number(),
	mes: z.string(),
	modelo: z.string(),
	nome_arquivo: z.string(),
	serie: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const nf_arquivo_mestreSchema = nf_arquivo_mestreBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const nf_arquivo_mestreCreateSchema = nf_arquivo_mestreSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const nf_arquivo_mestreUpdateSchema =
	nf_arquivo_mestreCreateSchema.partial();
