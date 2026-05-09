/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { sva_usuarios_simulacao_loteStatusSchema } from "./labels";

export const SVA_USUARIOS_SIMULACAO_LOTE_TABLE_NAME =
	"sva_usuarios_simulacao_lote";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const sva_usuarios_simulacao_loteBaseSchema = z.object({
	id: z.number(),
	cnpj_cpf: z.string(),
	criado_em: z.string(),
	email: z.string(),
	id_contrato: z.number(),
	id_integracao: z.number(),
	id_produto: z.number(),
	id_sva_usuario: z.number(),
	id_sva_usuarios_lote: z.number(),
	mensagens: z.string(),
	status: sva_usuarios_simulacao_loteStatusSchema,
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const sva_usuarios_simulacao_loteSchema =
	sva_usuarios_simulacao_loteBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const sva_usuarios_simulacao_loteCreateSchema =
	sva_usuarios_simulacao_loteSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const sva_usuarios_simulacao_loteUpdateSchema =
	sva_usuarios_simulacao_loteCreateSchema.partial();
