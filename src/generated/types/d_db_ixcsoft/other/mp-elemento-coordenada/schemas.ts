/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const MP_ELEMENTO_COORDENADA_TABLE_NAME = "mp_elemento_coordenada";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const mp_elemento_coordenadaBaseSchema = z.object({
	id: z.number(),
	id_coordenada: z.number(),
	id_elemento: z.number(),
	sequencia: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const mp_elemento_coordenadaSchema = mp_elemento_coordenadaBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const mp_elemento_coordenadaCreateSchema =
	mp_elemento_coordenadaSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const mp_elemento_coordenadaUpdateSchema =
	mp_elemento_coordenadaCreateSchema.partial();
