/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const RADUSUARIOS_RADACCT_TABLE_NAME = "radusuarios_radacct";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const radusuarios_radacctBaseSchema = z.object({
	id: z.number(),
	cliente_cnpj_cpf: z.string(),
	cliente_razao: z.string(),
	data_insercao: z.string(),
	id_cliente: z.number(),
	id_contrato: z.number(),
	id_login: z.number(),
	login: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const radusuarios_radacctSchema = radusuarios_radacctBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const radusuarios_radacctCreateSchema = radusuarios_radacctSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const radusuarios_radacctUpdateSchema =
	radusuarios_radacctCreateSchema.partial();
