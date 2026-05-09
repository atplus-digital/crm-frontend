/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const PLANEJAMENTO_ANALITICO_FINAN_TABLE_NAME =
	"planejamento_analitico_finan";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const planejamento_analitico_finanBaseSchema = z.object({
	id: z.number(),
	auxiliar: z.number(),
	classificacao: z.string(),
	conta: z.number(),
	contador: z.number(),
	id_planejamento_finan: z.number(),
	planejamento_analitico: z.string(),
	tipo: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const planejamento_analitico_finanSchema =
	planejamento_analitico_finanBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const planejamento_analitico_finanCreateSchema =
	planejamento_analitico_finanSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const planejamento_analitico_finanUpdateSchema =
	planejamento_analitico_finanCreateSchema.partial();
