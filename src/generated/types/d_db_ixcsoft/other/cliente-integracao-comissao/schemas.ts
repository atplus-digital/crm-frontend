/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const CLIENTE_INTEGRACAO_COMISSAO_TABLE_NAME =
	"cliente_integracao_comissao";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const cliente_integracao_comissaoBaseSchema = z.object({
	id: z.number(),
	data_base: z.string(),
	data_insercao: z.string(),
	id_cliente: z.number(),
	quantidade: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const cliente_integracao_comissaoSchema =
	cliente_integracao_comissaoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const cliente_integracao_comissaoCreateSchema =
	cliente_integracao_comissaoSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const cliente_integracao_comissaoUpdateSchema =
	cliente_integracao_comissaoCreateSchema.partial();
