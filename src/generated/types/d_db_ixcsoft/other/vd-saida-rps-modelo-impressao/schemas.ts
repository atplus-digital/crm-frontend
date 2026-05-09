/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const VD_SAIDA_RPS_MODELO_IMPRESSAO_TABLE_NAME =
	"vd_saida_rps_modelo_impressao";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const vd_saida_rps_modelo_impressaoBaseSchema = z.object({
	id: z.number(),
	descricao: z.string(),
	modelo_nota: z.number(),
	texto: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const vd_saida_rps_modelo_impressaoSchema =
	vd_saida_rps_modelo_impressaoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const vd_saida_rps_modelo_impressaoCreateSchema =
	vd_saida_rps_modelo_impressaoSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const vd_saida_rps_modelo_impressaoUpdateSchema =
	vd_saida_rps_modelo_impressaoCreateSchema.partial();
