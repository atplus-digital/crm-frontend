/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { fr_faturamento_classificacoesAtivoSchema } from "./labels";

export const FR_FATURAMENTO_CLASSIFICACOES_TABLE_NAME =
	"fr_faturamento_classificacoes";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const fr_faturamento_classificacoesBaseSchema = z.object({
	id: z.number(),
	ativo: fr_faturamento_classificacoesAtivoSchema,
	descricao: z.string(),
	porcentagem: z.string(),
	ultima_atualizacao: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const fr_faturamento_classificacoesSchema =
	fr_faturamento_classificacoesBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const fr_faturamento_classificacoesCreateSchema =
	fr_faturamento_classificacoesSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const fr_faturamento_classificacoesUpdateSchema =
	fr_faturamento_classificacoesCreateSchema.partial();
