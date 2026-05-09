/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { mp_elementoReplicadoSchema } from "./labels";

export const MP_ELEMENTO_TABLE_NAME = "mp_elemento";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const mp_elementoBaseSchema = z.object({
	id: z.number(),
	capacidade: z.number(),
	codigo_estilo: z.string(),
	comprimento: z.string(),
	descricao: z.string(),
	id_elemento_replicado: z.number(),
	id_mini_projeto: z.number(),
	id_tipo_elemento: z.number(),
	id_transmissor: z.number(),
	replicado: mp_elementoReplicadoSchema,
	tabela_elemento_replicado: z.string(),
	tipo: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const mp_elementoSchema = mp_elementoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const mp_elementoCreateSchema = mp_elementoSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const mp_elementoUpdateSchema = mp_elementoCreateSchema.partial();
