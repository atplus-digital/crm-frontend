/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const LOGS_ATUALIZACAO_SOFTWARE_TABLE_NAME = "logs_atualizacao_software";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const logs_atualizacao_softwareBaseSchema = z.object({
	id: z.number(),
	dados_atualizacao: z.string(),
	data_atualizacao: z.string(),
	id_chave: z.number(),
	operador: z.string(),
	software: z.string(),
	status: z.string(),
	versao_software: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const logs_atualizacao_softwareSchema =
	logs_atualizacao_softwareBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const logs_atualizacao_softwareCreateSchema =
	logs_atualizacao_softwareSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const logs_atualizacao_softwareUpdateSchema =
	logs_atualizacao_softwareCreateSchema.partial();
