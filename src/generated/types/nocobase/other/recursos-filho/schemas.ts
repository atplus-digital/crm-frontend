/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const F_RECURSOS_FILHO_TABLE_NAME = "f_recursos_filho";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const f_recursos_filhoBaseSchema = z.object({
	f_7q4zyk2d0kz: z.number(),
	f_cn2m4i1kpqo: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const f_recursos_filhoSchema = f_recursos_filhoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const f_recursos_filhoCreateSchema = f_recursos_filhoSchema;

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const f_recursos_filhoUpdateSchema =
	f_recursos_filhoCreateSchema.partial();
