/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const SERVIDORES_EXTERNOS_NAS_TABLE_NAME = "servidores_externos_nas";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const servidores_externos_nasBaseSchema = z.object({
	id: z.number(),
	descricao: z.string(),
	id_nas: z.number(),
	id_servidor_radius: z.number(),
	prioridade: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const servidores_externos_nasSchema = servidores_externos_nasBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const servidores_externos_nasCreateSchema =
	servidores_externos_nasSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const servidores_externos_nasUpdateSchema =
	servidores_externos_nasCreateSchema.partial();
