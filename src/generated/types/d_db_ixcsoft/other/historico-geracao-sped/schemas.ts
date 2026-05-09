/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const HISTORICO_GERACAO_SPED_TABLE_NAME = "historico_geracao_sped";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const historico_geracao_spedBaseSchema = z.object({
	id: z.number(),
	descricao_erro: z.string(),
	id_geracao_sped: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const historico_geracao_spedSchema = historico_geracao_spedBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const historico_geracao_spedCreateSchema =
	historico_geracao_spedSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const historico_geracao_spedUpdateSchema =
	historico_geracao_spedCreateSchema.partial();
