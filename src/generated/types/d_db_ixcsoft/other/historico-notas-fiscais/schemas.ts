/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const HISTORICO_NOTAS_FISCAIS_TABLE_NAME = "historico_notas_fiscais";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const historico_notas_fiscaisBaseSchema = z.object({
	id: z.number(),
	cod_erro: z.string(),
	data_ocorrencia: z.string(),
	descricao_erro: z.string(),
	id_entrada: z.number(),
	id_saida: z.number(),
	protocolo: z.string(),
	solucao_erro: z.string(),
	status_mensagem: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const historico_notas_fiscaisSchema = historico_notas_fiscaisBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const historico_notas_fiscaisCreateSchema =
	historico_notas_fiscaisSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const historico_notas_fiscaisUpdateSchema =
	historico_notas_fiscaisCreateSchema.partial();
