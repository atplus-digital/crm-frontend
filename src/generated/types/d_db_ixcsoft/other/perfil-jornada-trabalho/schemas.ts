/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const PERFIL_JORNADA_TRABALHO_TABLE_NAME = "perfil_jornada_trabalho";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const perfil_jornada_trabalhoBaseSchema = z.object({
	id: z.number(),
	descricao: z.string(),
	domingo_id_periodo: z.number(),
	quarta_id_periodo: z.number(),
	quinta_id_periodo: z.number(),
	sabado_id_periodo: z.number(),
	segunda_id_periodo: z.number(),
	sexta_id_periodo: z.number(),
	terca_id_periodo: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const perfil_jornada_trabalhoSchema = perfil_jornada_trabalhoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const perfil_jornada_trabalhoCreateSchema =
	perfil_jornada_trabalhoSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const perfil_jornada_trabalhoUpdateSchema =
	perfil_jornada_trabalhoCreateSchema.partial();
