/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { radusuarios_altAtivoSchema } from "./labels";

export const RADUSUARIOS_ALT_TABLE_NAME = "radusuarios_alt";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const radusuarios_altBaseSchema = z.object({
	id: z.number(),
	ativo: radusuarios_altAtivoSchema,
	grupo_atual: z.string(),
	grupo_novo: z.string(),
	id_alteracao: z.number(),
	id_grupo_novo: z.number(),
	id_login: z.number(),
	login: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const radusuarios_altSchema = radusuarios_altBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const radusuarios_altCreateSchema = radusuarios_altSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const radusuarios_altUpdateSchema =
	radusuarios_altCreateSchema.partial();
