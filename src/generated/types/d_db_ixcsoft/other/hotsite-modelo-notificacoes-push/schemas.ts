/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const HOTSITE_MODELO_NOTIFICACOES_PUSH_TABLE_NAME =
	"hotsite_modelo_notificacoes_push";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const hotsite_modelo_notificacoes_pushBaseSchema = z.object({
	id: z.number(),
	mensagem: z.string(),
	tipo_notificacao: z.string(),
	titulo: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const hotsite_modelo_notificacoes_pushSchema =
	hotsite_modelo_notificacoes_pushBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const hotsite_modelo_notificacoes_pushCreateSchema =
	hotsite_modelo_notificacoes_pushSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const hotsite_modelo_notificacoes_pushUpdateSchema =
	hotsite_modelo_notificacoes_pushCreateSchema.partial();
