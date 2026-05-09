/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const RELATORIO_PATRIMONIO_DIVERGENCIA_TABLE_NAME =
	"relatorio_patrimonio_divergencia";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const relatorio_patrimonio_divergenciaBaseSchema = z.object({
	id: z.number(),
	creation_date: z.string(),
	creation_user: z.string(),
	data_ultima_impres: z.string(),
	id_almox: z.number(),
	id_filial: z.number(),
	id_fornecedor: z.number(),
	id_produto: z.number(),
	impresso_por: z.number(),
	nome: z.string(),
	relatorio: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const relatorio_patrimonio_divergenciaSchema =
	relatorio_patrimonio_divergenciaBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const relatorio_patrimonio_divergenciaCreateSchema =
	relatorio_patrimonio_divergenciaSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const relatorio_patrimonio_divergenciaUpdateSchema =
	relatorio_patrimonio_divergenciaCreateSchema.partial();
