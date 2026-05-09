/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const PERIODO_JORNADA_TRABALHO_TABLE_NAME = "periodo_jornada_trabalho";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const periodo_jornada_trabalhoBaseSchema = z.object({
	id: z.number(),
	descricao: z.string(),
	fim: z.string(),
	inicio: z.string(),
	intervalo: z.string(),
	periodo_unico: z.string(),
	retorno: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const periodo_jornada_trabalhoSchema =
	periodo_jornada_trabalhoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const periodo_jornada_trabalhoCreateSchema =
	periodo_jornada_trabalhoSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const periodo_jornada_trabalhoUpdateSchema =
	periodo_jornada_trabalhoCreateSchema.partial();
