/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	su_mensagensStatusSchema,
	su_mensagensSuStatusSchema,
	su_mensagensVisibilidadeMensagensSchema,
} from "./labels";

export const SU_MENSAGENS_TABLE_NAME = "su_mensagens";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const su_mensagensBaseSchema = z.object({
	id: z.number(),
	data: z.string(),
	data_final: z.string(),
	data_inicio: z.string(),
	existe_pendencia_externa: z.number(),
	id_evento_status: z.number(),
	id_resposta: z.number(),
	id_su_diagnostico: z.number(),
	id_ticket: z.number(),
	latitude: z.string(),
	longitude: z.string(),
	mensagem: z.string(),
	observacao: z.string(),
	operador: z.number(),
	status: su_mensagensStatusSchema,
	su_status: su_mensagensSuStatusSchema,
	titulo: z.string(),
	ultima_atualizacao: z.string(),
	visibilidade_mensagens: su_mensagensVisibilidadeMensagensSchema,
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const su_mensagensSchema = su_mensagensBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const su_mensagensCreateSchema = su_mensagensSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const su_mensagensUpdateSchema = su_mensagensCreateSchema.partial();
