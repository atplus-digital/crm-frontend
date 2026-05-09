/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	lote_envioCanalSchema,
	lote_envioStatusSchema,
	lote_envioTipoDestinatarioSchema,
} from "./labels";

export const LOTE_ENVIO_TABLE_NAME = "lote_envio";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const lote_envioBaseSchema = z.object({
	id: z.number(),
	canal: lote_envioCanalSchema,
	contato: z.string(),
	criado_em: z.string(),
	enviado_a_fila: z.string(),
	falha_razao: z.string(),
	id_destinatario: z.number(),
	id_lote_envios: z.number(),
	processado: z.string(),
	status: lote_envioStatusSchema,
	tipo_destinatario: lote_envioTipoDestinatarioSchema,
	variaveis: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const lote_envioSchema = lote_envioBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const lote_envioCreateSchema = lote_envioSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const lote_envioUpdateSchema = lote_envioCreateSchema.partial();
