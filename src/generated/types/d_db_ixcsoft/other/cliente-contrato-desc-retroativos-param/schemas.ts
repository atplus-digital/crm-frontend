/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const CLIENTE_CONTRATO_DESC_RETROATIVOS_PARAM_TABLE_NAME =
	"cliente_contrato_desc_retroativos_param";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const cliente_contrato_desc_retroativos_paramBaseSchema = z.object({
	id: z.number(),
	cidade: z.number(),
	data_final: z.string(),
	data_inicial: z.string(),
	descricao_desconto: z.string(),
	id_produto: z.number(),
	percentual: z.number(),
	uf: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const cliente_contrato_desc_retroativos_paramSchema =
	cliente_contrato_desc_retroativos_paramBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const cliente_contrato_desc_retroativos_paramCreateSchema =
	cliente_contrato_desc_retroativos_paramSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const cliente_contrato_desc_retroativos_paramUpdateSchema =
	cliente_contrato_desc_retroativos_paramCreateSchema.partial();
