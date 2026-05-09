/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { chave_assinatura_digital_documentosStatusNotificacaoSchema } from "./labels";

export const CHAVE_ASSINATURA_DIGITAL_DOCUMENTOS_TABLE_NAME =
	"chave_assinatura_digital_documentos";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const chave_assinatura_digital_documentosBaseSchema = z.object({
	id: z.number(),
	ano: z.string(),
	id_chave_assinatura_digital: z.number(),
	mes: z.string(),
	qtd_documentos: z.number(),
	status_notificacao:
		chave_assinatura_digital_documentosStatusNotificacaoSchema,
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const chave_assinatura_digital_documentosSchema =
	chave_assinatura_digital_documentosBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const chave_assinatura_digital_documentosCreateSchema =
	chave_assinatura_digital_documentosSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const chave_assinatura_digital_documentosUpdateSchema =
	chave_assinatura_digital_documentosCreateSchema.partial();
