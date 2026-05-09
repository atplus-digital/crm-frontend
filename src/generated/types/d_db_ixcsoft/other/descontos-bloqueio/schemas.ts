/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { descontos_bloqueioStatusSchema } from "./labels";

export const DESCONTOS_BLOQUEIO_TABLE_NAME = "descontos_bloqueio";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const descontos_bloqueioBaseSchema = z.object({
	id: z.number(),
	data_bloqueio: z.string(),
	data_desbloqueio: z.string(),
	id_contrato: z.number(),
	id_desconto_adicional: z.number(),
	id_lote: z.number(),
	limite_desconto: z.string(),
	obs: z.string(),
	razao: z.string(),
	status: descontos_bloqueioStatusSchema,
	tipo_desbloqueio: z.string(),
	valor_desconto: z.number(),
	valor_plano: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const descontos_bloqueioSchema = descontos_bloqueioBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const descontos_bloqueioCreateSchema = descontos_bloqueioSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const descontos_bloqueioUpdateSchema =
	descontos_bloqueioCreateSchema.partial();
