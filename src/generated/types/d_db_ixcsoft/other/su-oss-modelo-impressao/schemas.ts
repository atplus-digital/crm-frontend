/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const SU_OSS_MODELO_IMPRESSAO_TABLE_NAME = "su_oss_modelo_impressao";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const su_oss_modelo_impressaoBaseSchema = z.object({
	id: z.number(),
	nome: z.string(),
	os_teste_impressao: z.number(),
	texto: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const su_oss_modelo_impressaoSchema = su_oss_modelo_impressaoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const su_oss_modelo_impressaoCreateSchema =
	su_oss_modelo_impressaoSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const su_oss_modelo_impressaoUpdateSchema =
	su_oss_modelo_impressaoCreateSchema.partial();
