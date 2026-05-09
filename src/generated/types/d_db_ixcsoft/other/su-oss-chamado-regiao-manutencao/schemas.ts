/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
export const SU_OSS_CHAMADO_REGIAO_MANUTENCAO_TABLE_NAME =
	"su_oss_chamado_regiao_manutencao";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const su_oss_chamado_regiao_manutencaoBaseSchema = z.object({
	id: z.number(),
	id_oss_chamado: z.number(),
	regiao_manutencao: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const su_oss_chamado_regiao_manutencaoSchema =
	su_oss_chamado_regiao_manutencaoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const su_oss_chamado_regiao_manutencaoCreateSchema =
	su_oss_chamado_regiao_manutencaoSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const su_oss_chamado_regiao_manutencaoUpdateSchema =
	su_oss_chamado_regiao_manutencaoCreateSchema.partial();
