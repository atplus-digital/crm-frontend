/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	sva_usuarios_lotePermitirCriacaoContratoSvaSchema,
	sva_usuarios_loteStatusSchema,
	sva_usuarios_loteTipoPessoaSchema,
} from "./labels";

export const SVA_USUARIOS_LOTE_TABLE_NAME = "sva_usuarios_lote";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const sva_usuarios_loteBaseSchema = z.object({
	id: z.number(),
	criado_em: z.string(),
	data_final_ativacao: z.string(),
	data_inicial_ativacao: z.string(),
	id_filial: z.number(),
	id_integracao: z.number(),
	id_produto: z.number(),
	permitir_criacao_contrato_sva:
		sva_usuarios_lotePermitirCriacaoContratoSvaSchema,
	status: sva_usuarios_loteStatusSchema,
	status_acesso: z.string(),
	status_contrato: z.string(),
	tipo_pessoa: sva_usuarios_loteTipoPessoaSchema,
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const sva_usuarios_loteSchema = sva_usuarios_loteBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const sva_usuarios_loteCreateSchema = sva_usuarios_loteSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const sva_usuarios_loteUpdateSchema =
	sva_usuarios_loteCreateSchema.partial();
