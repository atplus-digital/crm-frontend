/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	crm_prospeccao_propostas_tiposAssinaturaSchema,
	crm_prospeccao_propostas_tiposProdutosInteresseSchema,
} from "./labels";

export const CRM_PROSPECCAO_PROPOSTAS_TIPOS_TABLE_NAME =
	"crm_prospeccao_propostas_tipos";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const crm_prospeccao_propostas_tiposBaseSchema = z.object({
	id: z.number(),
	assinatura: crm_prospeccao_propostas_tiposAssinaturaSchema,
	produtos_interesse: crm_prospeccao_propostas_tiposProdutosInteresseSchema,
	proposta: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const crm_prospeccao_propostas_tiposSchema =
	crm_prospeccao_propostas_tiposBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const crm_prospeccao_propostas_tiposCreateSchema =
	crm_prospeccao_propostas_tiposSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const crm_prospeccao_propostas_tiposUpdateSchema =
	crm_prospeccao_propostas_tiposCreateSchema.partial();
