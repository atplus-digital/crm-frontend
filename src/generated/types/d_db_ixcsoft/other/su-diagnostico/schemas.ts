/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { su_diagnosticoAtivoSchema } from "./labels";

export const SU_DIAGNOSTICO_TABLE_NAME = "su_diagnostico";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const su_diagnosticoBaseSchema = z.object({
	id: z.number(),
	ativo: su_diagnosticoAtivoSchema,
	descricao: z.string(),
	id_diagnostico: z.number(),
	id_setor: z.number(),
	ultima_atualizacao: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const su_diagnosticoSchema = su_diagnosticoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const su_diagnosticoCreateSchema = su_diagnosticoSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const su_diagnosticoUpdateSchema = su_diagnosticoCreateSchema.partial();
