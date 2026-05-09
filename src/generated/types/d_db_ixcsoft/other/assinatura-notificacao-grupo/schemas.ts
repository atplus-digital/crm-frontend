/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { assinatura_notificacao_grupoAtivoSchema } from "./labels";

export const ASSINATURA_NOTIFICACAO_GRUPO_TABLE_NAME =
	"assinatura_notificacao_grupo";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const assinatura_notificacao_grupoBaseSchema = z.object({
	id: z.number(),
	ativo: assinatura_notificacao_grupoAtivoSchema,
	create_time: z.string(),
	descricao: z.string(),
	update_time: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const assinatura_notificacao_grupoSchema =
	assinatura_notificacao_grupoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const assinatura_notificacao_grupoCreateSchema =
	assinatura_notificacao_grupoSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const assinatura_notificacao_grupoUpdateSchema =
	assinatura_notificacao_grupoCreateSchema.partial();
