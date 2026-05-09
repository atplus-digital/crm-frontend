/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { pdv_configTipoSchema } from "./labels";

export const PDV_CONFIG_TABLE_NAME = "pdv_config";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const pdv_configBaseSchema = z.object({
	id: z.number(),
	cliente_id: z.number(),
	cliente_nome: z.string(),
	id_tipo_doc_pedido: z.number(),
	id_tipo_doc_venda: z.number(),
	pagamento_id: z.number(),
	pagamento_nome: z.string(),
	parcelamento_id: z.number(),
	parcelamento_nome: z.string(),
	tipo: pdv_configTipoSchema,
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const pdv_configSchema = pdv_configBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const pdv_configCreateSchema = pdv_configSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const pdv_configUpdateSchema = pdv_configCreateSchema.partial();
