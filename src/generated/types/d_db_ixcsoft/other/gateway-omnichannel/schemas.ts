/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	gateway_omnichannelGatewaySchema,
	gateway_omnichannelUtilizaFilaMensagensSchema,
} from "./labels";

export const GATEWAY_OMNICHANNEL_TABLE_NAME = "gateway_omnichannel";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const gateway_omnichannelBaseSchema = z.object({
	id: z.number(),
	descricao: z.string(),
	gateway: gateway_omnichannelGatewaySchema,
	token: z.string(),
	url: z.string(),
	utiliza_fila_mensagens: gateway_omnichannelUtilizaFilaMensagensSchema,
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const gateway_omnichannelSchema = gateway_omnichannelBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const gateway_omnichannelCreateSchema = gateway_omnichannelSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const gateway_omnichannelUpdateSchema =
	gateway_omnichannelCreateSchema.partial();
