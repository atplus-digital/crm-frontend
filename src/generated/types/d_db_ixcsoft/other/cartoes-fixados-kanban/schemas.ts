/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { cartoes_fixados_kanbanTipoCartaoSchema } from "./labels";

export const CARTOES_FIXADOS_KANBAN_TABLE_NAME = "cartoes_fixados_kanban";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const cartoes_fixados_kanbanBaseSchema = z.object({
	id: z.number(),
	criado_em: z.string(),
	id_cartao: z.number(),
	id_usuario: z.number(),
	tipo_cartao: cartoes_fixados_kanbanTipoCartaoSchema,
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const cartoes_fixados_kanbanSchema = cartoes_fixados_kanbanBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const cartoes_fixados_kanbanCreateSchema =
	cartoes_fixados_kanbanSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const cartoes_fixados_kanbanUpdateSchema =
	cartoes_fixados_kanbanCreateSchema.partial();
