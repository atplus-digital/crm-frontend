/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { lote_descontos_tempo_bloqueioStatusSchema } from "./labels";

export const LOTE_DESCONTOS_TEMPO_BLOQUEIO_TABLE_NAME =
	"lote_descontos_tempo_bloqueio";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const lote_descontos_tempo_bloqueioBaseSchema = z.object({
	id: z.number(),
	data_hora_criacao: z.string(),
	descontos_aplicados: z.number(),
	descontos_armazenados: z.number(),
	prazo_expiracao: z.string(),
	status: lote_descontos_tempo_bloqueioStatusSchema,
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const lote_descontos_tempo_bloqueioSchema =
	lote_descontos_tempo_bloqueioBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const lote_descontos_tempo_bloqueioCreateSchema =
	lote_descontos_tempo_bloqueioSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const lote_descontos_tempo_bloqueioUpdateSchema =
	lote_descontos_tempo_bloqueioCreateSchema.partial();
