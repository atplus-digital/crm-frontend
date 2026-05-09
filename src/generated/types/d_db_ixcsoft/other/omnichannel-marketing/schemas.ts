/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	omnichannel_marketingEnviarTemplateAtendimentoSchema,
	omnichannel_marketingTipoSchema,
} from "./labels";

export const OMNICHANNEL_MARKETING_TABLE_NAME = "omnichannel_marketing";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const omnichannel_marketingBaseSchema = z.object({
	id: z.number(),
	canal_comunicacao: z.string(),
	descricao: z.string(),
	enviar_template_atendimento:
		omnichannel_marketingEnviarTemplateAtendimentoSchema,
	midia_alternativa: z.string(),
	template: z.string(),
	texto_template: z.string(),
	tipo: omnichannel_marketingTipoSchema,
	tipo_comunicacao: z.string(),
	variaveis_template: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const omnichannel_marketingSchema = omnichannel_marketingBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const omnichannel_marketingCreateSchema =
	omnichannel_marketingSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const omnichannel_marketingUpdateSchema =
	omnichannel_marketingCreateSchema.partial();
