/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { rad_sici_registrosTipoPessoaSchema } from "./labels";

export const RAD_SICI_REGISTROS_TABLE_NAME = "rad_sici_registros";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const rad_sici_registrosBaseSchema = z.object({
	id: z.number(),
	codmunicipio: z.string(),
	faixa: z.number(),
	id_rad_sici: z.number(),
	item: z.string(),
	nome: z.string(),
	sigla: z.string(),
	tecnologia: z.string(),
	tipo_pessoa: rad_sici_registrosTipoPessoaSchema,
	uf: z.string(),
	valor: z.number(),
	valor_alfanum: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const rad_sici_registrosSchema = rad_sici_registrosBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const rad_sici_registrosCreateSchema = rad_sici_registrosSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const rad_sici_registrosUpdateSchema =
	rad_sici_registrosCreateSchema.partial();
