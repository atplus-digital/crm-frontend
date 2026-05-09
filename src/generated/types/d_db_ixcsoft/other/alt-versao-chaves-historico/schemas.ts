/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	alt_versao_chaves_historicoStatusSchema,
	alt_versao_chaves_historicoVersaoAntigaSchema,
	alt_versao_chaves_historicoVersaoNovaSchema,
} from "./labels";

export const ALT_VERSAO_CHAVES_HISTORICO_TABLE_NAME =
	"alt_versao_chaves_historico";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const alt_versao_chaves_historicoBaseSchema = z.object({
	id: z.number(),
	id_alt_versao_chaves: z.number(),
	id_chave: z.number(),
	id_cliente: z.number(),
	observacao: z.string(),
	status: alt_versao_chaves_historicoStatusSchema,
	versao_antiga: alt_versao_chaves_historicoVersaoAntigaSchema,
	versao_nova: alt_versao_chaves_historicoVersaoNovaSchema,
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const alt_versao_chaves_historicoSchema =
	alt_versao_chaves_historicoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const alt_versao_chaves_historicoCreateSchema =
	alt_versao_chaves_historicoSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const alt_versao_chaves_historicoUpdateSchema =
	alt_versao_chaves_historicoCreateSchema.partial();
