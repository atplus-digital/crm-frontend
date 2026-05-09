/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { planejamentoSubtipoSchema, planejamentoTipoSchema } from "./labels";

export const PLANEJAMENTO_TABLE_NAME = "planejamento";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const planejamentoBaseSchema = z.object({
	id: z.number(),
	cod_planejamento: z.string(),
	conta_dominio: z.string(),
	contador: z.number(),
	nivel_superior: z.number(),
	planejamento: z.string(),
	subtipo: planejamentoSubtipoSchema,
	tipo: planejamentoTipoSchema,
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const planejamentoSchema = planejamentoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const planejamentoCreateSchema = planejamentoSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const planejamentoUpdateSchema = planejamentoCreateSchema.partial();
