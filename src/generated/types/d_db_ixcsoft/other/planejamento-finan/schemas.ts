/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { planejamento_finanTipoSchema } from "./labels";

export const PLANEJAMENTO_FINAN_TABLE_NAME = "planejamento_finan";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const planejamento_finanBaseSchema = z.object({
	id: z.number(),
	cod_planejamento: z.string(),
	contador: z.number(),
	nivel_superior: z.number(),
	planejamento: z.string(),
	tipo: planejamento_finanTipoSchema,
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const planejamento_finanSchema = planejamento_finanBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const planejamento_finanCreateSchema = planejamento_finanSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const planejamento_finanUpdateSchema =
	planejamento_finanCreateSchema.partial();
