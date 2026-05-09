/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { crm_negociacoes_produtosRepetirSchema } from "./labels";

export const CRM_NEGOCIACOES_PRODUTOS_TABLE_NAME = "crm_negociacoes_produtos";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const crm_negociacoes_produtosBaseSchema = z.object({
	id: z.number(),
	data_validade: z.string(),
	descricao: z.string(),
	id_negociacao: z.number(),
	id_patrimonio: z.number(),
	id_produto: z.number(),
	id_unidade: z.number(),
	pdesconto: z.number(),
	quantidade: z.number(),
	repetir: crm_negociacoes_produtosRepetirSchema,
	repetir_qtde: z.number(),
	tipo: z.string(),
	ultima_atualizacao: z.string(),
	ultima_atualizacao_original: z.string(),
	valor_total: z.number(),
	valor_unitario: z.number(),
	vdesconto: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const crm_negociacoes_produtosSchema =
	crm_negociacoes_produtosBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const crm_negociacoes_produtosCreateSchema =
	crm_negociacoes_produtosSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const crm_negociacoes_produtosUpdateSchema =
	crm_negociacoes_produtosCreateSchema.partial();
