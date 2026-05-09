/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { crm_concorrenteAtivoSchema } from "./labels";

export const CRM_CONCORRENTE_TABLE_NAME = "crm_concorrente";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const crm_concorrenteBaseSchema = z.object({
	id: z.number(),
	ativo: crm_concorrenteAtivoSchema,
	cor_mapa: z.string(),
	descricao: z.string(),
	nome: z.string(),
	ultima_atualizacao: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const crm_concorrenteSchema = crm_concorrenteBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const crm_concorrenteCreateSchema = crm_concorrenteSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const crm_concorrenteUpdateSchema =
	crm_concorrenteCreateSchema.partial();
