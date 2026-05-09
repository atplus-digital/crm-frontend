/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { particao_assinante_summitAtivarBloqueioCategoriaSchema } from "./labels";

export const PARTICAO_ASSINANTE_SUMMIT_TABLE_NAME = "particao_assinante_summit";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const particao_assinante_summitBaseSchema = z.object({
	id: z.number(),
	ativar_bloqueio_categoria:
		particao_assinante_summitAtivarBloqueioCategoriaSchema,
	categoria_bloqueio: z.string(),
	categoria_bloqueio_parcial: z.string(),
	categoria_cancelamento: z.string(),
	categoria_padrao: z.string(),
	codigo: z.string(),
	descricao: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const particao_assinante_summitSchema =
	particao_assinante_summitBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const particao_assinante_summitCreateSchema =
	particao_assinante_summitSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const particao_assinante_summitUpdateSchema =
	particao_assinante_summitCreateSchema.partial();
