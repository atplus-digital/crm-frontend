/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { entrada_dfeUltimoNsuSchema } from "./labels";

export const ENTRADA_DFE_TABLE_NAME = "entrada_dfe";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const entrada_dfeBaseSchema = z.object({
	id: z.number(),
	chnfe: z.string(),
	cnpj: z.string(),
	csitnfe: z.string(),
	data: z.string(),
	dfe_importado: z.number(),
	id_filial: z.number(),
	id_fornecedor: z.number(),
	ie: z.string(),
	manifestado: z.string(),
	nprot: z.string(),
	nsu: z.number(),
	tpnf: z.string(),
	ultimo_nsu: entrada_dfeUltimoNsuSchema,
	vnf: z.number(),
	xnome: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const entrada_dfeSchema = entrada_dfeBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const entrada_dfeCreateSchema = entrada_dfeSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const entrada_dfeUpdateSchema = entrada_dfeCreateSchema.partial();
