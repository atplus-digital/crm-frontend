/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	negociacoes_comentariosInsereAtendimentoIxcSchema,
	negociacoes_comentariosSetorParaObsSchema,
} from "./labels";

export const T_NEGOCIACOES_COMENTARIOS_TABLE_NAME = "t_negociacoes_comentarios";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const negociacoes_comentariosBaseSchema = z.object({
	id: z.number(),
	f_fk_comentarios_negociacoes: z.number(),
	f_comentario: z.string(),
	f_insere_atendimento_ixc: negociacoes_comentariosInsereAtendimentoIxcSchema,
	f_setor_para_obs: negociacoes_comentariosSetorParaObsSchema,
	updatedAt: z.string(),
	createdAt: z.string(),
});

// ============================================================
// RELATION SCHEMA (campos de relação)
// ============================================================
export const negociacoes_comentariosRelationSchema = z.object({
	createdBy: z.any().nullable(),
	updatedBy: z.any().nullable(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const negociacoes_comentariosSchema =
	negociacoes_comentariosBaseSchema.merge(
		negociacoes_comentariosRelationSchema,
	);

// ============================================================
// CREATE SCHEMA
// ============================================================
export const negociacoes_comentariosCreateSchema =
	negociacoes_comentariosSchema.omit({
		createdAt: true,
		createdBy: true,
		id: true,
		updatedAt: true,
		updatedBy: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const negociacoes_comentariosUpdateSchema =
	negociacoes_comentariosCreateSchema.partial();
