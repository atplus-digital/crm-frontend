/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const PRODUTOS_WIZARD_REQUISICAO_TABLE_NAME =
	"produtos_wizard_requisicao";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const produtos_wizard_requisicaoBaseSchema = z.object({
	id: z.number(),
	id_produto: z.number(),
	id_wizard: z.number(),
	qtd: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const produtos_wizard_requisicaoSchema =
	produtos_wizard_requisicaoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const produtos_wizard_requisicaoCreateSchema =
	produtos_wizard_requisicaoSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const produtos_wizard_requisicaoUpdateSchema =
	produtos_wizard_requisicaoCreateSchema.partial();
