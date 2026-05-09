/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const CHAVE_CARTEIRA_TABLE_NAME = "chave_carteira";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const chave_carteiraBaseSchema = z.object({
	id: z.number(),
	boleto_fn_areceber: z.string(),
	data_atualizacao: z.string(),
	descricao_carteira: z.string(),
	id_carteira: z.number(),
	id_chave: z.number(),
	id_fn_areceber: z.number(),
	nn_boleto_fn_areceber: z.string(),
	numero_conta: z.string(),
	tipo_carteira: z.string(),
	tipo_recebimento_carteira: z.string(),
	titulos_mes_anterior: z.string(),
	titulos_mes_atual: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const chave_carteiraSchema = chave_carteiraBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const chave_carteiraCreateSchema = chave_carteiraSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const chave_carteiraUpdateSchema = chave_carteiraCreateSchema.partial();
