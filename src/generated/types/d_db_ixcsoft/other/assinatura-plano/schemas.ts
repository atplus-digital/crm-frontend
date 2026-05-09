/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	assinatura_planoAtivoSchema,
	assinatura_planoTipoPlanoSchema,
} from "./labels";

export const ASSINATURA_PLANO_TABLE_NAME = "assinatura_plano";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const assinatura_planoBaseSchema = z.object({
	id: z.number(),
	ativo: assinatura_planoAtivoSchema,
	create_time: z.string(),
	descricao: z.string(),
	id_assinatura_notificacao_grupo: z.number(),
	id_carteira_cobranca: z.number(),
	id_filial: z.number(),
	id_tipo_cobranca: z.number(),
	id_tipo_documento: z.number(),
	obs: z.string(),
	tipo_plano: assinatura_planoTipoPlanoSchema,
	update_time: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const assinatura_planoSchema = assinatura_planoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const assinatura_planoCreateSchema = assinatura_planoSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const assinatura_planoUpdateSchema =
	assinatura_planoCreateSchema.partial();
