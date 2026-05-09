/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	crm_modelo_propostaAceiteDigitalSchema,
	crm_modelo_propostaAtivoSchema,
	crm_modelo_propostaVencerNoAceiteSchema,
} from "./labels";

export const CRM_MODELO_PROPOSTA_TABLE_NAME = "crm_modelo_proposta";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const crm_modelo_propostaBaseSchema = z.object({
	id: z.number(),
	aceite_digital: crm_modelo_propostaAceiteDigitalSchema,
	assunto: z.string(),
	ativo: crm_modelo_propostaAtivoSchema,
	cor_botoes: z.string(),
	logotipo: z.string(),
	titulo: z.string(),
	vencer_no_aceite: crm_modelo_propostaVencerNoAceiteSchema,
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const crm_modelo_propostaSchema = crm_modelo_propostaBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const crm_modelo_propostaCreateSchema = crm_modelo_propostaSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const crm_modelo_propostaUpdateSchema =
	crm_modelo_propostaCreateSchema.partial();
