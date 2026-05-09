/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { transf_almoxStatusSchema } from "./labels";

export const TRANSF_ALMOX_TABLE_NAME = "transf_almox";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const transf_almoxBaseSchema = z.object({
	id: z.number(),
	data: z.string(),
	documento: z.string(),
	id_almox_entrada: z.number(),
	id_almox_saida: z.number(),
	id_entrada: z.number(),
	id_filial: z.number(),
	id_filial_entrada: z.number(),
	id_oss_chamado: z.number(),
	id_produto: z.number(),
	id_requisicao_material: z.number(),
	id_saida: z.number(),
	id_unidade: z.number(),
	obs: z.string(),
	operador: z.number(),
	qtde: z.number(),
	status: transf_almoxStatusSchema,
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const transf_almoxSchema = transf_almoxBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const transf_almoxCreateSchema = transf_almoxSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const transf_almoxUpdateSchema = transf_almoxCreateSchema.partial();
