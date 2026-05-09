/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	su_oss_respostasAtivoSchema,
	su_oss_respostasInteracaoPendenteSchema,
	su_oss_respostasSuStatusSchema,
} from "./labels";

export const SU_OSS_RESPOSTAS_TABLE_NAME = "su_oss_respostas";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const su_oss_respostasBaseSchema = z.object({
	id: z.number(),
	ativo: su_oss_respostasAtivoSchema,
	id_evento_status_processo: z.number(),
	interacao_pendente: su_oss_respostasInteracaoPendenteSchema,
	resposta: z.string(),
	setor: z.number(),
	su_status: su_oss_respostasSuStatusSchema,
	titulo: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const su_oss_respostasSchema = su_oss_respostasBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const su_oss_respostasCreateSchema = su_oss_respostasSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const su_oss_respostasUpdateSchema =
	su_oss_respostasCreateSchema.partial();
